import {useContext} from "react";
import BasePage from "../../components/BasePage/index";
import {LoginContext} from "../login/LoginContext";

export default function Dashboard() {
  const {user} = useContext(LoginContext);

  return (
    <BasePage>
      <h1 className="mt-24 font-bold text-2xl text-gray-dark pb-5">Seja bem vindo<span className="text-primary">{user.hosp_name ? `, ${user?.hosp_name}`: ""}</span>!</h1>
      <hr className="w-full h-[1px] border-none bg-[#C0C0C4] mb-14"/>
      <h1 className="font-bold text-2xl mg-6">Últimos informativos</h1>
      <div className="w-full h-40 bg-[#FFFFFF] shadow-2xl rounded-lg flex p-7 gap-7">
      </div>
    </BasePage>
  );
}

