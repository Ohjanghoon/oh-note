export interface PostMetadata {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  thumbnailUrl: string;
  tags: string[];
}

export interface Tag {
  tagName: string;
  count: number;
}
