
export default function Footer() {
  return (
    <footer>
           <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-white text-sm">
          {/* Logo + Contact */}
          <div className="space-y-4">
            <div className="inline-block bg-white text-[#FF3A7A] font-bold px-2 py-1 text-xs uppercase">
              DNS
            </div>
            <div>
              <p className="mb-1 font-semibold">Contact us</p>
              <p className="text-xs">
                E <a href="mailto:info@dnsunlimited.co.uk" className="underline">info@dnsunlimited.co.uk</a><br />
                T 0845 034 0895
              </p>
            </div>
          </div>

          {/* Address */}
          <div>
            <p className="mb-1 font-semibold">Address</p>
            <p className="text-xs leading-relaxed">
              Unit 9<br />
              Royal Scot Road,<br />
              Pride Park, Derby<br />
              DE24 8AJ
            </p>
          </div>

          {/* Opening hours */}
          <div>
            <p className="mb-1 font-semibold">Opening hours</p>
            <p className="text-xs">
              Mon - Fri:<br />
              9 am - 5:30 pm
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold mb-1">About us</p>
              <ul className="space-y-1 text-xs">
                <li><a href="#">CSR</a></li>
                <li><a href="#">Environment & Sustainability</a></li>
                <li><a href="#">Meet the team</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-1">Services</p>
              <ul className="space-y-1 text-xs">
                <li><a href="#">IT Services</a></li>
                <li><a href="#">Communications</a></li>
                <li><a href="#">Managed Print Services</a></li>
                <li><a href="#">Document Management</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/30 mt-8 pt-6 pb-6">
        <p className="text-center text-xs text-white/70">
          Design & built by Alt · © Document Network Services Ltd 2024
        </p>
      </div>
    </footer>
 

  )
}
