// import Video from 'next/video'
import Video from '../assets/video.mov'

export default function VideoTextSection() {
  return (
    <section className="flex flex-col lg:flex-row w-full h-full top-[-50px] md:top-[-50px] relative">
      {/* Vídeo */}
      <div className="lg:w-1/2 w-full h-64 lg:h-auto overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src={Video}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Texto */}
      <div className="lg:w-1/2 w-full bg-[#d2289c] text-white flex items-center justify-center p-8 lg:p-6 lg:py-24 relative">
        <div className="max-w-xl">
          <h2 className="text-3xl lg:text-4xl font-700 text-[50px] mb-6">
            Turning process<br />frustration into<br />progress since 1996
          </h2>
          <p className="text-[16px] font-400 leading-relaxed">
            Recognising your frustrations with your print<br /> environment, IT services,
            document management & <br />communications and finding a solution to overcome them.<br />
            Recognising your frustrations with your print<br /> environment, IT services,
            document management<br /> & communications and finding a solution to overcome them.
          </p>
        </div>
      </div>
    </section>
  )
}
