import InputField from "../../components/InputField/index"
import Button from "../../components/Button/index"
import Image from "next/image"

export default function LoginPage() {
return(
	<>
<div className="h-screen place-items-center grid bg-[#F0F0F5]">
	<div className="w-full w-[20%] h-[40%] flex flex-col justify-between items-center">
		<Image src="/logo-name-vertical.svg" height={150} width={240} />
		<div className="flex flex-col items-center gap-4">
		<h2 className="font-bold text-primary">Entrar</h2>
		<InputField placeholder='Nome de usuário'/>
		<InputField placeholder='Senha' className='w-full'/>
		<Button>Entrar</Button>
		</div>
	</div>
</div>
	<footer className="absolute top-[95%] left-[50%] ml-[-150px]">Ainda não possui uma conta? <a className="underline text-primary" href="google.com">Cadastrar</a></footer>
	</>
)
}
