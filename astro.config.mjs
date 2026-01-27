// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNext from "starlight-theme-next";

export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeNext()],
      title: "Nysa Documentation",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/CyntexMore/nysa",
        },
      ],
      sidebar: [
        {
          label: "Introduction",
          items: [
            { label: "What is this?", slug: "introduction/what-is-this" },
            { label: "Setup", slug: "introduction/setup" },
          ],
        },
        {
          label: "Specifications",
          collapsed: true,
          items: [
            { label: "Architecture", slug: "specifications/architecture" },
            {
              label: "Memory Engine (nmgine)",
              slug: "specifications/memory-engine",
            },
            {
              label: "AI SDK",
              slug: "specifications/ai-sdk",
            },
          ],
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
