import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
  presets: [presetUno()],
  // 自定义规则
  rules: [
    // 宽度规则
    [/^w-(\d+)$/, ([, d]) => ({ width: `${d}px` })],
    // 高度规则
    [/^h-(\d+)$/, ([, d]) => ({ height: `${d}px` })],
    // 内边距规则
    [/^p-(\d+)$/, ([, d]) => ({ padding: `${d}px` })],
    [
      /^px-(\d+)$/,
      ([, d]) => ({ "padding-left": `${d}px`, "padding-right": `${d}px` })
    ],
    [
      /^py-(\d+)$/,
      ([, d]) => ({ "padding-top": `${d}px`, "padding-bottom": `${d}px` })
    ],
    [/^pt-(\d+)$/, ([, d]) => ({ "padding-top": `${d}px` })],
    [/^pr-(\d+)$/, ([, d]) => ({ "padding-right": `${d}px` })],
    [/^pb-(\d+)$/, ([, d]) => ({ "padding-bottom": `${d}px` })],
    [/^pl-(\d+)$/, ([, d]) => ({ "padding-left": `${d}px` })],
    // 外边距规则
    [/^m-(\d+)$/, ([, d]) => ({ margin: `${d}px` })],
    [
      /^mx-(\d+)$/,
      ([, d]) => ({ "margin-left": `${d}px`, "margin-right": `${d}px` })
    ],
    [
      /^my-(\d+)$/,
      ([, d]) => ({ "margin-top": `${d}px`, "margin-bottom": `${d}px` })
    ],
    [/^mt-(\d+)$/, ([, d]) => ({ "margin-top": `${d}px` })],
    [/^mr-(\d+)$/, ([, d]) => ({ "margin-right": `${d}px` })],
    [/^mb-(\d+)$/, ([, d]) => ({ "margin-bottom": `${d}px` })],
    [/^ml-(\d+)$/, ([, d]) => ({ "margin-left": `${d}px` })],
    // 字体大小规则
    [/^text-(\d+)$/, ([, d]) => ({ "font-size": `${d}px` })],
    // 行高规则
    [/^leading-(\d+)$/, ([, d]) => ({ "line-height": `${d}px` })],
    // 边框规则
    [/^border-(\d+)$/, ([, d]) => ({ "border-width": `${d}px` })],
    // 圆角规则
    [/^rounded-(\d+)$/, ([, d]) => ({ "border-radius": `${d}px` })]
  ]
});
