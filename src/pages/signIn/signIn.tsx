import wintLogo from "../../assets/wintLogo.png";

const SignIn = () => {
  return (
    <div className="sign-in-page w-[100vw] h-[100vh] overflow-hidden flex items-center justify-between bg-[#222222] text-white max-[992px]:flex-col-reverse max-[992px]:justify-center">
      <aside className="aside-form w-2/5 mx-auto max-[992px]:w-[90vw]">
        <h1 className="mb-3 text-6xl text-center font-normal max-[450px]:text-4xl">Bem-vindo(a)!</h1>
        <p className="mb-7 text-xl text-center text-gray-400 max-[450px]:text-lg">
          Insira suas credenciais abaixo para conectar-se.
        </p>
        <form className="flex flex-col max-w-xl m-auto">
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
            className="bg-[#383838] h-12 rounded-lg indent-3 mb-3"
          />
          <div className="flex justify-between mb-3">
            <label className="font-light">
              <input type="checkbox" className="cursor-pointer" /> Lembrar dados
            </label>
            <a href="#id" className="font-semibold">
              Esqueceu a senha?
            </a>
          </div>
          <button className="bg-[#652EBE] hover:bg-[#5724a7] h-14 rounded-xl font-semibold text-xl">
            Login
          </button>
          <p className="mt-4 text-center">
            Ainda não tem uma conta?{" "}
            <a className="font-semibold" href="/sign-up">
              Registre-se aqui!
            </a>
          </p>
        </form>
      </aside>
      <aside className="aside-logo w-1/2 max-[992px]:w-[300px] max-[992px]:mb-4 max-[450px]:w-[250px]">
        <img src={wintLogo} alt="Wint Logotype" />
      </aside>
    </div>
  );
};

export default SignIn;
