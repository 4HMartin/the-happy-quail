"use client";
import {motion} from "motion/react";
import BrandPanel from "./brand-panel";
import Gallery from "./gallery";
import {useState} from "react";
import {slides} from "@/lib/slides";

export default function ComingSoon() {

    const [[index, dir], setPage] = useState<[number, number]>([0, 0]);

    const paginate = (d: number) =>
        setPage(([i]) => [(i + d + slides.length) % slides.length, d]);
    const goTo = (n: number) => setPage(([i]) => [n, n > i ? 1 : -1]);
    return (
        <motion.section
            initial={{opacity: 0, y: 24, scale: 0.98}}
            animate={{opacity: 1, y: 0, scale: 1}}
            transition={{duration: 0.7, ease: "easeOut"}}
            className="relative grid w-full overflow-hidden rounded-3xl bg-black shadow-2xl lg:grid-cols-2"
        >
            <BrandPanel index={index} />
            <Gallery index={index} dir={dir} paginate={paginate} goTo={goTo} />
        </motion.section>
    );
}