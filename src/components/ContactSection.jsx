import Footer from "./Footer";

export function ContactSection() {
  return (
    <section className="bg-[#FF3A7A] text-white">
      {/* Intro + Form */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-[50px] md:text-[60px] font-bold">
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
          <p className="text-base leading-relaxed">
            Recognising your frustrations with your print environment, IT services,
            document management & communications and finding.
          </p>
          <p className="text-base">Get in touch today!</p>
        </div>

        <form className="space-y-4">
          {['Name', 'Email', 'Telephone', 'Company', 'I need help with…'].map((label, i) => (
            <input
              key={i}
              type={i === 1 ? 'email' : 'text'}
              placeholder={label}
              className="w-full  bg-transparent border border-white rounded-none px-4 py-3 placeholder-white/60 focus:outline-none"
            />
          ))}
          <button
            type="submit"
            className="mt-4 bg-white text-[16px] text-[#3C2A7D] font-semibold px-6 py-3 float-right"
          >
            <p>Submit now</p>
          </button>
        </form>
      </div>
     <Footer />
    </section>
  )
}
