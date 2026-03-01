import { cn } from "@/lib/utils";
import type React from "react";

type FileContentProps = React.HTMLAttributes<HTMLDivElement> & {
    isDivider?: boolean;
};

const FileContent = ({ className, isDivider = false, children, ...props }: FileContentProps) => {
    const handlePointerDownCapture: React.PointerEventHandler<HTMLDivElement> = (event) => {
        event.stopPropagation();
    };

    if (isDivider) {
        return (
            <div
                className={cn("relative flex h-full flex-col gap-2 select-text", className)}
                onPointerDownCapture={handlePointerDownCapture}
                {...props}
            >
                {children}
            </div>
        );
    }

    return (
        <div
            className={cn(
                "relative flex h-full gap-6 rounded-lg border bg-white/25 p-6 select-text",
                className,
            )}
            onPointerDownCapture={handlePointerDownCapture}
            {...props}
        >
            <div className="absolute inset-0 -z-20 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
            {children}
        </div>
    );
};

const FileInfo = ({ className, ...props }: React.ComponentProps<"div">) => {
    return <div className={cn("flex w-[350px] flex-col gap-2", className)} {...props} />;
};

const FileHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
    return <div className={cn("flex items-center gap-3", className)} {...props} />;
};

const FileTitle = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            className={cn("font-mono text-lg font-semibold tracking-tighter", className)}
            {...props}
        />
    );
};

const FileCaption = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            className={cn("rounded-sm border px-2 py-0.5 font-mono text-xs font-medium", className)}
            {...props}
        />
    );
};

const FileText = ({ className, ...props }: React.ComponentProps<"div">) => {
    return <div className={cn("text-xs leading-relaxed font-light", className)} {...props} />;
};

const FileImage = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div className="h-2/3 flex-1 -rotate-[2deg] border bg-zinc-100 p-4">
            <div
                className={cn("flex h-full w-full items-center justify-center border", className)}
                {...props}
            />
        </div>
    );
};

export { FileContent, FileInfo, FileHeader, FileTitle, FileCaption, FileText, FileImage };
