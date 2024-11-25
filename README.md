# PDPlayerKit (JavaScript Library)

> 模組化 JavaScript 媒體播放器<br>
> 支援 HTML5、YouTube、Vimeo，提供靈活主題與完整控制面板。

![](https://img.shields.io/badge/tag-JavaScript%20Library-bb4444) 
![](https://img.shields.io/github/size/pardnchiu/PDPlayerKit/dist%2FPDPlayerKit.js) 
![](https://img.shields.io/github/license/pardnchiu/PDPlayerKit)<br>
[![](https://img.shields.io/github/v/release/pardnchiu/PDPlayerKit)](https://github.com/pardnchiu/PDPlayerKit) 
[![](https://img.shields.io/npm/v/pdplayerkit)](https://www.npmjs.com/package/pdplayerkit) 
[![](https://img.shields.io/jsdelivr/npm/hw/pdplayerkit)](https://www.jsdelivr.com/package/npm/pdplayerkit)

## 特點

### 多媒體播放
- 支援多類型：可播放 **HTML5 影片 / 音訊**、**YouTube** 與 **Vimeo**。
- 兼容桌面與行動設備，支持 `playsinline` 和 **全螢幕模式** 切換。

### 高度自定義控制面板
- 自由定制按鈕：**播放速率調整**、**音量控制**、**進度條** 等功能按需配置。
- 提供多種內建主題： (如 Minimal、Classic、Retro、Simple)，方便自由選擇。

### 輕量與無依賴
- 基於 **原生 API** 和 **YouTube / Vimeo API**，無需額外庫，開箱即用。
- 完全移除 **PDRenderKit** 的依賴，減少耦合，提升使用便捷性。
- 文件體積小於 數 KB，即使在行動設備上也能高效運行。

### 全面的事件監聽
- 支持多種事件監聽： (如 ready、playing、pause、end)，方便深度擴展。

### 多版本支持
- 提供 **ESM (ECMAScript Module)** 與 **一般版本**，適用於多種開發環境，靈活集成。

### 更直觀的控制按鈕
- 按鈕圖示使用 [Google Icons](https://fonts.google.com/icons)，清晰、現代，適配各類主題風格。

### 友善授權
- 授權從 **GPL 3.0** 調整為 **MIT**，方便自由使用與修改，適應更多商業或個人項目。

## 安裝方式

### 從 npm 安裝
```bash
npm i pdplayerkit
```

### 從 CDN 引入
- **引入 `PDPlayerKit` 套件**
    ```html
    <script src="https://cdn.jsdelivr.net/npm/pdplayerkit@latest/dist/PDPlayerKit.js"></script>
    ```
- **Module 版本**
    ```javascript
    import { player as PDPlayer } from "https://cdn.jsdelivr.net/npm/pdplayerkit@latest/dist/PDPlayerKit.module.js";
    ```
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
            // 是否顯示滑桿，預設 true
            showThumb: true,

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
