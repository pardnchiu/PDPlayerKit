# PDPlayerKit (JavaScript Library)

> PDPlayerKit 是一個模組化的 JavaScript 播放器，支持嵌入式 HTML5、YouTube 和 Vimeo 播放器，具備高度自定義的控制面板、風格主題，並支援多媒體格式。

![](https://img.shields.io/badge/tag-JavaScript%20Library-bb4444) ![](https://img.shields.io/github/license/pardnchiu/PDPlayerKit?color=44bb44) ![](https://img.shields.io/badge/creator-邱敬幃-4444bb)<br>
[![](https://img.shields.io/github/v/release/pardnchiu/PDPlayerKit?color=bbbb44)](https://github.com/pardnchiu/PDPlayerKit) [![](https://img.shields.io/npm/v/pdplayerkit?color=44bbbb)](https://www.npmjs.com/package/pdplayerkit) ![](https://img.shields.io/github/size/pardnchiu/PDPlayerKit/dist/PDPlayerKit.js?color=bb44bb)

## 特點

- 多媒體支持：支持 HTML5 影片、YouTube 和 Vimeo 播放，音訊播放功能也已新增。
- 自定義控制面板：包括播放、暫停、音量調節、播放速率調整等功能，並提供多種風格主題選擇。
- 多風格主題：內建多種預設風格，使用者可依據需求自由切換（如 Minimal、Classic、Retro、Simple 等）。
- 多種版本支持：提供 ESM 和普通版本，方便用於不同開發環境。
- 無依賴：已排除 PDRenderKit 的依賴。
- 授權從 GPL 3.0 改為 MIT
- 使用 [Google Icons](https://fonts.google.com/icons) 圖示黨做按鈕。
- 使用 [pixabay.com](https://pixabay.com/videos/) 影音資源做範例。
- 可在 [此處](https://pardnchiu.github.io/PDPlayerKit) 預覽。

## 安裝方式

- **從 npm 安裝**
    ```bash
    npm i pdplayerkit
    ```

- **從 CDN 引入**
    - **引入 `PDPlayerKit` 套件**
        ```html
        <script src="https://cdn.jsdelivr.net/npm/pdplayerkit@latest/dist/PDPlayerKit.js"></script>
        ```
    - **Module 版本**
        ```javascript
        import { player as PDPlayer } from "https://cdn.jsdelivr.net/npm/pdplayerkit@latest/dist/PDPlayerKit.module.js";
        ```

## 使用方法

- **初始化 `editor` 和 `viewer`**
    ```Javascript
    const dom = new PDPlayer({
        // 選填：指定元件替換為播放器（元件的 ID）
        // 若未指定，需手動將 dom.body 加入至視圖中
        // id: "元件 ID",

        // 必填：媒體來源設定，以下選項中僅能選擇一項
        video: "[影片位置]",
        // audio: "[音訊位置]",
        // vimeo: "[Vimeo ID]",
        // youtube: "[YouTube ID]"

        // 選填：播放設置
        option: {
            // 控制面板外觀風格，例如 "minimal" 或 "classic"
            panelType: "[風格選擇]",

            // 控制面板按鈕，依需求選擇顯示的功能
            panel: [
                "play", "progress", "time", "timeMini", 
                "volume", "volumeMini", "rate", "full"
            ],
            // 播放器預設音量
            volume: 100,
            // 播放器預設靜音
            mute: false
        },

        // 選填：事件監聽器，可監聽播放過程中的特定事件
        when: {
            ready: function () {
                console.log("播放器準備完成");
            },
            playing: function () {
                console.log("播放中");
            },
            pause: function () {
                console.log("暫停");
            },
            end: function () {
                console.log("播放結束");
            },
            destroyed: function () {
                console.log("已移除");
            }
        }
    });

    // 若無指定元件，需手動將播放器加入至 DOM 中
    (...).appendChild(dom.body);

    // 更換內容影片
    // dom.replace({
        // 必填：媒體來源設定，以下選項中僅能選擇一項
        // video: "[影片位置]",
        // audio: "[音訊位置]",
        // vimeo: "[Vimeo ID]",
        // youtube: "[YouTube ID]"
        // option: {[播放設置]},
        // when: {[事件監聽]}
    // })

    // 移除元件
    // dom.destory();
    ```


## 開發者

<img src="https://avatars.githubusercontent.com/u/25631760" align="left" width="96" height="96" style="margin-right: 0.5rem;" />

<h4 style="padding-top: 0">邱敬幃 Pardn Chiu</h4>

[![](https://pardn.io/image/mail.svg)](mailto:dev@pardn.io) [![](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/pardnchiu) 

## 授權條款

本專案依據 [MIT](https://github.com/pardnchiu/PDPlayerKit/blob/main/LICENSE) 授權使用。

***

©️ 2023 [邱敬幃 Pardn Chiu](https://www.linkedin.com/in/pardnchiu)
