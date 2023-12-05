import { FOOTER_COMMUNITY, FOOTER_LINKS, NAV_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
    return (
        <footer className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:gap-0 md:gap-2 gap-y-4 max-w-[90%] mx-auto relative z-30 py-5">
            <Link href="/">
                <Image src="/hilink-logo.svg" width={74} height={29}/>
            </Link>

            <div className="">
                <h2 className="font-bold text-[18px] mb-4" >Learn More</h2>
                <ul className="h-full gap-2 flex flex-col">
                {
                    FOOTER_LINKS.map((link)=>(
                    <Link href={link.href} key={link.key} className="text-[14px]text-[#7B7B7B] flex items-center jsutify-center cursor-pointer pb-1.5 ">
                                {link.label}
                    </Link>
                    ))
                }
                </ul>
            </div>

            <div className="">
                <h2 className="font-bold text-[18px] mb-4">Our Community</h2>
                <ul className="h-full gap-2 flex flex-col">
                {
                    FOOTER_COMMUNITY.map((link)=>(
                    <Link href={link.href} key={link.key} className="text-[14px]text-[#7B7B7B] flex items-center jsutify-center cursor-pointer pb-1.5 ">
                                {link.label}
                    </Link>
                    ))
                }
                </ul>
            </div>

            <div className="">
                <h2 className="font-bold text-[18px] mb-4">Our Community</h2>
                <ul className="h-full gap-2 flex flex-col">
                    <Link href="/"> Admin Officer : 123-456-7890</Link>
                    <Link href="/"> Email Officer : hilink@akinthil.com</Link>
                </ul>
            </div>

            <div className="">
                <h2 className="font-bold text-[18px] mb-4">{SOCIALS.title}</h2>
                <ul className="h-full gap-2 flex">
                    {SOCIALS.links.map((link, index) => (
                        <li key={index} className="text-[16px] text-black flex justify-center cursor-pointer pb-1.5  h-[20%]">
                        <img src={link} alt={`Social Icon ${index}`} />
                        </li>
                    ))}
                </ul>
            </div>

        </footer>
    );
};

export default Footer;