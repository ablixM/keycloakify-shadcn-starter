import type { ReactNode } from "react";
import placeholder from "../../../assets/img/placeholder.svg";
import { TemplateTopBar } from '../TemplateTopBar';


export function ImageAsideLayout(props: {
    content: ReactNode;
    imageUrl?: string;
}) {
    const { content, imageUrl } = props;

    return (
        <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <TemplateTopBar />

            <div className="relative z-10 grid w-full max-w-sm overflow-hidden rounded-3xl border-none md:border bg-background shadow-none md:shadow-xl  md:max-w-5xl md:grid-cols-2">
                <div className="min-w-0">{content}</div>
                <div className="relative hidden md:block">
                    <div className="relative h-full min-h-80 bg-muted">
                        <img
                            src={imageUrl || placeholder}
                            alt="Authentication visual"
                            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.35] dark:grayscale"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
