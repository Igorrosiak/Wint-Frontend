import Header from "../../components/header/header";
import HeroBanner from "../../components/profile/heroBanner/heroBanner";
import Skills from "../../components/profile/skills/skills";
import Curriculum from "../../components/profile/curriculum/curriculum";
import Works from "../../components/profile/works/works";
import Blog from "../../components/profile/blogs/blogs";
import Recommendations from "../../components/profile/recommendations/recommendations";
import Footer from "../../components/footer/footer";

const Profile = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <Skills />
      <Curriculum />
      <Works />
      <Blog />
      <Recommendations />
      <Footer />
    </>
  );
};

export default Profile;
