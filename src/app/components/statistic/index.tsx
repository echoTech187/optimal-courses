import { Icon } from "@iconify/react";

export default function Statistic() {
    return (
        <section className="w-full -mt-12 px-4 h-full max-w-[1300px] mx-auto 2xl:px-0" id='stats'>
            <div data-carousel='{ "loadingClasses": "opacity-0", "slidesQty": { "xs": 1, "sm": 2, "md": 3, "lg": 3, "xl": 4 },  "isAutoPlay": true, "speed": 5000 ,"isInfiniteLoop": true }'
                data-carousel-initialized='true' className='relative w-full'>
                <div className='carousel h-full' >
                    <div className='carousel-body h-full max-sm:gap-0 gap-2 text-white'>
                        <div className='carousel-slide bg-purple-600/50 backdrop-blur-md rounded-xl border border-white/20 shadow-xl h-[120px] hover:cursor-pointer'>
                            <div className='flex justify-between gap-2 p-4'>
                                <div className='flex justify-center items-center p-4'>
                                    <Icon icon="mdi:account-group" className="w-14 h-14" />
                                </div>
                                <div className='flex flex-col items-start p-4 flex-1'>
                                    <h2 className='text-3xl font-bold w-full'>219,596</h2>
                                    <p className='w-full'>Pengguna Terdaftar</p>
                                </div>
                            </div>
                        </div>
                        <div className='carousel-slide bg-purple-600/50 backdrop-blur-md rounded-xl border border-white/20 shadow-xl h-[120px] hover:cursor-pointer'>
                            <div className='flex justify-between gap-2 p-4'>
                                <div className='flex justify-center items-center p-4'>
                                    <Icon icon="hugeicons:laptop-check" className="w-14 h-14" />
                                </div>
                                <div className='flex flex-col items-start p-4 flex-1'>
                                    <h2 className='text-3xl font-bold w-full'>764,932</h2>
                                    <p className='w-full'>Try Out Terlaksana</p>
                                </div>
                            </div>
                        </div>
                        <div className='carousel-slide bg-purple-600/50 backdrop-blur-md rounded-xl border border-white/20 shadow-xl h-[120px] hover:cursor-pointer'>
                            <div className='flex justify-between gap-2 p-4'>
                                <div className='flex justify-center items-center p-4'>
                                    <Icon icon="tabler:certificate" className="w-14 h-14" />
                                </div>
                                <div className='flex flex-col items-start p-4 flex-1'>
                                    <h2 className='text-3xl font-bold w-full'>60,596</h2>
                                    <p className='w-full'>Alumni Kompeten</p>
                                </div>
                            </div>
                        </div>
                        <div className='carousel-slide bg-purple-600/50 backdrop-blur-md rounded-xl border border-white/20 shadow-xl h-[120px] hover:cursor-pointer'>
                            <div className='flex justify-between gap-2 p-4'>
                                <div className='flex justify-center items-center p-4'>
                                    <Icon icon="mdi:book-open-page-variant-outline" className="w-14 h-14" />
                                </div>
                                <div className='flex flex-col items-start p-4 flex-1'>
                                    <h2 className='text-3xl font-bold w-full '>25</h2>
                                    <p className='w-full'>Kampus MoU</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}