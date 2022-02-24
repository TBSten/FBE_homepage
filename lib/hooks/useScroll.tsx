import { useEffect } from "react";

export default function useScroll(callback: (e?: Event) => void) {
    useEffect(() => {
        console.log("scroll");

        callback();
        const handler: EventListener = (e) => {
            callback(e);
        };
        window.addEventListener("scroll", handler);
        return () => {
            window.removeEventListener("scroll", handler);
        };
    }, [callback]);
}
