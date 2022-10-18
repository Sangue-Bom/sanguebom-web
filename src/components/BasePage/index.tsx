import Avatar from "../Avatar";
import Menu from "../Menu";
import React, {ReactNode} from "react"

interface BasePageProps {
	children:ReactNode;
}
export default function BasePage({children}:BasePageProps) {
	return(
		<>
			<Menu/>
			<Avatar/>
      <div className="w-screen h-screen bg-gray-base absolute top-0 -z-10 flex flex-col pr-20 pl-32">
				{children}
			</div>
		</>
	);}
