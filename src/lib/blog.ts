import { readdir } from "fs/promises";
import path from "path";
import { PostMetadata } from "../types/postTypes";

/** 모든 블로그 게시글 가져오기
 */
export async function getPosts(): Promise<PostMetadata[]> {
  const postPath = path.resolve(process.cwd(), "src", "app", "blog", "(posts)");

  /** 디렉토리 목록을 가져와 폴더인 경우만 필터링
   * - { withFileTypes: true } 옵션을 사용하여 fs.Dirent 객체 형태로 반환 (파일과 폴더 구분 가능)
   */
  const slugs = (await readdir(postPath, { withFileTypes: true })).filter(
    (dirent) => dirent.isDirectory(),
  );

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`@/app/blog/(posts)/${name}/page.mdx`);
      return { slug: name, ...metadata };
    }),
  );

  // 최신 순으로 정렬
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}

/** 블로그 게시글 태그 가져오기
 */
export async function getTags(): Promise<any> {
  const posts = await getPosts();

  // Set으로 변환하여 중복 제거, Array.from()로 다시 배열로 변환
  const tags = Array.from(
    new Set(
      posts.flatMap((post) => post.categories).filter((t) => t !== undefined),
    ),
  );

  return tags;
}
export async function getPostsByTag({
  tag,
}: {
  tag: string;
}): Promise<PostMetadata[]> {
  const posts = await getPosts();

  // 🔹 입력된 카테고리를 소문자로 변환
  const lowerCaseTag = tag.toLowerCase();

  return posts.filter(
    (post) =>
      post.categories &&
      post.categories.some((cat) => cat.toLowerCase() === lowerCaseTag),
  );
}
