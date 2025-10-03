"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PackageCard } from "@/app/utils/card";
export default function Package() {
    const [allPackage, setAllPackage] = useState<any[]>([]);
    useEffect(() => {
        async function getDataPackage() {
            const allPackage: any = [];
            const response = await fetch('https://backend.cbtoptimal.id/api/pakets/view2', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            const result = await response.json();
            result.data.map((data: any) => {
                data.package = 'Perawat';
                allPackage.push(data);
            });

            const response2 = await fetch('https://backend.elearningoptimal.id/api/pakets/view2', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            const result2 = await response2.json();
            result2.data.map((data: any) => {
                data.package = 'Bidan';
                allPackage.push(data);
            });
            setAllPackage(allPackage);
        }
        getDataPackage();
    }, []);

    
    return (
        <section className="w-full h-auto py-[100px] px-4 max-w-[1300px] mx-auto 2xl:px-0" id="package">
            <header className="relative text-2xl font-extrabold text-center mb-24">
                <Image src="/stock/underline.png" alt="Underline" width={2000} height={0} className="absolute left-1/2 -translate-x-1/2 top-1 mx-auto h-auto w-1/4 mt-9 z-1" />
                <h1 className="text-4xl anton mb-4 z-10 text-gray-700 dark:text-gray-50 leading-tight">Pilih Paket Belajarmu</h1>
            </header>
            <div className="flex justify-center">
                <nav className="tabs flex flex-wrap justify-center gap-4 shadow-none font-semibold" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                    <button type="button" className="tab active-tab:tab-active active" id="tabs-basic-item-1" data-tab="#tabs-basic-1" aria-controls="tabs-basic-1" role="tab" aria-selected="true" >
                        Bimbel Ukom
                    </button>
                    <button type="button" className="tab active-tab:tab-active" id="tabs-basic-item-2" data-tab="#tabs-basic-2" aria-controls="tabs-basic-2" role="tab" aria-selected="false" >
                        Latihan soal CBT
                    </button>
                    <button type="button" className="tab active-tab:tab-active" id="tabs-basic-item-3" data-tab="#tabs-basic-3" aria-controls="tabs-basic-3" role="tab" aria-selected="false" >
                        Latihan Buku Ukom
                    </button>
                </nav>
            </div>
            <div className="mt-3">
                <section id="tabs-basic-1" className="tabpanel active-tab:tab-content-active w-full h-auto mt-8 flex flex-wrap justify-center gap-6" aria-labelledby="tabs-basic-item-1" role="tabpanel" aria-hidden="false" >
                    <div className="flex flex-col rounded-xl shadow-md bg-gradient-to-r from-[#e7e7e7] to-[#fff] dark:from-[#111] dark:to-[#333] dark:text-gray-50 text-black hover:cursor-pointer hover:shadow-2xl backdrop-blur-md max-w-sm">
                        <div className="relative text-xl font-bold mb-36 p-6">
                            <Image priority={true} src="/courses/Bimbel-Perawat.png" alt="Icon Nurse" width={4800} height={3800} className="mb-2 absolute top-0 left-0 object-contain w-full -z-1 rounded-t-lg" />
                        </div>
                        <div className=" w-full">
                            <h5 className="text-xl font-bold text-center p-6 h-24">Bimbingan Belajar Intensif untuk Perawat</h5>
                            <ol className="list-outside space-y-4 text-sm px-6">
                                <li className="before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-gray-100 dark:before:bg-gray-800 dark:before:text-purple-200 before:text-purple-700 before:font-fontawesome before:mr-2 before:text-xs">Mendapatkan 3 paket try out disertai pembahasan via web Apps UKOM</li>
                                <li className="before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-gray-100 dark:before:bg-gray-800 dark:before:text-purple-200 before:text-purple-700 before:font-fontawesome before:mr-2 before:text-xs">Total Soal 540 butir (3 paket try out)</li>
                                <li className="before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-gray-100 dark:before:bg-gray-800 dark:before:text-purple-200 before:text-purple-700 before:font-fontawesome before:mr-2 before:text-xs">Berbasis Platform CBT (mirip dengan sistem try out UKOM)</li>
                                <li className="before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-gray-100 dark:before:bg-gray-800 dark:before:text-purple-200 before:text-purple-700 before:font-fontawesome before:mr-2 before:text-xs">Dilengkapi dengan fitur pembahasan soal via web</li>
                                <li className="before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-gray-100 dark:before:bg-gray-800 dark:before:text-purple-200 before:text-purple-700 before:font-fontawesome before:mr-2 before:text-xs">Dilengkapi dengan fitur hasil try out yang detail dan perangkingan</li>
                                <li className="before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-gray-100 dark:before:bg-gray-800 dark:before:text-purple-200 before:text-purple-700 before:font-fontawesome before:mr-2 before:text-xs">Akses dimanapun dan Kapanpun</li>
                            </ol>
                            <div className="mt-4 border border-dotted border-gray-200 h-[1px]" />
                            <div className="flex justify-center px-6 py-4">
                                <button onClick={() => window.open('https://wa.link/vqkcki', '_blank')} className="w-fit py-3 px-4 rounded-lg transition-colors bg-white dark:bg-black/80 dark:text-green-500 dark:hover:text-green-400 text-green-700 hover:font-semibold text-sm hover:bg-transparent border border-transparent hover:border-green-800 hover:text-green-800 flex items-center justify-center">
                                    <Icon icon="tabler:brand-whatsapp" className="mr-2 size-6" width="32" height="32" /> Hubungi Kami
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col rounded-xl shadow-md bg-gradient-to-r from-[#e7e7e7] to-[#fff] dark:from-[#111] dark:to-[#333] dark:text-gray-50 text-black hover:cursor-pointer hover:shadow-2xl backdrop-blur-md max-w-sm">
                        <div className="relative text-xl font-bold mb-36 p-6">
                            <Image priority={true} src="/courses/Bimbel-Bidan.png" alt="Icon Nurse" width={4800} height={3800} className="mb-2 absolute top-0 left-0 object-contain w-full -z-1 rounded-t-lg" />
                        </div>
                        <div className="w-full">
                            <h5 className="text-xl font-bold text-center p-6 h-24">Bimbingan Belajar Intensif untuk Bidan</h5>
                            <ol className="list-outside space-y-4 text-sm px-6">
                                <li className="before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-gray-100 dark:before:bg-gray-800 dark:before:text-purple-200 before:text-purple-700 before:font-fontawesome before:mr-2 before:text-xs">Mendapatkan 3 paket try out disertai pembahasan via web Apps UKOM</li>
                                <li className="before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-gray-100 dark:before:bg-gray-800 dark:before:text-purple-200 before:text-purple-700 before:font-fontawesome before:mr-2 before:text-xs">Total Soal 540 butir (3 paket try out)</li>
                                <li className="before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-gray-100 dark:before:bg-gray-800 dark:before:text-purple-200 before:text-purple-700 before:font-fontawesome before:mr-2 before:text-xs">Berbasis Platform CBT (mirip dengan sistem try out UKOM)</li>
                                <li className="before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-gray-100 dark:before:bg-gray-800 dark:before:text-purple-200 before:text-purple-700 before:font-fontawesome before:mr-2 before:text-xs">Dilengkapi dengan fitur pembahasan soal via web</li>
                                <li className="before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-gray-100 dark:before:bg-gray-800 dark:before:text-purple-200 before:text-purple-700 before:font-fontawesome before:mr-2 before:text-xs">Dilengkapi dengan fitur hasil try out yang detail dan perangkingan</li>
                                <li className="before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-gray-100 dark:before:bg-gray-800 dark:before:text-purple-200 before:text-purple-700 before:font-fontawesome before:mr-2 before:text-xs">Akses dimanapun dan Kapanpun</li>
                            </ol>
                            <div className="mt-4 border border-dotted border-gray-200 h-[1px]" />
                            <div className="flex justify-center px-6 py-4">
                                <button onClick={() => window.open('https://wa.link/vqkcki', '_blank')} className="w-fit py-3 px-4 rounded-lg transition-colors bg-white dark:bg-black/80 dark:text-green-500 dark:hover:text-green-400 text-green-700 hover:font-semibold text-sm hover:bg-transparent border border-transparent hover:border-green-800 hover:text-green-800 flex items-center justify-center">
                                    <Icon icon="tabler:brand-whatsapp" className="mr-2 size-6" width="32" height="32" /> Hubungi Kami
                                </button>
                            </div>
                        </div>

                    </div>
                </section>
                <section id="tabs-basic-2" className="hidden  w-full h-auto mt-8" aria-labelledby="tabs-basic-item-2" role="tabpanel" aria-hidden="false">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            allPackage.map((data: any, index: number) => {
                                return (
                                    <PackageCard key={index} data={data} />
                                )
                            })
                        }
                    </div>
                </section>
                <section id="tabs-basic-3" className="hidden w-full h-auto mt-8 " aria-labelledby="tabs-basic-item-3" role="tabpanel" aria-hidden="false">
                    <h5 className="text-3xl inter font-bold text-center">Bimbel UKOM Optimal</h5>
                    <p className="text-lg inter text-center mb-8 w-1/2 mx-auto">Teman belajar UKOM bagi mahasiswa kebidanan & keperawatan di seluruh Indonesia dengan #GaransiKompeten</p>
                    <div className="w-full flex justify-center items-center gap-8">
                        <div className="relative shadow rounded w-full max-w-xs p-8 cursor-pointer" onClick={() => window.open('https://tk.tokopedia.com/ZSDxddQY2', '_blank')}>
                            <Image src="/images/tokopedia.png" alt="Bimbel Ukom" width={0} height={0} className="w-full" sizes="100vw" />
                        </div>
                        <div className="relative shadow rounded w-full max-w-xs p-8 cursor-pointer" onClick={() => window.open('https://id.shp.ee/GXG14J8', '_blank')}>
                            <Image src="/images/shopee.png" alt="Bimbel Ukom" width={0} height={0} className="w-full" sizes="100vw" />
                        </div>
                    </div>
                </section>
            </div>

        </section>
    );
}