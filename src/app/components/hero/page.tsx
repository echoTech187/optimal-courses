'use client';
import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function Header() {
    return (
        <>
            <section className="relative w-full h-[650px] flex items-center justify-center" id="hero">
                <div className="carousel h-full rounded-none">
                    <div className="carousel-body h-full w-full  rounded-none ">
                        <div className="carousel-slide relative w-screen h-full rounded-none">
                            <div className="absolute top-0 left-0 h-full w-screen -z-0 ">
                                <div className="absolute top-0 left-0 bg-gradient-to-r from-purple-500 to-purple-600 min-h-[100%] w-full -z-1"></div>
                                <Image src="/images/1.png" alt="Hero Image" width={500} height={300} className="mx-auto size-full opacity-30" sizes="100vw" priority={true} placeholder="blur" blurDataURL="https://via.placeholder.com/500x300" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full max-lg:w-full h-full z-11">
                        <div className='flex items-center gap-4 w-full h-full max-w-[1300px] mx-auto px-4 2xl:px-0 py-8'>
                            <div className='flex flex-col justify-center gap-4 w-full max-lg:w-full`'>
                                <h1 className="text-white text-[1.8rem] md:text-[2.4rem] lg:text-[3.4rem] xl:text-[3.8rem] 2xl:text-[4.3rem] font-bold leading-tight flex flex-col"><p>Kompeten Bersama</p> <p>Optimal Untuk Negeri</p></h1>
                                <p className="text-white text-sm md:text-lg">Solusi praktis persiapan Uji Kompetensi dengan layanan try out dan bimbingan belajar modern berbasis digital</p>
                                <div className="flex max-md:flex-col flex-wrap max-md:gap-0 gap-4">
                                    <span className="inline-block text-white py-1 text-sm rounded-full before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-purple-900 before:font-fontawesome before:mr-2 before:text-xs">Mulai Gratis</span>
                                    <span className="inline-block text-white py-1 text-sm rounded-full before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-purple-900 before:font-fontawesome before:mr-2 before:text-xs">Banyak Pilihan Paket</span>
                                    <span className="inline-block text-white py-1 text-sm rounded-full before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-purple-900 before:font-fontawesome before:mr-2 before:text-xs">Langsung Lihat Skor</span>
                                </div>
                                <button onClick={() => window.open('https://wa.link/vqkcki', '_blank')} className=" py-3 w-full px-6 rounded-md transition-colors bg-white text-green-700 font-semibold hover:bg-green-700 hover:text-white flex items-center justify-between">
                                    <span className='flex items-center'>
                                        <Icon icon="system-uicons:document-stack" className="mr-2" width="32" height="32" />
                                        <span>Daftar Bimbel, Sekarang!</span>
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
                                    <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="py-3 px-6 rounded-md transition-colors bg-yellow-400 text-black text-sm font-semibold hover:bg-blue-100">
                                        Tentang
                                    </button>
                                </div>
                            </div>
                            <div className='w-full max-md:hidden'>
                                <Image src="/images/2.png" alt="Hero Image" width={500} height={300} className="size-full" sizes="100vw" priority={true} placeholder="blur" blurDataURL="https://via.placeholder.com/500x300" />
                            </div>
                        </div>


                    </div>
                    <div className="carousel-pagination absolute bottom-18 end-0 start-0 flex justify-center gap-3"></div>
                </div>
            </section>
        </>
    );
}