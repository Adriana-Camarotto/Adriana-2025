import './insightNews.css';
import Image10 from '../../assets/image10.png';
import Image11 from '../../assets/image11.png';
import Image13 from '../../assets/image13.png';



const news = [
  {
    date: '15/06/2024',
    title: 'What is Microsoft Loop and how does it work',
    image: Image10,
  },
  {
    date: '15/06/2024',
    title: 'Boost productivity within your law firm with xerox technology',
    image: Image13,
  },
  {
    date: '15/06/2024',
    title: 'What is Microsoft Loop and how does it work',
    image: Image11,
  },
]

export function InsightsNews() {
  return (

 <div className="insights-news  ">
      <h3>Insights & News</h3>
      <div className="grid gap-4">
        {/* Primeira linha: card principal */}
        <div className=" space-y-2" style={{ height: '320px' }}>
          <img
            src={news[0].image}
            alt={news[0].title}
            className="rounded-md w-full object-cover"
            style={{ height: '245px', objectFit: 'cover', width: '100%' }}
          />
          <span className="text-sm opacity-70">{news[0].date}</span>
          <h4 className="text-base font-semibold">{news[0].title}</h4>
        </div>
        {/* Segunda linha: dois cards lado a lado */} 
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          {news.slice(1).map((item, index) => (
            <div key={index} className="space-y-2" style={{ height: '320px' }}>
              <img
                src={item.image}
                alt={item.title}
                className="rounded-md w-full object-cover"
                style={{ height: '245px', objectFit: 'cover', width: '100%' }}
              />
              
                <span className="text-sm opacity-70">{item.date}</span>
                <h4 className="text-sm font-semibold">{item.title}</h4>
              </div>

          ))}
        </div>
      </div>
    </div>

  )
}
