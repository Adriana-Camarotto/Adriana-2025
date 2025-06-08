
import RouterLaptop from '../assets/router_laptop.png';
import PolygonBackground from '../assets/polygonBackground.png';


const Hero = () => {
  return (
    <section className="bg-[#31297D] top-0 text-white p-6 py-30 md:px-6 py-24 md:py-40 lg:py-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between z-10">
        {/* Text */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-tight">
            We make your <br /> <span className="text-white">IT work easy.</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-md mx-auto md:mx-0 animate-fade-in">
            Recognising your frustrations with your print environment, IT services,
            document management & communications and finding a solution to overcome them.
          </p>
        </div>

        {/* Images */}
        <div className="md:w-1/2 flex justify-center top-[55px] md:top-[50px] right-6 md:right-0 relative">
          <img
            src={RouterLaptop}
            alt="Router and laptop screen illustration"
             className="3/4 sm:w-2/3 md:w-full max-w-md md:max-w-none relative z-10 animate-fade-in"
          />         
        </div>
      </div>

      {/* Polygon background */}
      <div className="absolute inset-0 opacity-100 z-0 float-right">
        <img
            src={PolygonBackground} 
          alt="Polygon Background"
          className="max-w-[1348px] h-[calc(1501px + 280px)]  object-contain absolute top-0 right-0"
        />
      </div>
    </section>
  );
};

export default Hero;
