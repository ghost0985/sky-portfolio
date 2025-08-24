import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "TrelloClone",
    description:
      "TrelloClone is a Kanban task manager built with Next.js, TypeScript, and Tailwind CSS. It supports drag-and-drop cards/columns with optimistic updates and persisted state. Clerk powers auth and billing—free plan plus two paid tiers (upgrade/downgrade/cancel) with server-side feature gating via webhooks/protected routes. Data lives in Supabase Postgres with type-safe server actions and per-user RLS, all in a fully responsive UI.",
    image: "/projects/Trello.png",
    tags: ["Node.js", "TypeScript", "JavaScript", "HTML"],
    demoUrl: "https://trello-clone-6-8.vercel.app/",
    githubUrl: "https://github.com/ghost0985/TrelloClone",
  },
  {
    id: 2,
    title: "Skinstric AI",
    description:
      "A replica of the Skinstric website featuring integration with two APIs to enable AI-powered facial scanning and analysis. Users can take or upload a photo, and the AI provides detailed insights based on the submitted image.",
    image: "/projects/Skinstric AI.png",
    tags: ["React", "JavaScript", "HTML"],
    demoUrl: "https://skinstric-project.vercel.app/",
    githubUrl: "https://github.com/ghost0985/Skinstric-Project",
  },
  {
    id: 3,
    title: "NFT Market",
    description:
      "A fully developed NFT marketplace clone for buying and selling NFTs. The site integrates multiple APIs to display real-time data across the platform, providing users with a seamless and informative experience.",
    image: "/projects/intership.png",
    tags: ["React", "JavaScript", "HTML"],
    demoUrl: "https://logan-internship.vercel.app/",
    githubUrl: "https://github.com/ghost0985/Logan-Internship",
  },
  {
    id: 4,
    title: "Movie Site",
    description:
      "A movie website built to enhance my React skills, featuring integration with a live API to fetch and display movies. Each title includes detailed descriptions and information, offering users an engaging and informative browsing experience.",
    image: "/projects/movie-site.png",
    tags: ["React", "JavaScript", "HTML"],
    demoUrl: "https://a-movie-website-2.vercel.app/",
    githubUrl: "https://github.com/ghost0985/A-Movie-Website-2",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects, each carefully crafted with a focus on
          detail, performance, and user experience.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group card-surface card-hover flex flex-col h-full"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6 space-y-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title + Desc */}
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Github CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/ghost0985"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
