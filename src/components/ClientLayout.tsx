"use client";

import { Provider } from "react-redux";
import { usePathname } from "next/navigation";

import { GoogleAnalytics } from "nextjs-google-analytics";

// store
import store from "@/store/store";

// hooks
import usePostsInitializer from "@/hooks/usePostsInitializer";
import useClientToken from "@/hooks/useClientToken";

// contexts
import ContextProviders from "@/contexts/ContextProviders";

// components
import BackToButton from "@/components/common/BackToButton";
import GradientBackground from "@/components/ui/GradientBackground";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { LoadingDot } from "@/components/common/Loading";
import Sidebar from "@/components/common/Sidebar";
import SearchModal from "@/components/ui/SearchModal";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  useClientToken();

  return (
    <Provider store={store}>
      <GoogleAnalytics trackPageViews />

      <PostsInitializer />
      <ContextProviders>
        <div className="root-container">
          {/* <GradientBackground styleClassName="w-full top-0 left-0 h-[50vh] opacity-25 blur-3xl" /> */}

          <Header />
          {pathname.includes("/blog") && (
            <aside>
              <Sidebar />
            </aside>
          )}
          <main className="root-main">{children}</main>
          <aside className="back_to_btn">
            <BackToButton />
          </aside>
          <Footer />

          <SearchModal />
          <GradientBackground styleClassName="w-full -bottom-10 left-0 rotate-180 h-60 opacity-20 blur-2xl" />
        </div>
      </ContextProviders>
    </Provider>
  );
};

function PostsInitializer() {
  const isLoading = usePostsInitializer();

  return <>{!isLoading && <LoadingDot />}</>;
}

export default ClientLayout;
