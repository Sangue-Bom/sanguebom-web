import Image from "next/image"
import Link from	"next/link"

export default function LoginPage() {
return(
	<>
<div className="h-screen flex flex-col items-center bg-gray-base">
	<div className="w-full flex flex-col justify-between items-center mt-[25vh]">
		<Image src="/logo-name-vertical.svg" height={150} width={240} priority={true}/>
		<div className="flex flex-col items-center gap-4">
		<h2 className="font-bold text-primary">Entrar</h2>
			<input placeholder="Nome de usuário" className="w-full h-10 "/>
			<input placeholder="Senha" className="w-full h-10 "/>
			<button className="btn-primary w-full h-10">Entrar</button>
		</div>
	</div>
</div>
		<footer className="absolute top-[95%] left-[50%] ml-[-150px]">Ainda não possui uma conta? <Link href="/sign-up"><a className="underline text-primary">Cadastrar</a></Link></footer>
	</>
)
}
