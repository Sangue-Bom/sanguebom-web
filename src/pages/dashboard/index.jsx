import axios from "axios";
import { useContext, useEffect, useState } from "react";
import BasePage from "../../components/BasePage/index";
import Post from "../../components/Post";
import { LoginContext } from "../login/LoginContext";
import Upload from "../../assets/upload.svg";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = useContext(LoginContext);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [informative, setInformative] = useState({
    text: "",
    type: 1,
    points: "",
    owner_id: user.hosp_id_pk,
  });

  function fetchPosts() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/hospital/${user.hosp_id_pk}`)
      .then((res) => {
        res.data.reverse();
        let posts = res.data.slice(0, 6);
        setPosts(posts);
        setInformative({
          text: "",
          type: 1,
          points: "",
          owner_id: user.hosp_id_pk,
        });
      });
  }

  useEffect(() => {
    if (user.username === "") {
      navigate("/");
    }
    fetchPosts();
  }, []);

  return (
    <BasePage>
      <h1 className="mt-24 font-bold text-2xl text-gray-dark pb-5">
        Seja bem vindo
        <span className="text-primary">
          {user.hosp_name ? `, ${user?.hosp_name}` : ""}
        </span>
        !
      </h1>
      <hr className="w-full h-[1px] border-none bg-[#C0C0C4] mb-14" />
      <h1 className="font-bold text-2xl mb-6">Últimos informativos</h1>
      <div className="w-full min-h-40 bg-[#FFFFFF] shadow-2xl rounded-lg grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 p-7 gap-4 mb-12">
        {posts.map((post, key) => (
          <Post
            text={post.post_text}
            title={user.hosp_name}
            pic={user.hosp_pic}
            key={key}
          />
        ))}
      </div>

      {/*Create Informative*/}
      <div className="lg:w-96 sm:w-full min-h-96 bg-[#FFFFFF] p-5 shadow-2xl rounded-lg mb-16">
        <h1 className="font-bold text-primary text-2xl mb-7">
          Criar informativo
        </h1>
        <textarea
          className="w-full h-40 rounded-lg text-xs bg-gray-base p-4 outline-none mb-4"
          placeholder="Digite o texto informativo aqui..."
          value={informative.text}
          onChange={(event) =>
            setInformative({
              ...informative,
              text: event.target.value,
            })
          }
        />
        <textarea
          className="w-full h-12 text-xs rounded-lg bg-gray-base p-4 outline-none mb-4"
          placeholder="Digite a quantidade de pontos da publicação..."
          value={informative.points}
          onChange={(event) =>
            setInformative({
              ...informative,
              points: event.target.value,
            })
          }
        />
        <div className="w-full flex justify-between mb-8">
          <label
            htmlFor="file"
            className="w-20 h-14 rounded-lg bg-[#FFD5D5] grid place-items-center cursor-pointer"
          >
            <input id="file" type="file" className="hidden" />
            <img src={Upload} className="w-5 h-4" alt="" />
          </label>
          <button
            className="w-64 h-14 rounded-lg bg-primary grid place-items-center text-xl font-bold text-white"
            onClick={() => {
              axios
                .post(`${process.env.REACT_APP_API_URL}/create-post`, {
                  post_text: informative.text,
                  post_type: informative.type,
                  post_points_to_share: parseInt(informative.points),
                  post_owner_id: informative.owner_id,
                })
                .then(() => {
                  fetchPosts();
                });
            }}
          >
            Enviar
          </button>
        </div>
      </div>
    </BasePage>
  );
}
