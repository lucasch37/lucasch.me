import { useEffect, useState } from "react";

export type BrowserEngine = "gecko" | "webkit" | "chromium" | "unknown";

const unknown: BrowserEngine = "unknown";

function detectEngine(): BrowserEngine {
    if (typeof navigator === "undefined") return unknown;

    const ua = navigator.userAgent;
    const hasAppleWebKit = /AppleWebKit\//.test(ua);
    const isChromiumLike = /Chrome\//.test(ua) || /Chromium\//.test(ua) || /CriOS\//.test(ua);
    const isBlinkLike =
        isChromiumLike || /Edg\//.test(ua) || /OPR\//.test(ua) || /SamsungBrowser\//.test(ua);
    const isGeckoLike = /Gecko\//.test(ua) && !/like Gecko/.test(ua);

    if (isGeckoLike) return "gecko";
    if (isBlinkLike && hasAppleWebKit) return "chromium";
    if (hasAppleWebKit) return "webkit";
    return "unknown";
}

export function useBrowserEngine(): BrowserEngine {
    const [engine, setEngine] = useState<BrowserEngine>(unknown);

    useEffect(() => {
        setEngine(detectEngine());
    }, []);

    return engine;
}
