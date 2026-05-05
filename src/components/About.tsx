import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#121212] text-white pt-24 pb-16 px-6 md:px-12 relative overflow-hidden flex-1">
      {/* Background gradients for aesthetics */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 text-sm font-medium w-fit group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Me</span>
        </h1>

        <div className="space-y-8 text-lg text-gray-300 leading-relaxed font-light">
          <p>
            Hello! I'm Omkar Singh, a passionate and driven developer focused on creating immersive web experiences. I specialize in building highly interactive and performant web applications using modern technologies.
          </p>
          
          <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h2 className="text-2xl font-semibold text-white mb-4">My Journey</h2>
            <p className="mb-4 text-base md:text-lg">
              I have always been fascinated by the intersection of design and engineering. My goal is to build interfaces that not only function flawlessly but also leave a lasting impression through thoughtful design and smooth animations.
            </p>
            <p className="text-base md:text-lg">
              I'm constantly exploring new tools and frameworks to push the boundaries of what's possible on the web.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">Let's Connect</h2>
            <p className="mb-6 text-base md:text-lg">
              I'm always open to new opportunities, collaborations, or just a chat about technology and design.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:isnghomkar237@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
                <Mail size={18} />
                <span>Email Me</span>
              </a>
              <a href="https://www.linkedin.com/in/omkar-singh-sites/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/10 rounded-full font-medium hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/omkariitkgp31/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/10 rounded-full font-medium hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
