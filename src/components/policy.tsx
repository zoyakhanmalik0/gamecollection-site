import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10 text-gray-800">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="mb-4 text-sm text-gray-600">Last updated: July 27, 2025</p>

          <p className="mb-4">
            This Privacy Policy describes how <strong>gamecollector.site</strong> (“we”, “our”, or “us”) collects, uses, and safeguards your information when you access or interact with our website. We are committed to protecting your personal data and respecting your privacy rights.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li><strong>Personal Information:</strong> Your name, email address, or other contact details when voluntarily submitted (e.g., via newsletter signup or contact form).</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent, clicks, referring URLs, and other diagnostic data.</li>
            <li><strong>Device Information:</strong> IP address, browser type, device ID, operating system, and similar metadata.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>To operate and improve our website.</li>
            <li>To respond to inquiries or provide customer support.</li>
            <li>To send updates, newsletters, or marketing content (only with your consent).</li>
            <li>To detect and prevent fraudulent or unauthorized activity.</li>
            <li>To comply with legal obligations or protect our rights.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">3. Cookies & Tracking Technologies</h2>
          <p className="mb-4">
            We use cookies and similar technologies to enhance your experience, analyze traffic, and show relevant ads. You can modify cookie settings in your browser at any time.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
          <p className="mb-4">
            We may work with trusted third parties like Google Analytics and advertising partners to analyze behavior and serve ads. These parties may also use cookies and other tracking tools in accordance with their own privacy policies.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">5. Data Retention</h2>
          <p className="mb-4">
            We retain personal data only as long as necessary to fulfill the purposes outlined in this policy or as required by law.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Privacy Rights</h2>
          <p className="mb-4">
            Depending on your region, you may have rights to access, update, delete, or restrict the use of your personal data. To exercise your rights, contact us using the information below.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">7. Children’s Privacy</h2>
          <p className="mb-4">
            We do not knowingly collect personal data from individuals under the age of 13. If we learn that such information has been collected, we will take steps to delete it promptly.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">8. International Users</h2>
          <p className="mb-4">
            If you are accessing this website from outside Pakistan, your information may be transferred to, stored, or processed in Pakistan. By using our site, you consent to this transfer.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">9. Security of Your Information</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your data from unauthorized access, disclosure, or loss. However, no system is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">10. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this policy from time to time. Changes will be reflected on this page with the revised “Last updated” date. We encourage users to review this page periodically.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">11. Contact Us</h2>
          <p className="mb-4">
            If you have any questions or requests regarding this Privacy Policy, please contact us at: <br />
            <strong>Email:</strong> <a href="mailto:support@gamecollector.site" className="text-orange-600">support@gamecollector.site</a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
