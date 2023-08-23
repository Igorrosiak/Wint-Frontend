import { useState, useEffect } from "react";

const Works = () => {
  const works = [
    {
      role: "Fullstack Developer",
      localization: "Florianópolis, Santa Catarina",
      startDate: "01/01/2023",
      endDate: "01/06/2023",
      tags: ["React", "Node", "Typescript"],
      occupations: [
        "Desenvolvimento de frontend de soluções digitais",
        "Aprimoramento de técnicas de comunicação entre o time",
        "Auxílio na construção de IA's",
      ],
    },
    {
      role: "Fullstack Developer",
      localization: "Florianópolis, Santa Catarina",
      startDate: "01/01/2023",
      endDate: "01/06/2023",
      tags: ["React", "Node", "Typescript"],
      occupations: [
        "Desenvolvimento de frontend de soluções digitais",
        "Aprimoramento de técnicas de comunicação entre o time",
        "Auxílio na construção de IA's",
      ],
    },
  ];

  const [selectedWork, setSelectedWork] = useState();

  return (
    <section
      id="works"
      className="min-h-[60vh] py-7 flex flex-col justify-center items-center bg-[#FBFBFB]"
    >
      <h3 className="text-gray-400">- W O R K S</h3>
      <h1 className="my-4 text-5xl text-center font-bold max-sm:text-3xl">
        Experiências Profissionais
      </h1>

      <div
        className={`row-works w-[80%] gap-5 mt-10`}
      >
        {works.length > 0 ? (
          works.map((work, index) => {
            return (
              <div
                key={index}
                className="work-card items-center rounded-xl text-center bg-white shadow-xl"
              >
                <h4 className="text-xl mt-2">{work.role}</h4>
              </div>
            );
          })
        ) : (
          <h2>Desculpe não existem experiências a serem apresentadas.</h2>
        )}
      </div>
    </section>
  );
};

export default Works;
