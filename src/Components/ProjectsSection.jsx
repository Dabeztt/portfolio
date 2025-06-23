import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Tour Booking Web",
    description:
      "A full-stack web app for booking and managing tours with admin dashboard.",
    image: "/projects/tour_booking.png",
    tags: ["JavaScript", "React", "Node.js", "MongoDB"],
    github: "https://github.com/Dabeztt/Tour_booking_web",
  },
  {
    id: 2,
    title: "Book Store",
    description:
      "An online bookstore platform with search, cart, and checkout features.",
    image: "/projects/book_store.png",
    tags: ["JavaScript", "React", "Vite", "MongoDB"],
    github: "https://github.com/Dabeztt/Book_Store",
  },
  {
    id: 3,
    title: "AI Chat",
    description:
      "A modern chatbot interface built with React and OpenAI integration.",
    image: "/projects/ai_chat.png",
    tags: ["React", "Vite", "Node.js"],
    github: "https://github.com/Dabeztt/ai_chat",
  },
  {
    id: 4,
    title: "E Commerce App",
    description:
      "A shopping app with cart, search, and favorites built in Flutter.",
    image: "/projects/cash_back.png",
    tags: ["Dart", "Flutter"],
    github: "https://github.com/Dabeztt/E_commerce_app",
  },
  {
    id: 5,
    title: "Crappy Bird",
    description: "A fun Flappy Bird clone made with Flutter.",
    image: "/projects/crappy_bird.png",
    tags: ["Dart", "Flutter"],
    github: "https://github.com/Dabeztt/crappy_bird",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-4 flex justify-center items-center gap-4">
          <img
            src="/chibi/wow.png"
            alt="Projects"
            className="w-20 h-20 md:w-30 md:h-30 object-contain"
          />

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Feature <span className="text-primary"> Projects</span>
          </h2>
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These projects demonstrate my experience in building web and mobile
          applications using modern technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col justify-between h-full"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex justify-between items-center mt-auto pt-2">
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
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
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Dabeztt"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
