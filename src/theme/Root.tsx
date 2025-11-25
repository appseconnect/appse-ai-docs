import React from "react";
// import ChatWidget from "../components/ChatWidget";
import { useSearchShortcut } from "../hooks/useSearchShortcut";
import { useSearchHighlight } from "../hooks/useSearchHighlight";

export default function Root({ children }) {
  // useSearchShortcut();
  useSearchHighlight();

  return (
    <>
      {children}
      {/* <ChatWidget /> */}
    </>
  );
}
