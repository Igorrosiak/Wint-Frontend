import {
  BsInstagram,
  BsFacebook,
  BsGithub,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";

interface FooterProps {
  linkedinLink?: string;
  githubLink?: string;
  instagramLink?: string;
  facebookLink?: string;
  twitterLink?: string;
}

const Footer = ({
  linkedinLink,
  githubLink,
  instagramLink,
  facebookLink,
  twitterLink,
}: FooterProps) => {
  return (
    <footer className="py-10 px-4 text-[#4d3a99]">
      <div className="row-social-media flex gap-4 items-center justify-center">
        {linkedinLink && (
          <BsLinkedin
            size={28}
            className="cursor-pointer hover:scale-110 transition-all"
            onClick={() => window.open(linkedinLink)}
          />
        )}
        {githubLink && (
          <BsGithub
            size={28}
            className="cursor-pointer hover:scale-110 transition-all"
            onClick={() => window.open(githubLink)}
          />
        )}
        {instagramLink && (
          <BsInstagram
            size={28}
            className="cursor-pointer hover:scale-110 transition-all"
            onClick={() => window.open(instagramLink)}
          />
        )}
        {facebookLink && (
          <BsFacebook
            size={28}
            className="cursor-pointer hover:scale-110 transition-all"
            onClick={() => window.open(facebookLink)}
          />
        )}
        {twitterLink && (
          <BsTwitter
            size={28}
            className="cursor-pointer hover:scale-110 transition-all"
            onClick={() => window.open(twitterLink)}
          />
        )}
      </div>
      <p className="text-center pt-4">
        © 2023 - Wint, crie já seu currículo interativo
      </p>
    </footer>
  );
};

export default Footer;
