import { useState, useEffect } from "react";
import recommendationImage from "../../../assets/recommendation-image.png";

const Recommendations = () => {
  const recommendations = [
    {
      image: recommendationImage,
      name: "Samantha Silva",
      description:
        "Excelente atendimento e trabalho desenvolvimento! Com certeza procurarei para meus futuros sites",
      relationship: "Cliente",
    },
    {
      image: recommendationImage,
      name: "Cláudia Ribeiro",
      description:
        "Excelente aluna dedicada a suas tarefas e objetivos",
      relationship: "Professor",
    },
    {
      image: recommendationImage,
      name: "Roberta Souza",
      description:
        "Ótima colega de trabalho! Profisional e divertida na medida certa",
      relationship: "CoWorker",
    },
  ];

  return (
    <section
      id="recommendations"
      className="min-h-[60vh] py-14 flex flex-col justify-center items-start bg-[#FBFBFB] max-[300px]:w-[90%]"
    >
      <div className="w-[80%] mx-auto">
          <h3 className="text-gray-400">- R E C O M M E N D A T I O N S</h3>
          <h1 className="my-4 text-5xl font-bold">Testemunhos</h1>
          <div className="row-recommendations w-full mt-10 grid grid-cols-3 gap-10 max-w-xl:bg-green-600 max-xl:grid-cols-2 max-md:grid-cols-1">
            {recommendations.map((recommendation, index) => {
              return (
                <div
                  key={index}
                  className="recommendation-card flex flex-col items-center text-center"
                >
                  <img
                    src={recommendation.image}
                    alt="Recommendation"
                    className="w-24 absolute cursor-pointer rounded-t-xl"
                  />
                  <div className="w-full mt-16 bg-white shadow-xl rounded-xl p-5 flex flex-col justify-center items-start">
                    <h4 className="mt-6 font-semibold text-xl max-md:mx-auto">{recommendation.name}</h4>
                    <p className="text-start text-gray-600 max-md:text-center max-md:mx-auto">"{recommendation.description}"</p>
                    <p className="mt-10 max-md:mx-auto">{recommendation.relationship}</p>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    </section>
  );
};

export default Recommendations;
