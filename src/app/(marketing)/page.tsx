import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 pt-32">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-center text-white leading-[1.05]">
        Campus life, understood.
      </h1>

      <div className="mt-10">
        <a
          href="mailto:partnerships@asku.app"
          className="inline-flex items-center gap-2 h-12 px-8 rounded-xl bg-white text-black font-semibold
                     hover:bg-white/90 active:bg-white/80 transition-all duration-200"
        >
          Request a Pilot
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
