import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, FileText, Mail, Calendar } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Information We Collect',
      content: [
        'Personal information you provide when contacting us (name, email, company)',
        'Technical information about your visit (IP address, browser type, pages visited)',
        'Communication records when you interact with our services',
        'Project-related information shared during consultations'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'To respond to your inquiries and provide requested services',
        'To improve our website and service offerings',
        'To send you relevant updates about our services (with your consent)',
        'To comply with legal obligations and protect our rights'
      ]
    },
    {
      icon: Lock,
      title: 'Information Security',
      content: [
        'We implement industry-standard security measures to protect your data',
        'All data transmission is encrypted using SSL/TLS protocols',
        'Access to personal information is restricted to authorized personnel only',
        'We regularly review and update our security practices'
      ]
    },
    {
      icon: Shield,
      title: 'Data Sharing',
      content: [
        'We do not sell, trade, or rent your personal information to third parties',
        'Information may be shared with trusted service providers who assist in our operations',
        'We may disclose information when required by law or to protect our rights',
        'Any third-party services we use are bound by strict confidentiality agreements'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - AnITConsultant, LLC | Data Protection & Privacy</title>
        <meta name="description" content="AnITConsultant, LLC Privacy Policy. Learn how we collect, use, and protect your personal information. We are committed to maintaining your privacy and data security." />
      </Helmet>

      <div className="pt-16 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 hero-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">Privacy Policy</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how AnITConsultant, LLC 
                collects, uses, and protects your personal information.
              </p>
              <div className="flex items-center justify-center mt-6 text-gray-400">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">Last updated: January 2025</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Policy Sections */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="tech-card rounded-xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-20 bg-black/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="tech-card rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Your Rights</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Access your personal information</li>
                  <li>• Request correction of inaccurate data</li>
                  <li>• Request deletion of your information</li>
                  <li>• Opt-out of marketing communications</li>
                  <li>• Data portability where applicable</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="tech-card rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Cookies & Tracking</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Essential cookies for website functionality</li>
                  <li>• Analytics to improve user experience</li>
                  <li>• No third-party advertising cookies</li>
                  <li>• You can control cookie preferences</li>
                  <li>• Clear instructions in browser settings</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="tech-card rounded-xl p-8 text-center"
            >
              <Mail className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Questions About This Policy?
              </h3>
              <p className="text-gray-300 mb-6">
                If you have any questions about this Privacy Policy or how we handle your data, 
                please don't hesitate to contact us.
              </p>
              <div className="space-y-2 text-gray-400">
                <p>Email: <span className="text-blue-400">privacy@anitconsultant.com</span></p>
                <p>Phone: <span className="text-blue-400">+1 (555) 123-4567</span></p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Policy Updates */}
        <section className="py-12 bg-black/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Policy Updates</h3>
              <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                We may update this Privacy Policy from time to time. We will notify you of any 
                significant changes by posting the new policy on this page and updating the 
                "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;