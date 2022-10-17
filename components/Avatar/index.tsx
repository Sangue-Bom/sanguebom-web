import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { LoginContext } from "../../pages/login/LoginContext";

export default function Avatar() {
  // State that represents if tab is open,
  // default value is false
  const [tabOpen, setTabOpen] = useState(false);

  const { user } = useContext(LoginContext);

  // Function that toggles the tab state
  function toggleTab() {
    setTabOpen(!tabOpen);
  }

  return (
    <>
      {/*Base avatar icon*/}
      {user.hosp_pic ? (
        <div
          className="h-16 w-16 rounded-full absolute top-7 right-20 z-50 shadow-2xl cursor-pointer"
          onClick={toggleTab}
        >
        <Image
          src={user.hosp_pic}
          width={62}
          height={62}
          className="rounded-full cursor-pointer"
        />
        </div>
      ) : (
        <div
          className="h-16 w-16 rounded-full bg-[#FFFFFF] grid place-items-center absolute top-7 right-20 z-50 shadow-2xl cursor-pointer"
          onClick={toggleTab}
        >
          <Image src="/user.svg" width={25} height={25} />
        </div>
      )}

      {/*Tab menu*/}
      {tabOpen && (
        <div className="w-52 h-32 bg-[#FFFFFF] py-5 px-8 absolute top-20 right-36 z-10 shadow-2xl rounded-l-lg rounded-b-lg duration-1000 flex flex-col gap-3 items-center justify-center text-primary [&>h3]:cursor-pointer">
          <Link href="/profile">
            <h3 className="w-full text-center">Editar perfil</h3>
          </Link>
          <hr className="w-full h-[1px] border-none bg-primary" />
          <Link href="/login">
            <h3 className="w-full text-center">Sair</h3>
          </Link>
        </div>
      )}
    </>
  );
}
