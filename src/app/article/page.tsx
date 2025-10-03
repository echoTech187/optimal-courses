import { Icon } from "@iconify/react";
import ArticleBanner from "../components/article/banner";
import Image from "next/image";

// Data untuk semua artikel. Di masa depan, ini bisa datang dari database atau CMS.
const articlesData = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    imageUrl: "/images/article-1.png",
    title: "Mengenal CAPD: Cuci Darah Mandiri dan Perawatannya di Rumah",
    author: "Oleh Pradanis Yanuarinda Imkasari",
    date: "17 September 2025",
    excerpt: "CAPD (Continuous Ambulatory Peritoneal Dialysis) adalah salah satu jenis dialisis yang dapat dilakukan di rumah bagi penderita gagal ginjal tahap akhir. Berbeda dengan hemodialisis yang membutuhkan kunjungan rutin ke unit",
}));

export default function Article() {
    return (
        <>
            <ArticleBanner />
            <div className="bg-gray-50 dark:bg-gray-700 min-h-screen">
                <div className="max-w-[1300px] mx-auto px-4  rounded-lg pt-12">
                    <div className="flex items-center justify-center gap-4 inter">
                        <button type="button" className="px-4 py-2 border border-gray-300 rounded-lg active">Semua</button>
                        <button type="button" className="px-4 py-2 border border-gray-300 rounded-lg">Homecare</button>
                        <button type="button" className="px-4 py-2 border border-gray-300 rounded-lg">Karier</button>
                        <button type="button" className="px-4 py-2 border border-gray-300 rounded-lg">Keperawatan</button>
                        <button type="button" className="px-4 py-2 border border-gray-300 rounded-lg">Kesehatan</button>
                        <button type="button" className="px-4 py-2 border border-gray-300 rounded-lg">Teknologi</button>
                    </div>
                </div>
                <div className="max-w-[1300px] mx-auto px-4 py-[40px]  rounded-lg mt-6 inter flex flex-col items-center gap-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Melakukan loop pada data artikel dan merender setiap kartu */}
                        {articlesData.map((article) => (
                            <div key={article.id} className="bg-white shadow-xs hover:shadow-2xl rounded-lg hover:cursor-pointer">
                                <div className="p-4 flex flex-col gap-4">
                                    {/* Penggunaan width={0} height={0} tidak direkomendasikan, 
                                        sebaiknya gunakan ukuran aspek rasio gambar yang sebenarnya */}
                                    <Image src={article.imageUrl} alt={article.title} width={0} height={0} className="size-full rounded-lg" />
                                    <div>
                                        <h3 className="text-lg ">{article.title}</h3>
                                        <span className="flex items-center text-sm text-gray-500">
                                            <small>{article.author}</small> . <small>{article.date}</small>
                                        </span>
                                    </div>
                                    <p className="text-xs font-normal text-gray-500">{article.excerpt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <nav className="flex items-center gap-x-1 mt-12">
                        <button type="button" className="btn btn-soft">Previous</button>
                        <div className="flex items-center gap-x-1">
                            <button type="button" className="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">1</button>
                            <button type="button" className="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary" aria-current="page">2</button>
                            <button type="button" className="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary">3</button>
                        </div>
                        <button type="button" className="btn btn-soft">Next</button>
                    </nav>
                </div>
            </div >
        </>

    );
}