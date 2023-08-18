import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdOutlineDarkMode } from "react-icons/md";
import { TbUserSearch } from "react-icons/tb";
import logoWint from "../../assets/wintLogo.svg";
import "./header.scss";

const Header = () => {
  const paths = [
    {
      href: "/",
      text: "Menu",
    },
    {
      href: "/about",
      text: "Sobre nós",
    },
    {
      href: "/events",
      text: "Eventos",
    },
    {
      href: "/profile",
      text: "Perfil",
    },
    {
      href: "/cart",
      text: "Carrinho",
    },
  ];

  const menuItems = document.querySelectorAll(".navbar-nav a");

  menuItems.forEach((item) => {
    item.addEventListener("click", scrollToIdOnClick);
  });

  //@ts-ignore
  function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target);
    scrollToPosition(to);
  }

  //@ts-ignore
  function getScrollTopByHref(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
  }

  //@ts-ignore
  function scrollToPosition(to) {
    smoothScrollTo(0, to);
  }

  //@ts-ignore
  function smoothScrollTo(endX, endY, duration = 600) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 400;

    //@ts-ignore
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  }

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-full">
      <nav className="navbar h-[10vh] mt-5 flex justify-around items-center">
        <aside className="w-3/12">
          <img
            src={logoWint}
            alt="Image Wint Logotype"
            className="h-full m-auto cursor-pointer"
            onClick={() => window.location.assign("/#")}
          />
        </aside>
        <ul className="hidden lg:flex justify-center w-6/12 gap-14 font-semibold">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#works">Portfolios</a>
          </li>
          <li>
            <a href="#professionalExperiences">Experiências</a>
          </li>
          <li>
            <a href="#blogs">Blog</a>
          </li>
        </ul>
        <aside className="lg:w-3/12 flex justify-center items-center gap-4">
          <MdOutlineDarkMode size={25} className="cursor-pointer" />
          <div className="px-4 py-2 border-2 border-gray-400 rounded-xl cursor-pointer">
            <TbUserSearch size={25} />
          </div>
          <BiMenu
            size={30}
            className="block lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </aside>
      </nav>
      {menuOpen && (
        <ul className="w-full flex flex-col justify-center items-center gap-3 text-xl font-semibold">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#works">Portfolios</a>
          </li>
          <li>
            <a href="#professionalExperiences">Experiências</a>
          </li>
          <li>
            <a href="#blogs">Blog</a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
