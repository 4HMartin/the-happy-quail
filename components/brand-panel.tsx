"use client";
import Image from "next/image";
import { AnimatePresence ,motion, type Variants } from "motion/react";
import { Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from "./logo";
import Link from "next/link";
import {slides} from "@/lib/slides";

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function BrandPanel({ index }: { index: number }) {
    return (
        <div className="relative flex min-h-210 flex-col text-white">
            {/* blurred background that follows the active slide */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[index].src}
                        alt=""
                        fill
                        priority={index === 0}
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="scale-110 object-cover blur-md"
                    />
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/45" />

            {/* header strip */}
            <header className="relative z-10 flex h-16 items-center justify-end border-b border-white/20 px-6 text-sm">
                <Link href="tel:+441952913561" className="flex items-center gap-2 hover:text-white/80">
                    <Phone className="size-3.5" /> +44 1952 913 561
                    {/*<Phone className="size-3.5" /> 07495 313 711*/}
                </Link>
            </header>

            {/* content */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-10 flex flex-1 flex-col items-center justify-center gap-10 px-6 py-12 text-center"
            >
                <motion.h2 variants={item} className="text-2xl font-semibold sm:text-3xl">
                    Coming soon
                </motion.h2>

                <motion.div variants={item} className="flex w-full justify-center">
                    <Logo />
                </motion.div>

                <motion.div variants={item}>
                    <p className="max-w-sm text-sm text-white/90 mb-6">
                        Opening from <strong>19.10.26</strong> for breakfast and lunch Monday to Friday - further hours and days coming by December.
                    </p>
                    <p className="max-w-sm text-sm text-white/90">
                        Our website is also in development but for now please send us an email to
                        <Link href="mailto:coocoo@thehappyquail.co.uk" aria-label="The Happy Quail email" className="font-bold">
                            {' '}coocoo@thehappyquail.co.uk{' '}
                        </Link>
                        for any enquiries.
                    </p>
                </motion.div>

                <motion.div variants={item} className="flex gap-4">
                    {[
                        { Icon: FaFacebookF, label: "Facebook", url: "https://www.facebook.com/thehappyquailnewport" },
                        { Icon: FaInstagram, label: "Instagram", url: "https://www.instagram.com/the_happy_quail/" },
                        // { Icon: FaTwitter, label: "Twitter", url: "" },
                    ].map(({ Icon, label, url }) => (
                        <Link key={label} href={url} aria-label={label} className="text-white hover:bg-white/10 hover:text-white">
                            <Icon className="size-5" />
                        </Link>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}