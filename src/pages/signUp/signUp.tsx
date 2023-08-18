import { useState } from "react";
import wintLogo from "../../assets/wintLogo.png";
import "./signUp.scss"

const SignUp = () => {
  const [activeInput, setActiveInput] = useState<boolean>(false);

  return (
    <div className="sign-up-page w-[100vw] h-[100vh] overflow-hidden flex items-center justify-between bg-[#222222] text-white max-[992px]:flex-col max-[992px]:justify-center">
      <aside className="aside-logo w-1/2 max-[992px]:w-[200px] max-[992px]:mb-4 max-[320px]:w-[150px]">
        <img src={wintLogo} alt="Wint Logotype" className="ml-auto" />
      </aside>
      <aside className="aside-form w-2/5 mx-auto max-[992px]:w-[90vw]">
        <h1 className="mb-3 text-5xl text-center font-normal max-[450px]:text-4xl">Primeira vez?</h1>
        <p className="mb-7 text-lg text-center text-gray-400">
          Preencha os dados abaixo para realizar seu cadastro.
        </p>
        <form className="flex flex-col max-w-xl m-auto">
          <label htmlFor="name" className="font-semibold text-lg mb-1">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            placeholder="Meu Nome Completo"
            className="bg-[#383838] h-12 rounded-lg indent-3 mb-3"
          />
          <label htmlFor="date" className="font-semibold text-lg mb-1">
            Data de Nascimento
          </label>
          <input
            type="date"
            id="date"
            className={`bg-[#383838] h-12 rounded-lg indent-1 pl-1 pr-4 mb-3 ${
              !activeInput && "text-gray-400"
            }`}
            onChange={(e) => setActiveInput(true)}
          />
          <label htmlFor="email" className="font-semibold text-lg mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="name@company.com"
            className="bg-[#383838] h-12 rounded-lg indent-3 mb-3"
          />
          <label htmlFor="password" className="font-semibold text-lg mb-1">
            Senha
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            className="bg-[#383838] h-12 rounded-lg indent-3 mb-4"
          />
          <button className="bg-[#652EBE] hover:bg-[#5724a7] transition-all h-14 rounded-xl font-semibold text-xl">
            Cadastrar-se
          </button>
          <p className="mt-4 text-center">
            Já tem conta?{" "}
            <a className="font-semibold" href="/">
              Fazer login
            </a>
          </p>
        </form>
      </aside>
    </div>
  );
};

export default SignUp;
