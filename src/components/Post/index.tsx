interface PostProps {
	pic?:string,
	title:string,
	text:string
}

export default function Post({pic="", title, text}:PostProps) {
	return (
		<div className="bg-[#FFFFFF] rounded-xl shadow-xl w-96 h-28 flex gap-5 px-6 py-3">
			<img src={pic} className="rounded-full w-24 h-24" alt=""/>
			<div className="flex flex-col justify-between">
				<h3 className="text-sm font-medium text-primary">{title}</h3>
				<div className="text-xs font-light">{text}</div>
				<div className="flex gap-28">
					<img src="/like.svg" className="w-12 h-12" alt=""/>
					<img src="/comment.svg" className="w-12 h-12" alt=""/>
					<img src="/share.svg" className="w-12 h-12" alt=""/>
				</div>
			</div>
		</div>
	);
}
