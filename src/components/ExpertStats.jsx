import Calendar from '../assets/group96.svg'
import OnSite from '../assets/group101.svg'
import Hand from '../assets/group97.svg'
import Contract from '../assets/group98.svg'
import Talk from '../assets/group100.svg'
import Accreditation from '../assets/group99.svg'

const stats = [
  {
    title: 'Business years',
    value: '28',
    icon: Calendar,
  },
  {
    title: 'On-site support',
    value: '',
    icon: OnSite,
  },
  {
    title: 'Expert team members',
    value: '22',
    icon: Hand,
  },
  {
    title: 'Live contracts',
    value: '1,650',
    icon: Contract,
  },
  {
    title: 'Guided training',
    value: '',
    icon: Talk,
  },
  {
    title: 'Accreditations & awards',
    value: '25',
    icon: Accreditation,
  },
]

export function ExpertStats() {
  return (
    <section className="py-24 bg-white text-center text-black px-4">
      <h2 className="text-[30px] sm:text-[35px] md:text-[40px] font-bold mb-12 animate-fade-in-none">
        A team of accredited experts <br className="hidden md:block" />
        that support you
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-sm">
            <div className="relative mb-2 animate-fade-in">
              <img src={item.icon} alt={item.title} className="w-12 h-12" />
              {item.value && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {item.value}
                </span>
              )}
            </div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-500 text-[12px] mt-1 max-w-[17rem] animate-fade-in">
              Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
