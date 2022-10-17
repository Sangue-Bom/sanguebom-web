import Image from "next/image"
import Link from	"next/link"
import {useContext} from "react"
import {LoginContext} from "./LoginContext"
import InputField from "../../components/InputField"

export default function LoginPage() {
	const {user, handleLogin, handleUsername, handlePassword} = useContext(LoginContext);

return(
	<>
<div className="h-screen flex flex-col items-center bg-gray-base">
	<div className="w-full flex flex-col justify-between items-center mt-[25vh]">
		<Image src="/logo-name-vertical.svg" height={150} width={240} priority={true}/>
		<div className="flex flex-col items-center gap-4">
		<h2 className="font-bold text-primary">Entrar</h2>
			<InputField placeholder="Nome de usuário" className="w-full h-10" validation={handleUsername}/>

			<InputField placeholder="Senha" className="w-full h-10" type="password" validation={handlePassword}/>
			<button className="btn-primary w-full h-10" onClick={handleLogin}>Entrar</button>
		</div>
	</div>
</div>
		<footer className="absolute top-[95%] left-[50%] ml-[-150px]">Ainda não possui uma conta? <Link href="/sign-up"><a className="underline text-primary">Cadastrar</a></Link></footer>
	</>
)
}
