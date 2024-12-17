<img src="./static/image/logo.png" width=80>

# FlexPlyr

*(Previously known as PDPlayerKit, renamed to FlexPlyr starting from version `2.2.4`)*

> Modular JavaScript Media Player<br>
> Supports HTML5, YouTube, Vimeo with flexible themes and a complete control panel.

![tag](https://img.shields.io/badge/tag-JavaScript%20Library-bb4444) 
![size](https://img.shields.io/github/size/pardnchiu/FlexPlyr/dist%2FFlexPlyr.js)<br>
[![npm](https://img.shields.io/npm/v/@pardnchiu/flexplyr)](https://www.npmjs.com/package/@pardnchiu/flexplyr)
[![download](https://img.shields.io/npm/dm/@pardnchiu/flexplyr)](https://www.npmjs.com/package/@pardnchiu/flexplyr)
[![jsdeliver](https://img.shields.io/jsdelivr/npm/hm/@pardnchiu/flexplyr)](https://www.jsdelivr.com/package/npm/@pardnchiu/flexplyr)<br>
[![](https://img.shields.io/badge/查閱-中文版本-ffffff)](https://github.com/pardnchiu/FlexPlyr/blob/main/README.zh.md)

## Features

### Multimedia Playback
- Supports multiple formats: Play **HTML5 video/audio**, **YouTube**, and **Vimeo**.
- Compatible with desktop and mobile devices, with `playsinline` and **fullscreen mode** toggle support.

### Highly Customizable Control Panel
- Customizable buttons: **Playback speed adjustment**, **volume control**, **progress bar**, etc.
- Multiple built-in themes (e.g., Minimal, Classic, Retro, Simple) for flexible selection.

### Lightweight and Dependency-Free
- Built on **native APIs** and **YouTube/Vimeo APIs**, no extra libraries required.
- Completely removes dependency on **PDRenderKit**, reducing coupling and enhancing usability.
- Lightweight with a file size of only a few KB, ensuring smooth performance even on mobile devices.

### Comprehensive Event Listening
- Supports a wide range of events (e.g., ready, playing, pause, end) for seamless extension.

### Multi-Version Support
- Provides **ESM (ECMAScript Module)** and **regular versions**, suitable for various development environments.

### Intuitive Control Buttons
- Uses [Google Icons](https://fonts.google.com/icons) for button visuals, modern and adaptable to different themes.

### Friendly Licensing
- License changed from **GPL 3.0** to **MIT**, offering greater flexibility for commercial and personal projects.

## Installation

### Via npm
```bash
npm i @pardnchiu/flexplyr
```

### Via CDN
- **Import the `FlexPlyr` library**
    ```html
    <!-- Version 2.2.4 and above -->
    <script src="https://cdn.jsdelivr.net/npm/@pardnchiu/flexplyr@[VERSION]/dist/FlexPlyr.js"></script>

    <!-- Version 2.2.3 and below -->
    <script src="https://cdn.jsdelivr.net/npm/pdplayerkit@[VERSION]/dist/PDPlayerKit.js"></script>
    ```
- **Module Version**
    ```javascript
    // Version 2.2.4 and above
    import { FPlyr } from "https://cdn.jsdelivr.net/npm/@pardnchiu/flexplyr@[VERSION]/dist/FlexPlyr.esm.js";

    // Version 2.2.3 and below
    import { player } from "https://cdn.jsdelivr.net/npm/pdplayerkit@[VERSION]/dist/PDPlayerKit.module.js";
    ```
- **Initialize `FPlyr`**
    ```Javascript
    // Version 2.2.4 and above
    // Unified: FPlyr

    // Version 2.2.3 and below
    // IIFE: PDPlayer
    // ESM: player
    
    const dom = new FPlyr({
        // Optional: Specify the element to replace with the player (element ID)
        // If not specified, manually append dom.body to the view
        // id: "element ID",

        // Required: Media source configuration, choose one of the options below
        video: "[video source]",
        // audio: "[audio source]",
        // vimeo: "[Vimeo ID]",
        // youtube: "[YouTube ID]"

        // Optional: Playback settings
        option: {   
            // Whether to show the slider, default is true
            showThumb: true,

            // Control panel style, e.g., "minimal" or "classic"
            panelType: "[style choice]",

            // Control panel buttons, choose functions to display
            panel: [
                "play", "progress", "time", "timeMini", 
                "volume", "volumeMini", "rate", "full"
            ],
            // Default volume level
            volume: 100,
            // Default mute setting
            mute: false
        },

        // Optional: Event listeners to monitor specific events during playback
        when: {
            ready: function () {
                console.log("Player is ready");
            },
            playing: function () {
                console.log("Playing");
            },
            pause: function () {
                console.log("Paused");
            },
            end: function () {
                console.log("Playback ended");
            },
            destroyed: function () {
                console.log("Player removed");
            }
        }
    });

    // If no element is specified, manually append the player to the DOM
    (...).appendChild(dom.body);

    // Remove the component
    // dom.destroy();
    ```


## Creator

<img src="https://avatars.githubusercontent.com/u/25631760" align="left" width="96" height="96" style="margin-right: 0.5rem;" />

<h4 style="padding-top: 0">邱敬幃 Pardn Chiu</h4>

[![](https://pardn.io/image/mail.svg)](mailto:dev@pardn.io) [![](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/pardnchiu) 

## License

This project is licensed under a **Proprietary License**.  
You may use, install, and run this software only under the terms specified in the [End-User License Agreement (EULA)](https://github.com/pardnchiu/FlexPlyr/blob/main/LICENSE).

***

©️ 2023 [邱敬幃 Pardn Chiu](https://www.linkedin.com/in/pardnchiu)
