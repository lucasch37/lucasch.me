import { useEffect, useState } from "react";

export function useImagePreloader(urls: string[]) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        let cancelled = false;

        // fetch all images
        Promise.all(
            urls.map(
                (src) =>
                    new Promise<void>((resolve) => {
                        const img = new Image();
                        img.src = src;
                        img.onload = () => resolve();
                        img.onerror = () => resolve();
                    }),
            ),
        ).then(() => {
            if (!cancelled) setLoaded(true);
        });

        return () => {
            cancelled = true;
        };
    }, [urls]);

    return loaded;
}
