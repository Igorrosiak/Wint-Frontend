import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { UserResponse } from "../../types/user";
import getUserByUsername from "../../services/user/getUserByUsername";
import logoWint from "../../assets/wintLogo.svg";

import Header from "../../components/header/header";
import HeroBanner from "../../components/profile/heroBanner/heroBanner";
import Skills from "../../components/profile/skills/skills";
import Curriculum from "../../components/profile/curriculum/curriculum";
import Works from "../../components/profile/works/works";
import Blog from "../../components/profile/blogs/blogs";
import Recommendations from "../../components/profile/recommendations/recommendations";
import Footer from "../../components/footer/footer";

const Profile = () => {
  const searchedProfile = useParams().username;
  const [user, setUser] = useState<UserResponse>();

  const handleGetUserByUsername = useCallback(async () => {
    if(searchedProfile){
      const user = await getUserByUsername(searchedProfile!);
      setUser(user);
    }
  }, [searchedProfile]);

  useEffect(() => {
    if (searchedProfile) {
      void handleGetUserByUsername();
    }
  }, [handleGetUserByUsername, searchedProfile]);

  return (
    <>
      {user && user.id ? (
        <>
          <Header />
          <HeroBanner user={user} />
          <Skills userId={user.id} />
          <Curriculum userId={user.id} />
          <Works userId={user.id} />
          <Blog userId={user.id} />
          <Recommendations userId={user.id} />
          <Footer />
        </>
      ) : (
        <section className="h-[100vh] pt-[15vh] flex flex-col justify-start items-center">
          <img src={logoWint} alt="Wint Logo" className="w-[300px]" />
          <h1 className="pt-20 text-4xl text-[#2C1586] font-bold">Desculpe</h1>
          <h1 className="pt-3 px-7 text-2xl text-[#4c3c8d] text-center">
            Ocorreu um erro ao procurar o usuário. <br /> Verifique o username na barra
            de pesquisa e recarregue a página.
          </h1>
        </section>
      )}
    </>
  );
};

export default Profile;
