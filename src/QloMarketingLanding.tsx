import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Brain, 
  Calendar,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X,
  Zap,
  Target,
  Shield,
  Smartphone,
  MapPin,
  DollarSign,
  Eye,
  Settings,
  AlertTriangle,
  Heart
} from 'lucide-react';

const QloMarketingLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleEarlyAccess = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Early access signup:', email);
    setEmail('');
    alert('Thank you for your interest! We\'ll notify you when Qlo is available.');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] text-white font-['Plus_Jakarta_Sans']">
      {/* Sticky Header */}
      <motion.header 
        className="fixed top-0 w-full bg-[#0B0C10]/95 backdrop-blur-md border-b border-gray-800 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Qlo</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl transition-colors font-semibold">
                Book Demo
              </button>
              <a 
                href="https://web.qlo.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-xl transition-colors font-semibold"
              >
                Login
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-[#1F2937] border-t border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-300 hover:text-white">Features</a>
              <a href="#testimonials" className="block text-gray-300 hover:text-white">Testimonials</a>
              <a href="#pricing" className="block text-gray-300 hover:text-white">Pricing</a>
              <button className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-xl font-semibold">
                Book Demo
              </button>
              <a 
                href="https://web.qlo.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-purple-600 hover:bg-purple-700 px-4 py-3 rounded-xl text-center font-semibold"
              >
                Login
              </a>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight"
              variants={fadeInUp}
            >
              AI-Powered Walk-In Traffic Management
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              Transform your business with intelligent queue management. Real-time wait times, 
              AI predictions, and optimized scheduling for barbers, salons, clinics, MOT garages, and more.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              variants={fadeInUp}
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 flex items-center shadow-2xl">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button className="border border-gray-600 hover:border-gray-400 px-10 py-4 rounded-xl text-lg font-semibold transition-colors hover:bg-gray-800/50">
                Watch Demo
              </button>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
              variants={fadeInUp}
            >
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-2xl backdrop-blur">
                <div className="text-4xl font-bold text-blue-400 mb-2">85%</div>
                <div className="text-gray-300 text-sm">Revenue Increase</div>
              </div>
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-2xl backdrop-blur">
                <div className="text-4xl font-bold text-purple-400 mb-2">3x</div>
                <div className="text-gray-300 text-sm">Customer Satisfaction</div>
              </div>
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-2xl backdrop-blur">
                <div className="text-4xl font-bold text-pink-400 mb-2">50%</div>
                <div className="text-gray-300 text-sm">Wait Time Reduction</div>
              </div>
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-2xl backdrop-blur">
                <div className="text-4xl font-bold text-green-400 mb-2">10k+</div>
                <div className="text-gray-300 text-sm">Businesses Trust Qlo</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Customer Journey Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              How Qlo Transforms Customer Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Say goodbye to uncertainty and long waits. Your customers get real-time updates and smart recommendations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye className="w-12 h-12 text-blue-400" />,
                title: "Real-Time Wait Times",
                description: "Customers see live wait times before arriving, helping them plan their visit perfectly and reduce perceived wait times."
              },
              {
                icon: <Brain className="w-12 h-12 text-purple-400" />,
                title: "AI-Powered Predictions",
                description: "Smart algorithms predict optimal visit times based on historical data, weather, and current trends for each business type."
              },
              {
                icon: <Smartphone className="w-12 h-12 text-pink-400" />,
                title: "Smart Queue Management",
                description: "Intelligent queue systems with SMS notifications reduce perceived wait times and improve customer satisfaction by 300%."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-b from-[#1F2937] to-[#111827] p-8 rounded-2xl hover:from-[#374151] hover:to-[#1F2937] transition-all duration-300 border border-gray-700/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Owner Journey Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Grow Your Business Revenue with AI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From staff optimization to revenue analytics, Qlo gives you the tools to maximize profitability across all walk-in business types.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Calendar className="w-12 h-12 text-green-400" />,
                title: "Smart Scheduling",
                description: "AI optimizes staff schedules based on predicted demand patterns, reducing labor costs by 30%."
              },
              {
                icon: <BarChart3 className="w-12 h-12 text-blue-400" />,
                title: "Performance Analytics",
                description: "Detailed insights into peak hours, customer flow, and revenue optimization with real-time dashboards."
              },
              {
                icon: <DollarSign className="w-12 h-12 text-purple-400" />,
                title: "Revenue Growth",
                description: "Increase revenue by 85% through better resource allocation and customer management optimization."
              },
              {
                icon: <MapPin className="w-12 h-12 text-pink-400" />,
                title: "Multi-Location Support",
                description: "Manage multiple locations from a single dashboard with unified reporting and cross-location insights."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 p-8 rounded-2xl mb-4 hover:from-gray-700/80 hover:to-gray-600/80 transition-all duration-300 border border-gray-600/30">
                  <div className="flex justify-center mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perfect for Every Walk-In Business
            </h2>
            <p className="text-xl text-gray-300">
              Qlo adapts to your industry's specific needs and customer flow patterns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Barber Shops", icon: "✂️" },
              { name: "Beauty Salons", icon: "💄" },
              { name: "Nail Studios", icon: "💅" },
              { name: "Medical Clinics", icon: "🏥" },
              { name: "MOT Garages", icon: "🔧" },
              { name: "Deli Counters", icon: "🥪" }
            ].map((industry, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-b from-gray-800/60 to-gray-900/60 p-6 rounded-xl text-center hover:from-gray-700/60 hover:to-gray-800/60 transition-all duration-300 border border-gray-600/30"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-3">{industry.icon}</div>
                <div className="font-semibold text-sm">{industry.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Retention Analytics Feature */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Turn Data Into Customer Loyalty
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced retention analytics help you understand customer behavior, identify at-risk clients, and build lasting relationships that drive revenue growth.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Benefits & Narrative */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 p-6 rounded-xl border border-green-500/30">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500/20 p-3 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-400 mb-2">Identify High-Value Customers</h3>
                      <p className="text-gray-300">
                        Automatically track customers who visit 4+ times per month. At Elite Fitness Club, this helped identify their top 23% of members who generate 60% of revenue.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-600/20 to-red-600/20 p-6 rounded-xl border border-amber-500/30">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-500/20 p-3 rounded-lg">
                      <AlertTriangle className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-400 mb-2">Prevent Customer Churn</h3>
                      <p className="text-gray-300">
                        Get early warnings when customers haven't visited in 6+ weeks. Proactive outreach helped Elite Fitness reduce churn by 34% in just 3 months.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-xl border border-blue-500/30">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg">
                      <Heart className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-400 mb-2">Build Growing Loyalty</h3>
                      <p className="text-gray-300">
                        Track customers increasing their visit frequency and reward their loyalty. Elite Fitness saw 31 members upgrade to premium memberships after targeted loyalty campaigns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Mock Analytics Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-b from-gray-800/90 to-gray-900/90 p-6 rounded-2xl border border-gray-600/50 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white">Elite Fitness Club - Analytics</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-gray-400">Live Data</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Retention Rate Display */}
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-4 rounded-xl border border-green-400/30">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-1">94%</div>
                      <p className="text-gray-300 text-sm">Member Retention Rate</p>
                      <div className="flex items-center justify-center mt-2">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                        <span className="text-xs text-green-400">+8% vs last month</span>
                      </div>
                    </div>
                  </div>

                  {/* Customer Segments */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <div className="text-xl font-bold text-blue-400">247</div>
                      <div className="text-xs text-gray-400">High-Value Members</div>
                      <div className="text-xs text-blue-400">4+ visits/month</div>
                    </div>
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <div className="text-xl font-bold text-amber-400">18</div>
                      <div className="text-xs text-gray-400">At-Risk Members</div>
                      <div className="text-xs text-amber-400">6+ weeks absent</div>
                    </div>
                  </div>

                  {/* Activity Trend */}
                  <div className="bg-gray-700/30 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-400">Member Activity Trend</span>
                      <span className="text-xs text-green-400">↗ +12%</span>
                    </div>
                    <div className="flex items-end space-x-2 h-16">
                      {[40, 55, 35, 70, 85, 60, 90].map((height, index) => (
                        <div 
                          key={index}
                          className="bg-gradient-to-t from-blue-500 to-green-400 rounded-sm"
                          style={{ height: `${height}%`, width: '14%' }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Action Recommendations */}
                  <div className="bg-purple-600/20 p-4 rounded-lg border border-purple-500/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-4 h-4 text-purple-400" />
                      <span className="text-sm font-semibold text-purple-400">AI Recommendation</span>
                    </div>
                    <p className="text-xs text-gray-300">
                      Send retention campaign to 18 at-risk members. Predicted 67% success rate based on historical data.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Transform Customer Data Into Business Growth
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join Elite Fitness Club and hundreds of other businesses using Qlo's retention analytics to increase customer lifetime value by an average of 43%.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                onClick={() => window.open('https://web.qlo.app/', '_blank')}
              >
                See Your Retention Analytics
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-300">
              See how Qlo transforms operations across different industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                role: "Owner, Mitchell's Barber Shop",
                content: "Qlo increased our revenue by 75% in just 6 months. Customers love knowing exactly when to come in, and we've eliminated the chaos of walk-in queues. The AI predictions are incredibly accurate.",
                rating: 5,
                image: "👩‍💼"
              },
              {
                name: "Dr. James Harrison",
                role: "Practice Manager, City Medical",
                content: "Patient satisfaction scores improved dramatically. The AI predictions help us staff appropriately, and patients appreciate the transparency of wait times. It's revolutionized our clinic operations.",
                rating: 5,
                image: "👨‍⚕️"
              },
              {
                name: "Maria Santos",
                role: "Owner, Bella Nails Studio",
                content: "The scheduling optimization alone saves us 15 hours per week. Our clients book more appointments because they can see availability in real-time. Revenue is up 60% since implementing Qlo.",
                rating: 5,
                image: "👩‍💅"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-b from-[#1F2937] to-[#111827] p-8 rounded-2xl border border-gray-700/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="text-2xl mr-3">{testimonial.image}</div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your business size and needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$49",
                period: "/month",
                description: "Perfect for single-location businesses",
                features: [
                  "Real-time wait times",
                  "Basic analytics dashboard",
                  "Customer notifications",
                  "Mobile app access",
                  "Email support"
                ],
                cta: "Start Free Trial",
                popular: false
              },
              {
                name: "Professional",
                price: "$129",
                period: "/month",
                description: "Ideal for growing businesses",
                features: [
                  "Everything in Starter",
                  "AI-powered predictions",
                  "Advanced analytics & insights",
                  "Staff scheduling optimization",
                  "Multi-location support",
                  "Priority support"
                ],
                cta: "Start Free Trial",
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For large chains and franchises",
                features: [
                  "Everything in Professional",
                  "Custom integrations",
                  "White-label solutions",
                  "Dedicated account manager",
                  "24/7 phone support",
                  "Custom reporting & APIs"
                ],
                cta: "Contact Sales",
                popular: false
              }
            ].map((plan, index) => (
              <motion.div 
                key={index}
                className={`bg-gradient-to-b from-[#1F2937] to-[#111827] p-8 rounded-2xl relative border ${plan.popular ? 'border-blue-500 shadow-2xl shadow-blue-500/20' : 'border-gray-700/50'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 text-lg">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg' 
                    : 'border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of businesses already using Qlo to increase revenue and improve customer satisfaction.
            </p>
            
            <form onSubmit={handleEarlyAccess} className="max-w-md mx-auto flex gap-4 mb-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-lg"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Early Access
              </button>
            </form>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition-all">
                Book Demo Call
              </button>
              <a 
                href="https://web.qlo.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors inline-block"
              >
                Try Live Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B0C10] py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Qlo</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                AI-powered walk-in traffic management for modern businesses. Increase revenue, reduce wait times, and delight customers.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Qlo. All rights reserved. Built for businesses that value customer experience.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QloMarketingLanding;