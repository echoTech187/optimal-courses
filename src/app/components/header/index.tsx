"use client";
import { useEffect, useState } from "react";
import Brand from "../brand";
import MenuNavigation from "../navigation";

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        document.title = "Optimal Courses";
        function handleResize() {
            setIsMobile(window.innerWidth <= 640);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > window.innerHeight * 0.5) {
                isVisible || setIsVisible(true);
            } else {
                isVisible && setIsVisible(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isVisible]);
    return (
        <header className={`fixed top-0 left-0 z-50 w-full  py-4   transition-all ${isVisible ? 'bg-white/90 backdrop-blur-md border-b border-black/5 dark:bg-black/20 dark:border-white/10 dark:text-white' : 'bg-white/5 backdrop-blur-md text-white border-b border-white/10'}`}>
            <div className="flex items-center justify-start md:justify-between w-full max-w-[1300px] mx-auto px-4 2xl:px-0">
                <Brand isVisible={isVisible} isMobile={isMobile} />
                <MenuNavigation isVisible={isVisible} />
                <span></span>
                <div className=" space-x-4 hidden">
                    <button className="py-2 px-4 rounded-md transition-colors">
                        Daftar
                    </button>
                    <button className={`py-2 px-4 rounded-md transition-colors border ${isVisible ? 'border-purple-400 text-purple-400' : 'border-white text-white'} hover:bg-white hover:border-purple-600 hover:text-purple-600`}>
                        Masuk
                    </button>
                </div>
            </div>
        </header>
    );
}