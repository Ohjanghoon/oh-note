interface Props {
  title: string;
  description: string;
}

function TitleHeader({ title, description }: Props) {
  return (
    <>
      {/* 제목 영역 */}
      <h3 className="text-text-dark relative inline-block font-extrabold">
        {title}
        <span className="from-primary-darken absolute bottom-0 left-0 -z-10 h-[10px] w-full rounded-full bg-gradient-to-r"></span>
      </h3>
      <p className="text-text-muted mt-2 text-sm">{description}</p>
    </>
  );
}

export default TitleHeader;
