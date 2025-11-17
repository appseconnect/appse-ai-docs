import React from "react";
// import ChatWidget from "../components/ChatWidget";
import { useSearchShortcut } from "../hooks/useSearchShortcut";

export default function Root({ children }) {
  useSearchShortcut();

  return (
    <>
      {children}
      {/* <ChatWidget /> */}
    </>
  );
}
