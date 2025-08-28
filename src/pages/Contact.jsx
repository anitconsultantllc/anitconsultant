import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaChecked) {
      toast({
        title: "Verification Failed",
        description: "Please confirm you are not a robot.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out! We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
    setCaptchaChecked(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'it@anitconsultant.com',
      description: 'Send us an email anytime',
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 270 883-1450',
      description: 'Mon-Fri from 8am to 5pm',
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Remote ONLY',
      description: 'Serving clients worldwide',
      color: 'text-red-400'
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: '< 24 Hours',
      description: 'Quick response guaranteed',
      color: 'text-purple-400'
    }
  ];

  const services = [
    'Blockchain Development',
    'AI Solutions',
    'Cloud Architecture',
    'Mobile Applications',
    'Web Development',
    'Technology Consulting',
    'Other'
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - AnITConsultant, LLC | Get Your Free Technology Consultation</title>
        <meta name="description" content="Contact AnITConsultant, LLC for expert technology consulting. Get a free consultation for your Blockchain, AI, Cloud, Mobile, or Web development project. Quick response guaranteed." />
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
                <span className="gradient-text">Get In Touch</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to transform your business with cutting-edge technology? 
                Let's discuss your project and explore how we can help you succeed.
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="tech-card rounded-xl p-6 text-center"
                >
                  <div className={`${info.color} mb-4 flex justify-center`}>
                    <info.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-blue-400 font-medium mb-1">
                    {info.details}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {info.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-black/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 lg:p-12"
            >
              <div className="text-center mb-8">
                <MessageSquare className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">
                  Start Your Project
                </h2>
                <p className="text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </Label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </Label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </Label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interested In
                    </Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-gray-800">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                  />
                </div>

                <div className="flex items-center space-x-3 p-4 bg-white/5 border border-white/10 rounded-lg">
                  <Checkbox id="captcha" checked={captchaChecked} onCheckedChange={setCaptchaChecked} />
                  <Label htmlFor="captcha" className="text-sm font-medium text-gray-300 flex items-center cursor-pointer">
                    <ShieldCheck className="h-5 w-5 mr-2 text-green-400" />
                    I am not a robot
                  </Label>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 text-lg"
                  >
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;