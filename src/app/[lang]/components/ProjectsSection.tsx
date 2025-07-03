import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from 'next/image';

export const ProjectsSection = ({ t }: { t: Translations }) => {
  const projects = [
    {
      id: 1,
      title: t.projects.project_1.title,
      description: t.projects.project_1.description,
      image: t.projects.project_1.img,
      tags: ["Scikit-learn", "Surprise", "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Git"],
      demoUrl: t.projects.project_1.url,
      githubUrl: t.projects.project_1.repo,
    },
    {
      id: 2,
      title: t.projects.project_2.title,
      description: t.projects.project_2.description,
      image: t.projects.project_2.img,
      tags: ["Scikit-learn", "Surprise", "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Git"],
      demoUrl: t.projects.project_2.url,
      githubUrl: t.projects.project_2.repo,
    },
    {
      id: 3,
      title: t.projects.project_3.title,
      description: t.projects.project_3.description,
      image: t.projects.project_3.img,
      tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Power BI", "Git"],
      demoUrl: t.projects.project_3.url,
      githubUrl: t.projects.project_3.repo,
    },
  ];
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t.title_first_part} 
          <span className="text-primary"> {t.title_second_part}  </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t.description}   
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  width={600} 
                  height={400}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={`${tag}-${index}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
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
            href="https://github.com/DataSciGina"
          >
            {t.github_btn} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
