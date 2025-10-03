
import Image from "next/image";
import { Icon } from '@iconify/react';
const PackageCard = ({ packageId, data }: { packageId?: number | null | undefined, data: any }) => {
    const imageUrl = data.package === 'Perawat' ? `https://backend.cbtoptimal.id/penyimpanan/paket/${data.photo}` : `https://backend.elearningoptimal.id/penyimpanan/paket/${data.photo}`
    return (
        <div  onClick={() => window.open('https://elearningoptimal.id/login', '_parent')} className="flex flex-col rounded-xl shadow-md bg-gradient-to-r from-[#e7e7e7] to-[#fff] dark:from-[#111] dark:to-[#333] dark:text-gray-50 text-black hover:cursor-pointer hover:shadow-2xl backdrop-blur-md max-w-sm" key={packageId}>
            <PackageCardImage url={imageUrl} />
            <PackageCardBody>
                <PackageCardHeader title={data.title} />
                <PackageListFeature>
                    <PackageListFeatureItem data={data.list_1} />
                    <PackageListFeatureItem data={data.list_2} />
                    <PackageListFeatureItem data={data.list_3} />
                    <PackageListFeatureItem data={data.list_4} />
                    <PackageListFeatureItem data={data.list_5} />
                    <PackageListFeatureItem data={data.list_6} />
                    <PackageListFeatureItem data={data.list_7} />
                </PackageListFeature>
                <div className="mt-4 border border-dotted border-gray-200 h-[1px]" />
                <PackageCardFooter data={data} />

            </PackageCardBody>

        </div>
    )
}
const PackageCardImage = ({ url }: { url: string }) => {
    return (
        <div className="relative text-xl font-bold h-[160px] p-6">
            <Image priority={true} src={url} alt="Icon Nurse" width={4800} height={3800} className="mb-2 absolute top-0 left-0 object-contain w-full -z-1 rounded-t-lg" />
        </div>
    )
}
const PackageCardBody = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full">{children}</div>
    )

}
const PackageCardHeader = ({ title }: { title: string }) => {
    return (
        <h5 className="text-xl font-bold text-center p-6 h-24">{title}</h5>
    )
}
const PackageListFeature = ({ children }: { children: React.ReactNode }) => {
    return (<ol className="list-outside space-y-4 text-sm px-6">{children}</ol>)
}
const PackageListFeatureItem = ({ data }: { data: string }) => {
    return (
        <li className="before:content-['✓'] before:p-1 before:w-5 before:h-5 before:rounded-full before:text-center before:inline-block before:bg-gray-100 dark:before:bg-gray-800 dark:before:text-purple-200 before:text-purple-700 before:font-fontawesome before:mr-2 before:text-xs">{data}</li>
    )
}

const PackageCardFooter = ({ data }: {data: any }) => {
    return (<>
        <div className="text-xs border border-dashed border-gray-200 py-2 flex flex-col items-center text-center bg-purple-50 dark:bg-gray-800 dark:text-gray-50 text-black">
            Gunakan Voucher dibawah ini untuk mendapatkan Diskon 50%
            <b>OPTIMAL2025</b>
        </div>
        <div className="flex justify-end items-center px-6 py-4">
            <span className="text-lg text-gray-700 font-extrabold">{data.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>

        </div>
    </>
    )
}

export { PackageCard }