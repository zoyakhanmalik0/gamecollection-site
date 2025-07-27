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
          <p className="mb-4">Last updated: July 27, 2025</p>

          <p className="mb-4">
            This Privacy Policy explains how <strong>gamecollector.site</strong> collects, uses, and protects the information you provide when using our website. We are committed to ensuring your privacy is protected.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li><strong>Personal Information:</strong> Such as your name and email address when you subscribe to our newsletter.</li>
            <li><strong>Non-Personal Information:</strong> Such as browser type, IP address, and usage data collected through cookies or analytics tools.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>To send newsletters, updates, and promotional emails (if you opt-in).</li>
            <li>To improve website functionality and user experience.</li>
            <li>To monitor and analyze usage trends and interactions.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">3. Cookies</h2>
          <p className="mb-4">
            We use cookies to personalize content, improve site navigation, and analyze traffic. You can choose to accept or decline cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
          <p className="mb-4">
            We may use trusted third-party tools such as Google Analytics or advertising networks to help us understand visitor behavior or show relevant ads. These services may also use cookies or other tracking technologies.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">5. Data Security</h2>
          <p className="mb-4">
            We take appropriate security measures to protect your data from unauthorized access, alteration, or disclosure.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Rights</h2>
          <p className="mb-4">
            You have the right to request access, correction, or deletion of your personal data at any time. Please contact us if you would like to exercise your rights.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">7. Children’s Privacy</h2>
          <p className="mb-4">
            We do not knowingly collect personal information from children under the age of 13. If we become aware of such data, we will take steps to delete it.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">8. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy occasionally. Changes will be posted on this page with an updated "Last updated" date.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">9. Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy, feel free to contact us at: <br />
            <strong>Email:</strong> support@gamecollector.site
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
