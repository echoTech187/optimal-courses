
import Image from "next/image";
import { Icon } from '@iconify/react';
const PackageCard = ({ packageId, data }: { packageId?: number | null | undefined, data: any }) => {
    console.log(packageId);
    const imageUrl = data.package === 'Perawat' ? `https://backend.cbtoptimal.id/penyimpanan/paket/${data.photo}` : `https://backend.elearningoptimal.id/penyimpanan/paket/${data.photo}`
    return (
        <div className="flex flex-col rounded-xl shadow-md bg-gradient-to-r from-[#e7e7e7] to-[#fff] dark:from-[#111] dark:to-[#333] dark:text-gray-50 text-black hover:cursor-pointer hover:shadow-2xl backdrop-blur-md max-w-sm" key={packageId}>
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
                <PackageCardFooter redirect={'https://wa.link/gkfaqz'} data={data} />

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

const PackageCardFooter = ({ redirect, data }: { redirect: string, data: any }) => {
    return (
        <div className="flex justify-between items-center px-6 py-4">
            <span className="text-lg text-gray-700 font-extrabold">{data.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
            <button onClick={() => window.open(redirect, '_blank')} className="w-fit py-2 px-4 rounded-lg transition-colors bg-purple-700 hover:bg-purple-800 dark:bg-black/80 dark:text-purple-400 dark:hover:text-white text-white font-semibold hover:font-semibold text-sm border border-transparent hover:border-purple-800 hover:text-white flex items-center justify-center">
                Pesan<Icon icon="tabler:arrow-right" className="ml-2 size-6" width="32" height="32" /> 
            </button>
        </div>
    )
}

export { PackageCard }