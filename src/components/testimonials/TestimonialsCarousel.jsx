import  { useEffect, useRef, useState } from 'react'
import '../testimonials/Testimonial.css'
import CaseStudy from '../../assets/caseStudy.png'


const testimonials = [
  {
    text: "We have been delighted with our DNS partnership. The club now has direction & delivery on all document processes with a clear road map for the foreseeable future.",
    name: "Paul Johnson, Director",
    company: "Nottingham Forest Football Club",
    image: CaseStudy,
  },
  {
    text: "DNS helped us streamline our document handling across multiple teams. The impact was immediate and measurable.",
    name: "Sarah Lee, Operations",
    company: "Midlands Manufacturing Ltd",
    image: CaseStudy,
  },
  {
    text: "The transition to DNS was seamless. Their team understood our needs and delivered a solution that exceeded our expectations.",
    name: "Michael Brown, IT Manager",
    company: "Tech Innovations Inc.",
    image: CaseStudy,
  },
  {
    text: "DNS has transformed our print environment. We now have better control and visibility over our document processes.",
    name: "Emily White, Office Manager",
    company: "Creative Solutions Agency",
    image: CaseStudy,
  },
  {
    text: "Working with DNS has been a game-changer for our business. Their expertise in document management is unparalleled.",
    name: "David Smith, CEO",
    company: "Global Enterprises",
    image: CaseStudy,
  },
]

export function TestimonialsCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const h2Ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!h2Ref.current) return
      const rect = h2Ref.current.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setVisible(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
   }, [])




  return (
    <section className="testimonial-section bg-[#FFFFFF] top-0 p-6 md:px-6 py-12 md:py-40 ">
      <div
        className={`testimonial-header fade-in-on-scroll${visible ? ' visible' : ''} flex flex-col md:flex-row md:items-center md:justify-between gap-2`}
        ref={h2Ref}
      >
        <h2 className="text-xl md:text-3xl mb-2 md:mb-0 color-[#0A151B];">
          Don’t just take our word for it...
        </h2>
        <a
          href="/case-studies"
          className="text-blue-600 underline text-base md:text-lg"
        >
          View all Case Studies
        </a>
      </div>

      {/* Carousel for testimonials */}
      <div
        className={`testimonial-fade-wrapper fade-in-on-scroll${visible ? ' visible' : ''}`}
      >
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className={`testimonial-fade-slide${selectedIndex === idx ? ' active' : ''}`}
          >
            {selectedIndex === idx && (
              <div
                className="testimonial-card w-full h-full object-cover"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'none',
                  backgroundPosition: 'right',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="testimonial-content">
                  <blockquote className="text-[25px] md:text-[33px] max-w-[680px] pt-2 leading-[1.2] font-700">
                    “{item.text}”
                  </blockquote>
                  <p className="author text-[12px]">{item.name}</p>
                  <p className="company text-[12px]">{item.company}</p>
                  <div className="embla-dots">
                    {testimonials.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        className={`embla-dot${selectedIndex === dotIdx ? ' embla-dot--active' : ''}`}
                        type="button"
                        onClick={() => setSelectedIndex(dotIdx)}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsCarousel