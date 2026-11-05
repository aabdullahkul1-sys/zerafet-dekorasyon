import { createFileRoute } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/site/shell";
import { site } from "@/lib/site";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: `Sayfa bulunamadı · ${site.name}` },
      { name: "description", content: "Aradığınız sayfa yok. Zerafet Dekorasyon proje ve hizmetlerine dönebilirsiniz." },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: NotFoundPage,
});
