export default function Page() {
  const faqs = [
    {
      q: 'Which API gateways are supported?',
      a: 'You can upload logs from any gateway (AWS API Gateway, Kong, Apigee, custom) in JSON or CSV format. Direct integrations via webhook are also supported.'
    },
    {
      q: 'How does anomaly detection work?',
      a: 'We compute rolling baselines per API key and flag days where usage deviates beyond 2 standard deviations, highlighting potential abuse or credential leaks.'
    },
    {
      q: 'Is my log data stored securely?',
      a: 'Logs are encrypted at rest and in transit. You can delete all data at any time from your dashboard. We never share your data with third parties.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          API Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Calendar Heatmap for{' '}
          <span className="text-[#58a6ff]">API Key Usage</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-8">
          Visualise every API call across the year in a GitHub-style heatmap. Instantly spot anomalies, detect credential abuse, and protect your infrastructure before damage is done.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="px-7 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Monitoring — $25/mo
          </a>
          <a
            href="#faq"
            className="px-7 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        {/* Mock heatmap preview */}
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <p className="text-xs text-[#8b949e] mb-3 text-left">API Key: prod-gateway-01 &mdash; Last 12 months</p>
          <div className="grid gap-[3px]" style={{gridTemplateColumns: 'repeat(52, minmax(0, 1fr))'}}>
            {Array.from({length: 364}).map((_, i) => {
              const rand = Math.random()
              const anomaly = i === 180 || i === 290
              const color = anomaly
                ? 'bg-[#f85149]'
                : rand > 0.85 ? 'bg-[#1f6feb]'
                : rand > 0.65 ? 'bg-[#388bfd]'
                : rand > 0.4  ? 'bg-[#58a6ff]'
                : rand > 0.2  ? 'bg-[#1c2d3f]'
                : 'bg-[#161b22]'
              return <div key={i} className={`w-3 h-3 rounded-sm ${color}`} />
            })}
          </div>
          <div className="flex items-center gap-2 mt-3 justify-end">
            <span className="text-xs text-[#8b949e]">Less</span>
            {['bg-[#161b22]','bg-[#1c2d3f]','bg-[#58a6ff]','bg-[#388bfd]','bg-[#1f6feb]'].map((c,i) => (
              <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />
            ))}
            <span className="text-xs text-[#8b949e]">More</span>
            <div className="w-3 h-3 rounded-sm bg-[#f85149] ml-2" />
            <span className="text-xs text-[#f85149]">Anomaly</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$25<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to secure your API keys</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited API keys tracked',
              'GitHub-style calendar heatmap',
              'Automated anomaly detection',
              'Email & Slack alerts',
              'CSV / JSON log upload',
              'Webhook integrations',
              'Data retained for 2 years',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#3fb950] font-bold">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({q, a}) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
