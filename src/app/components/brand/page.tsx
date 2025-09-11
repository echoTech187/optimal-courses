import Image from "next/image";
export default function Brand({isVisible}: {isVisible?: boolean}) {
    return (
        <div className="text-lg font-bold">
            <Image src={isVisible ? "/logo.png" : "/white-logo.png"} alt="logo" width={100} height={80} />
        </div>
    );
}