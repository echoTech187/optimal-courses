import { Icon } from "@iconify/react";

export default function Faqs() {
    return (
        <div className="bg-gray-50 dark:bg-gray-700" id="faqs">
            <div className="max-w-[1300px] mx-auto px-4 py-[100px]  rounded-lg mt-6">
                <h2 className="text-5xl anton z-10 text-gray-700 dark:text-gray-100 leading-tight text-center">FAQs</h2>
                <p className="text-center text-gray-600 mb-12 dark:text-gray-50">Pertanyaan yang sering diajukan tentang Optimal Courses</p>
                <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Apa itu Bimbel Optimal?</h3>
                        <p>Bimbel optimal Merupakan Bimbingan Belajar Untuk Mahasiswa yang akan melaksanakan ujian kompetensi dibidang kesehatan.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Apakah Bimbel tersedia offline atau Online?</h3>
                        <p>Bimbingan belajar via Zoom dengan materi interaktif dan rekaman kelas.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Apakah soalnya sesuai dengan standar resmi?</h3>
                        <p>Ya, soal dibuat berdasarkan kisi-kisi resmi dan selalu diperbarui mengikuti kurikulum serta aturan terbaru.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Berapa biayanya?</h3>
                        <p>Biaya berbeda tiap program. Hubungi admin untuk info terbaru.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Bagaimana cara mendaftar?</h3>
                        <p>Anda dapat mendaftar dengan Menekan tombol Hubungi admin yang tersedia.</p>
                    </div>
                </div>

                <div className="text-center mt-12 px-12 py-8 bg-purple-800 rounded-lg max-md:w-full w-1/2  mx-auto text-white">
                    <h1 className="max-sm:text-base text-2xl font-semibold mb-6">Masih Punya pertanyaan terkait UKOM?</h1>
                    <a href="https://wa.link/vqkcki" className="flex items-center w-fit mx-auto bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-transparent hover:text-white border-2 border-transparent hover:border-white transition-colors">
                        <Icon icon="tabler:brand-whatsapp" className="mr-2 size-6" width="32" height="32" />
                        Hubungi Kami
                    </a>
                </div>
            </div>
        </div>
    );
}