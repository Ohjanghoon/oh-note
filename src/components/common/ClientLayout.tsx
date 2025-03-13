"use client";

import { Provider } from "react-redux";

// store
import store from "@/store/store";

// hooks
import usePostsInitializer from "@/hooks/usePostsInitializer";

// components
import BackToTopButton from "@/components/common/BackToTopButton";
import GradientBackground from "@/components/ui/GradientBackground";
import Header from "@/components/common/Header";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Footer from "./Footer";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <PostsInitializer />
      <ThemeProvider>
        <div className="root-container">
          <GradientBackground styleClassName="w-full top-0 left-0 h-[50vh] opacity-25 blur-3xl" />
          <Header />
          <div className="layout-container">
            <main className="layout-main">{children}</main>
            <aside className="back_to_top">
              <BackToTopButton />
            </aside>
            <Footer />
          </div>
          <GradientBackground styleClassName="w-full -bottom-10 left-0 rotate-180 h-60 opacity-20 blur-2xl" />
        </div>
      </ThemeProvider>
    </Provider>
  );
};

function PostsInitializer() {
  usePostsInitializer();
  return null;
}

export default ClientLayout;
