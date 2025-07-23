
import React from 'react';

const TermsOfServicePage: React.FC = () => (
  <div className="bg-brand-surface border border-gray-700/50 rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto animate-fade-in">
    <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
    <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
    <div className="space-y-6 text-gray-300">
      <p>Please read these Terms of Service ("Terms") carefully before using the MenuSparks application (the "Service") operated by MenuSparks ("us", "we", or "our"). Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms.</p>
      
      <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">1. Accounts</h2>
      <p>When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.</p>
      
      <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">2. Subscriptions</h2>
      <p>Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set on a weekly basis. At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or we cancel it.</p>
      
      <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">3. Intellectual Property</h2>
      <p>The Service and its original content (excluding content provided by users), features and functionality are and will remain the exclusive property of MenuSparks and its licensors. You grant us a license to use the information you provide (such as inventory and brand identity) solely for the purpose of providing the Service to you.</p>

      <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">4. Disclaimer of Liability</h2>
      <p>The Service provides suggestions for menu items, recipes, pricing, and descriptions. These are for informational and inspirational purposes only. You are solely responsible for all aspects of food preparation, safety, pricing, allergen information, and compliance with all applicable laws and regulations. We are not liable for any issues arising from the food or services you provide to your customers.</p>

      <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">5. Termination</h2>
      <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

      <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">6. Changes</h2>
      <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
      
      <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">7. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us at: <a href="mailto:support@menusparks.com" className="text-brand-primary-light hover:underline">support@menusparks.com</a></p>
    </div>
  </div>
);

export default TermsOfServicePage;
