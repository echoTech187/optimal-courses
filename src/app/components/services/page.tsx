"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
export default function Services() {
    return (
        <section className="w-full h-auto py-[100px] lg:py-24 px-4 max-w-[1300px] mx-auto 2xl:px-0" id="services">
            <div className="flex items-start justify-center max-w-4xl mx-auto gap-8">
                <div className="flex-1 flex items-center justify-center max-sm:hidden">
                    <Image src="/images/2.png" alt="Apple iPhone 11" className="w-auto h-full" width={0} height={0} sizes="100vw" />
                </div>
                <div className="flex-2">
                    <h2 className="text-4xl font-bold mb-4 text-gray-700 dark:text-gray-50 leading-tight">OPTIMAL menyediakan pengalaman belajar persiapan UKOM yang mudah dan menyenangkan untukmu</h2>
                    <div className="">
                        <ul className="space-y-4 text-gray-600 dark:text-gray-50">
                            <li className="before:content-['✓'] before:-top-0.5 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-gray-100 before:text-purple-700 before:font-fontawesome before:mr-2">Terdapat pembelajaran materi & pembahasan soal via zoom</li>
                            <li className="before:content-['✓'] before:-top-0.5 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-gray-100 before:text-purple-700 before:font-fontawesome before:mr-2">Ribuan soal try out berbasis CBT (Computer Based Test)</li>
                            <li className="before:content-['✓'] before:-top-0.5 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-gray-100 before:text-purple-700 before:font-fontawesome before:mr-2">Dilengkapi Video Pembelajaran</li>
                            <li className="before:content-['✓'] before:-top-0.5 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-gray-100 before:text-purple-700 before:font-fontawesome before:mr-2">Modul Pembelajaran setiap pertemuan</li>
                            <li className="before:content-['✓'] before:-top-0.5 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-gray-100 before:text-purple-700 before:font-fontawesome before:mr-2">Kuis / Pre Test Pembelajaran</li>
                            <li className="before:content-['✓'] before:-top-0.5 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-gray-100 before:text-purple-700 before:font-fontawesome before:mr-2">Report Perkembangan Belajar</li>
                            <li className="before:content-['✓'] before:-top-0.5 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-gray-100 before:text-purple-700 before:font-fontawesome before:mr-2">Bantuan pengurusan STR secara GRATIS</li>
                            <li className="before:content-['✓'] before:-top-0.5 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-gray-100 before:text-purple-700 before:font-fontawesome before:mr-2"><span className="text-blue-500 font-extrabold">*) GARANSI SAMPAI LULUS</span> </li>
                        </ul>
                    </div>
                    <button onClick={() => window.open('https://wa.link/gkfaqz', '_blank')} className="mt-8 py-3 px-6 rounded-md transition-colors bg-green-700 dark:hover:text-green-400 text-white text-sm font-semibold hover:bg-transparent hover:text-green-700 border border-transparent hover:border-green-700 flex items-center">
                        <Icon icon="tabler:brand-whatsapp" className="mr-2 size-6" width="32" height="32" /> Hubungi Kami
                    </button>
                </div>
            </div>
        </section>

    );
}