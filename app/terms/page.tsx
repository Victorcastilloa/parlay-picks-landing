import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — AI Parlay Picks",
  description: "Terms of Service and Disclaimer for AI Parlay Picks Telegram Bot.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-zinc-300">
      {/* Header */}
      <header className="border-b border-white/[0.06] sticky top-0 z-50 backdrop-blur-xl bg-[var(--bg)]/80">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center text-white text-xs font-bold">A</div>
            <span className="text-sm font-semibold text-white">AI Parlay Picks</span>
          </Link>
          <Link href="/" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">← Back to Home</Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">Terms of Service</h1>
          <p className="text-sm text-zinc-500">Last updated: February 28, 2026 · Effective immediately</p>
        </div>

        <div className="prose prose-invert prose-zinc max-w-none space-y-10 text-[15px] leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">01</span> Acceptance of Terms
            </h2>
            <p>
              By accessing, using, or interacting with the AI Parlay Picks Telegram Bot (&ldquo;@parlay_picks_bot&rdquo;), 
              the associated admin and support bots, the website at parlay-picks-landing.vercel.app (collectively, the &ldquo;Service&rdquo;), 
              or any related services provided by AI Parlay Picks (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;), 
              you (&ldquo;User,&rdquo; &ldquo;you,&rdquo; &ldquo;your&rdquo;) agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). 
              If you do not agree, you must immediately stop using the Service.
            </p>
            <p>
              We reserve the right to modify these Terms at any time. Continued use of the Service after changes 
              constitutes acceptance of the updated Terms. Material changes will be communicated through the bot or website.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">02</span> Eligibility
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You must be at least <strong className="text-white">18 years of age</strong> (or 21 in jurisdictions where required) to use this Service.</li>
              <li>You must be located in a jurisdiction where sports betting or receiving sports betting information is <strong className="text-white">legal</strong>.</li>
              <li>It is your sole responsibility to determine whether using this Service complies with applicable laws in your jurisdiction.</li>
              <li>By using the Service, you represent and warrant that you meet all eligibility requirements.</li>
              <li>We do not accept users from jurisdictions where sports wagering information services are prohibited.</li>
            </ul>
          </section>

          {/* 2.1 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">02.1</span> Restricted Jurisdictions
            </h2>
            <div className="card p-5 border-red-500/20 bg-red-500/[0.03] mb-4">
              <p className="text-red-200/90 text-sm font-medium">🚫 The Service is NOT available to residents of the following jurisdictions.</p>
            </div>
            <p>
              By using the Service, you represent and warrant that you are <strong className="text-white">not located in, 
              a resident of, or accessing the Service from</strong> any of the following restricted jurisdictions:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong className="text-white">United States — Restricted States:</strong> Nevada (NV), Idaho (ID), Utah (UT), Wisconsin (WI), Alabama (AL), Alaska (AK), Georgia (GA), Hawaii (HI), South Carolina (SC), Texas (TX), Minnesota (MN), Missouri (MO), Oklahoma (OK), California (CA)</li>
              <li><strong className="text-white">Any other jurisdiction</strong> where sports wagering, sports analysis services, or receiving sports betting information is prohibited by local, state, or federal law.</li>
            </ul>
            <p className="mt-3">
              This list may be updated at any time as laws and regulations change. It is <strong className="text-white">your sole responsibility</strong> to 
              determine whether using this Service is legal in your jurisdiction. We make no representation that the Service 
              is appropriate or available for use in any particular location.
            </p>
            <p className="mt-3">
              If you access the Service from a restricted jurisdiction, you do so at your own risk and are solely responsible 
              for compliance with local laws. We reserve the right to <strong className="text-white">terminate accounts and withhold refunds</strong> for 
              users found to be accessing the Service from restricted jurisdictions.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">03</span> Nature of the Service
            </h2>
            <div className="card p-5 border-amber-500/20 bg-amber-500/[0.03] mb-4">
              <p className="text-amber-200/90 text-sm font-medium">⚠️ IMPORTANT DISCLAIMER</p>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>AI Parlay Picks provides <strong className="text-white">sports analysis, data aggregation, and AI-generated insights</strong> for entertainment and informational purposes only.</li>
              <li>We are <strong className="text-white">NOT a sportsbook, bookmaker, or gambling operator</strong>. We do not accept, place, or facilitate any wagers.</li>
              <li>Our picks, parlays, predictions, and analysis are <strong className="text-white">not guarantees of outcomes</strong> and should not be treated as such.</li>
              <li>We are <strong className="text-white">NOT licensed financial advisors, investment advisors, or gambling counselors</strong>.</li>
              <li>All content generated by the Service is produced by artificial intelligence (AI) models and automated systems. AI-generated content may contain errors, inaccuracies, or outdated information.</li>
              <li>Past performance, win rates, or historical records do not guarantee future results.</li>
              <li>Any odds, lines, or pricing shown are sourced from third-party bookmakers and may change at any time.</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">04</span> No Gambling Advice
            </h2>
            <p>
              Nothing provided through the Service constitutes gambling advice, betting advice, or a recommendation 
              to place any wager. You acknowledge and agree that:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>All betting decisions are made <strong className="text-white">solely at your own discretion and risk</strong>.</li>
              <li>You should <strong className="text-white">never bet more than you can afford to lose</strong>.</li>
              <li>We strongly encourage responsible gambling practices.</li>
              <li>If you believe you have a gambling problem, please contact the <strong className="text-white">National Council on Problem Gambling</strong> at 1-800-522-4700 or visit <a href="https://www.ncpgambling.org" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">ncpgambling.org</a>.</li>
              <li>We are not responsible for any losses, damages, or debts incurred as a result of wagering decisions made using our content.</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">05</span> Subscription &amp; Payments
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white">Free Tier:</strong> Limited access to features. No payment required. Subject to daily usage limits.</li>
              <li><strong className="text-white">Premium ($4.99/month):</strong> Enhanced features including AI-powered smart parlays, quick bets, and increased daily limits.</li>
              <li><strong className="text-white">VIP ($14.99/month):</strong> All Premium features plus unlimited custom picks, priority support, and advanced analytics.</li>
              <li>All payments are processed securely through <strong className="text-white">Stripe</strong>. We do not store credit card information.</li>
              <li>Subscriptions renew automatically at the end of each billing period unless cancelled.</li>
              <li>You may cancel your subscription at any time using the /cancel command. Access continues until the end of the current billing period.</li>
              <li>We reserve the right to change pricing with 30 days&apos; notice. Existing subscribers will be grandfathered at their current rate for one additional billing cycle.</li>
              <li>Free trial periods, if offered, automatically convert to paid subscriptions unless cancelled before the trial ends.</li>
            </ul>
          </section>

          {/* 5.5 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">05.1</span> No Refund Policy
            </h2>
            <div className="card p-5 border-red-500/20 bg-red-500/[0.03] mb-4">
              <p className="text-red-200/90 text-sm font-medium">⚠️ ALL SALES ARE FINAL — STRICT NO REFUND POLICY</p>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white">All purchases are final and non-refundable.</strong> By subscribing, you explicitly acknowledge and agree that no refunds will be issued under any circumstances, including but not limited to:</li>
              <ul className="list-disc pl-5 space-y-1.5 mt-2 text-zinc-400">
                <li>Dissatisfaction with picks, predictions, or analysis results.</li>
                <li>Losing bets placed based on our content.</li>
                <li>Failure to use the Service during your billing period.</li>
                <li>Partial use of a subscription period.</li>
                <li>Forgetting to cancel before renewal.</li>
                <li>Changes to features, pricing, or availability.</li>
                <li>Technical issues, outages, or downtime.</li>
                <li>Disagreement with the AI&apos;s analysis or selections.</li>
              </ul>
              <li>We provide a <strong className="text-white">free tier</strong> specifically so you can evaluate the Service before committing to a paid plan. By upgrading to a paid plan, you confirm that you have evaluated the free tier and are satisfied with the Service.</li>
              <li>You have the ability to <strong className="text-white">cancel at any time</strong> using the /cancel command. Cancellation takes effect at the end of your current billing period — you retain access until then. This is your remedy if you are unsatisfied.</li>
              <li>We are an <strong className="text-white">information and entertainment service</strong>, not a gambling service. The outcome of sporting events is inherently unpredictable, and unfavorable pick results are not grounds for a refund.</li>
              <li>By completing your purchase, you <strong className="text-white">expressly waive</strong> any right to a refund, chargeback, or payment reversal for the subscription fees charged.</li>
            </ul>
          </section>

          {/* 5.6 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">05.2</span> Chargebacks &amp; Payment Disputes
            </h2>
            <div className="card p-5 border-red-500/20 bg-red-500/[0.03] mb-4">
              <p className="text-red-200/90 text-sm font-medium">🚫 PLEASE CONTACT US BEFORE INITIATING A PAYMENT DISPUTE</p>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>You agree to <strong className="text-white">contact us first</strong> before initiating any chargeback, payment dispute, or payment reversal with your bank, credit card company, or payment provider for any charges from AI Parlay Picks.</li>
              <li>If you have a billing concern, you agree to <strong className="text-white">contact us first</strong> through our support bot (@parlaypickssupportbot) before taking any action with your payment provider. We commit to responding within 48 hours.</li>
              <li>In the event a chargeback or dispute is filed:
                <ul className="list-disc pl-5 space-y-1.5 mt-2 text-zinc-400">
                  <li>Your account will be <strong className="text-white">immediately and permanently terminated</strong>.</li>
                  <li>All access to paid features will be revoked without prior notice.</li>
                  <li>We will submit evidence to contest the dispute, including: your acceptance of these Terms (with timestamp), your usage logs, your IP address, your Telegram account information, delivery confirmation of the Service, and all communications.</li>
                  <li>You may be liable for <strong className="text-white">reasonable administrative costs</strong> incurred in responding to the dispute, which may be invoiced separately.</li>
                  <li>We reserve the right to pursue collections and/or legal action for fraudulent chargebacks.</li>
                  <li>Your information may be shared with chargeback fraud prevention databases.</li>
                </ul>
              </li>
              <li>We maintain <strong className="text-white">comprehensive usage logs</strong> including: every command you execute, every pick generated, timestamps of all interactions, your subscription history, IP addresses, and Telegram account metadata. These records serve as evidence that the Service was delivered as described.</li>
              <li>By using the Service, you acknowledge that we <strong className="text-white">deliver a digital information service instantly</strong> upon subscription activation. Because the Service is immediately accessible and consumable, the standard &ldquo;product not received&rdquo; or &ldquo;product not as described&rdquo; chargeback reasons do not apply.</li>
              <li>Repeated or fraudulent chargebacks may be reported to relevant authorities and fraud prevention networks.</li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">06</span> Acceptable Use
            </h2>
            <p>You agree NOT to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Use the Service for any illegal purpose or in violation of any laws.</li>
              <li>Redistribute, resell, or share paid content with non-subscribers.</li>
              <li>Attempt to reverse-engineer, decompile, or extract the AI models, algorithms, or proprietary methods used by the Service.</li>
              <li>Use automated scripts, bots, or scraping tools to access the Service beyond normal usage.</li>
              <li>Create multiple accounts to circumvent usage limits or bans.</li>
              <li>Harass, threaten, or abuse our team or other users through the support bot or any communication channel.</li>
              <li>Use the Service to promote or facilitate illegal gambling operations.</li>
              <li>Exploit trial periods, referral programs, or promotional offers fraudulently.</li>
              <li>Impersonate AI Parlay Picks or misrepresent your affiliation with the Service.</li>
            </ul>
            <p className="mt-3">
              Violation of these terms may result in immediate termination of your account without refund.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">07</span> Intellectual Property
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>All content, branding, pick cards, analysis text, algorithms, and design elements are owned by AI Parlay Picks.</li>
              <li>You are granted a limited, non-exclusive, non-transferable license to use the Service for personal, non-commercial purposes.</li>
              <li>You may share individual pick cards on social media for personal use, provided you do not remove branding or attribution.</li>
              <li>Commercial use, syndication, or mass redistribution of our content is strictly prohibited without prior written consent.</li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">08</span> Data &amp; Privacy
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>We collect and store: your Telegram user ID, username, subscription status, usage data, and payment records.</li>
              <li>We use Stripe for payment processing. Stripe&apos;s privacy policy applies to payment data.</li>
              <li>We do <strong className="text-white">not</strong> sell, rent, or share your personal information with third parties for marketing purposes.</li>
              <li>Usage data (commands used, picks generated) is logged for service improvement, dispute resolution, and fraud prevention.</li>
              <li>We may use aggregated, anonymized data for analytics, marketing, or improving the Service.</li>
              <li>You may request deletion of your data by contacting our support bot (@parlaypickssupportbot).</li>
              <li>We implement reasonable security measures to protect your data but cannot guarantee absolute security.</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">09</span> Third-Party Services
            </h2>
            <p>The Service integrates with third-party providers including but not limited to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong className="text-white">The Odds API</strong> — for real-time odds and scores from 40+ bookmakers.</li>
              <li><strong className="text-white">Anthropic (Claude AI)</strong> — for AI-powered analysis and pick generation.</li>
              <li><strong className="text-white">Perplexity AI</strong> — for real-time sports news, injury reports, and research.</li>
              <li><strong className="text-white">Stripe</strong> — for secure payment processing.</li>
              <li><strong className="text-white">Telegram</strong> — as the delivery platform for the bot.</li>
            </ul>
            <p className="mt-3">
              We are not responsible for outages, errors, or data issues caused by third-party services. 
              Third-party terms and privacy policies apply to their respective services.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">10</span> Limitation of Liability
            </h2>
            <div className="card p-5 border-red-500/20 bg-red-500/[0.03] mb-4">
              <p className="text-red-200/90 text-sm">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, AI PARLAY PICKS AND ITS OPERATORS, 
                AFFILIATES, AND EMPLOYEES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, 
                LOSS OF DATA, GAMBLING LOSSES, OR OTHER INTANGIBLE LOSSES.
              </p>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Our total aggregate liability for any claims arising from or related to the Service shall not exceed the amount you paid us in the preceding 12 months.</li>
              <li>We are not liable for any losses resulting from bets placed based on our content, whether the information was accurate or not.</li>
              <li>We are not liable for service interruptions, delays, bugs, or technical failures.</li>
              <li>We provide the Service &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; without warranties of any kind, express or implied.</li>
              <li>We disclaim all warranties including, but not limited to, merchantability, fitness for a particular purpose, accuracy, and non-infringement.</li>
            </ul>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">11</span> Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless AI Parlay Picks, its operators, affiliates, 
              employees, and agents from any claims, damages, losses, liabilities, and expenses (including 
              reasonable legal fees) arising from:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Your use or misuse of the Service.</li>
              <li>Your violation of these Terms.</li>
              <li>Your violation of any applicable law or regulation.</li>
              <li>Any wagering activity you undertake based on our content.</li>
              <li>Any dispute between you and a third-party sportsbook.</li>
            </ul>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">12</span> Account Termination
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>We may suspend or terminate your access at any time, with or without cause, and with or without notice.</li>
              <li>Grounds for termination include but are not limited to: violation of these Terms, fraudulent activity, abuse of the Service, chargebacks or payment disputes filed in bad faith.</li>
              <li>Upon termination, your right to use the Service ceases immediately. No refunds will be issued for termination due to Terms violations.</li>
              <li>You may voluntarily terminate your account by unsubscribing and ceasing use of the bot.</li>
            </ul>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">13</span> Dispute Resolution
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Any disputes arising from these Terms or the Service shall first be attempted to be resolved through <strong className="text-white">informal negotiation</strong> by contacting our support bot.</li>
              <li>If informal resolution fails, disputes shall be resolved through <strong className="text-white">binding arbitration</strong> in accordance with the rules of the American Arbitration Association (AAA).</li>
              <li>Arbitration shall take place in the State of New Jersey, United States.</li>
              <li>You waive any right to participate in a class action lawsuit or class-wide arbitration against AI Parlay Picks.</li>
              <li><strong className="text-white">Small Claims Exception:</strong> Either party may bring an individual action in small claims court if the claim qualifies.</li>
              <li><strong className="text-white">Opt-Out Right:</strong> You may opt out of the arbitration agreement by sending written notice to our support bot within 30 days of first accepting these Terms. If you opt out, disputes will be resolved in the courts of New Jersey.</li>
              <li><strong className="text-white">Fee Allocation:</strong> Each party shall bear its own costs of arbitration. Filing fees shall be split equally unless the arbitrator determines otherwise.</li>
              <li>These Terms are governed by and construed in accordance with the laws of the <strong className="text-white">State of New Jersey</strong>, without regard to its conflict of law principles.</li>
            </ul>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">14</span> Responsible Gambling
            </h2>
            <div className="card p-5 border-green-500/20 bg-green-500/[0.03]">
              <p className="text-green-200/90 text-sm mb-3 font-medium">We encourage responsible gambling.</p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-green-200/80">
                <li>Set a budget before you bet and stick to it.</li>
                <li>Never chase losses.</li>
                <li>Never bet money you cannot afford to lose.</li>
                <li>Gambling should be entertainment, not a source of income.</li>
                <li>Take breaks and set time limits.</li>
                <li>If gambling stops being fun, stop.</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-green-500/10">
                <p className="text-xs text-green-200/60">
                  <strong>Resources:</strong><br />
                  National Council on Problem Gambling: <a href="tel:18005224700" className="text-green-300 hover:underline">1-800-522-4700</a><br />
                  <a href="https://www.ncpgambling.org" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:underline">ncpgambling.org</a> · 
                  <a href="https://www.gamblingtherapy.org" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:underline ml-1">gamblingtherapy.org</a> · 
                  <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:underline ml-1">begambleaware.org</a>
                </p>
              </div>
            </div>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">15</span> Miscellaneous
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white">Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.</li>
              <li><strong className="text-white">Entire Agreement:</strong> These Terms constitute the entire agreement between you and AI Parlay Picks regarding the Service.</li>
              <li><strong className="text-white">Waiver:</strong> Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</li>
              <li><strong className="text-white">Assignment:</strong> We may assign our rights and obligations under these Terms without notice. You may not assign your rights.</li>
              <li><strong className="text-white">Force Majeure:</strong> We shall not be liable for any failure or delay caused by circumstances beyond our reasonable control.</li>
            </ul>
          </section>

          {/* 16 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500 text-sm font-mono">16</span> Contact
            </h2>
            <p>For questions about these Terms, contact us through:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong className="text-white">Support Bot:</strong> <a href="https://t.me/parlaypickssupportbot" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">@parlaypickssupportbot</a> on Telegram</li>
              <li><strong className="text-white">Twitter/X:</strong> <a href="https://x.com/AIParlayPicksTG" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">@AIParlayPicksTG</a></li>
            </ul>
          </section>

          {/* Final note */}
          <div className="border-t border-white/[0.06] pt-8 mt-12">
            <p className="text-xs text-zinc-600 text-center">
              By using AI Parlay Picks, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              <br className="hidden sm:block" />
              AI Parlay Picks is an entertainment and informational service. Always gamble responsibly. 18+ only.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <span className="text-[11px] text-zinc-600">© 2026 AI Parlay Picks</span>
          <Link href="/" className="text-[11px] text-zinc-600 hover:text-zinc-300 transition-colors">Home</Link>
        </div>
      </footer>
    </div>
  );
}
