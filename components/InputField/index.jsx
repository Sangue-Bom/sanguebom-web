export default function InputField({placeholder = "Input Field", className}) {
	return(
		<input className='w-full h-10 p-3 border-2 rounded appearance-none bg-[#F0F0F5] focus:outline-none border-primary' placeholder={placeholder} />
	)
}

