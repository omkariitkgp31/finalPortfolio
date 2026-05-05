export default function Projects() {
  const projects = [
    {
      title: "MERN E-Commerce Platform",
      category: "Full-Stack E-Commerce",
      description: "Full-stack online store with JWT auth, product CRUD, cart/order management, and admin dashboard, deployed on Netlify.",
      image: "/projects/MERN-ecom.png",
      link: "https://your-mern-ecommerce-link.netlify.app", // User can update this link
    },
    {
      title: "Whiteboard",
      category: "Web App",
      description: "A React-based collaborative whiteboard web app with drawing tools including pen, shapes, arrows, text, eraser, undo/redo, and multi-color stroke options — deployed via Firebase.",
      image: "/projects/whitebrd.png",
      link: "https://thewhiteboard-5c16c.web.app/",
    },
    {
      title: "Personal Portfolio",
      category: "Portfolio",
      description: "A dark-themed personal portfolio website for Omkar Singh, an IITian full-stack developer, featuring blog links, social profiles, intro video, and newsletter signup — built with AI & web technologies.",
      image: "/projects/portfolioDemo.png",
      link: "https://coffeeland-9828e.web.app/",
    },
  ];

  return (
    <section className="min-h-screen bg-[#121212] py-24 px-8 md:px-24 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Project Work</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target={project.link !== "#" ? "_blank" : undefined}
              rel={project.link !== "#" ? "noopener noreferrer" : undefined}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(120,119,198,0.15)] block cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="text-sm font-medium text-purple-400 mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {project.description}
                </p>
                
                {/* Arrow indicator */}
                <div className="mt-6 flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                  View Project 
                  <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
