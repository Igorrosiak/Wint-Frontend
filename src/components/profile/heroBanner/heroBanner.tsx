import { useState, useEffect } from "react";
import { BsInstagram, BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs"
import profileImage from "../../../assets/profile-image.png"

const HeroBanner = () => {
  return (
    <section className="h-[90vh] min-[768px]:pb-40 flex justify-center items-center max-[768px]:flex-col-reverse">
      <aside className="w-1/3 max-[768px]:w-[85vw] max-[768px]:text-center m-auto">
        <h3 className="text-gray-400">- H E L L O W O R L D</h3>
        <h1 className="my-4 text-5xl font-bold">Gabriela Senna</h1>
        <p className="py-4">Seja bem vindo ao meu portfolio virtual da Wint, aqui você encotrara meus trabalhos do senai, cursos especializantes e demais áreas que mando bem!</p>
        <section className="flex gap-4 text-[#4d3a99] max-[768px]:justify-center">
            <BsInstagram size={35} className="cursor-pointer" />
            <BsGithub size={35} className="cursor-pointer" />
            <BsTwitter size={35} className="cursor-pointer" />
            <BsLinkedin size={35} className="cursor-pointer" />
        </section>
      </aside>
      <aside className="w-1/2 max-[768px]:w-full">
        <img src={profileImage} alt="Profile Image" className="m-auto max-[768px]:w-[350px]" />
      </aside>
    </section>
  );
};

export default HeroBanner;
