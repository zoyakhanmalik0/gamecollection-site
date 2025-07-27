import React from 'react';
import Header from './Header'; // ✅ Added Header
import Footer from './Footer'; // ✅ Added Footer

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      {/* ✅ Header Component */}
      <Header />

      {/* ✅ Main Content Section */}
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10 text-gray-800">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="mb-4">Last updated: July 26, 2025</p>
          <p className="mb-4">
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
          <p className="mb-4">
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the{" "}
            <a href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Privacy Policy Generator
            </a>.
          </p>

          {/* ...rest of your content remains unchanged... */}
          
          <h2 className="text-2xl font-semibold mt-6 mb-2">Interpretation and Definitions</h2>
          <h3 className="text-xl font-semibold mb-2">Interpretation</h3>
          <p className="mb-4">
            The words of which the initial letter is capitalized have meanings defined under the following conditions...
          </p>

          <h3 className="text-xl font-semibold mb-2">Definitions</h3>
          <p className="mb-4">For the purposes of this Privacy Policy:</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li><strong>Account:</strong> A unique account created for You to access our Service or parts of our Service.</li>
            <li><strong>Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party...</li>
            <li><strong>Company:</strong> Refers to Flying Chess Online.</li>
            <li><strong>Cookies:</strong> Small files placed on Your device containing browsing history and other data.</li>
            <li><strong>Country:</strong> Refers to Pakistan.</li>
            <li><strong>Device:</strong> Any device that can access the Service, such as a computer, phone, or tablet.</li>
            <li><strong>Personal Data:</strong> Any information that relates to an identified or identifiable individual.</li>
            <li><strong>Service:</strong> Refers to the Website.</li>
            <li><strong>Service Provider:</strong> Third-party processors hired by the Company to help provide the Service.</li>
            <li><strong>Usage Data:</strong> Data collected automatically during use of the Service.</li>
            <li>
              <strong>Website:</strong> Flying Chess Online, accessible at{" "}
              <a href="https://gamecollection.site/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                https://gamecollection.site/
              </a>
            </li>
            <li><strong>You:</strong> The individual or legal entity accessing or using the Service.</li>
          </ul>

          {/* ✅ The rest of your policy content stays the same. You can paste it in here if needed */}
        </div>
      </main>

      {/* ✅ Footer Component */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
