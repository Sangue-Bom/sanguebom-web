import Like from "../../assets/like.svg";
import Comment from "../../assets/comment.svg";
import Share from "../../assets/share.svg";

interface PostProps {
	pic?:string,
	title:string,
	text:string
}

export default function Post({pic="", title, text}:PostProps) {
	return (
		<div className="bg-[#FFFFFF] rounded-xl shadow-xl w-80 h-28 flex gap-5 px-6 py-3">
			<img src={pic} className="rounded-full w-14 h-14" alt=""/>
			<div className="flex flex-col justify-between w-full">
				<h3 className="text-sm font-medium text-primary">{title}</h3>
				<div className="text-xs font-light">{text}</div>
				<div className="flex w-full justify-between">
					<img src={Like} className="w-3 h-3" alt=""/>
					<img src={Comment} className="w-3 h-3" alt=""/>
					<img src={Share} className="w-3 h-3" alt=""/>
				</div>
			</div>
		</div>
	);
}
