import BasePage from "../../components/BasePage/index";

export default function Dashboard() {
  return (
    <BasePage>
        <h1 className="mt-24 font-bold text-2xl text-gray-dark pb-5">Seja bem vindo, <span className="text-primary">Hospital de Teste</span>!</h1>
      <hr className="w-full h-[1px] border-none bg-[#C0C0C4] mb-14"/>
      <h1 className="font-bold text-2xl mg-6">Últimos informativos</h1>
    </BasePage>
  );
}
