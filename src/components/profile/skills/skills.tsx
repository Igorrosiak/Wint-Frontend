import { MdBusinessCenter } from "react-icons/md";
import { IconType } from "react-icons";

const Skills = () => {
  const skills = [
    {
      name: "UI/UX Design",
      description: "Breve graduação em experiências de usuários",
      icon: MdBusinessCenter,
    },
    {
      name: "Application Development",
      description:
        "Skills desenvolvidas ao longo do curso tecnico de Desenvolvimento de Sistemas do SENAI",
      icon: MdBusinessCenter,
    },
    {
      name: "Gestão empresarial",
      description:
        "Após estudos e práticas, tenho conhecimento e habilidades voltadas para a gestão de equipes e negócios Copy",
      icon: MdBusinessCenter,
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-[60vh] py-7 flex flex-col justify-center items-center bg-[#FBFBFB]"
    >
      <h3 className="text-gray-400">- S K I L L S</h3>
      <h1 className="my-4 text-5xl font-bold">Especializado(a) em...</h1>

      <div
        className={`row-skills w-full mt-10 grid grid-cols-4 max-w-xl:bg-green-600 max-[1600px]:grid-cols-3 max-[992px]:grid-cols-2 max-[600px]:grid-cols-1`}
      >
        {skills.map((skill, index) => {
          const TheIcon: IconType = skill.icon;

          return (
            <div
              key={index}
              className="skill-card w-[80%] hover:scale-105 transition-all p-10 mx-auto mt-5 flex flex-col items-center rounded-xl text-center bg-white shadow-xl"
            >
              <div className="bg-[#F5F3FE] p-4 rounded-2xl">
                <TheIcon size={30} color="#7E74F1" />
              </div>
              <h4 className="text-xl mt-2">{skill.name}</h4>
              <p className="text-sm mt-2">{skill.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
