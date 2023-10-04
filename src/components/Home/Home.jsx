import Header from "./nav/Header";
import Marquee from "./nav/Marque";
import Nav from "./nav/Nav";
import HomeRight from "./HomeRight";
import Categoris from "./Categoris";
import AllNews from "./AllNews";
import { useEffect, useState } from "react";

const Home = () => {
  const [selectedCatagoryId, setSelectedCatagoryId] = useState("0");

  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("news.json");
        const newses = await response.json();
        setAllNews(newses);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);

  const handelCatagoryChange = (id) => {
    setSelectedCatagoryId(id);
  };

  const filterdNews =
    selectedCatagoryId === "0"
      ? allNews
      : allNews.filter(
          (singleNews) => singleNews.category_id === selectedCatagoryId
        );

  return (
    <div className="max-w-[1200px] mx-auto px-5">
      <Header></Header>
      <Marquee></Marquee>
      <Nav classNamemt="mt-5"></Nav>

      <div className="grid grid-cols-1 md:grid-cols-4 mt-16 gap-5">
        <div className="col-span-1 md:col-span-1 ">
          <Categoris
            selectedCatagoryId={selectedCatagoryId}
            handelCatagoryChange={handelCatagoryChange}
          ></Categoris>
        </div>
        <div className="col-span-1 md:col-span-2">
          {filterdNews?.map((newsItem) => (
            <AllNews key={newsItem._id} newsItem={newsItem}></AllNews>
          ))}
        </div>
        <div className="col-span-1 md:col-span-1">
          <HomeRight></HomeRight>
        </div>
      </div>
    </div>
  );
};

export default Home;
