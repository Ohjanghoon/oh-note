"use client";

import { Provider } from "react-redux";

// store
import store from "@/store/store";

// components
import LeftSidebar from "@/components/common/LeftSidebar";
import BackToTopButton from "@/components/common/BackToTopButton";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <div className="layout-container">
        {/* <LeftSidebar /> */}
        <main className="layout-main">{children}</main>
        <aside className="back_to_top">
          <BackToTopButton />
        </aside>
      </div>
    </Provider>
  );
};

export default ClientLayout;
