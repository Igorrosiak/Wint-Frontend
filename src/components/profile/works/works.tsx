import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Work } from "../../../types/work";

const Works = () => {
  const works = [
    {
      id: "asoijfoisfjio",
      role: "Fullstack Developer",
      localization: "Florianópolis, Santa Catarina",
      startDate: "01/01/2023",
      endDate: "01/06/2023",
      tags: ["React", "Node", "Typescript"],
      occupations: [
        "Desenvolvimento de frontend de soluções digitais",
        "Aprimoramento de técnicas de comunicação entre o time",
        "Clean Code",
      ],
    },
    {
      id: "wufhierufs",
      role: "Backend Developer",
      localization: "Florianópolis, Santa Catarina",
      startDate: "01/06/2023",
      endDate: "01/08/2023",
      tags: ["Java", "Spring"],
      occupations: [
        "Desenvolvimento de backend",
        "Soluções para bancos de dados",
        "Utilização do padrão Spring por todo projeto",
      ],
    },
  ];

  const [selectedWork, setSelectedWork] = useState<Work>();

  return (
    <section id="works" className="min-h-[60vh] flex items-center justify-center py-12 bg-[#FBFBFB]">
      <div className="w-[80%] grid grid-cols-2 mx-auto max-lg:grid-cols-1 max-lg:text-center max-[300px]:w-[90%]">
        <aside className="flex flex-col justify-center items-start max-lg:items-center">
          <h3 className="text-gray-400">- W O R K S</h3>
          <h1 className="my-4 text-5xl text-start font-bold max-md:text-4xl max-lg:text-center">
            Experiências Profissionais
          </h1>
          <div className="works-list w-[80%]">
            {works.length > 0 &&
              works.map((work, index) => {
                return (
                  <div
                    key={index}
                    className={`work-select h-16 flex items-center justify-between mt-5 bg-white cursor-pointer indent-5 rounded-sm shadow-md ${
                      selectedWork?.id === work.id && "text-blue-600"
                    }`}
                    onClick={() => setSelectedWork(work)}
                  >
                    <h4 className="text-xl">{work.role}</h4>
                    <MdOutlineKeyboardArrowRight size={30} className="mr-3" />
                  </div>
                );
              })}
          </div>
        </aside>

        {selectedWork && (
          <aside className="mt-10">
            <h3 className="text-3xl font-semibold">{selectedWork.role}</h3>
            <p className="text-gray-500">{selectedWork.localization}</p>
            <p className="text-gray-600 font-medium">
              {selectedWork.startDate} - {selectedWork.endDate}
            </p>
            <div className="flex gap-2 max-lg:justify-center">
              {selectedWork.tags.map((tag) => {
                return (
                  <p className="my-2 px-2 py-1 text-xs text-gray-700 border-2 border-gray-300 rounded-lg">
                    {tag}
                  </p>
                );
              })}
            </div>
            <hr className="my-3" />
            {selectedWork.occupations.map((occupation) => {
              return(
                <p className="text-lg text-gray-700">- {occupation}</p>
              )
            })}
          </aside>
        )}
      </div>
    </section>
  );
};

export default Works;
