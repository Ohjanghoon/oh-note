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
      <div className="main-container">
        {/* <LeftSidebar /> */}
        <main>{children}</main>
        <BackToTopButton />
      </div>
    </Provider>
  );
};

export default ClientLayout;
