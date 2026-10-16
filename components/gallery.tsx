"use client";
import Image from "next/image";
import {AnimatePresence, motion} from "motion/react";
import {ChevronLeft, ChevronRight, MapPin} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {slides} from "@/lib/slides";

type GalleryProps = {
    index: number;
    dir: number;
    paginate: (d: number) => void;
    goTo: (n: number) => void;
};

export default function Gallery({ index, dir, paginate, goTo }: GalleryProps) {

    return (
        <div className="relative min-h-105 overflow-hidden text-white lg:min-h-full">
            {/* slides */}
            <AnimatePresence initial={false} custom={dir} mode="popLayout">
                <motion.div
                    key={index}
                    custom={dir}
                    initial={{opacity: 0, x: dir * 60}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: dir * -60}}
                    transition={{duration: 0.5, ease: "easeOut"}}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[index].src}
                        alt={slides[index].alt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {/* gradients for legibility */}
            <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-black/70 to-transparent"/>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/90 to-transparent"/>

            {/* header strip */}
            <header
                className="absolute inset-x-0 top-0 z-10 flex h-16 items-center border-b border-white/20 px-6 text-sm">
                <span className="flex items-center gap-2">
                  <MapPin className="size-3.5"/> Sundew Court · Newport · TF10 7WG
                </span>
            </header>

            {/* arrows */}
            <Button
                variant="ghost"
                size="icon"
                onClick={() => paginate(-1)}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 text-white hover:bg-white/10 hover:text-white"
            >
                <ChevronLeft className="size-8"/>
            </Button>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => paginate(1)}
                aria-label="Next image"
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 text-white hover:bg-white/10 hover:text-white"
            >
                <ChevronRight className="size-8"/>
            </Button>

            {/* thumbnails */}
            <div className="absolute inset-x-0 bottom-0 z-10 grid grid-cols-3 gap-3 p-4 sm:gap-5 sm:p-6">
                {slides.map((s, i) => (
                    <motion.button
                        key={s.src}
                        whileHover={{scale: 1.04}}
                        whileTap={{scale: 0.97}}
                        onClick={() => goTo(i)}
                        aria-label={`Show image ${i + 1}`}
                        className={cn(
                            "relative aspect-3/2 overflow-hidden rounded-lg border transition-colors",
                            i === index ? "border-white" : "border-white/30 opacity-80"
                        )}
                    >
                        <Image src={s.src} alt="" fill sizes="20vw" className="object-cover"/>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}