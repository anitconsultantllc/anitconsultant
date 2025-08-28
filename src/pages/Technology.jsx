import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  Cloud, 
  Smartphone, 
  Code, 
  Database,
  Cpu,
  Globe,
  Lock,
  Zap,
  Layers,
  GitBranch
} from 'lucide-react';

const Technology = () => {
  const technologies = [
    {
      category: 'Blockchain',
      icon: Shield,
      color: 'from-yellow-400 to-orange-500',
      description: 'Secure, decentralized solutions for the future',
      technologies: [
        { name: 'Ethereum', description: 'Smart contracts and DApps' },
        { name: 'Solidity', description: 'Smart contract development' },
        { name: 'Web3.js', description: 'Blockchain integration' },
        { name: 'IPFS', description: 'Decentralized storage' },
        { name: 'Hyperledger', description: 'Enterprise blockchain' },
        { name: 'Polygon', description: 'Layer 2 scaling solutions' }
      ]
    },
    {
      category: 'Artificial Intelligence',
      icon: Brain,
      color: 'from-purple-400 to-pink-500',
      description: 'Intelligent automation and machine learning',
      technologies: [
        { name: 'TensorFlow', description: 'Machine learning framework' },
        { name: 'PyTorch', description: 'Deep learning platform' },
        { name: 'OpenAI GPT', description: 'Natural language processing' },
        { name: 'Computer Vision', description: 'Image and video analysis' },
        { name: 'MLOps', description: 'ML deployment and monitoring' },
        { name: 'AutoML', description: 'Automated machine learning' }
      ]
    },
    {
      category: 'Cloud Platforms',
      icon: Cloud,
      color: 'from-blue-400 to-cyan-500',
      description: 'Scalable infrastructure and services',
      technologies: [
        { name: 'AWS', description: 'Amazon Web Services' },
        { name: 'Microsoft Azure', description: 'Cloud computing platform' },
        { name: 'Google Cloud', description: 'GCP services and tools' },
        { name: 'Kubernetes', description: 'Container orchestration' },
        { name: 'Docker', description: 'Containerization platform' },
        { name: 'Serverless', description: 'Function-as-a-Service' }
      ]
    },
    {
      category: 'Mobile Development',
      icon: Smartphone,
      color: 'from-green-400 to-emerald-500',
      description: 'Native and cross-platform mobile apps',
      technologies: [
        { name: 'React Native', description: 'Cross-platform development' },
        { name: 'Flutter', description: 'Google\'s UI toolkit' },
        { name: 'iOS (Swift)', description: 'Native iOS development' },
        { name: 'Android (Kotlin)', description: 'Native Android development' },
        { name: 'Progressive Web Apps', description: 'Web-based mobile apps' },
        { name: 'Xamarin', description: 'Microsoft mobile platform' }
      ]
    },
    {
      category: 'Web Development',
      icon: Code,
      color: 'from-pink-400 to-red-500',
      description: 'Modern web applications and platforms',
      technologies: [
        { name: 'React.js', description: 'Frontend JavaScript library' },
        { name: 'Node.js', description: 'Backend JavaScript runtime' },
        { name: 'Next.js', description: 'Full-stack React framework' },
        { name: 'TypeScript', description: 'Typed JavaScript' },
        { name: 'GraphQL', description: 'API query language' },
        { name: 'Microservices', description: 'Distributed architecture' }
      ]
    },
    {
      category: 'Database & Storage',
      icon: Database,
      color: 'from-indigo-400 to-purple-500',
      description: 'Data management and storage solutions',
      technologies: [
        { name: 'PostgreSQL', description: 'Relational database' },
        { name: 'MongoDB', description: 'NoSQL document database' },
        { name: 'Redis', description: 'In-memory data store' },
        { name: 'Elasticsearch', description: 'Search and analytics' },
        { name: 'Apache Kafka', description: 'Event streaming platform' },
        { name: 'InfluxDB', description: 'Time series database' }
      ]
    }
  ];

  const processSteps = [
    {
      icon: GitBranch,
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a comprehensive technology roadmap'
    },
    {
      icon: Layers,
      title: 'Architecture Design',
      description: 'Design scalable, secure, and maintainable system architecture'
    },
    {
      icon: Cpu,
      title: 'Development & Testing',
      description: 'Agile development with continuous testing and quality assurance'
    },
    {
      icon: Zap,
      title: 'Deployment & Optimization',
      description: 'Seamless deployment with performance optimization and monitoring'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Technology Stack - AnITConsultant, LLC | Blockchain, AI, Cloud, Mobile & Web</title>
        <meta name="description" content="Explore AnITConsultant's comprehensive technology stack including Blockchain, AI/ML, Cloud platforms, Mobile development, and Web technologies. Modern solutions for your business needs." />
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
                <span className="gradient-text">Our Technology Stack</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage cutting-edge technologies to build robust, scalable, and innovative solutions 
                that drive your business forward in the digital age.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Technology Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {technologies.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  {/* Category Header */}
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                      {category.category}
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  </div>

                  {/* Technology Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: techIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="tech-card rounded-xl p-6 group"
                      >
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {tech.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {tech.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                <span className="gradient-text">Our Development Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful project delivery
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Tech Stack */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Why Choose <span className="gradient-text">Our Technology</span>?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Lock,
                  title: 'Security First',
                  description: 'Enterprise-grade security measures and best practices in every solution we build'
                },
                {
                  icon: Zap,
                  title: 'High Performance',
                  description: 'Optimized for speed and efficiency with scalable architecture design'
                },
                {
                  icon: Globe,
                  title: 'Future-Proof',
                  description: 'Modern technologies that evolve with your business needs and industry trends'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="tech-card rounded-xl p-8 text-center"
                >
                  <div className="text-blue-400 mb-4 flex justify-center">
                    <benefit.icon className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Technology;