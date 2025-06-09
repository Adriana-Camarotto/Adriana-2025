import { FaqAccordion } from '../FAQ/FaqAccordion'
import { InsightsNews } from '../insightsNews/insightsNews';

export function Business() {
  return (
    <>
      <section className="business-section bg-[#000000] top-0 mt-[-150px] md:mt-[-160px] text-white p-6 py-30 md:px-6 py-24 md:py-40 lg:py-40 relative overflow-hidden">
        <div className="flex justify-center items-center font-700 text-[40px] mt-[250px] md:mt-[160px]">
          <h2 className="font-700 text-[40px] text-center">
            The business process problem solvers.
          </h2>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between z-10 gap-10 md:gap-20 mt-[50px] md:mt-[50px] relative z-30">
          <div className="intro-columns md:w-1/2 space-y-6 text-left text-[16px] font-400">
            <p>
              Recognising your frustrations with your print environment, IT services,
              document management & communications and finding a solution to overcome
              them. Recognising your frustrations with your print environment, IT services,
              document management & communications and finding a solution to overcome them.
            </p>
          </div>
          <div className="intro-columns md:w-1/2 space-y-6 text-left text-[16px] font-400">
            <p>
              Recognising your frustrations with your print environment, IT services,
              document management & communications and finding a solution to overcome
              them. Recognising your frustrations with your print environment, IT services,
              document management & communications and finding a solution to overcome them.
            </p>
          </div>
        </div>
        <div className="top-0 py-12 md:py-20 relative">
          <div className="max-w-[100%] mx-auto flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col md:flex-row  w:full gap-6 md:gap-6 lg:gap-6">
              <InsightsNews />
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


