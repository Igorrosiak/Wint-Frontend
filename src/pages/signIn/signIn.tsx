import { useState } from "react";
import Swal from "sweetalert2";
import postLogin from "../../services/auth/postLogin";
import wintLogo from "../../assets/wintLogo.png";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleLogin() {
    if (!email || !password) {
      return Swal.fire(
        "Erro",
        "Por favor, preencha todos os campos corretamente.",
        "error"
      );
    }

    const re = /\S+@\S+\.\S+/;
    if (re.test(email) === false) {
      return Swal.fire(
        "Erro",
        "O email inserido não é válido. <br /> Por favor, verifique e tente novamente.",
        "error"
      );
    }
    
    const userLogged = await postLogin({
      email,
      password,
    });

    if(userLogged.token){
      console.log(userLogged.token)
      // window.location.assign("/");
    } else {
      return Swal.fire(
        "Erro",
        "O email ou senha estão incorretos... <br /> Confira os dados inseridos e tente novamente.",
        "error"
      );
    }
  }

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
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#383838] h-12 rounded-lg indent-3 mb-3"
          />
          <label htmlFor="password" className="font-semibold text-lg mb-1">
            Senha
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#383838] h-12 rounded-lg indent-3 mb-3"
          />
          <button 
            type="button" 
            onClick={() => handleLogin()}
            className="bg-[#652EBE] hover:bg-[#5724a7] h-14 mt-2 rounded-xl font-semibold text-xl">
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
