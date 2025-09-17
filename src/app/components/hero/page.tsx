'use client';
import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function Header() {
    return (
        <>
            <section data-carousel='{ "loadingClasses": "opacity-0", "dotsItemClasses": "carousel-dot bg-white/70 carousel-active:bg-purple-400", "slidesQty": { "xs": 1, "sm": 1, "md": 1, "lg": 1, "xl": 1 },  "isAutoPlay": true, "speed": 5000 ,"isInfiniteLoop": true }' className="relative w-full h-[700px] flex items-center justify-center" id="hero">
                <div className="carousel h-full rounded-none">
                    <div className="carousel-body h-full w-full  rounded-none">
                        <div className="carousel-slide relative w-screen h-full rounded-none">
                            <div className="absolute top-0 left-0 h-full w-screen -z-0">
                                <div className="absolute top-0 left-0 bg-gradient-to-r from-purple-500 to-purple-600 min-h-[100%] w-full -z-1"></div>
                                <Image src="/images/banner-1.jpg" alt="Hero Image" width={500} height={300} className="mx-auto size-full opacity-60" sizes="100vw" priority={true} placeholder="blur" blurDataURL="https://via.placeholder.com/500x300" />
                            </div>
                        </div>
                        <div className="carousel-slide relative w-screen h-full rounded-none">
                            <div className="absolute top-0 left-0 h-full w-screen -z-0">
                                <div className="absolute top-0 left-0 bg-gradient-to-r from-purple-500 to-purple-600 min-h-[100%] w-full -z-1"></div>
                                <Image src="/images/banner-1.jpg" alt="Hero Image" width={500} height={300} className="mx-auto size-full opacity-60" sizes="100vw" priority={true} placeholder="blur" blurDataURL="https://via.placeholder.com/500x300" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full max-lg:w-full h-full z-11">
                        <div className='flex flex-col justify-center gap-4 w-full h-full max-w-[1300px] mx-auto px-4 2xl:px-0'>
                            <h1 className="text-white text-[2.5rem] md:text-[3rem] lg:text-[4.2rem] xl:text-[5rem] 2xl:text-[5.5rem] font-bold leading-tight flex flex-col"><p>Solusi Digital</p> <p>Uji Kompetensi</p></h1>
                            <p className="text-white md:text-lg">Optimal hadir memberikan solusi untuk persiapan Uji Kompetensi anda dengan menyediakan layanan try out dan bimbingan belajar berbasis digital</p>
                            <div className="flex max-md:flex-col flex-wrap max-md:gap-0 gap-4">
                                <span className="inline-block text-white py-1 text-sm rounded-full before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-purple-900 before:font-fontawesome before:mr-2 before:text-xs">Mulai Gratis</span>
                                <span className="inline-block text-white py-1 text-sm rounded-full before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-purple-900 before:font-fontawesome before:mr-2 before:text-xs">Banyak Pilihan Paket</span>
                                <span className="inline-block text-white py-1 text-sm rounded-full before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-purple-900 before:font-fontawesome before:mr-2 before:text-xs">Langsung Lihat Skor</span>
                            </div>
                            <button className="py-3 max-sm:w-full w-1/2 px-6 rounded-md transition-colors bg-white text-purple-600 font-semibold hover:bg-purple-900 hover:text-white flex items-center justify-between">
                                <span className='flex items-center'>
                                    <Icon icon="system-uicons:document-stack" className="mr-2" width="32" height="32" />
                                    <span>Download eBook UKOM, Gratis!</span>
                                </span>
                                <Icon icon="radix-icons:caret-right" className="ml-2" width="32" height="32" />
                            </button>
                            <div className="flex flex-wrap gap-4">
                                <button onClick={() => window.open('https://elearningoptimal.id/login', '_blank')} className="py-3 px-6 rounded-md transition-colors bg-yellow-400 text-black text-sm font-semibold hover:bg-blue-100">
                                    Uji Coba CBT Gratis
                                </button>
                                <button className="py-3 px-6 rounded-md transition-colors bg-yellow-400 text-black text-sm font-semibold hover:bg-blue-100" onClick={() => document.getElementById('package')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Lihat Paket Tersedia
                                </button>
                                <button onClick={() => window.open('https://wa.link/gkfaqz', '_blank')} className="py-3 px-6 rounded-md transition-colors bg-yellow-400 text-black text-sm font-semibold hover:bg-blue-100">
                                    Daftar Bimbel
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-pagination absolute bottom-18 end-0 start-0 flex justify-center gap-3"></div>
                </div>
            </section>
        </>
    );
}