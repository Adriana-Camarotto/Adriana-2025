import Footer from "./Footer";
import PolygonBackground from "../assets/geometricContact.png";
export function ContactSection() {
  return ( 
    <section className="bg-[#FF3A7A] text-white font-['Gilroy'] relative">
      {/* Intro + Form */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-3 w-full">
          <h2 className="w-full md:w-[607px] text-[40px] sm:text-[55px] md:text-[60px] font-bold leading-[1] mb-8">
            We’re{" "}
            <span
              className="font-extrabold"
              style={{
                WebkitTextStroke: "1px white",
                color: "transparent",
                display: "inline-block"
              }}
            >
              your
            </span>{" "}
            IT Services<br />
            problem solvers
          </h2>
          <p className="text-base leading-relaxed ">
            Recognising your frustrations with your print environment, IT services,
            document management & communications and finding.
          </p>
          <p className="text-base mb-8">Get in touch today!</p>
        </div>

        <form className="space-y-4 w-full ">
          {['Name', 'Email', 'Telephone', 'Company', 'I need help with…'].map((label, i) => (
            <input
              key={i}
              type={i === 1 ? 'email' : 'text'}
              placeholder={label}
              className="w-full text-[16px] font-400 bg-transparent border border-white rounded-none px-4 py-3 placeholder-white/60 focus:outline-none font-['IBM_Plex_Mono']"
            />
          ))}
          <button
            type="submit"
            className="mt-4 bg-white text-[16px] text-[#3C2A7D] font-semibold px-24-important py-3 font-['IBM_Plex_Mono']"
          >
            <p>Submit now</p>
          </button>
        </form>
      </div>
      {/* Polygon background */}
      <div className="absolute inset-0 opacity-100 z-0 overflow-hidden">
        <img
          src={PolygonBackground} 
          alt="Polygon Background"
          className="max-w-[auto] h-[70vh] mr-[0px] md:mr-[920px] mt-[1100px] md:mt-[180px]  object-cover absolute top-0 right-0 "
        />
      </div>
      <Footer />

    </section>
  )
}
  