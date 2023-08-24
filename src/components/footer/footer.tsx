import { BsInstagram, BsFacebook, BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="py-10 px-4 text-[#4d3a99]">
      <div className="row-social-media flex gap-4 items-center justify-center">
        <BsInstagram
          size={28}
          className="cursor-pointer hover:scale-110 transition-all"
        />
        <BsFacebook
          size={28}
          className="cursor-pointer hover:scale-110 transition-all"
        />
        <BsGithub
          size={28}
          className="cursor-pointer hover:scale-110 transition-all"
        />
        <BsTwitter
          size={28}
          className="cursor-pointer hover:scale-110 transition-all"
        />
        <BsLinkedin
          size={28}
          className="cursor-pointer hover:scale-110 transition-all"
        />
      </div>
      <p className="text-center pt-4">© 2023 - Wint, crie já seu currículo interativo</p>
    </footer>
  );
};

export default Footer;
