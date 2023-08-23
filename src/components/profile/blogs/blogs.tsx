import blogImage from "../../../assets/blog-image.png";

const Blog = () => {
  const blogs = [
    {
      name: "Como desenvolver um protótipo interativo",
      date: "Ago 15, 2021",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...",
      image: blogImage,
    },
    {
      name: "Seja mais produtivo com Notion",
      date: "Dez 8, 2021",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...",
      image: blogImage,
    },
    {
      name: "Criando um Accordion em ReactJS",
      date: "Out 10, 2022",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...",
      image: blogImage,
    },
  ];

  return (
    <section
      id="blogs"
      className="w-[80%] mx-auto min-h-[60vh] py-14 flex flex-col justify-center items-start max-[300px]:w-[90%]"
    >
      <h3 className="text-gray-400">- T I P S</h3>
      <h1 className="my-4 text-5xl font-bold">Blog Pessoal</h1>

      <div className="row-blogs w-full mt-10 grid grid-cols-3 gap-10 max-w-xl:bg-green-600 max-xl:grid-cols-2 max-md:grid-cols-1">
        {blogs.map((blog, index) => {
          return (
            <div
              key={index}
              className="blog-card border-2 border-gray-200 rounded-xl flex flex-col items-center text-center bg-white"
            >
              <img
                src={blog.image}
                alt="Blog"
                className="w-full h-[400px] cursor-pointer rounded-t-xl"
              />
              <div className="w-full p-5 flex flex-col justify-center items-start">
                <h4 className="font-semibold text-xl text-start">{blog.name}</h4>
                <p className="my-3 indent-3 text-gray-600">{blog.date}</p>
                <p className="text-justify text-gray-600">{blog.description}</p>
                <a href="#" className="w-full mt-3 text-center">Continue Lendo</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
