import { type ComponentPropsWithoutRef } from "react";

export function Heading(props: ComponentPropsWithoutRef<"h1">) {
  return <h1 className="text-accent-primary" {...props} />;
}
