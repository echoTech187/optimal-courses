import { Suspense } from 'react';
export default function About() {
    return (
        <section className="w-full h-auto py-[100px] px-4 flex items-center justify-center bg-gray-50 dark:bg-gray-900" id="about">
            <div className="px-4 max-w-[1300px] gap-12 mx-auto 2xl:px-0 flex items-center max-lg:flex-col lg:flex-row">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4">Tentang Optimal Untuk Negeri</h2>
                    <p className="mb-4">
                        Optimal Untuk Negeri adalah platform edukasi yang berkomitmen untuk menyediakan akses pembelajaran berkualitas tinggi bagi semua orang. Kami percaya bahwa pendidikan adalah kunci untuk membuka potensi individu dan membangun masa depan yang lebih baik.
                    </p>
                    <p className="mb-4">
                        Dengan berbagai kursus yang dirancang oleh para ahli di bidangnya, kami bertujuan untuk memberdayakan individu dengan keterampilan dan pengetahuan yang mereka butuhkan untuk sukses di dunia yang terus berkembang. Kami menyediakan berbagai materi pembelajaran yang berkualitas tinggi, sehingga Anda dapat meningkatkan kemampuan dan pengetahuan Anda di bidang yang Anda inginkan.
                    </p>
                    <p className="mb-4">
                        Kami percaya bahwa setiap orang berhak mendapatkan pendidikan yang berkualitas, tanpa memandang latar belakang atau kondisi ekonomi. Oleh karena itu, kami berkomitmen untuk terus meningkatkan dan memperluas akses ke platform kami, sehingga lebih banyak orang dapat merasakan manfaat dari pendidikan yang kami tawarkan.
                    </p>
                </div>
                <div className="flex-1">
                    <Suspense fallback={<p>Loading video...</p>}>
                        <video className="w-full h-auto rounded-2xl shadow-lg border-8 border-white" loop autoPlay muted controls preload="none">
                            <source src="./videos/video-original.mp4" type="video/mp4" />
                            <source src="./videos/video-original.webm" type="video/webm" />
                            <source src="./videos/video-original.ogv" type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>
                    </Suspense>
                </div>
            </div>
        </section>
    );
}