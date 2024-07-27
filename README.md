# PDPlayerKit (JavaScript Library)

> PDPlayerKit 是一個輕量級的 JavaScript 播放器 JavaScript 庫，提供嵌入式的 HTML5 影片播放器和 YouTube 播放器，具備高度自定義的控制面板和視覺效果。<br>
> PDPlayerKit is a lightweight JavaScript library that provides embedded HTML5 video players and YouTube players, featuring highly customizable control panels and visual effects.

![](https://img.shields.io/github/v/release/pardnchiu/PDPlayerKit?color=red) ![](https://img.shields.io/github/size/pardnchiu/PDPlayerKit/dist%2FPDPlayerKit.js?color=green) ![](https://img.shields.io/github/license/pardnchiu/PDPlayerKit?color=blue) ![](https://img.shields.io/badge/creator-Pardn%20Chiu%20邱敬幃-A374BF) 

## 特點 / Feature

- 支援 HTML5 視頻和 YouTube 視頻播放，<br>
    Supports HTML5 video and YouTube video playback. 

- 自定義控制面板，包括播放、暫停、音量控制、播放速率調整等功能。<br>
    Customizable control panel, including play, pause, volume control, playback speed adjustment, and more.

- 支援行動裝置 `playsinline` 的狀態下支援全螢幕播放。<br>
    Supports fullscreen playback on mobile devices when `playsinline` is enabled. 
  
- 使用純 JavaScript / CSS 開發。<br>
    Built using pure JavaScript and CSS.
  
- 使用 [PDExtension-js](https://github.com/pardnchiu/PDExtension-js) 進行渲染。<br>
    Rendered using [PDExtension-js](https://github.com/pardnchiu/PDExtension-js).
  
- 使用 [Font Awesome 6](https://fontawesome.com/v6/search) 圖標。<br>
    Use [Font Awesome 6](https://fontawesome.com/v6/search) icons.
  
- 使用 [iframe-api](https://www.youtube.com/iframe_api) 進行 Youtube 操作。<br>
    YouTube operations are handled via the [iframe-api](https://www.youtube.com/iframe_api).
  
- 可在 [此處](https://pardnchiu.github.io/PDPlayerKit) 預覽。<br>
    Preview available [Here](https://pardnchiu.github.io/PDPlayerKit).

## 開發者 / Creator

<a href="https://pardn.io">
<img src=https://pardn.io/image/head-s.jpg align=left width=100 height=100>
</a>

### Pardn Chiu 邱敬幃

[![](https://pardn.io/image/mail.svg)](mailto:mail@pardn.ltd) [![](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/pardnchiu) 

## 授權 / License

此源代碼項目採用 [GPL-3.0](https://github.com/pardnchiu/PDPlayerKit/blob/main/LICENSE) 許可證授權。<br>
This source code project is licensed under the [GPL-3.0](https://github.com/pardnchiu/PDPlayerKit/blob/main/LICENSE) license.

## 下載 / Download

```Shell
npm i pdplayerkit
```

## 如何使用 / How to use

- 添加依賴 `PDExtension-js`
```Html
<script src="https://cdn.jsdelivr.net/gh/pardnchiu/PDExtension-js@[VERSION]/dist/PDExtension.min.js" copyright="Pardn Ltd"></script>
```

- 導入 `player`
```Javascript
import { player } from "https://cdn.jsdelivr.net/gh/pardnchiu/PDPlayerKit@[VERSION]/dist/PDPlayerKit.js";

const elm = new player({
    videoId: ""             // YouTube 視頻 ID
    src: "/static/image/sample.mp4", // 影片連結（適用於 HTML5 影片）
    volume: 100,            // 預設音量
    mute: false,            // 預設靜音
    panel: [
        "play",     //播放鍵
        "timebar",  //進度條
        "time",     //進度時間
        "mute",     //靜音鍵
        "volume",   //音量鍵
        "rate",     //速率鍵
        "full",     //影片
    ],
    event: {
        ready: function() {
            console.log("ready");
        },
        playing: function() {
            console.log("playing");
        },
        pause: function() {
            console.log("pause");
        },
        end: function() {
            console.log("end");
        }
    }
});

[DOM].appendChild(elm.body);
```
***

*翻譯皆靠 ChatGPT*

***

©️ 2023 [Pardn Chiu 邱敬幃](https://www.linkedin.com/in/pardnchiu)
