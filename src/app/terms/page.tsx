import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Konmashi',
  description: 'Terms of Service for Konmashi - AI-powered content marketing platform',
}

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using Konmashi ("the Service"), you agree to be bound by these Terms of 
              Service ("Terms"). If you do not agree to these Terms, you may not use the Service. 
              These Terms apply to all users, including visitors, registered users, and paying customers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="mb-4">
              Konmashi is an AI-powered content marketing platform that enables users to:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Generate AI-powered text, image, and video content</li>
              <li>Manage brand identity and content strategy</li>
              <li>Connect and publish to multiple social media platforms</li>
              <li>Schedule and manage content calendars</li>
              <li>Capture and organize content ideas</li>
              <li>Iterate and improve content based on feedback</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts and Registration</h2>
            <h3 className="text-xl font-medium mb-3">3.1 Account Creation</h3>
            <p className="mb-4">
              To use certain features of the Service, you must create an account. You agree to provide 
              accurate, current, and complete information and to keep your account information updated.
            </p>

            <h3 className="text-xl font-medium mb-3">3.2 Account Security</h3>
            <p className="mb-4">
              You are responsible for maintaining the security of your account credentials and for all 
              activities that occur under your account. You must notify us immediately of any unauthorized 
              use of your account.
            </p>

            <h3 className="text-xl font-medium mb-3">3.3 Account Termination</h3>
            <p className="mb-4">
              We reserve the right to suspend or terminate your account at any time for violation of 
              these Terms or for any other reason at our sole discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. AI Content Generation and Usage</h2>
            <h3 className="text-xl font-medium mb-3">4.1 Content Generation</h3>
            <p className="mb-4">
              Our AI services generate content based on your prompts, brand identity, and preferences. 
              While we strive for accuracy and quality, AI-generated content should be reviewed and 
              may require editing before publication.
            </p>

            <h3 className="text-xl font-medium mb-3">4.2 Content Ownership</h3>
            <p className="mb-4">
              You retain ownership of content you create using our platform. However, by using our 
              Service, you grant us a limited license to process, store, and improve our AI models 
              based on your usage patterns and feedback (with appropriate anonymization).
            </p>

            <h3 className="text-xl font-medium mb-3">4.3 Content Responsibility</h3>
            <p className="mb-4">
              You are solely responsible for all content you generate and publish using our platform. 
              You must ensure that your content complies with applicable laws and platform policies.
            </p>

            <h3 className="text-xl font-medium mb-3">4.4 Prohibited Content</h3>
            <p className="mb-4">You may not use our Service to create content that:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Violates any laws or regulations</li>
              <li>Infringes on intellectual property rights</li>
              <li>Contains hate speech, harassment, or discrimination</li>
              <li>Is misleading, fraudulent, or deceptive</li>
              <li>Contains adult or explicit material</li>
              <li>Promotes violence or illegal activities</li>
              <li>Violates social media platform terms of service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Social Media Platform Integration</h2>
            <h3 className="text-xl font-medium mb-3">5.1 Platform Connections</h3>
            <p className="mb-4">
              When you connect your social media accounts (Instagram, TikTok, YouTube, LinkedIn, 
              Facebook, Pinterest), you authorize us to post content on your behalf according to 
              your scheduling and publishing preferences.
            </p>

            <h3 className="text-xl font-medium mb-3">5.2 Platform Compliance</h3>
            <p className="mb-4">
              You must comply with all terms of service, community guidelines, and policies of 
              connected social media platforms. We are not responsible for platform policy changes 
              or account suspensions on third-party platforms.
            </p>

            <h3 className="text-xl font-medium mb-3">5.3 Publishing Responsibility</h3>
            <p className="mb-4">
              While we facilitate content publishing, you remain solely responsible for all content 
              posted to your social media accounts through our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Payment and Subscription Terms</h2>
            <h3 className="text-xl font-medium mb-3">6.1 Billing</h3>
            <p className="mb-4">
              Subscription fees are billed in advance on a recurring basis. All fees are non-refundable 
              except as required by law or as specifically stated in our refund policy.
            </p>

            <h3 className="text-xl font-medium mb-3">6.2 Token Usage</h3>
            <p className="mb-4">
              Our platform uses a token-based system for AI services. Token consumption varies by 
              service type and complexity. Unused tokens do not roll over between billing periods 
              unless specifically stated in your plan.
            </p>

            <h3 className="text-xl font-medium mb-3">6.3 Price Changes</h3>
            <p className="mb-4">
              We may modify our pricing at any time. Price changes will be communicated at least 
              30 days in advance and will take effect at your next billing cycle.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
            <h3 className="text-xl font-medium mb-3">7.1 Our Intellectual Property</h3>
            <p className="mb-4">
              The Service, including its original content, features, and functionality, is owned by 
              Konmashi and is protected by international copyright, trademark, patent, trade secret, 
              and other intellectual property laws.
            </p>

            <h3 className="text-xl font-medium mb-3">7.2 User Content</h3>
            <p className="mb-4">
              You retain ownership of your content, but you grant us a worldwide, non-exclusive, 
              royalty-free license to use, reproduce, and distribute your content solely for the 
              purpose of providing and improving our Service.
            </p>

            <h3 className="text-xl font-medium mb-3">7.3 Feedback and Suggestions</h3>
            <p className="mb-4">
              Any feedback, suggestions, or ideas you provide about our Service may be used by us 
              without restriction or compensation to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Privacy and Data Protection</h2>
            <p className="mb-4">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and 
              protect your information. By using our Service, you agree to our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Disclaimers and Warranties</h2>
            <h3 className="text-xl font-medium mb-3">9.1 Service Availability</h3>
            <p className="mb-4">
              We strive to provide reliable service but cannot guarantee 100% uptime. The Service 
              is provided "as is" without warranties of any kind.
            </p>

            <h3 className="text-xl font-medium mb-3">9.2 AI Content Quality</h3>
            <p className="mb-4">
              While our AI strives for accuracy and quality, we make no warranties about the 
              accuracy, completeness, or suitability of AI-generated content for any particular purpose.
            </p>

            <h3 className="text-xl font-medium mb-3">9.3 Third-Party Services</h3>
            <p className="mb-4">
              Our Service integrates with third-party platforms and services. We are not responsible 
              for the availability, accuracy, or reliability of these third-party services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, Konmashi shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, or any loss of profits or 
              revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, 
              or other intangible losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify and hold harmless Konmashi from any claims, damages, or expenses 
              arising from your use of the Service, your content, or your violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Termination</h2>
            <p className="mb-4">
              These Terms remain in effect until terminated. You may terminate your account at any 
              time. We may suspend or terminate your access immediately, with or without notice, 
              for any reason, including breach of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. Material changes will be 
              communicated at least 30 days in advance. Your continued use of the Service after 
              changes become effective constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Governing Law</h2>
            <p className="mb-4">
              These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction], 
              without regard to conflict of law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p><strong>Email:</strong> legal@konmashi.com</p>
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