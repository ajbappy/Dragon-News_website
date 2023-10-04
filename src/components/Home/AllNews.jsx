import { AiOutlineShareAlt } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa6";

const AllNews = ({ newsItem }) => {
  //   const date = newsItem.published_date?.split(" ")[0];

  return (
    <div className="mb-5">
      <div className="flex justify-between items-center bg-[#F3F3F3] py-2 px-5">
        <div className="flex items-center gap-2">
          <img
            src={newsItem.author.img}
            alt=""
            className="w-[50px] rounded-full"
          />
          <div>
            <h2>{newsItem.author.name}</h2>
            <p>{newsItem.author.published_date}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FaBookmark></FaBookmark>
          <AiOutlineShareAlt></AiOutlineShareAlt>
        </div>
      </div>

      <div className="p-3 border">
        <h2 className="text-md font-bold text-black">{newsItem.title}</h2>
        <img
          src={newsItem.thumbnail_url}
          alt=""
          className="w-full max-h-[300px] rounded-none"
        />
        <div className="my-5">
          {newsItem.details.length > 200 ? (
            <div>
              <p className="text-base font-normal text-[#706F6F]">
                {newsItem.details.slice(0, 200)}...
              </p>
              <button className="text-[#df6145]">Read More</button>
            </div>
          ) : (
            <p className="text-base font-normal text-[#706F6F]">
              {newsItem.details}
            </p>
          )}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default AllNews;
