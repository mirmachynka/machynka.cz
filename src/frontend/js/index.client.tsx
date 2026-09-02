import { bindFrontendRuntime, configureSpa, onPageChange } from "@trebired/frontend";
import "@trebired/frontend/static-icons";

import { Footer } from "#jpydwvtclrzh";
import { Header } from "#d19rad2krym3";
import { hydrateChromeRoots } from "#pgsley9n980u";
import { mountContentIsland } from "#6zkiijbcfna0";
import { getLang } from "#vfzpzm3jpkln";
import { metaFor } from "#y4hpoyu2xriv";

document.title = metaFor(window.location.pathname, getLang()).title;

configureSpa({});

void hydrateChromeRoots([
    [document.querySelector("header"), <Header />],
    [document.querySelector("footer"), <Footer />],
]).then(() => {
    bindFrontendRuntime(document, { icons: { mode: "static" } });
    mountContentIsland("live_content");
});

function scrollToHash(hash: string) {
  requestAnimationFrame(() => {
      requestAnimationFrame(() => {
          document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
  });
}

let pendingHash = "";

document.addEventListener("click", (event) => {
    const trigger = (event.target as Element | null)?.closest("[data-tbf-soft-redirect]");
    const href = trigger?.getAttribute("href");
    if (!href) return;

    let url: URL;

    try {
      url = new URL(href, window.location.href);
    } catch {
      return;
    }

    const samePage = url.pathname === window.location.pathname && url.search === window.location.search;

    if (url.hash && samePage) {
      event.preventDefault();
      if (window.location.hash !== url.hash) {
        history.pushState(history.state, "", url.pathname + url.search + url.hash);
      }
      document.getElementById(url.hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    pendingHash = url.hash;
  }, true);

onPageChange(() => {
    const hash = pendingHash || window.location.hash;

    pendingHash = "";
    if (!hash) return;

    if (window.location.hash !== hash) {
      history.replaceState(history.state, "", window.location.pathname + window.location.search + hash);
    }

    scrollToHash(hash);
});
