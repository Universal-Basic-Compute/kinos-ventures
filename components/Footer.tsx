import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-12 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center mb-4">
            <Image
              src="/logo.png"
              alt="KinOS Ventures Logo"
              width={150}
              height={150}
              className="mr-2"
            />
          </Link>
          <p className="text-sm text-gray-400">
            Accelerating AI-driven innovation across multiple verticals with our unified KinOS engine.
          </p>
        </div>
        
        <div className="col-span-1">
          <h3 className="text-lg font-medium mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/resources/core-philosophy" className="hover:text-blue-300 transition-colors">Core Philosophy</Link></li>
            <li><Link href="/resources/technology" className="hover:text-blue-300 transition-colors">Technology</Link></li>
            <li><Link href="/resources/operations" className="hover:text-blue-300 transition-colors">Operations</Link></li>
            <li><Link href="/resources/culture" className="hover:text-blue-300 transition-colors">Culture</Link></li>
            <li><Link href="/resources/business" className="hover:text-blue-300 transition-colors">Business</Link></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h3 className="text-lg font-medium mb-4">Verticals</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/verticals/health" className="hover:text-blue-300 transition-colors">KinOS Health</Link></li>
            <li><Link href="/verticals/finance" className="hover:text-blue-300 transition-colors">KinOS Finance</Link></li>
            <li><Link href="/verticals/entertainment" className="hover:text-blue-300 transition-colors">KinOS Entertainment</Link></li>
            <li><Link href="/verticals/productivity" className="hover:text-blue-300 transition-colors">KinOS Productivity</Link></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h3 className="text-lg font-medium mb-4">Connect</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/contact" className="hover:text-blue-300 transition-colors">Contact Us</Link></li>
            <li><Link href="/about" className="hover:text-blue-300 transition-colors">About</Link></li>
            <li><Link href="/careers" className="hover:text-blue-300 transition-colors">Careers</Link></li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="https://twitter.com/kinosventures" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="https://github.com/kinosventures" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="https://linkedin.com/company/kinosventures" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} KinOS Ventures. All rights reserved.</p>
      </div>
    </footer>
  );
}
