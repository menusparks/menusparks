
import React from 'react';

const PrivacyPolicyPage: React.FC = () => (
  <div className="bg-brand-surface border border-gray-700/50 rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto animate-fade-in">
    <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
    <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
    <div className="space-y-6 text-gray-300">
      <p>Welcome to MenuSparks. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.</p>
      
      <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">1. Information We Collect</h2>
      <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
      <ul className="list-disc list-inside space-y-2 pl-4">
        <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, and email address, that you voluntarily give to us when you register with the application.</li>
        <li><strong>Restaurant Profile Data:</strong> Information about your business, such as restaurant name, cuisine type, brand identity, and key inventory items, which you provide to enable our service.</li>
        <li><strong>Generated Content:</strong> We store the menu specials and related content generated for you through our service.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">2. How We Use Your Information</h2>
      <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we use information collected about you to:</p>
       <ul className="list-disc list-inside space-y-2 pl-4">
        <li>Create and manage your account.</li>
        <li>Generate personalized menu specials and other content as part of our service.</li>
        <li>Process payments and subscriptions.</li>
        <li>Communicate with you about your account or our services.</li>
        <li>Monitor and analyze usage and trends to improve your experience.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">3. Disclosure of Your Information</h2>
      <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information. We may share information we have collected about you in certain situations:</p>
      <ul className="list-disc list-inside space-y-2 pl-4">
        <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
        <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, and hosting services. Our AI features are powered by the Gemini API, and prompts based on your profile are sent to them to generate content.</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">4. Data Security</h2>
      <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>

      <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">5. Contact Us</h2>
      <p>If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:privacy@menusparks.com" className="text-brand-primary-light hover:underline">privacy@menusparks.com</a></p>
    </div>
  </div>
);

export default PrivacyPolicyPage;
