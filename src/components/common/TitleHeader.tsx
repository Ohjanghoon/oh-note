"use client";

interface Props {
  title: string;
  description: string;
}

function TitleHeader({ title, description }: Props) {
  return (
    <>
      {/* 제목 영역 */}
      <h1 className="dark:text-text-dark-secondary relative inline-block font-extrabold">
        <span className="relative z-10">{title}</span>
        <span className="from-primary absolute bottom-0 left-0 z-1 h-[10px] w-full rounded-full bg-gradient-to-r"></span>
      </h1>
      <p className="text-text-dark-secondary mt-2 text-sm font-light md:font-medium">
        {description}
      </p>
    </>
  );
}

export default TitleHeader;
