"use client";

import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Data Science
  { name: "Python", level: 95, category: ["Data Science", "Data Analytics", "Data Engineering", "ML Engineering"] },
  { name: "Pandas", level: 90, category: ["Data Science", "Data Analytics"] },
  { name: "NumPy", level: 90, category: ["Data Science", "ML Engineering"] },
  { name: "Matplotlib", level: 85, category: ["Data Science", "Data Analytics"] },
  { name: "Seaborn", level: 90, category: ["Data Science", "Data Analytics"] },
  { name: "Streamlit", level: 75, category: ["Data Science", "Data Analytics"] },
  { name: "LLM", level: 80, category: ["Data Science", "ML Engineering"] },
  { name: "SQL", level: 80, category: ["Data Science", "Data Analytics", "ML Engineering"] },

  // Data Analytics
  { name: "Power BI", level: 80, category: ["Data Analytics"] },
  { name: "Tableau", level: 80, category: ["Data Analytics"] },
  { name: "MongoDB", level: 70, category: ["Data Science", "Data Analytics", "ML Engineering"] },
  { name: "PostgreSQL", level: 65, category: ["Data Science", "Data Analytics", "ML Engineering"] },
  { name: "Langchain", level: 65, category: ["Data Science", "ML Engineering"] },
  // Data Engineering
  // ML Engineering
  { name: "Scikit-learn", level: 60, category: ["Data Science", "ML Engineering"] },
  { name: "Surprise", level: 80, category: ["ML Engineering"] },
  


  // Tools
  { name: "Git/GitHub", level: 90, category: ["tools"] },
  { name: "Jupyter Notebook", level: 85, category: ["tools"] },
  { name: "VS Code", level: 95, category: ["tools"] },
  { name: "Docker", level: 95, category: ["Data Engineering", "ML Engineering"] },
  { name: "Linux", level: 95, category: ["tools"] },
];

const categories = ["All", "Data Science", "Data Analytics", "Data Engineering", "ML Engineering"];

export const SkillsSection = ({ t }: { t: Translations }) => {
  const [activeCategories, setactiveCategories] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategories === "All" || skill.category.includes(activeCategories)
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t.title_first_part} <span className="text-primary"> {t.title_second_part}</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setactiveCategories(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategories.includes(category)
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
