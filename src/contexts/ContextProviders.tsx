import { ReactNode } from "react";

// contexts
import { ThemeProvider } from "@/contexts/ThemeContext";
import { SearchModalProvider } from "@/contexts/SearchModalContext";

export default function ContextProviders({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider>
      <SearchModalProvider>{children}</SearchModalProvider>
    </ThemeProvider>
  );
}
