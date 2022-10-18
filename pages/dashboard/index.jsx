import axios from "axios";
import {useContext} from "react";
import BasePage from "../../components/BasePage/index";
import Post from "../../components/Post/index";
import {LoginContext} from "../login/LoginContext";

export default function Dashboard({data}) {
  const {user} = useContext(LoginContext);

  return (
    <BasePage>
      <h1 className="mt-24 font-bold text-2xl text-gray-dark pb-5">Seja bem vindo<span className="text-primary">{user.hosp_name ? `, ${user?.hosp_name}`: ""}</span>!</h1>
      <hr className="w-full h-[1px] border-none bg-[#C0C0C4] mb-14"/>
      <h1 className="font-bold text-2xl mg-6">Últimos informativos</h1>
      <div className="w-full h-40 bg-[#FFFFFF] shadow-2xl rounded-lg flex p-7 gap-7">
        <Post text={data.post_text ? data.post_text : "hello"} pic={user.hosp_pic} title="title"/>
      </div>
    </BasePage>
  );
}

export async function getServerSideProps() {
  let user_id = document.cookie;
  let data = "";

  axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/${user_id}`).then((res) => {
    data = res.data;
  })
  return {
    props: {
      user,
      data
    }
  }
}
