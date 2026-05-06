import Link from 'next/link';
import { Mail, Phone, ExternalLink, ArrowRight, Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/10 py-12 md:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        {/* Left Side: Identity & About */}
        <div className="flex flex-col space-y-6 max-w-sm">
          <div>
            <h3 className="text-2xl font-semibold text-white tracking-tight">Omkar Singh</h3>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              Creative Developer specializing in high-performance and immersive web experiences.
            </p>
          </div>
          <Link href="/about" className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 w-fit text-sm text-white font-medium">
            <span>About Me</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right Side: Links & Contact */}
        <div className="flex flex-col sm:flex-row gap-10 md:gap-16">
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Connect</h4>
            <div className="flex flex-col space-y-3">
              <a href="https://www.linkedin.com/in/omkar-singh-sites/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/omkariitkgp31/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                <span>GitHub</span>
              </a>
              <a href="https://coffeeland-9828e.web.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                <ExternalLink size={18} />
                <span>Portfolio</span>
              </a>
              <a href="/projects/OmkarCV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                <Download size={18} />
                <span>Resume</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col space-y-3">
              <a href="mailto:isnghomkar237@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                <Mail size={18} />
                <span>isnghomkar237@gmail.com</span>
              </a>
              <a href="tel:9674170855" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                <Phone size={18} />
                <span>+91 9674170855</span>
              </a>
            </div>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Omkar Singh. All rights reserved.</p>
        <p>Built with Next.js & Framer Motion</p>
      </div>
    </footer>
  );
}
