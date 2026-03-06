import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'
import { Clock, PieChart, ShieldCheck, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <Card className="w-full min-h-[500px] bg-black/[0.96] border-neutral-800 relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex flex-col md:flex-row h-full min-h-[500px]">
          {/* Left content */}
          <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
              Campus life in one cockpit.
            </h1>
            <p className="mt-4 text-neutral-300 max-w-lg text-lg">
              Empower students with real-time tools while giving administrators a privacy-safe intelligence layer.
            </p>

            <div className="flex flex-col gap-3 mt-8">
              <div className="flex items-center gap-3 text-neutral-300">
                <Clock className="w-5 h-5 text-[#C8102E]" />
                <span>Real-time dining, events, and answers</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <PieChart className="w-5 h-5 text-[#C8102E]" />
                <span>Demand forecasting & friction heatmaps</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <ShieldCheck className="w-5 h-5 text-[#C8102E]" />
                <span>Privacy-safe infrastructure</span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="mailto:pilot@asku.app"
                className="inline-block bg-[#C8102E] text-white font-semibold text-lg px-8 py-4 rounded-full hover:scale-[1.02] hover:opacity-95 transition-all duration-200"
              >
                Request a Pilot
              </a>
            </div>
          </div>

          {/* Right content - gradient placeholder for future Spline scene */}
          <div className="flex-1 relative hidden md:flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#C8102E]/20 via-[#C8102E]/5 to-transparent blur-3xl absolute" />
            <div className="relative z-10 text-center">
              <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#C8102E] to-[#C8102E]/60">
                  aU
                </span>
              </div>
              <p className="mt-4 text-neutral-500 text-sm">Interactive 3D coming soon</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Trust Strip */}
      <div className="flex flex-col items-center gap-3 mt-8 text-sm text-[var(--color-text-light)]">
        <div className="flex items-center gap-2 font-medium">
          <Shield className="w-4 h-4" />
          Privacy-safe by design
        </div>
        <div className="flex gap-5">
          <Link href="/security" className="text-[var(--color-text-light)] hover:text-[#C8102E] transition-colors no-underline">
            Security
          </Link>
          <Link href="/legal/privacy" className="text-[var(--color-text-light)] hover:text-[#C8102E] transition-colors no-underline">
            Privacy
          </Link>
        </div>
      </div>
    </div>
  )
}
