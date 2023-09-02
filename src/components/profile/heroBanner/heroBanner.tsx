import { BsInstagram, BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs"
import { UserResponse } from "../../../types/user";
import profileImage from "../../../assets/profile-image.png"

interface HeroBannerProps {
  user: UserResponse
}

const HeroBanner = ({user}: HeroBannerProps) => {
  return (
    <section className="h-[90vh] min-[768px]:pb-32 flex justify-center items-center max-[768px]:flex-col-reverse">
      <aside className="w-1/3 max-[768px]:w-[85vw] max-[768px]:text-center m-auto">
        <h1 className="my-4 text-5xl font-bold max-md:text-4xl">{user.name}</h1>
        <p className="py-4">{user.presentation ? user.presentation : 'Seja bem-vindo ao meu perfil da Wint!'}</p>
        <section className="flex gap-4 text-[#4d3a99] max-[768px]:justify-center">
          {user.instagramLink && (
            <BsInstagram size={35} className="cursor-pointer hover:scale-110 transition-all" onClick={() => window.open(user.instagramLink)} />
          )}
          {user.githubLink && (
            <BsGithub size={35} className="cursor-pointer hover:scale-110 transition-all" onClick={() => window.open(user.githubLink)} />
          )}
          {user.twitterLink && (
            <BsTwitter size={35} className="cursor-pointer hover:scale-110 transition-all" onClick={() => window.open(user.twitterLink)} />
          )}
          {user.linkedinLink && (
            <BsLinkedin size={35} className="cursor-pointer hover:scale-110 transition-all" onClick={() => window.open(user.linkedinLink)} />
          )}
        </section>
      </aside>
      <aside className="w-1/2 max-[768px]:w-full">
        <img src={profileImage} alt="Profile User" className="m-auto max-[768px]:w-[350px]" />
      </aside>
    </section>
  );
};

export default HeroBanner;
