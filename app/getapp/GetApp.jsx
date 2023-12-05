import Image from "next/image";

const GetApp = () => {
    return (
    <section className="flexCenter w-full flex-col pb-[100px]">
        <div className="get-app">
            <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
            <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get for free now!</h2>
            <p className="regular-16 text-gray-10">Available on iOS and Android</p>
            <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            
            <button type="button" className="py-4 px-14 rounded-full bg-white transition-all font-bold text-black">
            Download App
            </button>
               
            <button type="button" className="py-4 px-14 rounded-full bg-[#30AF5B] transition-all font-bold hover:bg-black text-white">
            Download App
            </button>
            </div>
            </div>

            <div className="flex flex-1 items-center justify-end">
            <Image src="/phones.png" alt="phones" width={550} height={870} />
            </div>
        </div>
    </section>
    );
};

export default GetApp;