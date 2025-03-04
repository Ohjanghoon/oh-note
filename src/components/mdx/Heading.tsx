import { type ComponentPropsWithoutRef } from "react";

function h1(props: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1 className="text-4xl leading-loose font-bold md:text-5xl" {...props} />
  );
}
function h2(props: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2 className="text-3xl leading-loose font-bold md:text-4xl" {...props} />
  );
}
function h3(props: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3 className="text-2xl leading-loose font-bold md:text-3xl" {...props} />
  );
}
function h4(props: ComponentPropsWithoutRef<"h4">) {
  return (
    <h4 className="text-xl leading-loose font-bold md:text-2xl" {...props} />
  );
}
function h5(props: ComponentPropsWithoutRef<"h5">) {
  return (
    <h5 className="text-lg leading-loose font-bold md:text-xl" {...props} />
  );
}
function h6(props: ComponentPropsWithoutRef<"h6">) {
  return (
    <h6 className="text-sm leading-loose font-bold md:text-lg" {...props} />
  );
}

export { h1, h2, h3, h4, h5, h6 };
