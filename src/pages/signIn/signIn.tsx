import { FormGroup, Button } from "@mui/material";
import wintLogo from "../../assets/wintLogo.png";

const SignIn = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden flex items-center justify-between bg-[#222222] text-white">
      <aside className="w-2/5 mx-auto">
        <h1 className="mb-3 text-6xl text-center font-normal">Bem-vindo(a)!</h1>
        <p className="mb-7 text-xl text-center text-gray-400">
          Coloque os dados abaixo para conectar
        </p>
        <FormGroup className="max-w-xl m-auto">
          <label htmlFor="email" className="font-semibold text-lg mb-1">
            Email
          </label>
          <input
            type="text"
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
              <input type="checkbox" className="cursor-pointer" /> Lembrar
              dados
            </label>
            <a href="#id" className="font-semibold">Esqueceu a senha?</a>
          </div>
          <button className="bg-[#652EBE] hover:bg-[#5724a7] h-14 rounded-xl font-semibold text-xl">
            Login
          </button>
          <p className="mt-4 text-center">Ainda não tem uma conta? <a className="font-semibold" href="#id">Registre-se aqui!</a></p>
        </FormGroup>
      </aside>
      <aside className="w-1/2">
        <img src={wintLogo} alt="Wint Logotype" />
      </aside>
    </div>
  );
};

export default SignIn;
