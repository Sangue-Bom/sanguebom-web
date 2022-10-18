import {Link} from "react-router-dom";
import { useState } from "react";
import Close from "../../assets/close.svg"
import Chat from "../../assets/chat.svg"
import Award from "../../assets/award.svg"
import Hamburguer from "../../assets/hamburguer.svg"
import Ranking from "../../assets/ranking.svg"

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
        <aside className="h-screen w-[17vw] bg-[#fff] gap-4 flex flex-col p-6 shadow-2xl duration-300 fixed">
          {/*Close button*/}
          <div className="w-full flex justify-end mt-3 mb-20 cursor-pointer">
            <img
              src={Close}
              className="w-3 h-3"
              onClick={toggleMenu}
              alt=""
            />
          </div>

          {/*Informatives button that navigates to /informatives route*/}
          <div className="flex flex-col gap-4">
            <Link to="/informatives">
              <div className="flex justify-between cursor-pointer">
                <h3 className="font-bold text-primary text-lg origin-left duration-300">
                  Informativos
                </h3>
                <img src={Chat} className="w-8 h-8" alt=""/>
              </div>
            </Link>

            <hr className="w-full h-[1px] bg-[#FFABAB] border-none" />

            {/*Certificates button that navigates to /certificates route*/}
            <Link to="/certificates">
              <div className="flex justify-between cursor-pointer">
                <h3 className="font-bold text-primary text-lg origin-left duration-300">
                  Certificados
                </h3>
                <img src={Award} className="w-8 h-8" alt=""/>
              </div>
            </Link>

            <hr className="w-full h-[1px] bg-[#FFABAB] border-none" />

            {/*Ranking button that navigates to /ranking route*/}
            <Link to="/ranking">
              <div className="flex justify-between cursor-pointer">
                <h3 className="font-bold text-primary text-lg origin-left duration-300">
                  Ranking
                </h3>
                <img src={Ranking}className="w-8 h-8" alt=""/>
              </div>
            </Link>
          </div>
        </aside>

      ) : (

        /*Closed menu*/
        <aside className="h-screen w-16 bg-[#fff] fixed gap-4 flex flex-col p-2 shadow-2xl items-center transition-all duration-300 ease-in-out">
          {/*Open button*/}
          <div className="my-11 self-center cursor-pointer">
                <img src={Hamburguer} className="w-6 h-6" alt="" onClick={toggleMenu} />
          </div>

          {/*Navigation buttons*/}
          <div className="flex flex-col gap-6 [&>*]:cursor-pointer">
            {/*Informatives button that navigates to /informatives route*/}
            <Link to="/informatives">
              <img src={Chat} className="w-6 h-6" alt=""/>
            </Link>

            {/*Certificates button that navigates to /certificates route*/}
            <Link to="/ranking">
              <img src={Award} className="w-6 h-6" alt=""/>
            </Link>

            {/*Ranking button that navigates to /ranking route*/}
            <Link to="/ranking">
              <img src={Ranking} className="w-6 h-6" alt=""/>
            </Link>
          </div>
        </aside>
      )}
    </>
  );
}
