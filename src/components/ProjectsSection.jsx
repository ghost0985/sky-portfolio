import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Skinstric AI",
    description:
      "A replica of the Skinstric website featuring integration with two APIs to enable AI-powered facial scanning and analysis. Users can take or upload a photo, and the AI provides detailed insights based on the submitted image.",
    image: "/projects/Skinstric AI.png",
    tags: ["React", "JavaScript", "HTML"],
    demoUrl: "https://skinstric-project.vercel.app/",
    githubUrl: "https://github.com/ghost0985/Skinstric-Project",
  },
  {
    id: 2,
    title: "NFT Market",
    description:
      "A fully developed NFT marketplace clone for buying and selling NFTs. The site integrates multiple APIs to display real-time data across the platform, providing users with a seamless and informative experience.",
    image: "/projects/intership.png",
    tags: ["React", "JavaScript", "HTML"],
    demoUrl: "https://logan-internship.vercel.app/",
    githubUrl: "https://github.com/ghost0985/Logan-Internship",
  },
  {
    id: 3,
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
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects, each carefully crafted with a focus on
          detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((projects, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={projects.image}
                  alt={projects.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {" "}
                  {projects.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {projects.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={projects.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-color duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={projects.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-color duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
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
