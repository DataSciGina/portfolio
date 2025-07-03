import { FolderCode, Braces, MonitorCog } from "lucide-react";

export const AboutSection = ({ t }: { t: Translations }) => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t.title_first_part} <span className="text-primary">{t.title_second_part}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {t.subtitle}
            </h3>

            <p className="text-muted-foreground">
              {t.description_first_part}
            </p>

            <p className="text-muted-foreground">
              {t.description_second_part}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {t.get_in_touch}
              </a>

              <a
                href={"/files/CV-DS-AgostinaFernandez.pdf"}
                target="blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {t.cv_btn}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Braces className="h-6 w-6 text-primary" />
                </div>
                
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {t.services.service_1.title}
                  </h4>

                  <p className="text-muted-foreground">
                    {t.services.service_1.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MonitorCog className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {t.services.service_2.title}
                  </h4>

                  <p className="text-muted-foreground">
                    {t.services.service_2.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FolderCode className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {t.services.service_3.title}
                  </h4>

                  <p className="text-muted-foreground">
                    {t.services.service_3.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
