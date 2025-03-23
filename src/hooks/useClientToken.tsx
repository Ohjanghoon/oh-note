"use client";

import { useEffect, useState } from "react";

function useClientToken() {
  const [clientToken, setClientToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let _clientToken = localStorage.getItem("_clientToken");

    if (!_clientToken) {
      _clientToken = generateUUID();
      localStorage.setItem("_clientToken", _clientToken);
    }
    setClientToken(_clientToken);
  }, [clientToken]);
  return clientToken;
}

/** UUID 생성 - 구버전 크롬의 경우 분기처리  */
function generateUUID() {
  return typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
}

export default useClientToken;
