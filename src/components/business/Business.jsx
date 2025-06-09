import { FaqAccordion } from '../FAQ/FaqAccordion'
import { InsightsNews } from '../insightsNews/insightsNews';
import PolygonBackground from '../../assets/geometric.png';

export function Business() {
  return (
    <>
      <section className="business-section bg-[#000000] h-auto md:h-[180vh] top-0 mt-[0px] md:mt-[0px] text-white p-6 py-30 md:px-6 py-24 md:py-40 lg:py-40 relative overflow-hidden">
        <div className="flex justify-center items-center font-700 text-[40px] mt-[400px] md:mt-[180px]">
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
        <div className="top-0 p-6 pt-12 md:py-40 relative">
          <div className="max-w-[1247px] mx-auto">
            <div className="flex flex-col md:flex-row justify-center w-full gap-8">
              
                <InsightsNews className="flex-1" />
            
                <FaqAccordion className="flex-1" />
             
            </div>
          </div>
        </div>
         {/* Polygon background */}
              <div className="absolute inset-0 opacity-100 z-0 float-right">
                <img
                    src={PolygonBackground} 
                  alt="Polygon Background"
                  className="max-w-[1348px] h-[calc(1501px + 280px)] mt-[200px] md:mt-[300px] object-contain absolute top-0 right-0"
                />
              </div>
      </section>
    </>
  );
}


