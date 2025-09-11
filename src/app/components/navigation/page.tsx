import { Icon } from '@iconify/react';

export default function MenuNavigation({isVisible}: {isVisible?: boolean}) {
    return (
        <>
            <div className="hidden md:block">
                <nav>
                    <ul className={`flex items-center justify-center gap-4 font-normal ${isVisible ? 'text-black' : 'text-white'}`}>
                        <li className={`relative hover:rounded-md ${isVisible ? 'hover:text-blue-700' : 'hover:bg-blue-600/30 hover:text-white'}  px-4 py-2 cursor-pointer transition-colors`}>
                            <a href="#">Layanan</a>
                        </li>
                        <li className={`relative hover:rounded-md ${isVisible ? 'hover:text-blue-700' : 'hover:bg-blue-600/30 hover:text-white'}  px-4 py-2 cursor-pointer transition-colors`}>
                            <a href="#">Tentang</a>
                        </li>
                        <li className={`relative hover:rounded-md ${isVisible ? 'hover:text-blue-700' : 'hover:bg-blue-600/30 hover:text-white'}  px-4 py-2 cursor-pointer transition-colors`}>
                            <a href="#">Ulasan</a>
                        </li>
                        <li className={`relative hover:rounded-md ${isVisible ? 'hover:text-blue-700' : 'hover:bg-blue-600/30 hover:text-white'}  px-4 py-2 cursor-pointer transition-colors`}>
                            <a href="#">Artikel</a>
                        </li>
                        <li className={`relative hover:rounded-md ${isVisible ? 'hover:text-blue-700' : 'hover:bg-blue-600/30 hover:text-white'}  px-4 py-2 cursor-pointer transition-colors`}>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="md:hidden">
                <button className="p-2 rounded-md hover:bg-blue-600/30 transition-colors">
                    <Icon icon="mdi:menu" className={`${isVisible ? 'text-black' : 'text-white'}`} width="24" height="24" />
                </button>
            </div>
        </>
    );
}