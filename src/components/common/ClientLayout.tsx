"use client";

import Main from "./Main";
import LeftSidebar from "./LeftSidebar";
import { Provider } from "react-redux";
import store from "@/store/store";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <div className="root-container">
        <LeftSidebar />
        <Main>{children}</Main>
      </div>
    </Provider>
  );
};

export default ClientLayout;
