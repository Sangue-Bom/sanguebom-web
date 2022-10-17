import axios from "axios"
import Image from "next/image"
import Link from	"next/link"
import {useState} from "react"

interface User {
	login:string,
	password:string
}

export default function LoginPage() {
	const [user, setUser] = useState<User>({login: '', password: ''});

	function handleLogin(value:string) {
		setUser({...user, login: value});
	}

	function handlePassword(value:string) {
		setUser({...user, password: value});
	}

	async function handleSignIn() {
		axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {user_email: user.login, user_password: user.password}).then((res) => console.log(res));
	}

return(
	<>
<div className="h-screen flex flex-col items-center bg-gray-base">
	<div className="w-full flex flex-col justify-between items-center mt-[25vh]">
		<Image src="/logo-name-vertical.svg" height={150} width={240} priority={true}/>
		<div className="flex flex-col items-center gap-4">
		<h2 className="font-bold text-primary">Entrar</h2>
			<input placeholder="Nome de usuário" className="w-full h-10" type="text" onChange={(event) => handleLogin(event.target.value)}/>
			<input placeholder="Senha" className="w-full h-10 " onChange={(event) => handlePassword(event.target.value)}/>
			<button className="btn-primary w-full h-10" onClick={handleSignIn}>Entrar</button>
		</div>
	</div>
</div>
		<footer className="absolute top-[95%] left-[50%] ml-[-150px]">Ainda não possui uma conta? <Link href="/sign-up"><a className="underline text-primary">Cadastrar</a></Link></footer>
	</>
)
}
