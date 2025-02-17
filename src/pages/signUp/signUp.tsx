import { useState } from "react";
import Swal from "sweetalert2";
import moment from "moment";
import postUser from "../../services/user/postUser";
import wintLogo from "../../assets/wintLogo.png";
import "./signUp.scss";

const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");

  const [activeInput, setActiveInput] = useState<boolean>(false);

  async function handleNewUser() {
    if (!name || !username || !email || !password || !birthDate) {
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

    const userCreated = await postUser({
      name,
      username,
      email,
      password,
      birthDate: moment(birthDate).format("DD/MM/YYYY"),
      role: "USER",
    });

    if (userCreated.id) {
      Swal.fire(
        "Sucesso",
        "Parabéns, seu usuário foi criado com sucesso.",
        "success"
      );

      return setTimeout(() => {
        window.location.assign("/");
      }, 1500);
    } else {
      Swal.fire(
        "Erro",
        "Desculpe, algo deu errado ao criar seu usuário... <br /> Por favor, confira os dados inseridos e tente novamente.",
        "error"
      );
    }
  }

  return (
    <div className="sign-up-page w-[100vw] h-[100vh] overflow-x-hidden flex items-center justify-between bg-[#222222] text-white max-[992px]:flex-col max-[992px]:justify-start max-[992px]:pt-10">
      <aside className="aside-logo w-1/2 max-[992px]:w-[150px] max-[992px]:mb-4">
        <img src={wintLogo} alt="Wint Logotype" className="ml-auto min-[993px]:w-[80%]" />
      </aside>
      <aside className="aside-form w-2/5 mx-auto max-[992px]:w-[90vw] max-[992px]:pb-6">
        <h1 className="mb-3 text-6xl text-center font-normal max-[1200px]:text-4xl min-[2000px]:text-9xl">
          Primeira vez?
        </h1>
        <p className="mb-7 text-lg text-center text-gray-400 max-[1200px]:mb-5 max-[1200px]:text-base min-[2000px]:text-3xl">
          Preencha os dados abaixo para realizar seu cadastro.
        </p>
        <form className="flex flex-col m-auto">
          <label htmlFor="name" className="font-semibold text-lg mb-1 max-[1200px]:text-base min-[2000px]:text-3xl">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            placeholder="Insira seu nome completo"
            onChange={(e) => setName(e.target.value)}
            className="bg-[#383838] h-12 rounded-lg indent-3 mb-3 max-[1200px]:h-10 min-[2000px]:h-16"
          />
          <label htmlFor="username" className="font-semibold text-lg mb-1 max-[1200px]:text-base min-[2000px]:text-3xl">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Insira seu username"
            onChange={(e) => setUsername(e.target.value)}
            className="bg-[#383838] h-12 rounded-lg indent-3 mb-3 max-[1200px]:h-10 min-[2000px]:h-16"
          />
          <label htmlFor="date" className="font-semibold text-lg mb-1 max-[1200px]:text-base min-[2000px]:text-3xl">
            Data de Nascimento
          </label>
          <input
            type="date"
            id="date"
            className={`bg-[#383838] h-12 rounded-lg indent-1 pl-1 max-[1200px]:h-10 min-[2000px]:h-16 pr-4 mb-3 ${
              !activeInput && "text-gray-400"
            }`}
            onChange={(e) => {
              setBirthDate(e.target.value);
              setActiveInput(true);
            }}
          />
          <label htmlFor="email" className="font-semibold text-lg mb-1 max-[1200px]:text-base min-[2000px]:text-3xl">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="name@company.com"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#383838] h-12 rounded-lg indent-3 mb-3 max-[1200px]:h-10 min-[2000px]:h-16"
          />
          <label htmlFor="password" className="font-semibold text-lg mb-1 max-[1200px]:text-base min-[2000px]:text-3xl">
            Senha
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#383838] h-12 rounded-lg indent-3 mb-4 max-[1200px]:h-10 min-[2000px]:h-16"
          />
          <button
            type="button"
            onClick={() => handleNewUser()}
            className="bg-[#652EBE] hover:bg-[#5724a7] transition-all h-14 rounded-xl font-semibold text-xl max-[1200px]:h-12 min-[2000px]:h-20 min-[2000px]:text-3xl"
          >
            Cadastrar-se
          </button>
          <p className="mt-4 text-center min-[2000px]:text-2xl">
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
