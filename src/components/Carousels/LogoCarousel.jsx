import { useRef, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import './EmblaSlider.css'
import ThreeCXLogo from '../../assets/threeCX_logo.png'
import HpLogo from '../../assets/hp_logo.png'
import FortinetLogo from '../../assets/fortinet_logo.png'
import VeroxLogo from '../../assets/verox_logo.png'
import VipreLogo from '../../assets/vipre_logo.png'
import MicrosoftLogo from '../../assets/microsoft_logo.png'

const logos = [
  VeroxLogo,
  MicrosoftLogo,
  HpLogo,
  ThreeCXLogo,
  VipreLogo,
  FortinetLogo,
]

export function LogoCarousel() {
  const [emblaRef] = useEmblaCarousel({ align: 'center', loop: true, speed: 10, dragFree: true, fade: true })
const h2Ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!h2Ref.current) return;
      const rect = h2Ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <section className={`bg-[#FFFFFF] top-[-100px] text-white p-6 md:px-6 py-12 md:py-10 relative `}>
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center relative">
          <div className="mb-6 text-[#000000] text-[16px] font-400">
            <p className={`fade-in-on-scroll${visible ? ' visible' : ''}`} ref={h2Ref}>
              Our Clients Include
            </p>
          </div>

          <div className={`w-full flex justify-around items-left fade-in-on-scroll${visible ? ' visible' : ''}`} ref={h2Ref}>
            <div className="embla">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                  {logos.map((logo, index) => (
                    <div className="embla__slide" key={index}>
                      <img src={logo} alt={`Logo ${index + 1}`} className="embla__logo" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

            