"use client";

import { Provider } from "react-redux";

// store
import store from "@/store/store";

// hooks
import usePostsInitializer from "@/hooks/usePostsInitializer";

// components
import LeftSidebar from "@/components/common/LeftSidebar";
import BackToTopButton from "@/components/common/BackToTopButton";
import GradientBackground from "@/components/ui/GradientBackground";
import Header from "@/components/common/Header";
import { ThemeProvider } from "@/contexts/ThemeContext";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <PostsInitializer />
      <ThemeProvider>
        <div className="root-container">
          <GradientBackground />
          <Header />
          <div className="layout-container">
            <main className="layout-main">{children}</main>
            <aside className="back_to_top">
              <BackToTopButton />
            </aside>
          </div>
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
