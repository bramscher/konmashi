import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Konmashi',
  description: 'Privacy Policy for Konmashi - AI-powered content marketing platform',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Konmashi ("we," "our," or "us"). This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our AI-powered content marketing 
              platform (the "Service"). By using our Service, you agree to the practices described in 
              this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium mb-3">2.1 Personal Information</h3>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Email address and account credentials</li>
              <li>Name and business information</li>
              <li>Brand identity information (voice, tone, target audience)</li>
              <li>Content preferences and feedback</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">2.2 Generated Content</h3>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Content prompts and requests</li>
              <li>AI-generated text, images, and video scripts</li>
              <li>Content feedback and ratings</li>
              <li>Ideas stored in your Ideabank</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">2.3 Social Media Integration Data</h3>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Social media account authentication tokens</li>
              <li>Platform-specific user IDs</li>
              <li>Scheduled post information</li>
              <li>Publishing analytics and performance data</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">2.4 Technical Information</h3>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Usage patterns and platform interactions</li>
              <li>API usage logs and performance metrics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Provide and improve our AI content generation services</li>
              <li>Personalize content based on your brand identity</li>
              <li>Enable social media platform integrations and publishing</li>
              <li>Process your content requests and feedback</li>
              <li>Maintain and secure your account</li>
              <li>Comply with legal obligations and platform requirements</li>
              <li>Improve our AI models and algorithms (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Social Media Platform Integration</h2>
            <p className="mb-4">
              When you connect your social media accounts (Instagram, TikTok, YouTube, LinkedIn, 
              Facebook, Pinterest), we:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Store encrypted authentication tokens to post on your behalf</li>
              <li>Access only the permissions you explicitly grant</li>
              <li>Never store your social media passwords</li>
              <li>Comply with each platform's API terms and privacy requirements</li>
              <li>Allow you to revoke access at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Sharing and Disclosure</h2>
            <p className="mb-4">We do not sell your personal information. We may share information in the following circumstances:</p>
            
            <h3 className="text-xl font-medium mb-3">5.1 Service Providers</h3>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>AI service providers for content generation</li>
              <li>Cloud hosting and database services (Supabase, Vercel)</li>
              <li>Payment processors (Stripe)</li>
              <li>Analytics and monitoring services</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">5.2 Legal Requirements</h3>
            <p className="mb-4">
              We may disclose information if required by law, legal process, or to protect the 
              rights, property, or safety of Konmashi, our users, or others.
            </p>

            <h3 className="text-xl font-medium mb-3">5.3 Business Transfers</h3>
            <p className="mb-4">
              Information may be transferred as part of a merger, acquisition, or sale of assets, 
              with appropriate notice to users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p className="mb-4">We implement appropriate security measures to protect your information:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure authentication using industry standards</li>
              <li>Regular security audits and monitoring</li>
              <li>Access controls and employee training</li>
              <li>Secure API integrations with social media platforms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights and Choices</h2>
            <p className="mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Opt-out:</strong> Decline certain uses of your information</li>
              <li><strong>Account Control:</strong> Manage social media connections and content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
            <p className="mb-4">
              Your information may be processed in countries other than your own. We ensure appropriate 
              safeguards are in place for international data transfers in compliance with applicable 
              data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
            <p className="mb-4">
              Our Service is not intended for children under 13 years of age. We do not knowingly 
              collect personal information from children under 13. If you believe we have collected 
              information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material 
              changes by posting the new Privacy Policy on this page and updating the "Last updated" 
              date. Your continued use of the Service constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p><strong>Email:</strong> privacy@konmashi.com</p>
              <p><strong>Address:</strong><br />
                Konmashi c/o HangTen Venture Studio<br />
                70 SW Century Drive, #1034<br />
                Bend, OR 97702
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 