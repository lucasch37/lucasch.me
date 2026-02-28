import cabinet from "@/assets/images/cabinet/cabinet.png";
import blackTab from "@/assets/images/cabinet/tab-black.png";
import tab from "@/assets/images/cabinet/tab.png";
import { useImagePreloader } from "@/hooks/use-image-preloader";
import { ArrowBigDown, Loader2 } from "lucide-react";
import { useMemo } from "react";
import Cabinet from "../../../components/portfolio/cabinet";

const About = () => {
    const imageUrls = useMemo(() => [cabinet, tab, blackTab], []);

    // preload images to prevent strange appearance when images haven't loaded yet
    const imagesLoaded = useImagePreloader(imageUrls);

    if (!imagesLoaded) {
        return (
            <section className="flex h-[calc(100vh-8rem)] items-center justify-center">
                <Loader2 className="text-muted-foreground h-8 w-8 animate-spin" />
            </section>
        );
    }

    return (
        <section className="flex h-[calc(100vh-8rem)] flex-col pb-[60vh] sm:pb-[50vh]">
            {/* percise p and m calculations to make responsive, weird but it works */}
            <div className="relative -mb-150 flex w-full flex-1 scale-[40%] items-end justify-center md:scale-[60%] lg:scale-[80%] 2xl:scale-[100%]">
                <div className="absolute bottom-[800px]">
                    <div className="flex scale-[200%] items-center gap-3 lg:scale-[100%]">
                        <p className="font-mono text-lg tracking-tighter">
                            Click and drag on a tab
                        </p>
                        <ArrowBigDown />
                    </div>
                </div>
                <Cabinet />
            </div>
        </section>
    );
};

export default About;
