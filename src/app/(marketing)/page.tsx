import Link from 'next/link'
import { Shield, Zap, BarChart3, Users, MapPin, Calendar, ArrowRight, ChevronRight } from 'lucide-react'

const stats = [
  { value: '60+', label: 'Passive data points' },
  { value: '0', label: 'Surveys required' },
  { value: '250+', label: 'Target schools' },
  { value: '24/7', label: 'Real-time campus data' },
]

const features = [
  {
    icon: Calendar,
    title: 'Events & Dining',
    description: 'Every campus event, dining menu, and hours — in one feed. Students never miss what matters.',
  },
  {
    icon: MapPin,
    title: 'Campus Intelligence',
    description: 'Real-time maps, study spots, transportation, and campus resources at their fingertips.',
  },
  {
    icon: BarChart3,
    title: 'Demand Forecasting',
    description: 'Predict dining traffic, event attendance, and resource usage before it happens.',
  },
  {
    icon: Users,
    title: 'Student Engagement',
    description: '60 passive analytics data points collected. Zero surveys. Real behavioral insights.',
  },
  {
    icon: Shield,
    title: 'Privacy-Safe by Design',
    description: 'FERPA-compliant infrastructure. No PII sold. Students own their data.',
  },
  {
    icon: Zap,
    title: 'askU Intelligence',
    description: 'AI-powered campus answers. Students ask, askU delivers — dining, events, directions, anything.',
  },
]

const tiers = [
  {
    name: 'Platform',
    price: '$40K',
    period: '/year',
    description: 'App + Console + Alerts',
    features: ['Union app for students', 'Intersection admin console', 'Campus alert system', '1 student intern included'],
  },
  {
    name: 'Intelligence',
    price: '$65K',
    period: '/year',
    description: 'Platform + AI Layer',
    features: ['Everything in Platform', 'askU AI chatbot', 'Automated reports', 'Behavioral analytics'],
    highlighted: true,
  },
  {
    name: 'FDE',
    price: '$90K',
    period: '/year',
    description: 'Full integration',
    features: ['Everything in Intelligence', 'Dedicated engineer', 'Custom integrations', 'Priority support'],
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(196,30,58,0.08) 0%, transparent 70%)' }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-[#98989D] font-medium">Live at Denison University</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
            Campus life,{' '}
            <span className="text-primary">understood.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#98989D] max-w-2xl mx-auto leading-relaxed mb-10">
            Union is the campus intelligence platform for liberal arts colleges. Real-time dining, events, and insights for students — powered by askU.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:partnerships@asku.app"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-xl bg-primary text-white font-semibold
                         shadow-[0_2px_16px_rgba(196,30,58,0.3)]
                         hover:shadow-[0_4px_24px_rgba(196,30,58,0.4)] hover:-translate-y-0.5
                         active:translate-y-0 transition-all duration-200"
            >
              Request a Pilot
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/security"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-xl border border-white/[0.1] text-[#98989D] font-medium
                         hover:bg-white/[0.03] hover:text-white transition-all duration-200"
            >
              Security & Privacy
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-[#636366]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Everything students need.{' '}
              <span className="text-[#636366]">Everything administrators want.</span>
            </h2>
            <p className="text-[#98989D] max-w-xl mx-auto">
              One platform that makes campus life effortless for students while delivering actionable intelligence to administrators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]
                           hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
              >
                <feature.icon className="w-5 h-5 text-primary mb-4" />
                <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-[#636366] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">
            From pilot to campus-wide{' '}
            <span className="text-[#636366]">in one semester.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Pilot', desc: 'Start with a $15K pilot — fits under most procurement thresholds. No RFP needed.' },
              { step: '02', title: 'Launch', desc: 'Go live at orientation. One student intern manages your campus deployment.' },
              { step: '03', title: 'Scale', desc: 'Expand across your consortium. One demo covers 10-15 schools.' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <span className="text-6xl font-bold text-white/[0.04] absolute -top-2 -left-1">
                  {item.step}
                </span>
                <div className="relative pt-12">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-[#636366] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Simple, transparent pricing.
            </h2>
            <p className="text-[#98989D]">
              Built for liberal arts budgets. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  tier.highlighted
                    ? 'border-primary/30 bg-primary/[0.04] shadow-[0_0_40px_rgba(196,30,58,0.06)]'
                    : 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1]'
                }`}
              >
                {tier.highlighted && (
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-4">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-white mb-1">{tier.name}</h3>
                <p className="text-sm text-[#636366] mb-4">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  <span className="text-sm text-[#636366]">{tier.period}</span>
                </div>
                <ul className="space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#98989D]">
                      <div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center bottom, rgba(196,30,58,0.06) 0%, transparent 60%)' }}
        />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to understand your campus?
          </h2>
          <p className="text-[#98989D] mb-8">
            Join Denison University. Start with a pilot that fits under your procurement threshold.
          </p>
          <a
            href="mailto:partnerships@asku.app"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-xl bg-primary text-white font-semibold
                       shadow-[0_2px_16px_rgba(196,30,58,0.3)]
                       hover:shadow-[0_4px_24px_rgba(196,30,58,0.4)] hover:-translate-y-0.5
                       active:translate-y-0 transition-all duration-200"
          >
            Request a Pilot
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  )
}
