import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteFooter, SiteHeader, NotFoundPage } from "@/components/site/shell";
import { site } from "@/lib/site";
import appCss from "../styles.css?url";

const tagManager = `(function(){
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "gtm.js", "gtm.start": new Date().getTime() });
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  document.addEventListener("click", function (event) {
    var node = event.target && event.target.closest ? event.target.closest("a") : null;
    if (!node) return;
    var href = node.getAttribute("href") || "";
    if (href.indexOf("wa.me") !== -1 || href.indexOf("api.whatsapp.com") !== -1) {
      window.dataLayer.push({ event: "whatsapp_click", link_url: href });
    } else if (href.indexOf("tel:") === 0) {
      window.dataLayer.push({ event: "phone_click", link_url: href });
    }
  }, true);
})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${site.name} \u2014 ${site.tagline}` },
      { name: "description", content: site.description },
      { name: "theme-color", content: "#1a1714" },
      { name: "language", content: "Turkish" },
      {
        name: "google-site-verification",
        content: "kbxrEvVnuURzqz71kLg6Xyu9UWey828KJsO-2ZFDLGs",
      },
    ],
    links: [
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/icon-180.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,620&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      { children: tagManager },
      { src: "https://www.googletagmanager.com/gtm.js?id=GTM-NDCWWCZ4", async: true },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundPage,
});

function RootComponent() {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NDCWWCZ4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <PreviewHostBridge />
        <AuthProvider>
          <SiteHeader />
          <Outlet />
          <SiteFooter />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
