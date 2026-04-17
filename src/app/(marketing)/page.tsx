import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 pt-32">
      <div className="hero-enter mb-8 inline-flex items-center gap-2 h-8 px-4 rounded-full border border-white/10 bg-white/[0.04] text-xs font-medium text-[#AEAEB2]">
        <span className="h-1.5 w-1.5 rounded-full bg-white/60" aria-hidden />
        Official Claude Partner
      </div>

      <h1 className="hero-enter hero-enter-delay-1 text-5xl md:text-7xl font-bold tracking-tighter text-center text-white leading-[1.05]">
        Campus life, understood.
      </h1>

      <p className="hero-enter hero-enter-delay-2 mt-6 max-w-xl text-center text-[#98989D] text-base md:text-lg">
        Student experience. Institutional intelligence.
      </p>

      <div className="hero-enter hero-enter-delay-3 mt-10">
        <a
          href="mailto:partnerships@asku.app?subject=Pilot%20request"
          className="btn-primary inline-flex items-center gap-2 h-12 px-8 rounded-xl bg-white text-black font-semibold
                     hover:bg-white/90"
        >
          Request a Pilot
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <p className="hero-enter hero-enter-delay-4 mt-6 text-xs text-[#636366]">EdUnion · Ohio, USA</p>
    </section>
  )
}
