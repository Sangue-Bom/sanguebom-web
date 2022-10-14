import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Menu() {
  // State value representing if the Menu is open or not,
  // default value is false.
  const [isOpen, setIsOpen] = useState(false);

  // Function that toggles the inverse state of the Menu
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isOpen ? (
        /*Open menu*/
        <div className="h-screen w-[17vw] bg-[#fff] gap-4 flex flex-col p-6 shadow-2xl duration-300  z-10">
          {/*Close button*/}
          <div className="w-full flex justify-end mt-3 mb-20 cursor-pointer">
            <Image
              src="/close.svg"
              width={12}
              height={12}
              onClick={toggleMenu}
              layout="intrinsic"
            />
          </div>

          {/*Informatives button that navigates to /informatives route*/}
          <div className="flex flex-col gap-4">
            <Link href="/informatives" scroll={true}>
              <div className="flex justify-between cursor-pointer">
                <h3 className="font-bold text-primary text-lg origin-left duration-300">
                  Informativos
                </h3>
                <Image src="/chat.svg" width={25} height={25} />
              </div>
            </Link>

            <hr className="w-full h-[1px] bg-[#FFABAB] border-none" />

            {/*Certificates button that navigates to /certificates route*/}
            <Link href="/certificates" scroll={true}>
              <div className="flex justify-between cursor-pointer">
                <h3 className="font-bold text-primary text-lg origin-left duration-300">
                  Certificados
                </h3>
                <Image src="/award.svg" width={25} height={25} />
              </div>
            </Link>

            <hr className="w-full h-[1px] bg-[#FFABAB] border-none" />

            {/*Ranking button that navigates to /ranking route*/}
            <Link href="/ranking" scroll={true}>
              <div className="flex justify-between cursor-pointer">
                <h3 className="font-bold text-primary text-lg origin-left duration-300">
                  Ranking
                </h3>
                <Image src="/ranking.svg" width={25} height={25} />
              </div>
            </Link>
          </div>
        </div>

      ) : (

        /*Closed menu*/
        <div className="h-screen w-[5vw] bg-[#fff] gap-4 flex flex-col p-2 shadow-2xl transition-all duration-300 z-10 ease-in-out">
          {/*Open button*/}
          <div className="my-11 self-center cursor-pointer">
            <Image
              src="/hamburguer.svg"
              width={25}
              height={12}
              onClick={toggleMenu}
            />
          </div>

          {/*Navigation buttons*/}
          <div className="flex flex-col gap-6 [&>*]:cursor-pointer">
            {/*Informatives button that navigates to /informatives route*/}
            <Link href="/informatives" scroll={true}>
              <Image src="/chat.svg" width={25} height={25} />
            </Link>

            {/*Certificates button that navigates to /certificates route*/}
            <Link href="/ranking" scroll={true}>
              <Image src="/award.svg" width={25} height={25} />
            </Link>

            {/*Ranking button that navigates to /ranking route*/}
            <Link href="/ranking" scroll={true}>
              <Image src="/ranking.svg" width={25} height={25} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
