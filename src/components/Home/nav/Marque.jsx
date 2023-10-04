import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <div className="flex bg-gray-100 p-5 text-black font-medium">
      <button className="px-5 py-2 bg-red-700 text-white">Latest</button>
      <Marquee pauseOnHover={true}>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default Marque;
