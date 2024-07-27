/**
 * PlayerEvent 介面。
 * 定義播放器各種事件的可選回調函數。
 */
interface PlayerEvent {
    ready?: () => void;    // 當播放器準備好時觸發
    playing?: () => void;  // 當影片開始播放時觸發
    pause?: () => void;    // 當影片暫停時觸發
    end?: () => void;      // 當影片播放結束時觸發
}

/**
 * PlayerConfig 介面。
 * 定義初始化播放器時所使用的配置物件的結構。
 */
interface PlayerConfig {
    videoId?: string;      // 可選：YouTube 影片 ID 或其他影片來源
    src?: string;          // 可選：影片的來源 URL
    volume?: number;       // 可選：預設音量 (0-100)
    mute?: boolean;        // 可選：預設靜音狀態
    panel?: string[];      // 可選：控制面板元素的陣列 [play, timebar, time, mute, volume, rate, full]
    event?: PlayerEvent;   // 可選：播放器事件的處理程序
}