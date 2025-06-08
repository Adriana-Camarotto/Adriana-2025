import folderFileIcon from "../assets/folderFileIcon.svg";
import laptopIcon from "../assets/laptopIcon.svg";
import printerIcon from "../assets/printerIcon.svg";
import talkIcon from "../assets/talkIcon.svg";


const cards = [
  {
    title: "IT Services",
    description:
      "Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.",
    link: "/",
     image: laptopIcon,
  },
  {
    title: "Managed Print Services",
    description: "Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.",
    link: "/",
   image: printerIcon,
  },
  {
    title: "Document Management",
    description:
      "Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.",
    link: "/",
    image: folderFileIcon,
  },
  {
    title: "Communications",
    description: "Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.",
    link: "/",
    image: talkIcon,
  },
];

const CardsSection = () => {
return (
  <section className="bg-[#FFFFFF] top-0 text-white p-6 md:px-6 py-24 md:py-40 relative  ">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-[-150px] md:mt-[-250px]  relative z-30  hover:text-[#FFFFFF] transition duration-300">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group bg-[#FFFFFF] hover:bg-[#F4207B] border-none rounded-lg shadow hover:shadow-lg transition p-12 flex flex-col items-center justify-center text-center animate-fade-in"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-[45px] h-[45px]  object-cover rounded mb-4 group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
            <h3 className="text-[#F4207B] text-[21px] font-400 mb-2 group-hover:text-white transition-colors">{card.title}</h3>
            <p className="text-[#000000]  text-[12px] mb-4 group-hover:text-white transition-colors">{card.description}</p>
            <a
              href={card.link}
              className="text-[#F4207B] text-[12px] font-400 underline mt-auto group-hover:text-white transition-colors"
            >
              Learn more
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default CardsSection;
