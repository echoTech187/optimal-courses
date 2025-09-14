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
                                <Icon icon="solar:hand-stars-line-duotone" className="size-18" width="132" height="132" />
                            </div>

                            <h3 className="text-2xl font-semibold mb-4 ">Kualitas Terjamin</h3>
                            <p className="">Kami hanya menyediakan konten dari instruktur berpengalaman dan berkualitas tinggi untuk memastikan pembelajaran yang efektif.</p>
                        </div>
                        <div className="hover:bg-purple-800/60 bg-white/20 border border-white/10 hover:border-purple-900/5 backdrop-blur-2xl p-6 rounded-2xl shadow-xs shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all transform cursor-pointer hover:text-gray-50">
                            <div className="flex justify-center items-center mb-8 w-30 h-30 mx-auto bg-purple-800/10 dark:bg-transparent rounded-xl">
                                <Icon icon="solar:clock-circle-line-duotone" className="size-18" width="132" height="132" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Fleksibilitas Belajar</h3>
                            <p className="">Belajar kapan saja dan di mana saja dengan akses 24/7 ke semua materi pembelajaran kami.</p>
                        </div>
                        <div className="hover:bg-purple-800/60 bg-white/20 border border-white/10 hover:border-purple-900/5 backdrop-blur-2xl p-6 rounded-2xl shadow-xs shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all transform cursor-pointer hover:text-gray-50">
                            <div className="flex justify-center items-center mb-8 w-30 h-30 mx-auto bg-purple-800/10 dark:bg-transparent rounded-xl">
                                <Icon icon="solar:devices-line-duotone" className="size-18" width="132" height="132" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Akses Multi-Perangkat</h3>
                            <p className="">Platform kami dapat diakses dari berbagai perangkat, termasuk komputer, tablet, dan ponsel pintar.</p>
                        </div>
                        <div className="hover:bg-purple-800/60 bg-white/20 border border-white/10 hover:border-purple-900/5 backdrop-blur-2xl p-6 rounded-2xl shadow-xs shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all transform cursor-pointer hover:text-gray-50">
                            <div className="flex justify-center items-center mb-8 w-30 h-30 mx-auto bg-purple-800/10 dark:bg-transparent rounded-xl">
                                <Icon icon="solar:diploma-verified-line-duotone" className="size-18" width="132" height="132" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Sertifikat Resmi</h3>
                            <p className="">Dapatkan sertifikat resmi setelah menyelesaikan kursus untuk meningkatkan kredibilitas Anda di dunia profesional.</p>
                        </div>
                        <div className="hover:bg-purple-800/60 bg-white/20 border border-white/10 hover:border-purple-900/5 backdrop-blur-2xl p-6 rounded-2xl shadow-xs shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all transform cursor-pointer hover:text-gray-50">
                            <div className="flex justify-center items-center mb-8 w-30 h-30 mx-auto bg-purple-800/10 dark:bg-transparent rounded-xl">
                                <Icon icon="solar:users-group-two-rounded-line-duotone" className="size-18" width="132" height="132" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Komunitas Supportive</h3>
                            <p className="">Bergabung dengan komunitas pembelajar kami untuk berbagi pengetahuan, pengalaman, dan dukungan.</p>
                        </div>
                        <div className="hover:bg-purple-800/60 bg-white/20 border border-white/10 hover:border-purple-900/5 backdrop-blur-2xl p-6 rounded-2xl shadow-xs shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all transform cursor-pointer hover:text-gray-50">
                            <div className="flex justify-center items-center mb-8 w-30 h-30 mx-auto bg-purple-800/10 dark:bg-transparent rounded-xl">
                                <Icon icon="solar:shield-user-line-duotone" className="size-18" width="132" height="132" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Keamanan Data</h3>
                            <p className="">Kami menjaga keamanan data pribadi Anda dengan standar keamanan tertinggi.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}