import { Icon } from "@iconify/react";
export default function Advantage() {
    return (
        <section className="w-full h-auto py-[100px] px-4 bg-gray-50 dark:bg-black/70 dark:text-gray-50 text-black/60  flex items-center justify-center">
            <div className="px-4 max-w-[1300px] mx-auto 2xl:px-0 text-center">
                <h2 className="text-4xl font-extrabold mb-24 text-gray-700 dark:text-gray-50">Mengapa Memilih Optimal?</h2>
                <div className="px-4 max-w-[1300px] mx-auto 2xl:px-0 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="hover:bg-purple-800/60 bg-white/20 border border-white/10 hover:border-purple-900/5 backdrop-blur-2xl p-6 rounded-2xl shadow-xs shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all transform cursor-pointer hover:text-gray-50">
                            <div className="flex justify-center items-center mb-8 w-30 h-30 mx-auto bg-purple-800/10 dark:bg-transparent rounded-xl">
                                <Icon icon="solar:target-bold-duotone" className="size-18" width="132" height="132" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 ">Akurat</h3>
                            <p className="">Soal-soal try out yang ada di optimal Sangat Mirrp dengan Uji Kompetensi Nasional yang telah berjalan.</p>
                        </div>
                        <div className="hover:bg-purple-800/60 bg-white/20 border border-white/10 hover:border-purple-900/5 backdrop-blur-2xl p-6 rounded-2xl shadow-xs shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all transform cursor-pointer hover:text-gray-50">
                            <div className="flex justify-center items-center mb-8 w-30 h-30 mx-auto bg-purple-800/10 dark:bg-transparent rounded-xl">
                                <Icon icon="solar:hand-stars-line-duotone" className="size-18" width="132" height="132" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Interaktif</h3>
                            <p className="">Disertai fasilitas diskusi oleh dosen seluruh indonesia secara online melalui zoom meeting dan group whatsapp.</p>
                        </div>
                        <div className="hover:bg-purple-800/60 bg-white/20 border border-white/10 hover:border-purple-900/5 backdrop-blur-2xl p-6 rounded-2xl shadow-xs shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all transform cursor-pointer hover:text-gray-50">
                            <div className="flex justify-center items-center mb-8 w-30 h-30 mx-auto bg-purple-800/10 dark:bg-transparent rounded-xl">
                                <Icon icon="solar:chat-round-video-line-duotone" className="size-18" width="132" height="132" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Tips dan Trik Menjawab Soal </h3>
                            <p className="">Membantu Mahasiswa mengatur waktu, memahami materi dengan lebih baik, serta meningkatkan konsentrasi agar cepat dan tepat menjawab berbagai soal ujian.</p>
                        </div>
                        <div className="hover:bg-purple-800/60 bg-white/20 border border-white/10 hover:border-purple-900/5 backdrop-blur-2xl p-6 rounded-2xl shadow-xs shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all transform cursor-pointer hover:text-gray-50">
                            <div className="flex justify-center items-center mb-8 w-30 h-30 mx-auto bg-purple-800/10 dark:bg-transparent rounded-xl">
                                <Icon icon="solar:diploma-verified-line-duotone" className="size-18" width="132" height="132" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Kualitas Terjamin</h3>
                            <p className="">Dengan Dosen Terbaik dan berpengalaman yang mengajar Mahasiswa.</p>
                        </div>
                        <div className="hover:bg-purple-800/60 bg-white/20 border border-white/10 hover:border-purple-900/5 backdrop-blur-2xl p-6 rounded-2xl shadow-xs shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all transform cursor-pointer hover:text-gray-50">
                            <div className="flex justify-center items-center mb-8 w-30 h-30 mx-auto bg-purple-800/10 dark:bg-transparent rounded-xl">
                                <Icon icon="solar:hand-money-line-duotone" className="size-18" width="132" height="132" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Ekonomis </h3>
                            <p className="">Kami memberikan harga yang terjangkau dan tentunya berkualitas.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}