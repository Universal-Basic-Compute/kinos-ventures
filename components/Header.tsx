import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center bg-gradient-to-r from-slate-800 to-slate-900 text-white">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/kinos-logo.png"
            alt="KinOS Ventures Logo"
            width={40}
            height={40}
            className="mr-3"
          />
          <span className="text-xl font-semibold">KinOS Ventures</span>
        </Link>
      </div>
      <nav className="hidden md:flex space-x-8">
        <Link href="/resources" className="hover:text-blue-300 transition-colors">
          Resources
        </Link>
        <Link href="/verticals" className="hover:text-blue-300 transition-colors">
          Verticals
        </Link>
        <Link href="/about" className="hover:text-blue-300 transition-colors">
          About
        </Link>
        <Link href="/contact" className="hover:text-blue-300 transition-colors">
          Contact
        </Link>
      </nav>
      <div className="md:hidden">
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
