import Header from "../../components/header/header";
import Skills from "../../components/profile/skills/skills";
import Works from "../../components/profile/works/works";
import ProfessionalExperience from "../../components/profile/professionalExperiences/professionalExperiences";
import Blog from "../../components/profile/blogs/blogs";
import Recommendations from "../../components/profile/recommendations/recommendations";
import Footer from "../../components/footer/footer";

const Profile = () => {
  return (
    <>
      <Header />
      <Skills />
      <Works />
      <ProfessionalExperience />
      <Blog />
      <Recommendations />
      <Footer />
    </>
  );
};

export default Profile;
