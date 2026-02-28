import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — AI Parlay Picks",
  description: "Privacy Policy for AI Parlay Picks Telegram Bot.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-zinc-300">
      <header className="border-b border-white/[0.06] sticky top-0 z-50 backdrop-blur-xl bg-[var(--bg)]/80">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center text-white text-xs font-bold">A</div>
            <span className="text-sm font-semibold text-white">AI Parlay Picks</span>
          </Link>
          <Link href="/" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">← Back to Home</Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">Privacy Policy</h1>
          <p className="text-sm text-zinc-500">Last updated: February 28, 2026 · Effective immediately</p>
        </div>

        <div className="prose prose-invert prose-zinc max-w-none space-y-10 text-[15px] leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">01</span> Introduction
            </h2>
            <p>
              AI Parlay Picks (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) operates the Telegram bot @parlay_picks_bot, 
              associated bots, and the website at parlay-picks-landing.vercel.app (the &ldquo;Service&rdquo;). 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">02</span> Information We Collect
            </h2>
            <h3 className="text-lg font-medium text-white mb-2">Information You Provide</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white">Telegram Account Data:</strong> Your Telegram user ID, username, and first name (provided automatically by Telegram when you interact with the bot).</li>
              <li><strong className="text-white">Payment Information:</strong> Processed entirely by Stripe. We receive your subscription status and payment confirmation but never see or store your credit card number, CVV, or billing address.</li>
              <li><strong className="text-white">Support Messages:</strong> Content you send to our support bot for ticket resolution.</li>
            </ul>
            <h3 className="text-lg font-medium text-white mb-2 mt-4">Information Collected Automatically</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white">Usage Data:</strong> Commands used, picks generated, features accessed, timestamps, and interaction patterns.</li>
              <li><strong className="text-white">Subscription Data:</strong> Tier, status, renewal dates, and payment history (amounts only, no card details).</li>
              <li><strong className="text-white">Technical Data:</strong> Telegram client information provided by the Telegram Bot API.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">03</span> How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide and maintain the Service (deliver picks, manage subscriptions).</li>
              <li>To process payments and manage billing through Stripe.</li>
              <li>To enforce tier-based access controls (Free, Premium, VIP).</li>
              <li>To prevent fraud, abuse, and Terms of Service violations.</li>
              <li>To respond to support requests.</li>
              <li>To generate aggregated, anonymized analytics to improve the Service.</li>
              <li>To comply with legal obligations.</li>
              <li>To provide evidence in payment disputes or chargebacks.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">04</span> Data Sharing
            </h2>
            <p>We do <strong className="text-white">not</strong> sell, rent, or trade your personal information. We may share data with:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong className="text-white">Stripe:</strong> For payment processing. Subject to <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Stripe&apos;s Privacy Policy</a>.</li>
              <li><strong className="text-white">Telegram:</strong> As required by the Telegram Bot API. Subject to <a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Telegram&apos;s Privacy Policy</a>.</li>
              <li><strong className="text-white">AI Providers:</strong> Anonymized query data sent to Anthropic (Claude) and Perplexity for pick generation. No personal identifiers are included in AI prompts.</li>
              <li><strong className="text-white">Law Enforcement:</strong> If required by law, subpoena, or legal process.</li>
              <li><strong className="text-white">Payment Disputes:</strong> Usage logs and account data may be shared with payment processors to contest chargebacks.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">05</span> Data Retention
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Account data is retained as long as your account is active.</li>
              <li>Usage logs are retained for 12 months for analytics and dispute resolution.</li>
              <li>Payment records are retained for 7 years as required by tax and financial regulations.</li>
              <li>Support messages are retained for 6 months after ticket resolution.</li>
              <li>Upon account deletion, personal data is removed within 30 days. Anonymized aggregate data may be retained indefinitely.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">06</span> Your Rights
            </h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong className="text-white">Access:</strong> Request a copy of your personal data.</li>
              <li><strong className="text-white">Correction:</strong> Request correction of inaccurate data.</li>
              <li><strong className="text-white">Deletion:</strong> Request deletion of your data (subject to legal retention requirements).</li>
              <li><strong className="text-white">Portability:</strong> Request your data in a machine-readable format.</li>
              <li><strong className="text-white">Opt-Out of Sale:</strong> We do not sell your data, but you can contact us to confirm.</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us via @parlaypickssupportbot on Telegram. We will respond within 30 days.</p>

            <h3 className="text-lg font-medium text-white mb-2 mt-6">California Residents (CCPA)</h3>
            <p>Under the California Consumer Privacy Act, California residents have additional rights including:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>The right to know what personal information is collected, used, and shared.</li>
              <li>The right to delete personal information.</li>
              <li>The right to opt-out of the sale of personal information (we do not sell your data).</li>
              <li>The right to non-discrimination for exercising CCPA rights.</li>
            </ul>

            <h3 className="text-lg font-medium text-white mb-2 mt-6">EU/EEA Residents (GDPR)</h3>
            <p>If you are in the EU/EEA, our legal basis for processing is:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong className="text-white">Contract:</strong> Processing necessary to provide the Service you subscribed to.</li>
              <li><strong className="text-white">Legitimate Interest:</strong> Analytics, fraud prevention, and service improvement.</li>
              <li><strong className="text-white">Legal Obligation:</strong> Tax records, law enforcement requests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">07</span> Data Security
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>All payment processing is handled by Stripe (PCI DSS Level 1 compliant). We never touch your card data.</li>
              <li>Database access is restricted to internal services only (not exposed to the internet).</li>
              <li>API communications use HTTPS/TLS encryption in transit.</li>
              <li>Access to admin functions is restricted by Telegram user ID verification.</li>
              <li>We implement reasonable security measures but cannot guarantee absolute security. No method of electronic transmission or storage is 100% secure.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">08</span> Children&apos;s Privacy
            </h2>
            <p>
              Our Service is not intended for anyone under 18 years of age. We do not knowingly collect personal 
              information from children under 18. If we discover we have collected data from a minor, we will 
              delete it promptly. If you believe a minor has provided us with personal information, contact us 
              via @parlaypickssupportbot.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">09</span> International Data Transfers
            </h2>
            <p>
              Our Service is operated from the United States. If you access the Service from outside the US, 
              your information may be transferred to, stored, and processed in the United States or other 
              countries where our service providers operate.
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>By using the Service, you consent to the transfer of your information to the United States and other jurisdictions.</li>
              <li>We rely on <strong className="text-white">Standard Contractual Clauses (SCCs)</strong> and service provider agreements to ensure adequate data protection for EU/EEA data transfers.</li>
              <li>Stripe, our payment processor, is certified under the EU-US Data Privacy Framework.</li>
              <li>If you are in the EU/EEA, you may have the right to lodge a complaint with your local data protection authority.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">10</span> Third-Party Links
            </h2>
            <p>
              The Service may contain links to third-party websites (sportsbooks, Stripe, social media). 
              We are not responsible for the privacy practices of these third parties. We encourage you to 
              review their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">11</span> Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with 
              an updated &ldquo;Last updated&rdquo; date. Continued use of the Service after changes constitutes 
              acceptance of the updated policy. For material changes, we will notify users through the bot.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">12</span> Contact Us
            </h2>
            <p>For privacy-related questions or to exercise your data rights:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong className="text-white">Support Bot:</strong> <a href="https://t.me/parlaypickssupportbot" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">@parlaypickssupportbot</a> on Telegram</li>
              <li><strong className="text-white">Twitter/X:</strong> <a href="https://x.com/AIParlayPicksTG" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">@AIParlayPicksTG</a></li>
            </ul>
          </section>

          <div className="border-t border-white/[0.06] pt-8 mt-12">
            <p className="text-xs text-zinc-600 text-center">
              AI Parlay Picks · <Link href="/terms" className="underline hover:text-zinc-400">Terms of Service</Link> · Privacy Policy
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <span className="text-[11px] text-zinc-600">© 2026 AI Parlay Picks</span>
          <Link href="/" className="text-[11px] text-zinc-600 hover:text-zinc-300 transition-colors">Home</Link>
        </div>
      </footer>
    </div>
  );
}
