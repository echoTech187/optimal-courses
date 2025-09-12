import Image from "next/image";
export default function Brand({isVisible}: {isVisible?: boolean}) {
    return (
        <div className="text-lg font-bold flex items-center gap-2">
            <Image src={isVisible ? "/logo.png" : "/white-logo.png"} alt="logo" width={100} height={80} className="h-12 w-fit" />
            <Image src={isVisible ? "/Optimal.png" : "/white-optimal.png"} alt="brand" width={100} height={80} className="h-10 w-fit" />
        </div>
    );
}