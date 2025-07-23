
import React from 'react';

const TermsOfServicePage: React.FC = () => (
  <div className="bg-brand-surface border border-gray-700/50 rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto animate-fade-in">
    <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
    <p className="text-sm text-gray-500 mb-8">Last Updated: July 23, 2025</p>
    
    <div className="space-y-6 text-gray-300">
        <p>Please read these Terms of Service ("Terms") carefully before using the MenuSparks application and services (the "Service") operated by MenuSparks ("us", "we", or "our"). Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms.</p>
        <p>By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.</p>
        
        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">1. Acceptance and Eligibility</h2>
            <div className="mt-4 space-y-4">
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">1.1 Agreement</h3>
                    <p className="mt-2">By creating an account or using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">1.2 Eligibility</h3>
                    <p className="mt-2">You must be at least 18 years old and have the legal capacity to enter into contracts in your jurisdiction. By using the Service, you represent and warrant that you meet these requirements.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">1.3 Business Use</h3>
                    <p className="mt-2">The Service is intended for commercial restaurant and food service businesses. You represent that you are authorized to bind your business to these Terms.</p>
                </div>
            </div>
        </div>
        
        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">2. Account Registration and Security</h2>
            <div className="mt-4 space-y-4">
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">2.1 Account Creation</h3>
                    <p className="mt-2">When you create an account, you must provide accurate, complete, and current information. You are responsible for maintaining and updating this information.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">2.2 Account Security</h3>
                    <p className="mt-2">You are solely responsible for:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                        <li>Maintaining the confidentiality of your password and account credentials</li>
                        <li>All activities that occur under your account</li>
                        <li>Immediately notifying us of any unauthorized use or security breach</li>
                        <li>Using strong passwords and following security best practices</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">2.3 Account Ownership</h3>
                    <p className="mt-2">Accounts are non-transferable. You may not sell, transfer, or assign your account to another party without our written consent.</p>
                </div>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">3. Service Description</h2>
            <div className="mt-4 space-y-4">
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">3.1 Automated Content Generation</h3>
                    <p className="mt-2">MenuSparks uses its service to generate menu specials, descriptions, and related content based on your restaurant profile and inventory information.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">3.2 Service Availability</h3>
                    <p className="mt-2">We strive to maintain high service availability but do not guarantee uninterrupted access. The Service may be temporarily unavailable due to maintenance, updates, or technical issues.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">3.3 Service Modifications</h3>
                    <p className="mt-2">We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time with reasonable notice to users.</p>
                </div>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">4. Subscriptions and Billing</h2>
            <div className="mt-4 space-y-4">
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">4.1 Subscription Plans</h3>
                    <p className="mt-2">Certain features of the Service require a paid subscription. Current pricing and plan details are available on our website and may be updated from time to time.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">4.2 Billing Cycles</h3>
                    <p className="mt-2">Subscriptions are billed in advance on a recurring basis according to your selected plan (weekly, monthly, or annually). All fees are non-refundable except as required by law.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">4.3 Automatic Renewal</h3>
                    <p className="mt-2">Your subscription will automatically renew at the end of each billing cycle unless you cancel before the renewal date. You can cancel your subscription at any time through your account settings.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">4.4 Price Changes</h3>
                    <p className="mt-2">We may change subscription prices with at least 30 days' advance notice. Price changes will take effect at your next billing cycle after the notice period.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">4.5 Payment Methods</h3>
                    <p className="mt-2">You must provide a valid payment method and authorize us to charge all fees. You are responsible for keeping payment information current and paying all charges on time.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">4.6 Late Payments</h3>
                    <p className="mt-2">Overdue accounts may result in service suspension until payment is received. We may charge late fees as permitted by law.</p>
                </div>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">5. Acceptable Use</h2>
            <div className="mt-4 space-y-4">
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">5.1 Permitted Use</h3>
                    <p className="mt-2">You may use the Service only for lawful business purposes in accordance with these Terms and all applicable laws and regulations.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">5.2 Prohibited Activities</h3>
                    <p className="mt-2">You agree not to:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                        <li>Use the Service for any illegal or unauthorized purpose</li>
                        <li>Violate any laws, regulations, or third-party rights</li>
                        <li>Attempt to gain unauthorized access to the Service or other users' accounts</li>
                        <li>Interfere with or disrupt the Service's functionality</li>
                        <li>Use automated tools to access the Service without permission</li>
                        <li>Share your account credentials with unauthorized parties</li>
                        <li>Use the Service to generate content that is false, misleading, or harmful</li>
                        <li>Reverse engineer, decompile, or attempt to extract source code</li>
                        <li>Remove or alter any proprietary notices or labels</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">5.3 Content Standards</h3>
                    <p className="mt-2">All content you provide must be:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                        <li>Accurate and truthful</li>
                        <li>Compliant with food safety and labeling regulations</li>
                        <li>Free from harmful, offensive, or illegal material</li>
                        <li>Respectful of intellectual property rights</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">6. Intellectual Property Rights</h2>
            <div className="mt-4 space-y-4">
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">6.1 Our Property</h3>
                    <p className="mt-2">The Service, including all software, designs, text, graphics, and other content (excluding user-provided content), is owned by MenuSparks and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without permission.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">6.2 Your Content License</h3>
                    <p className="mt-2">You grant us a non-exclusive, worldwide, royalty-free license to use, process, and display the information you provide (restaurant profile, inventory, etc.) solely to provide the Service to you.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">6.3 Generated Content</h3>
                    <p className="mt-2">Content generated by our service for your restaurant becomes your property, but we retain the right to use aggregated, anonymized data for service improvement.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">6.4 Feedback</h3>
                    <p className="mt-2">Any feedback, suggestions, or ideas you provide may be used by us without compensation or attribution.</p>
                </div>
            </div>
        </div>
        
        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">7. Privacy and Data Protection</h2>
            <p className="mt-4">Your privacy is important to us. Our collection and use of your information is governed by our Privacy Policy, which is incorporated into these Terms by reference.</p>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">8. Disclaimers and Limitations of Liability</h2>
            <div className="mt-4 space-y-4">
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">8.1 Service Disclaimer</h3>
                    <p className="mt-2">THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">8.2 Content Disclaimer</h3>
                    <p className="mt-2">The Service provides generated suggestions for menu items, recipes, pricing, and descriptions for informational and inspirational purposes only. You are solely responsible for:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                        <li>Verifying the accuracy and safety of all food-related content</li>
                        <li>Compliance with health codes, food safety regulations, and allergen labeling requirements</li>
                        <li>Pricing decisions and business operations</li>
                        <li>Quality control and customer satisfaction</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">8.3 Limitation of Liability</h3>
                    <p className="mt-2">TO THE MAXIMUM EXTENT PERMITTED BY LAW, MENUSPARKS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES, ARISING FROM YOUR USE OF THE SERVICE.</p>
                    <p className="mt-2">OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM THESE TERMS OR YOUR USE OF THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">8.4 No Warranty for Generated Content</h3>
                    <p className="mt-2">We do not warrant that generated content will be error-free, appropriate for your specific needs, or compliant with all applicable regulations. You must review and verify all generated content before use.</p>
                </div>
            </div>
        </div>
        
        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">9. Indemnification</h2>
            <p className="mt-4">You agree to indemnify and hold harmless MenuSparks and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:</p>
            <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Food or services you provide to customers</li>
                <li>Your breach of any law or regulation</li>
                <li>Infringement of third-party rights</li>
            </ul>
        </div>
        
        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">10. Termination</h2>
            <div className="mt-4 space-y-4">
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">10.1 Termination by You</h3>
                    <p className="mt-2">You may terminate your account at any time by canceling your subscription and ceasing to use the Service. Termination does not entitle you to any refund of prepaid fees.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">10.2 Termination by Us</h3>
                    <p className="mt-2">We may suspend or terminate your account immediately, without prior notice, if you:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                        <li>Breach these Terms</li>
                        <li>Engage in prohibited activities</li>
                        <li>Fail to pay required fees</li>
                        <li>Use the Service in a way that could harm us or other users</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">10.3 Effect of Termination</h3>
                    <p className="mt-2">Upon termination:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                        <li>Your right to access the Service ends immediately</li>
                        <li>We may delete your account and data in accordance with our Privacy Policy</li>
                        <li>Provisions that should survive termination (including payment obligations, disclaimers, and limitations of liability) will remain in effect</li>
                    </ul>
                </div>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">11. Dispute Resolution</h2>
            <div className="mt-4 space-y-4">
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">11.1 Governing Law</h3>
                    <p className="mt-2">These Terms are governed by the laws of [Your Jurisdiction] without regard to conflict of law principles.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">11.2 Arbitration</h3>
                    <p className="mt-2">Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration rather than in court, except for small claims court matters and injunctive relief.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">11.3 Class Action Waiver</h3>
                    <p className="mt-2">You agree that disputes will be resolved individually and waive your right to participate in class actions or collective proceedings.</p>
                </div>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">12. General Provisions</h2>
            <div className="mt-4 space-y-4">
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">12.1 Entire Agreement</h3>
                    <p className="mt-2">These Terms, together with our Privacy Policy, constitute the entire agreement between you and MenuSparks regarding the Service.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">12.2 Severability</h3>
                    <p className="mt-2">If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">12.3 No Waiver</h3>
                    <p className="mt-2">Our failure to enforce any provision of these Terms does not constitute a waiver of that provision or any other rights.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">12.4 Assignment</h3>
                    <p className="mt-2">You may not assign these Terms or your account without our written consent. We may assign our rights and obligations without restriction.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-200">12.5 Force Majeure</h3>
                    <p className="mt-2">We are not liable for any failure to perform due to circumstances beyond our reasonable control, including natural disasters, acts of government, or technical failures.</p>
                </div>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">13. Changes to Terms</h2>
            <p className="mt-4">We reserve the right to modify these Terms at any time. We will provide at least 30 days' notice of material changes through email or prominent notice in the Service. Continued use after changes take effect constitutes acceptance of the new Terms.</p>
            <p className="mt-2">For minor changes (such as clarifications or corrections), we may update these Terms with immediate effect and post the updated version on our website.</p>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-gray-100 pt-4 border-t border-gray-700/50">14. Contact Information</h2>
            <div className="mt-4 space-y-2">
                <p>If you have any questions about these Terms, please contact us at:</p>
                <p><strong>General Inquiries:</strong> <a href="mailto:general@menusparks.com" className="text-brand-primary-light hover:underline">general@menusparks.com</a></p>
                <p><strong>Support:</strong> <a href="mailto:support@menusparks.com" className="text-brand-primary-light hover:underline">support@menusparks.com</a></p>
                <p>We will respond to inquiries within 5 business days.</p>
            </div>
        </div>

        <div className="pt-6 border-t border-gray-700/50 text-center text-sm text-gray-500">
            <p>© 2025 MenuSparks. All rights reserved.</p>
        </div>
    </div>
  </div>
);

export default TermsOfServicePage;
