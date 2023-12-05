import Image from "next/image";
import Link from "next/link";

export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/', key: 'how_hilink_work', label: 'How Hilink Work?' },
  { href: '/service', key: 'services', label: 'Services' },
  { href: '/', key: 'pricing ', label: 'Pricing ' },
  { href: '/', key: 'contact_us', label: 'Contact Us' },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between max-w-[90%] mx-auto relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link 
            href={link.href}
            className="text-[16px] text-[#585858] flex items-center jsutify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
          </li>
        ))}
      </ul>
      <div className="lg:flex lg:items-center lg:justify-center hidden">
        <button
          type="button"
          className="py-4 px-14 rounded-full bg-[#292C27] transition-all font-bold hover:bg-black text-white"
        >
          Login
        </button>
      </div>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
