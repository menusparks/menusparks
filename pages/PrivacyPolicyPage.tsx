
import React from 'react';

const PrivacyPolicyPage: React.FC = () => (
  <div className="bg-brand-surface border border-gray-700/50 rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto animate-fade-in">
    <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
    <p className="text-sm text-gray-500 mb-8">Last Updated: July 23, 2025</p>
    
    <div className="space-y-6 text-gray-300">
        <p>Welcome to MenuSparks ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application and services.</p>
        <p>By using MenuSparks, you consent to the data practices described in this policy.</p>

        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">1. Information We Collect</h2>
            <div className="mt-4 space-y-4">
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">1.1 Personal Information</h3>
                    <p className="mt-2">We collect personally identifiable information that you voluntarily provide, including:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                        <li>Name and email address</li>
                        <li>Account credentials</li>
                        <li>Payment and billing information</li>
                        <li>Communication preferences</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">1.2 Restaurant Profile Data</h3>
                    <p className="mt-2">To provide our services, we collect business information such as:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                        <li>Restaurant name and location</li>
                        <li>Cuisine type and style</li>
                        <li>Brand identity and preferences</li>
                        <li>Menu items and inventory data</li>
                        <li>Pricing information</li>
                        <li>Operating hours and seasonal information</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">1.3 Generated Content</h3>
                    <p className="mt-2">We store all menu specials, descriptions, and related content generated through our service for your account.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">1.4 Usage Information</h3>
                    <p className="mt-2">We automatically collect certain information when you use our service:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                        <li>Device information (IP address, browser type, operating system)</li>
                        <li>Usage patterns and feature interactions</li>
                        <li>Session duration and frequency of use</li>
                        <li>Error logs and performance data</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">1.5 Cookies and Tracking Technologies</h3>
                    <p className="mt-2">We use cookies, web beacons, and similar technologies to enhance your experience, analyze usage patterns, and remember your preferences. You can control cookies through your browser settings.</p>
                </div>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">2. How We Use Your Information</h2>
            <div className="mt-4 space-y-2">
                <p>We use collected information to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Create, maintain, and secure your account</li>
                    <li>Generate personalized menu specials using our technology</li>
                    <li>Process payments and manage subscriptions</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Send service-related communications and updates</li>
                    <li>Analyze usage patterns to improve our services</li>
                    <li>Ensure compliance with legal obligations</li>
                    <li>Detect and prevent fraud or security threats</li>
                </ul>
            </div>
        </div>
        
        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">3. Legal Basis for Processing (GDPR)</h2>
            <div className="mt-4 space-y-2">
                <p>For users in the European Union, we process your data based on:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Consent:</strong> When you agree to receive marketing communications</li>
                    <li><strong>Contract Performance:</strong> To provide our services as agreed</li>
                    <li><strong>Legitimate Interest:</strong> To improve our services and ensure security</li>
                    <li><strong>Legal Compliance:</strong> To meet regulatory requirements</li>
                </ul>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">4. Information Sharing and Disclosure</h2>
            <div className="mt-4 space-y-4">
                <p>We do not sell, rent, or trade your personal information. We may share your information in these limited circumstances:</p>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">4.1 Service Providers</h3>
                    <p className="mt-2">We work with trusted third-party providers who assist with:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                        <li><strong>Content Generation:</strong> Your restaurant profile data is sent to our technology partner (Google) to generate menu content.</li>
                        <li><strong>Payment Processing:</strong> Billing information is processed by secure payment providers</li>
                        <li><strong>Cloud Hosting:</strong> Data is stored on secure cloud infrastructure</li>
                        <li><strong>Analytics:</strong> Usage data for service improvement</li>
                    </ul>
                    <p className="mt-2">All service providers are contractually bound to protect your information and use it only for specified purposes.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">4.2 Legal Requirements</h3>
                    <p className="mt-2">We may disclose information when required by law or to:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                        <li>Comply with legal processes or government requests</li>
                        <li>Protect our rights, property, or safety</li>
                        <li>Investigate potential violations of our terms</li>
                        <li>Respond to claims of illegal activity</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">4.3 Business Transfers</h3>
                    <p className="mt-2">In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of the transaction.</p>
                </div>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">5. Data Security</h2>
            <div className="mt-4 space-y-2">
                <p>We implement comprehensive security measures including:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Industry-standard encryption for data transmission and storage</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls limiting employee access to necessary data only</li>
                    <li>Secure payment processing compliant with PCI DSS standards</li>
                    <li>Regular backups and disaster recovery procedures</li>
                </ul>
                <p>However, no method of transmission or storage is 100% secure. We cannot guarantee absolute security but continuously work to protect your information.</p>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">6. Data Retention</h2>
            <div className="mt-4 space-y-2">
                <p>We retain your information for as long as necessary to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Provide our services and maintain your account</li>
                    <li>Comply with legal obligations (typically 7 years for financial records)</li>
                    <li>Resolve disputes and enforce agreements</li>
                </ul>
                <p>When you delete your account, we will delete or anonymize your personal information within 30 days, except where retention is required by law.</p>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">7. Your Rights and Choices</h2>
            <div className="mt-4 space-y-4">
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">7.1 Access and Control</h3>
                    <p className="mt-2">You have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                        <li>Access and review your personal information</li>
                        <li>Correct inaccurate or incomplete data</li>
                        <li>Delete your account and associated data</li>
                        <li>Export your data in a portable format</li>
                        <li>Restrict or object to certain processing activities</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">7.2 Communication Preferences</h3>
                    <p className="mt-2">You can:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                        <li>Opt out of marketing emails via unsubscribe links</li>
                        <li>Update notification preferences in your account settings</li>
                        <li>Contact us to modify communication preferences</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">7.3 Cookie Controls</h3>
                    <p className="mt-2">You can manage cookies through your browser settings, though this may limit some functionality.</p>
                </div>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">8. International Data Transfers</h2>
            <div className="mt-4 space-y-2">
                <p>Your information may be transferred to and processed in countries other than your residence. We ensure appropriate safeguards are in place, including:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Standard Contractual Clauses for EU data transfers</li>
                    <li>Adequacy decisions where applicable</li>
                    <li>Other legally recognized transfer mechanisms</li>
                </ul>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">9. Children's Privacy</h2>
            <p className="mt-4">MenuSparks is not intended for use by individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware of such collection, we will delete the information immediately.</p>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">10. California Privacy Rights (CCPA)</h2>
            <div className="mt-4 space-y-2">
                <p>California residents have additional rights including:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Right to know what personal information is collected and how it's used</li>
                    <li>Right to delete personal information</li>
                    <li>Right to opt-out of the sale of personal information (we do not sell data)</li>
                    <li>Right to non-discrimination for exercising privacy rights</li>
                </ul>
                <p>To exercise these rights, contact us at <a href="mailto:privacy@menusparks.com" className="text-brand-primary-light hover:underline">privacy@menusparks.com</a>.</p>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">11. Data Breach Notification</h2>
            <div className="mt-4 space-y-2">
                <p>In the unlikely event of a data breach that may compromise your personal information, we will:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Notify affected users within 72 hours of discovery</li>
                    <li>Report to relevant authorities as required by law</li>
                    <li>Provide clear information about the incident and steps being taken</li>
                </ul>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">12. Automated Decision-Making</h2>
            <div className="mt-4 space-y-2">
                <p>Our content generation service constitutes automated processing. You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Request human review of generated content</li>
                    <li>Object to automated decision-making</li>
                    <li>Understand the logic behind automated processes</li>
                </ul>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">13. Changes to This Privacy Policy</h2>
            <div className="mt-4 space-y-2">
                <p>We may update this Privacy Policy periodically. When we make material changes, we will:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Post the updated policy with a new "Last Updated" date</li>
                    <li>Notify users via email or prominent notice in the application</li>
                    <li>For significant changes, request renewed consent where required</li>
                </ul>
                <p>Continued use of our service after changes constitutes acceptance of the updated policy.</p>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">14. Contact Information</h2>
            <div className="mt-4 space-y-2">
                <p>For questions, concerns, or to exercise your privacy rights, contact us:</p>
                <p><strong>Email:</strong> <a href="mailto:general@menusparks.com" className="text-brand-primary-light hover:underline">general@menusparks.com</a></p>
                <p><strong>Privacy Inquiries:</strong> <a href="mailto:privacy@menusparks.com" className="text-brand-primary-light hover:underline">privacy@menusparks.com</a></p>
                <p>We will respond to privacy requests within 30 days (or as required by applicable law).</p>
            </div>
        </div>
        
        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">15. Governing Law</h2>
            <p className="mt-4">This Privacy Policy is governed by the laws of [Your Jurisdiction] without regard to conflict of law principles.</p>
        </div>

        <div className="pt-6 border-t border-gray-700/50 text-center text-sm text-gray-500">
            <p>© 2025 MenuSparks. All rights reserved.</p>
        </div>
    </div>
  </div>
);

export default PrivacyPolicyPage;
