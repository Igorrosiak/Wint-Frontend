import portfolioImage from "../../../assets/cibersecurity-image.png";

const Curriculum = () => {
  const portfolios = [
    {
      name: "Ciber Segurança",
      tag: "Security",
      image: portfolioImage,
    },
    {
      name: "ReactJs",
      tag: "React",
      image: portfolioImage,
    },
    {
      name: "Desenvolvimento de Sistemas",
      tag: "Senai",
      image: portfolioImage,
    },
  ];

  return (
    <section
      id="curriculum"
      className="w-[80%] mx-auto min-h-[60vh] py-14 flex flex-col justify-center items-start max-[300px]:w-[90%]"
    >
      <h3 className="text-gray-400">- C U R R I C U L U M</h3>
      <h1 className="my-4 text-5xl font-bold">Portfólios</h1>

      <div className="row-portfolios w-full mt-10 grid grid-cols-3 gap-10 max-w-xl:bg-green-600 max-xl:grid-cols-2 max-md:grid-cols-1">
        {portfolios.map((portfolio, index) => {
          return (
            <div
              key={index}
              className="portfolio-card border-2 border-gray-200 rounded-xl flex flex-col items-center text-center bg-white"
            >
              <img src={portfolio.image} alt="Portfolio" className="w-full h-[400px] cursor-pointer rounded-t-xl" />
              <div className="w-full p-5 flex flex-col justify-center items-start">
                <h4 className="font-semibold text-xl">{portfolio.name}</h4>
                <p className="my-2 px-2 py-1 text-xs text-gray-500 border-2 border-gray-300 rounded-lg">{portfolio.tag}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Curriculum;
