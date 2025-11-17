import { useEffect } from "react";

export function useSearchShortcut() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for Ctrl+K or Cmd+K to open search
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        event.stopPropagation();
        const searchButton = document.querySelector<HTMLButtonElement>(
          ".aa-DetachedSearchButton"
        );
        if (searchButton) {
          searchButton.click();
        }
      }

      // Check for Escape to close search (only if search is open)
      if (event.key === "Escape") {
        const searchOverlay = document.querySelector(".aa-DetachedOverlay");
        if (searchOverlay) {
          const cancelButton = document.querySelector<HTMLButtonElement>(
            ".aa-DetachedCancelButton"
          );
          if (cancelButton) {
            cancelButton.click();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown, true);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, []);
}
