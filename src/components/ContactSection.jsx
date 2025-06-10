import Footer from "./Footer";

export function ContactSection() {
  return (
    <section className="bg-[#FF3A7A] text-white font-['Gilroy'] relative">
      {/* Intro + Form */}
      <div className="max-w-7xl  mx-auto px-6 py-20 lg:grid-cols-2 gap-2">
        <div className="space-y-3 w-full md:w-[607px]">
          <h2 className="w-full md:w-[700px] text-[50px] md:text-[60px] font-bold leading-[1] mb-8">
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

        <form className="space-y-4">
          {['Name', 'Email', 'Telephone', 'Company', 'I need help with…'].map((label, i) => (
            <input
              key={i}
              type={i === 1 ? 'email' : 'text'}
              placeholder={label}
              className="w-full md:w-[488px] text-[16px] font-400 float-right bg-transparent border border-white rounded-none px-4 py-3 placeholder-white/60 focus:outline-none font-['IBM_Plex_Mono']"
            />
          ))}
          <button
            type="submit"
            className="mt-4 bg-white text-[16px] text-[#3C2A7D] font-semibold px-24-imortant py-3 float-right font-['IBM_Plex_Mono']"
          >
            <p>Submit now</p>
          </button>
        </form>
      </div>
      <Footer />
    </section>
  )
}
