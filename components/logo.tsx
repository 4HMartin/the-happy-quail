import Image from "next/image";
import { MapPin } from "lucide-react";

export default function Logo() {
    return (
        <div className="flex w-full flex-col items-center text-white">

            <Image src="/assets/logotype_white_v1.webp" alt="The Happy Quail logotype" width={340} height={340} className="-mt-16 sm:w-[50%]" />

            <h1 className="mt-4 font-serif text-xl uppercase tracking-widest sm:text-5xl md:text-2xl hidden">
                The<br /> Happy Quail
            </h1>
            <div className="flex flex-col items-center">
                <MapPin width={18}/>
                <p className="font-serif text-[10px] tracking-widest sm:text-lg flex gap-1">
                    Sundew Court · Newport · TF10 7WG
                </p>
            </div>
        </div>
    );
}