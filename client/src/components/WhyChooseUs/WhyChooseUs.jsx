import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { 
  Leaf, 
  ShieldCheck, 
  Heart, 
  Wallet, 
  Clock, 
  Users,
  CheckCircle2
} from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'All our medicines are derived from natural sources, ensuring no synthetic chemicals enter your body.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: ShieldCheck,
    title: 'No Side Effects',
    description: 'Homeopathic treatments work gently with your immune system without causing adverse reactions.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Every patient receives individualized treatment plans based on their unique symptoms and constitution.',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
  },
  {
    icon: Wallet,
    title: 'Affordable Pricing',
    description: 'Quality healthcare should not be expensive. Our treatments are cost-effective and budget-friendly.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    icon: Clock,
    title: 'Convenient Timing',
    description: 'Flexible appointment slots including evening hours to accommodate your busy schedule.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Users,
    title: 'Experienced Doctors',
    description: 'Our team consists of highly qualified homeopathic practitioners with years of clinical experience.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
  },
];

const stats = [
  { value: 10000, suffix: '+', label: 'Patients Treated' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 98, suffix: '%', label: 'Success Rate' },
  { value: 50, suffix: '+', label: 'Diseases Cured' },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-100 rounded-full filter blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 sm:p-12 mb-20 shadow-2xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-white"
              >
                <p className="text-4xl sm:text-5xl font-bold mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-primary-100 text-sm sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
          >
            Why Choose Us
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            The{' '}
            <span className="text-gradient">Healing Life</span>{' '}
            Advantage
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover why thousands of patients trust us with their health and well-being.
            Our commitment to excellence sets us apart.
          </motion.p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>

              {/* Checkmarks */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle2 className={`w-4 h-4 ${feature.color}`} />
                  <span>Certified & Trusted</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;