import { FaqAccordion } from '../FAQ/FaqAccordion'
import { InsightsNews } from '../insightsNews/insightsNews';
import PolygonBackground from '../../assets/geometric.png';

export function Business() {
  return (
    <>
      <section className="business-section bg-[#000000] h-auto md:h-[180vh] top-0 text-white  py-30 md:px-6 py-24 md:py-40 lg:py-40 relative overflow-hidden">
        <div className="flex justify-center items-center font-700 text-[40px] mt-[360px] md:mt-[180px]">
          <h2 className="font-700 text-[25px] text-center">
            The business process problem solvers.
          </h2>
        </div>
        <div className="max-w-4xl p-6 mx-auto flex flex-col md:flex-row items-center justify-between z-10 gap-10 md:gap-20 mt-[30px] md:mt-[50px] relative z-30">
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
       <div className="max-w-7xl mx-auto p-6 pt-12 md:pt-20 relative z-10">
          <div className="flex flex-col md:flex-row gap-16">


              {/* Insights & News */}
              <div className="md:w-1/2">
                <InsightsNews />
            </div>
             {/* FAQ */}
              <div className="md:w-1/2">
                <FaqAccordion />
              </div>
          </div>
      
        </div>
         {/* Polygon background */}
              <div className="absolute inset-0 opacity-100 z-0 float-right">
                <img
                    src={PolygonBackground} 
                  alt="Polygon Background"
                  className="max-w-[1348px] h-[calc(1501px + 280px)] mt-[1700px] md:mt-[300px] object-contain absolute top-0 right-0"
                />
              </div>
      </section>
    </>
  );
}


