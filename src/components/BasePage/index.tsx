import Avatar from "../Avatar";
import Menu from "../Menu";
import {ReactNode} from "react"

interface BasePageProps {
	children:ReactNode;
}
export default function BasePage({children}:BasePageProps) {
	return(
		<div className="min-h-screen flex overflow-hidden">
			<Menu/>
			<Avatar/>
			<div className="w-full min-h-screen bg-gray-base a flex flex-col pr-8 pl-24 lg:pr-20 lg:pl-32 pb-8">
				{children}
			</div>
		</div>
	);}
