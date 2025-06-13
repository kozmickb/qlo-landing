import React, { useEffect, useState, useRef } from 'react';

// Simplified UI components for standalone deployment
const Button = ({ 
  children, 
  className = '', 
  variant = 'default',
  size = 'default',
  onClick,
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'lg';
  onClick?: () => void;
  [key: string]: any;
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground"
  };
  const sizes = {
    default: "h-10 py-2 px-4",
    lg: "h-11 px-8"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-sm text-muted-foreground ${className}`}>
    {children}
  </p>
);

const CardContent = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
    {children}
  </div>
);

// Icon components (simplified SVGs)
const TrendingUp = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
    <polyline points="16,7 22,7 22,13" />
  </svg>
);

const Users = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const Clock = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

const BarChart3 = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3v18h18" />
    <rect width="4" height="7" x="7" y="10" />
    <rect width="4" height="12" x="15" y="5" />
  </svg>
);

const MapPin = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Smartphone = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

const CheckCircle = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22,4 12,14.01 9,11.01" />
  </svg>
);

const ArrowRight = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

const Star = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

const Target = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const Zap = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
  </svg>
);

const Shield = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </svg>
);

const Brain = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
    <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
    <path d="M6 18a4 4 0 0 1-1.967-.516" />
    <path d="M19.967 17.484A4 4 0 0 1 18 18" />
  </svg>
);

const Activity = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const AlertTriangle = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const Calendar = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 6h18" />
    <path d="M3 10h18" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M8 2v4" />
    <path d="M16 2v4" />
  </svg>
);

const Bell = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

const Gift = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="8" width="18" height="4" rx="1" />
    <path d="M12 8v13" />
    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
    <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.9 4.9 0 0 1 12 8a4.9 4.9 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
  </svg>
);

// Animated Card Component
const CardComponent = ({ children, index = 0 }: { children: React.ReactNode; index?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

const QloLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800/50">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Q</span>
              </div>
              <span className="text-white font-semibold text-xl">Qlo</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="https://web.qlo.app" className="text-gray-300 hover:text-white transition-colors">Demo</a>
            </div>
            
            <div className="flex space-x-2 md:space-x-4">
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10 text-sm md:text-base px-3 md:px-4"
                onClick={() => window.open('https://web.qlo.app/auth/login', '_blank')}
              >
                Sign In
              </Button>
              <Button 
                className="bg-purple-500 hover:bg-purple-600 text-white text-sm md:text-base px-3 md:px-4"
                onClick={() => window.open('https://web.qlo.app/business-selection', '_blank')}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-8 bg-purple-500/20 text-purple-300 border-purple-500/30 font-medium px-4 py-2">
            <Target className="w-4 h-4 mr-2" />
            Business Intelligence Platform
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-white leading-tight">
            Optimise Footfall.<br />
            Predict Demand.<br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Delight Customers.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your walk-in business with intelligent analytics, real-time insights, and AI-powered predictions that help you serve customers better and boost revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300"
              onClick={() => window.open('https://web.qlo.app/business-selection', '_blank')}
            >
              <ArrowRight className="mr-3 h-5 w-5" />
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-purple-500/50 text-white hover:bg-purple-500/10 px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              onClick={() => window.open('https://web.qlo.app/business-selection', '_blank')}
            >
              <Activity className="mr-3 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Problem Statement Section */}
      <section className="py-12 md:py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-red-500/20 text-red-300 border-red-500/30 font-medium px-4 py-2">
                <AlertTriangle className="w-4 h-4 mr-2" />
                The Problem: Without Queue Management
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Your Business Right Now
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See how unmanaged queues cost businesses thousands in lost revenue and frustrated customers every day.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
              <div className="bg-gray-800/80 px-6 py-4 border-b border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-300 ml-4">Current Business Analytics - No Queue Management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-400">Chaos Mode</span>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-6">
                {/* Key Performance Metrics - Showing Problems */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="bg-purple-500/10 border-purple-500/30 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-gray-300">Current Traffic</CardTitle>
                      <Users className="h-4 w-4 text-purple-400" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-white">23</div>
                      <p className="text-xs text-purple-400">Peak capacity reached</p>
                      <div className="mt-2 w-full bg-gray-700 rounded-full h-1">
                        <div className="bg-red-500 h-1 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-blue-500/10 border-blue-500/30 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-gray-300">Avg Wait Time</CardTitle>
                      <Clock className="h-4 w-4 text-blue-400" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-white">18m</div>
                      <p className="text-xs text-red-400">+12m vs last week</p>
                      <div className="mt-2 flex space-x-1">
                        {[8, 12, 15, 18, 22].map((h, i) => (
                          <div key={i} className="w-2 bg-red-500 rounded" style={{ height: `${h}px` }}></div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-green-500/10 border-green-500/30 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-gray-300">Lost Revenue</CardTitle>
                      <TrendingUp className="h-4 w-4 text-red-400" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-white">£1,240</div>
                      <p className="text-xs text-red-400">Customers left today</p>
                      <div className="mt-2 text-xs text-gray-400">27 walk-aways</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-orange-500/10 border-orange-500/30 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-gray-300">Customer Frustration</CardTitle>
                      <AlertTriangle className="h-4 w-4 text-red-400" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-white">67%</div>
                      <p className="text-xs text-red-400">Unhappy with wait</p>
                      <div className="mt-1 flex">
                        {[1,2].map(i => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                        {[3,4,5].map(i => (
                          <Star key={i} className="w-3 h-3 text-gray-600" />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Real-time Traffic Flow and Business Intelligence */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <BarChart3 className="w-5 h-5 mr-2 text-purple-400" />
                        Hourly Traffic Flow - Chaos
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-40 md:h-48 flex items-end justify-between gap-1 px-2 relative">
                        {[
                          { hour: '9AM', height: 25, customers: 8, wait: 5, walkAways: 0 },
                          { hour: '10AM', height: 35, customers: 12, wait: 8, walkAways: 2 },
                          { hour: '11AM', height: 55, customers: 18, wait: 15, walkAways: 5 },
                          { hour: '12PM', height: 85, customers: 25, wait: 22, walkAways: 8 },
                          { hour: '1PM', height: 80, customers: 23, wait: 25, walkAways: 12 },
                          { hour: '2PM', height: 70, customers: 20, wait: 18, walkAways: 6 },
                          { hour: '3PM', height: 45, customers: 15, wait: 12, walkAways: 3 },
                          { hour: '4PM', height: 65, customers: 19, wait: 16, walkAways: 7 },
                          { hour: '5PM', height: 90, customers: 24, wait: 28, walkAways: 15 },
                          { hour: '6PM', height: 75, customers: 22, wait: 20, walkAways: 9 },
                          { hour: '7PM', height: 40, customers: 14, wait: 10, walkAways: 2 },
                          { hour: '8PM', height: 20, customers: 6, wait: 4, walkAways: 0 }
                        ].map((data, index) => (
                          <div key={index} className="flex flex-col items-center group relative flex-1 min-w-0">
                            <div 
                              className="w-3 md:w-4 bg-gradient-to-t from-red-600 via-red-500 to-orange-500 rounded-t transition-all duration-300 hover:from-red-500 hover:to-orange-400 cursor-pointer shadow-sm"
                              style={{ height: `${data.height * 1.5}px` }}
                            />
                            <span className="text-xs text-gray-400 mt-1 text-center leading-tight">{data.hour}</span>
                            <div className="hidden group-hover:block absolute bg-gray-900/95 text-white p-2 rounded shadow-xl text-xs z-20 bottom-full mb-8 left-1/2 transform -translate-x-1/2 border border-gray-700">
                              <div className="whitespace-nowrap">Customers: {data.customers}</div>
                              <div className="whitespace-nowrap">Wait: {data.wait}m</div>
                              <div className="text-red-400 whitespace-nowrap">Lost: {data.walkAways} customers</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 text-center">
                        <p className="text-xs text-gray-500">Peak hours show dangerous customer loss patterns</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                        Struggling Businesses
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { name: 'Downtown Medical Clinic', traffic: 28, wait: 45, status: 'overcrowded', color: 'red' },
                          { name: 'Bella Vista Hair Salon', traffic: 15, wait: 32, status: 'chaotic', color: 'red' },
                          { name: 'Quick Cuts Barbershop', traffic: 12, wait: 25, status: 'frustrated customers', color: 'red' },
                          { name: 'City Coffee & Pastries', traffic: 22, wait: 18, status: 'long queues', color: 'yellow' }
                        ].map((location, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className={`w-3 h-3 rounded-full ${location.color === 'red' ? 'bg-red-400' : 'bg-yellow-400'}`}></div>
                              <div>
                                <div className="text-white font-medium">{location.name}</div>
                                <div className="text-xs text-gray-400 capitalize">{location.status}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-white font-bold">{location.traffic}</div>
                              <div className="text-xs text-gray-400">{location.wait}m wait</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* AI Solutions and Smart Insights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center text-base">
                        <Brain className="w-4 h-4 mr-2 text-purple-400" />
                        Qlo Can Fix This
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-300 text-sm">Reduce Wait</span>
                          <span className="text-green-400 font-semibold">-12m</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300 text-sm">Save Revenue</span>
                          <span className="text-purple-400 font-semibold">£980</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300 text-sm">Happy Customers</span>
                          <span className="text-blue-400 font-semibold">+35%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center text-base">
                        <AlertTriangle className="w-4 h-4 mr-2 text-yellow-400" />
                        Current Problems
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="text-xs text-red-400 bg-red-400/10 p-2 rounded">
                          ⚠ 27 customers left without service
                        </div>
                        <div className="text-xs text-yellow-400 bg-yellow-400/10 p-2 rounded">
                          🕐 Average wait: 18+ minutes
                        </div>
                        <div className="text-xs text-purple-400 bg-purple-400/10 p-2 rounded">
                          📱 Enable virtual queue to reduce walkouts
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center text-base">
                        <Calendar className="w-4 h-4 mr-2 text-green-400" />
                        Today's Damage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-300 text-sm">Customers Lost</span>
                          <span className="text-red-400 font-semibold">73</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300 text-sm">Revenue Lost</span>
                          <span className="text-red-400 font-semibold">£1,240</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300 text-sm">Staff Stress</span>
                          <span className="text-red-400 font-semibold">High</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30 font-medium px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Powerful Features
            </Badge>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-white">
              Everything you need to<br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">optimize your business</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive platform provides all the tools you need to understand, predict, and improve your customer experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CardComponent index={0}>
              <Card className="h-full bg-gray-800/50 border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:border-purple-500/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-xl text-white">Real-time Analytics</CardTitle>
                  <CardDescription className="text-gray-300">
                    Monitor customer flow, wait times, and capacity in real-time with intuitive dashboards.
                  </CardDescription>
                </CardHeader>
              </Card>
            </CardComponent>

            <CardComponent index={1}>
              <Card className="h-full bg-gray-800/50 border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:border-blue-500/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-white">AI Predictions</CardTitle>
                  <CardDescription className="text-gray-300">
                    Machine learning algorithms predict busy periods and optimize staff scheduling automatically.
                  </CardDescription>
                </CardHeader>
              </Card>
            </CardComponent>

            <CardComponent index={2}>
              <Card className="h-full bg-gray-800/50 border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:border-purple-500/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-xl text-white">Multi-Location</CardTitle>
                  <CardDescription className="text-gray-300">
                    Manage multiple business locations from a single dashboard with centralized analytics.
                  </CardDescription>
                </CardHeader>
              </Card>
            </CardComponent>

            <CardComponent index={3}>
              <Card className="h-full bg-gray-800/50 border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:border-green-500/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-green-400" />
                  </div>
                  <CardTitle className="text-xl text-white">Data Security</CardTitle>
                  <CardDescription className="text-gray-300">
                    Enterprise-grade security with encrypted data storage and GDPR compliance built-in.
                  </CardDescription>
                </CardHeader>
              </Card>
            </CardComponent>

            <CardComponent index={4}>
              <Card className="h-full bg-gray-800/50 border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:border-blue-500/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                    <Bell className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-white">Smart Notifications</CardTitle>
                  <CardDescription className="text-gray-300">
                    Automated alerts for capacity management, wait time spikes, and customer satisfaction.
                  </CardDescription>
                </CardHeader>
              </Card>
            </CardComponent>

            <CardComponent index={5}>
              <Card className="h-full bg-gray-800/50 border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:border-purple-500/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-xl text-white">Business Intelligence</CardTitle>
                  <CardDescription className="text-gray-300">
                    Advanced reporting and insights to drive strategic business decisions and growth.
                  </CardDescription>
                </CardHeader>
              </Card>
            </CardComponent>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 md:py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl text-center">
          <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30 font-medium px-4 py-2">
            <Target className="w-4 h-4 mr-2" />
            Flexible Plans
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Simple, transparent<br />
            <span className="text-purple-400">pricing</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
            Choose the plan that fits your business size. All plans include core features with no hidden fees.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <CardComponent index={7}>
              <Card className="bg-gray-800/50 border-gray-700/50 hover:shadow-xl transition-all duration-300 p-8 backdrop-blur-sm">
                <CardHeader className="text-center pb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
                  <div className="text-3xl font-bold text-white mb-2">
                    Free
                  </div>
                  <p className="text-gray-400">Perfect for small businesses</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Up to 100 customers/month</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Basic analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Email support</span>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-gray-700 hover:bg-gray-600 text-white"
                    onClick={() => window.open('https://web.qlo.app/business-selection', '_blank')}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </CardComponent>

            <CardComponent index={8}>
              <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/50 hover:shadow-xl transition-all duration-300 p-8 backdrop-blur-sm relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-500 text-white font-medium px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
                <CardHeader className="text-center pb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Professional</h3>
                  <div className="text-3xl font-bold text-white mb-2">
                    £49<span className="text-lg text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-400">For growing businesses</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Up to 1,000 customers/month</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Advanced analytics & AI</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Priority support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Custom branding</span>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-purple-500 hover:bg-purple-600 text-white"
                    onClick={() => window.open('https://web.qlo.app/business-selection', '_blank')}
                  >
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            </CardComponent>

            <CardComponent index={9}>
              <Card className="bg-gray-800/50 border-gray-700/50 hover:shadow-xl transition-all duration-300 p-8 backdrop-blur-sm">
                <CardHeader className="text-center pb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold text-white mb-2">
                    Custom
                  </div>
                  <p className="text-gray-400">For large organizations</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Unlimited customers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Multi-location management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Dedicated support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">API access</span>
                  </div>
                  <Button className="w-full mt-6 bg-gray-700 hover:bg-gray-600 text-white">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </CardComponent>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl text-center">
          <CardComponent index={10}>
            <div className="bg-gray-800/70 border border-gray-700/50 rounded-3xl p-8 md:p-16 shadow-2xl backdrop-blur-sm">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-white">
                Ready to transform<br />
                <span className="text-purple-400">your business?</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                Join thousands of businesses already using Qlo to optimize their operations and delight their customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-purple-500 hover:bg-purple-600 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300"
                  onClick={() => window.open('https://web.qlo.app/business-selection', '_blank')}
                >
                  <ArrowRight className="mr-3 h-5 w-5" />
                  Start Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-purple-500/50 text-white hover:bg-purple-500/10 px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                  onClick={() => window.open('https://web.qlo.app/business-selection', '_blank')}
                >
                  <Activity className="mr-3 h-5 w-5" />
                  View Demo
                </Button>
              </div>
              <p className="text-gray-400 text-sm">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </CardComponent>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-gray-800/50 py-12 px-6 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Q</span>
                </div>
                <span className="text-white font-semibold text-xl">Qlo</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming business operations with intelligent analytics and real-time customer insights.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="https://web.qlo.app/business-selection" className="text-gray-400 hover:text-white transition-colors">Demo</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 Qlo. All rights reserved. | Transforming business operations with intelligent analytics.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QloLandingPage;