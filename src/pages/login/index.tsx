import {Link} from	"react-router-dom"
import {useContext} from "react"
import {LoginContext} from "./LoginContext"
import InputField from "../../components/InputField"
import Logo from "../../assets/logo-name-vertical.svg"

export default function LoginPage() {
	const {handleLogin, handleUsername, handlePassword} = useContext(LoginContext);

return(
	<>
<div className="h-screen flex flex-col items-center bg-gray-base">
	<div className="w-full flex flex-col justify-between items-center mt-[25vh]">
		<img src={Logo} className="h-36 w-60" alt=""/>
		<div className="flex flex-col items-center gap-4">
		<h2 className="font-bold text-primary">Entrar</h2>
			<InputField placeholder="Nome de usuário" className="w-full h-10" validation={handleUsername}/>

			<InputField placeholder="Senha" className="w-full h-10" type="password" validation={handlePassword}/>
			<button className="btn-primary w-full h-10" onClick={handleLogin}>Entrar</button>
		</div>
	</div>
</div>
		<footer className="absolute top-[95%] left-[50%] ml-[-150px]">Ainda não possui uma conta? <Link to="/sign-up" className="underline text-primary">Cadastrar</Link></footer>
	</>
)
}
