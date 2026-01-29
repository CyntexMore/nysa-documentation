// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNext from "starlight-theme-next";

export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeNext()],
      title: "Nysa Documentation",
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        ja: {
          label: "日本語",
          lang: "ja",
        },
      },
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
          translations: {
            ja: "はじめに",
          },
          items: [
            { label: "What is this?", slug: "introduction/what-is-this", translations: { ja: "これは何ですか？", "zh-CN": "这是什么？" } },
            { label: "Setup", slug: "introduction/setup", translations: { ja: "セットアップ", "zh-CN": "设置" } },
          ],
        },
        {
          label: "Specifications",
          translations: {
            ja: "仕様",
          },
          collapsed: true,
          items: [
            { label: "Architecture", slug: "specifications/architecture", translations: { ja: "アーキテクチャ" } },
            {
              label: "Memory Engine (nmgine)",
              slug: "specifications/memory-engine",
              translations: { ja: "メモリエンジン (nmgine)" },
            },
            {
              label: "AI SDK",
              slug: "specifications/ai-sdk",
              translations: { ja: "AI SDK" },
            },
            {
              label: "Social SDK",
              translations: {
                ja: "Social SDK",
              },
              collapsed: true,
              items: [
                { label: "Social SDK", slug: "specifications/social-sdk/social-sdk", translations: { ja: "Social SDK" } },
                {
                  label: "Discord Integration",
                  translations: {
                    ja: "Discord統合",
                  },
                  collapsed: true,
                  items: [
                    { label: "Overview", slug: "specifications/social-sdk/discord/overview", translations: { ja: "概要" } },
                    { label: "Voice Calls", slug: "specifications/social-sdk/discord/voice-call", translations: { ja: "音声通話" } },
                  ],
                },
              ],
            },
          ],
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
