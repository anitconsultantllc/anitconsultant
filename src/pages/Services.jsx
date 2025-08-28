import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  Cloud, 
  Smartphone, 
  Code,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const services = [
    {
      id: 'blockchain',
      icon: Shield,
      title: 'Blockchain Development',
      color: 'from-yellow-400 to-orange-500',
      description: 'We build secure, transparent, and decentralized applications that revolutionize industries. From smart contracts to custom blockchain networks, we deliver robust solutions tailored to your business needs.',
      offerings: [
        'Smart Contract Development & Audits',
        'Decentralized Application (DApp) Development',
        'Custom Blockchain & Sidechain Solutions',
        'NFT Marketplace & Minting Platforms',
        'Tokenization & Digital Asset Management',
        'Enterprise Blockchain Integration'
      ],
      image: 'Blockchain technology illustration with connected blocks'
    },
    {
      id: 'ai',
      icon: Brain,
      title: 'AI Solutions',
      color: 'from-purple-400 to-pink-500',
      description: 'Harness the power of Artificial Intelligence and Machine Learning to unlock data-driven insights, automate processes, and create intelligent products. We help you integrate AI into your core business strategy.',
      offerings: [
        'Machine Learning Model Development',
        'Natural Language Processing (NLP) Solutions',
        'Computer Vision & Image Recognition',
        'Predictive Analytics & Forecasting',
        'AI-Powered Chatbots & Virtual Assistants',
        'MLOps & AI Infrastructure Setup'
      ],
      image: 'Artificial intelligence brain with neural networks'
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud Architecture',
      color: 'from-blue-400 to-cyan-500',
      description: 'We design and implement scalable, resilient, and cost-effective cloud infrastructures. Whether you are migrating to the cloud or optimizing your existing setup, our experts ensure a seamless and secure transition.',
      offerings: [
        'Multi-Cloud & Hybrid Cloud Strategy',
        'Cloud Migration & Modernization',
        'DevOps & CI/CD Automation',
        'Serverless Architecture Design',
        'Cloud Security & Compliance',
        'Cost Optimization & Management'
      ],
      image: 'Cloud computing infrastructure with servers and databases'
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Mobile Applications',
      color: 'from-green-400 to-emerald-500',
      description: 'Engage your users with intuitive and high-performance mobile applications. We develop for both iOS and Android, using native or cross-platform technologies to deliver exceptional user experiences.',
      offerings: [
        'Native iOS (Swift) & Android (Kotlin) Apps',
        'Cross-Platform Apps (React Native, Flutter)',
        'Progressive Web App (PWA) Development',
        'UI/UX Design for Mobile',
        'App Store Deployment & Maintenance',
        'Mobile Backend & API Development'
      ],
      image: 'Mobile phone displaying a modern application interface'
    },
    {
      id: 'web',
      icon: Code,
      title: 'Web Development',
      color: 'from-pink-400 to-red-500',
      description: 'We build modern, responsive, and feature-rich web applications that drive user engagement and business growth. Our solutions are built on robust architectures and cutting-edge technologies.',
      offerings: [
        'Full-Stack Web Application Development',
        'Frontend Development (React, Next.js)',
        'Backend Development (Node.js, Python)',
        'E-commerce & Marketplace Platforms',
        'Content Management Systems (CMS)',
        'API Design & Microservices Architecture'
      ],
      image: 'Laptop screen with lines of code and web design elements'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - AnITConsultant, LLC | Expert Tech Solutions</title>
        <meta name="description" content="AnITConsultant, LLC offers expert services in Blockchain, AI, Cloud, Mobile, and Web development. Discover how we can help you build the future of your business." />
      </Helmet>

      <div className="pt-16 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 hero-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">Our Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide end-to-end technology services to transform your ideas into reality. 
                Explore our core areas of expertise below.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Sections */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  <div className={`space-y-6 ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                        <service.icon className="h-7 w-7 text-white" />
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-white">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                      {service.offerings.map((offering) => (
                        <div key={offering} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{offering}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <motion.div 
                    className={`relative h-80 lg:h-96 rounded-2xl overflow-hidden glass-effect p-4 ${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}></div>
                    <img 
                      className="w-full h-full object-cover rounded-lg"
                      alt={service.image}
                     src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl lg:text-5xl font-bold">
                Have a Project in Mind?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Let's build something amazing together. Contact us for a free consultation.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg">
                <Link to="/contact">
                  Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;