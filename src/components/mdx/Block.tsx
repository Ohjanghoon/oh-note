import { type ComponentPropsWithoutRef } from "react";

function blockquote(props: ComponentPropsWithoutRef<"blockquote">) {
  return (
    <blockquote
      className="border-l-4 border-gray-800 py-2 pl-4 text-gray-600"
      {...props}
    />
  );
}

export { blockquote };
