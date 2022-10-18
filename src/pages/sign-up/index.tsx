import {Link} from "react-router-dom";
import { useContext, useState } from "react";
import SignUpManager from "./SingUpManager";
import { SignUpContext } from "./SingUpContext";
import InputField from "../../components/InputField/index";
import Logo from "../../assets/logo-name-vertical.svg";
import Hospital from "../../assets/hospital.svg";

export default function SingUp() {
  // State tha represents the profile pic value
  const [profilePic, setProfilePic] = useState<any>();

  // Instace of the validation and sing-up class
  const validation = new SignUpManager();

  // Extracting values from the SignUpContext which
  // manages the states and its 'sets'
  const {
    user,
    setName,
    setPassword,
    setConfirmPassword,
    setCep,
    setCity,
    setAddressNumber,
    setState,
    setStreet,
    setNeighborhood,
  } = useContext(SignUpContext);

  // Function that reads the file and parses its value
  // to profilePic
  function handleProfilePic(value:Blob) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(value);
    fileReader.onloadend = (event) => setProfilePic(event.target!.result);
    user.profilePic = profilePic;
  }

  return (
    <>
      {/*Content column*/}
      <div className="flex flex-col items-center w-full min-h-screen bg-gray-base">
        <div className="w-72 flex flex-col items-center gap-4 mt-[25vh]">
          <img
            src={Logo}
            className="w-60 h-36"
            alt=""
          />
          <h3 className="font-bold text-primary">Cadastrar</h3>

          {/*Avatar upload*/}
          <div className="rounded-full min-w-[20vh] w-60 min-h-[20vh] h-60 border-spacing-1 outline outline-primary">
            {profilePic ? (
              <img
                src={profilePic}
                className="w-[237px] h-[237px] rounded-full"
                alt=""
              />
            ) : (
              /*Avatar place holder*/
              <div className="rounded-full w-[98%] h-[98%] bg-secondary relative top-[1%] left-[1%] flex flex-col justify-center items-center">
                <img
                  src={Hospital}
                  className="w-24 h-24"
                  alt=""
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
                htmlFor="inputTag"
                className="cursor-pointer grid place-items-center w-full h-full"
              >
                <input
                  type="file"
                  id="inputTag"
                  onChange={(event) => handleProfilePic(event.target.files![0])}
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
                  />{" "}
                </svg>
              </label>
            </div>
          </div>

          {/*Input fields*/}
          <span className="self-start">Informações de login</span>

          <InputField
            placeholder="Nome de usuário"
            className="w-full h-10"
            validation={setName}
          />

          <InputField
            placeholder="Senha"
            type="password"
            className="w-full h-10"
            validation={setPassword}
          />

          <InputField
            placeholder="Confirmar senha"
            type="password"
            className="w-full h-10"
            validation={setConfirmPassword}
          />

          <span className="self-start">Endereço</span>

          <InputField
            placeholder="CEP"
            className="h-10 w-full"
            validation={setCep}
          />
          <div className="flex justify-between w-full items-end">
            <div className="flex flex-col">
              <InputField
                placeholder="Rua"
                className="h-10 w-52"
                validation={setStreet}
              />
            </div>
            <div className="flex flex-col">
              <InputField
                placeholder="Nº"
                className="w-16 h-10"
                validation={setAddressNumber}
              />
            </div>
          </div>

          <InputField
            placeholder="Bairro"
            className="h-10 w-72"
            validation={setNeighborhood}
          />

          <div className="flex justify-between w-full items-end">
            <div className="flex flex-col">
              <InputField
                placeholder="Cidade"
                className="h-10 w-52"
                validation={setCity}
              />
            </div>
            <div className="flex flex-col">
              <InputField
                placeholder="UF"
                className="w-16 h-10"
                validation={setState}
              />
            </div>
          </div>

          {/*Sign-up button*/}
          <button
            className="w-full h-10 btn-primary mt-14 disabled:bg-gray-dark"
            onClick={() => {
              validation.handleSignUp(user, profilePic);
            }}
          >
            Cadastrar
          </button>

          {/*Sign-in link*/}
          <span className=" mt-14 mb-20">
            Já possui uma conta?{" "}
            <Link to="/" className="text-primary underline">
              Faça login
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
