import Image from "next/image";

interface PostProps {
	pic?:string,
	title:string,
	text:string
}

export default function Post({pic="", title, text}:PostProps) {
	return (
		<div className="bg-[#FFFFFF] rounded-xl shadow-xl w-96 h-28 flex gap-5 px-6 py-3">
			<Image src={pic} height={54} width={54} className="rounded-full"/>
			<div className="flex flex-col justify-between">
				<h3 className="text-sm font-medium text-primary">{title}</h3>
				<div className="text-xs font-light">{text}</div>
				<div className="flex gap-28">
					<Image src="/like.svg" width={13} height={13}/>
					<Image src="/comment.svg" width={13} height={13}/>
					<Image src="/share.svg" width={13} height={13}/>
				</div>
			</div>
		</div>
	);
}
