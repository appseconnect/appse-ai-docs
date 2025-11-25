import { useEffect } from "react";

export function useSearchHighlight() {
  useEffect(() => {
    // Function to highlight search terms
    const highlightSearchTerms = () => {
      const params = new URLSearchParams(window.location.search);
      const query = params.get("q") || params.get("query");

      if (!query) return;

      const article = document.querySelector("article");
      if (!article) return;

      // Remove existing highlights
      article.querySelectorAll(".search-highlight").forEach((el) => {
        const parent = el.parentNode;
        if (parent) {
          parent.replaceChild(
            document.createTextNode(el.textContent || ""),
            el
          );
          parent.normalize();
        }
      });

      // Split query into terms
      const terms = query
        .toLowerCase()
        .split(/\s+/)
        .filter((t) => t.length > 2);

      if (terms.length === 0) return;

      // Find and highlight matches
      const walker = document.createTreeWalker(article, NodeFilter.SHOW_TEXT, {
        acceptNode: (node) => {
          // Skip if parent is script, style, or already highlighted
          const parent = node.parentElement;
          if (
            !parent ||
            ["SCRIPT", "STYLE", "CODE"].includes(parent.tagName) ||
            parent.classList.contains("search-highlight")
          ) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        },
      });

      const nodesToHighlight: Array<{
        node: Text;
        matches: Array<{ start: number; end: number }>;
      }> = [];

      let currentNode: Text | null;
      while ((currentNode = walker.nextNode() as Text | null)) {
        const text = currentNode.textContent?.toLowerCase() || "";
        const matches: Array<{ start: number; end: number }> = [];

        for (const term of terms) {
          let index = text.indexOf(term);
          while (index !== -1) {
            matches.push({ start: index, end: index + term.length });
            index = text.indexOf(term, index + 1);
          }
        }

        if (matches.length > 0) {
          nodesToHighlight.push({ node: currentNode, matches });
        }
      }

      // Apply highlights
      let firstHighlight: HTMLElement | null = null;
      nodesToHighlight.forEach(({ node, matches }) => {
        const text = node.textContent || "";
        const parent = node.parentNode;
        if (!parent) return;

        // Sort matches by position
        matches.sort((a, b) => a.start - b.start);

        // Merge overlapping matches
        const merged: Array<{ start: number; end: number }> = [];
        matches.forEach((match) => {
          if (merged.length === 0) {
            merged.push(match);
          } else {
            const last = merged[merged.length - 1];
            if (match.start <= last.end) {
              last.end = Math.max(last.end, match.end);
            } else {
              merged.push(match);
            }
          }
        });

        // Create highlighted elements
        const fragment = document.createDocumentFragment();
        let lastIndex = 0;

        merged.forEach((match) => {
          // Add text before match
          if (match.start > lastIndex) {
            fragment.appendChild(
              document.createTextNode(text.substring(lastIndex, match.start))
            );
          }

          // Add highlighted match
          const mark = document.createElement("mark");
          mark.className = "search-highlight";
          mark.style.backgroundColor = "#ffeb3b";
          mark.style.padding = "2px 0";
          mark.style.borderRadius = "2px";
          mark.textContent = text.substring(match.start, match.end);
          fragment.appendChild(mark);

          if (!firstHighlight) {
            firstHighlight = mark;
          }

          lastIndex = match.end;
        });

        // Add remaining text
        if (lastIndex < text.length) {
          fragment.appendChild(
            document.createTextNode(text.substring(lastIndex))
          );
        }

        parent.replaceChild(fragment, node);
      });

      // Scroll to first highlight
      if (firstHighlight) {
        setTimeout(() => {
          firstHighlight.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 100);
      }
    };

    // Run on mount and when hash changes
    highlightSearchTerms();

    // Listen for navigation
    const handleNavigation = () => {
      setTimeout(highlightSearchTerms, 100);
    };

    window.addEventListener("popstate", handleNavigation);
    window.addEventListener("hashchange", handleNavigation);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
      window.removeEventListener("hashchange", handleNavigation);
    };
  }, []);
}
