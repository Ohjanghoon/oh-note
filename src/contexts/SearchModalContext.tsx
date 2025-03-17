import { ReactNode, createContext, useContext, useState } from "react";

interface SearchModalContextType {
  isSearchModalOpen: boolean;
  openSearchModal: () => void;
  closeSearchModal: () => void;
  searchTab: "post" | "tag";
  setSearchTab: (tab: "post" | "tag") => void;
}

const SearchModalContext = createContext<SearchModalContextType>({
  isSearchModalOpen: false,
  openSearchModal: () => {},
  closeSearchModal: () => {},
  searchTab: "post",
  setSearchTab: () => {},
});

export function SearchModalProvider({ children }: { children: ReactNode }) {
  const [isSearchModalOpen, serIsSearchModalOpen] = useState(false);
  const [searchTab, setSearchTab] = useState<"post" | "tag">("post");

  const openSearchModal = () => serIsSearchModalOpen(true);
  const closeSearchModal = () => serIsSearchModalOpen(false);

  return (
    <SearchModalContext.Provider
      value={{
        isSearchModalOpen,
        openSearchModal,
        closeSearchModal,
        searchTab,
        setSearchTab,
      }}
    >
      {children}
    </SearchModalContext.Provider>
  );
}

export const useSearchModal = () => {
  return useContext(SearchModalContext);
};
