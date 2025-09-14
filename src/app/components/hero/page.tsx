'use client';
import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function Header() {
    return (
        <>
            <section className="relative w-full h-[800px] flex items-center justify-center" id="hero">
                <div className="absolute top-0 left-0 bg-gradient-to-r from-purple-500 to-purple-600 min-h-[95%] w-full -z-0"></div>
                <div className="flex gap-4 max-w-[1300px] mx-auto px-4 2xl:px-0 w-full z-10">
                    <div className="w-1/2 max-lg:w-full flex flex-col gap-4">
                        <h1 className="text-white text-[2.5rem] md:text-[3rem] lg:text-[4.2rem] xl:text-[5rem] 2xl:text-[5.5rem] font-bold leading-tight flex flex-col"><p>Solusi Digital</p> <p>Uji Kompetensi</p></h1>
                        <p className="text-white md:text-lg">Optimal hadir memberikan solusi untuk persiapan Uji Kompetensi anda dengan menyediakan layanan try out dan bimbingan belajar berbasis digital</p>
                        <div className="flex max-md:flex-col flex-wrap max-md:gap-0 gap-4">
                            <span className="inline-block text-white py-1 text-sm rounded-full before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-purple-900 before:font-fontawesome before:mr-2 before:text-xs">Mulai Gratis</span>
                            <span className="inline-block text-white py-1 text-sm rounded-full before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-purple-900 before:font-fontawesome before:mr-2 before:text-xs">Banyak Pilihan Paket</span>
                            <span className="inline-block text-white py-1 text-sm rounded-full before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-purple-900 before:font-fontawesome before:mr-2 before:text-xs">Langsung Lihat Skor</span>
                        </div>
                        <button className="py-3 px-6 rounded-md transition-colors bg-white text-purple-600 font-semibold hover:bg-purple-900 hover:text-white flex items-center justify-between w-full">
                            <span className='flex items-center'>
                                <Icon icon="system-uicons:document-stack" className="mr-2" width="32" height="32" />
                                <span>Download eBook UKOM, Gratis!</span>
                            </span>
                            <Icon icon="radix-icons:caret-right" className="ml-2" width="32" height="32" />
                        </button>
                        <div className="flex flex-wrap gap-4">
                            <button className="py-3 px-6 rounded-md transition-colors bg-yellow-400 text-black text-sm font-semibold hover:bg-blue-100">
                                Uji Coba Gratis
                            </button>
                            <button className="py-3 px-6 rounded-md transition-colors bg-yellow-400 text-black text-sm font-semibold hover:bg-blue-100" onClick={() => document.getElementById('package')?.scrollIntoView({ behavior: 'smooth' })}>
                                Lihat Paket Tersedia
                            </button>
                            <button className="py-3 px-6 rounded-md transition-colors bg-yellow-400 text-black text-sm font-semibold hover:bg-blue-100">
                                Daftar Bimbel
                            </button>
                        </div>
                    </div>
                    <div className="w-1/2 max-lg:hidden">
                        <Image src="/images/banner.png" alt="Hero Image" width={500} height={300} className="mx-auto" />
                    </div>
                </div>
            </section>
        </>
    );
}