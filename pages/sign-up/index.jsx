import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SingUp() {
  // State tha represents the profile pic value
  const [profilePic, setProfilePic] = useState(null);

  // Function that reads the file and parses its value
  // to profilePic
  function handleProfilePic(value) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(value);
    fileReader.onloadend = (event) => setProfilePic(event.target.result);
  }

  return (
    /*Content column*/
    <div className="flex flex-col items-center w-full h-screen">
      <div className="w-72 flex flex-col items-center gap-4 mt-[25vh]">
        <Image
          src="/logo-name-vertical.svg"
          width={240}
          height={150}
          priority={true}
        />
        <h3 className="font-bold text-primary">Cadastrar</h3>

        {/*Avatar upload*/}
        <div className="rounded-full min-w-[20vh] w-60 min-h-[20vh] h-60 border-spacing-1 outline outline-primary">
          {profilePic ? (
            <img
              src={profilePic}
              className="w-[237px] h-[237px] rounded-full"
            />
          ) : (
            /*Avatar place holder*/
            <div className="rounded-full w-[98%] h-[98%] bg-secondary relative top-[1%] left-[1%] flex flex-col justify-center items-center">
              <Image
                src="/hospital.svg"
                width={100}
                height={100}
                layout="intrinsic"
              />
              <span className="text-[#FFFFFF] text-[8px] text-center">
                Envie uma imagem que representa a <br /> organização para o
                perfil
              </span>
            </div>
          )}
          <div className="rounded-full grid place-items-center bg-primary-dark hover:bg-primary w-[4vh] h-[4vh] relative left-[70%] top-[-15%]">
            {/*File input icon*/}
            <label
              for="inputTag"
              className="cursor-pointer grid place-items-center w-full h-full"
            >
              <input
                type="file"
                id="inputTag"
                onChange={(event) => handleProfilePic(event.target.files[0])}
                className="hidden"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-[70%] h-[70%]"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </label>
          </div>
        </div>

        {/*Input fields*/}
        <span className="self-start">Informações de login</span>

        <input placeholder="Nome de usuário" className="w-full h-10" />
        <input placeholder="Senha" type="password" className="w-full h-10" />
        <input
          placeholder="Confirmar senha"
          type="password"
          className="w-full h-10"
        />

        <span className="self-start">Endereço</span>

        <input placeholder="CEP" className="h-10 w-72" />
        <div className="flex justify-between w-full">
          <input placeholder="Rua" className="h-10 w-52" />
          <input placeholder="Nº" className="w-16 h-10" />
        </div>

        <input placeholder="Bairro" className="h-10 w-72" />
        <div className="flex justify-between w-full">
          <input placeholder="Cidade" className="h-10 w-52" />
          <input placeholder="UF" className="w-16 h-10" />
        </div>

        {/*Sign-up button*/}
        <button className="w-full h-10 btn-primary mt-14">Cadastrar</button>

        {/*Sign-in link*/}
        <span className=" mt-14 mb-20">
          Já possui uma conta?{" "}
          <Link href="/login">
            <a className="underline text-primary">Faça login</a>
          </Link>
        </span>
      </div>
    </div>
  );
}
