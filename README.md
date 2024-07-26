# Video Player (JavaScript Library)

![](https://img.shields.io/github/v/release/pardnchiu/PDPlayerKit?color=red) ![](https://img.shields.io/github/size/pardnchiu/PDPlayerKit/dist%2FPDPlayerKit.js?color=green) ![](https://img.shields.io/github/license/pardnchiu/PDPlayerKit?color=blue) ![](https://img.shields.io/badge/creator-Pardn%20Chiu%20邱敬幃-A374BF) 

## 特點 / Feature

- 支持 Youtube 與一般影片連結使用。<br>
    Support for YouTube and general video links.

- 提供播放、暫停、音量調整等影片操作功能。<br>
    Provides video controls such as play, pause, and volume adjustment.

- 在 `playsinline` 的狀態也可真正適配 `fullscreen`。<br>
    Fully compatible with `fullscreen` mode even in `playsinline` state.
  
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

此源代碼項目採用 [GPL-3.0](https://github.com/pardnchiu/markdown-editor/blob/main/LICENSE) 許可證授權。<br>
This source code project is licensed under the [GPL-3.0](https://github.com/pardnchiu/markdown-editor/blob/main/LICENSE) license.

## 如何使用 / How to use

- 添加依賴 `PDExtension-js`
```Html
<script src="https://cdn.jsdelivr.net/gh/pardnchiu/PDExtension-js@[VERSION]/dist/PDExtension.min.js" copyright="Pardn Ltd"></script>
```

- 導入 `player`
```Javascript
import { player } from "https://cdn.jsdelivr.net/gh/pardnchiu/PDPlayerKit@[VERSION]/dist/PDPlayerKit.js";

const elm = new player({
    /* Youtube 影片ID 或 其他影片來源 */
    videoId: "UmR9zlez4OE"
    src: "/img/sample.mp4",
    /* 預設參數 */
    volume: 100,    //預設音量
    mute: false,    //預設靜音
    /* 控制器 */
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
