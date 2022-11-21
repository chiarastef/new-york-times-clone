import { useGlobalContext } from "./context";

import style from "./home.module.css";

import Article from "./Article";

function Home() {
  const { articles } = useGlobalContext();

  return (
    <div className={style.container}>
      {articles.map((article, index) => {
        return <Article key={index} {...article} />;
      })}
    </div>
  );
}

export default Home;
