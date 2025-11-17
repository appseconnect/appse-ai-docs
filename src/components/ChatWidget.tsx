import React, { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: "fixed", bottom: 20, right: 20 }}>
      {!open && <button onClick={() => setOpen(true)}>AI Chat</button>}

      {open && (
        <iframe
          src="/chat"
          style={{
            width: "100vw",
            height: "100vh",
            border: "1px solid #ccc",
            borderRadius: 8,
          }}
        />
      )}
    </div>
  );
}
