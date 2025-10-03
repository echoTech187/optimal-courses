"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Brand from "../brand";
import { useState } from "react";

export default function MobileSidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <aside id="mobile-sidebar" className={`fixed top-0 left-0 z-140 lg:hidden h-screen overlay [--body-scroll:true] border-base-content/20 overlay-open:translate-x-0 drawer drawer-start sm:overlay-layout-open:translate-x-0 hidden w-full border-e [--auto-close:sm] [--is-layout-affect:true] [--opened:lg] sm:absolute sm:z-0 sm:flex sm:shadow-none lg:[--overlay-backdrop:true] ${isOpen ? 'block' : 'hidden'}`}>
            <div className="drawer-header">
                <Brand isVisible={true} isMobile={false} />
                <button className=" bg-transparent text-black border-none rounded-full hover:rounded-full overlay-close lg:hidden" aria-label="Close" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="mobile-sidebar" data-overlay="#mobile-sidebar">
                    <Icon icon="mdi:close" width="18" height="18" />
                </button>
            </div>
            <div className="drawer-body px-2 h-full">
                <nav>
                    <ul className="menu" onClick={handleCloseSidebar}>
                        <li >
                            <a href="/">Beranda</a>
                        </li>
                        <li >
                            <a href="#package">Layanan</a>
                        </li>
                        <li >
                            <a href="#about">Tentang</a>
                        </li>
                        <li >
                            <a href="#reviews">Ulasan</a>
                        </li>
                        <li >
                            <a href="#articles">Artikel</a>
                        </li>
                        <li >
                            <a href="#faqs">FAQ</a>
                        </li>
                    </ul>
                </nav>
                <div className="drawer-footer fixed bottom-0 left-0 justify-start border-t border-base-content/20 w-full">
                    <div className="flex space-x-4">
                        <button className="py-2 px-4 rounded-md transition-colors border font-semibold border-purple-400 text-black hover:bg-gray-900 hover:border-gray-900 hover:text-purple-400">
                            Daftar
                        </button>
                        <button className={`py-2 px-4 rounded-md transition-colors font-semibold border bg-purple-400 border-purple-400 text-black hover:bg-gray-900 hover:border-gray-900 hover:text-purple-400`}>
                            Masuk
                        </button>
                    </div>
                </div>
            </div>

        </aside>
    )
}