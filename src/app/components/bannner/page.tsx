export default function Banner() {
    return (
        <section className="w-full h-fit my-6 px-4 2xl:px-0">
            <div className="relative max-w-[1300px] mx-auto w-full px-4 2xl:px-0 bg-[url('/images/background_banner.png')] bg-cover bg-center rounded-xl flex flex-col md:flex-row items-center justify-center">
                <div className="p-4 md:p-8 text-center w-full text-white">
                    <h2 className="md:text-xl xl:text-2xl font-bold mb-2">Tingkatkan Kemampuan Anda dengan Optimal Courses!</h2>
                    <p className="max-sm:text-xs text-sm">Bergabunglah dengan ribuan pengguna yang telah sukses melalui platform kami.</p>
                    <button className="mt-4 py-2 px-4 rounded-md transition-colors bg-yellow-400 text-black text-sm font-semibold hover:bg-blue-100">
                        Mulai Sekarang
                    </button>
                </div>
            </div>
        </section>
    );
}