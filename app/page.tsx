import ComingSoon from "@/components/coming-soon";

export default function Page() {
    return (
        <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#acc8cb] p-4 sm:p-8">
            <div className="pointer-events-none absolute -top-24 left-1/4 size-2/3 rounded-full bg-[#acc8cb]/70 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-32 right-0 size-2/3 rounded-full bg-[#acc8cb]/70 blur-2xl" />
            <ComingSoon />
        </main>
    );
}