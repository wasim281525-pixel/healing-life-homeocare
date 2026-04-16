import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Activity, 
  Sparkles, 
  Baby, 
  Heart, 
  Brain, 
  Thermometer,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: 'Chronic Diseases',
    description: 'Effective treatment for diabetes, hypertension, arthritis, asthma, and other long-term conditions using natural remedies.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Sparkles,
    title: 'Skin Problems',
    description: 'Specialized care for eczema, psoriasis, acne, allergies, and other dermatological conditions without harmful chemicals.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Activity,
    title: 'Hair Loss',
    description: 'Natural solutions for alopecia, pattern baldness, and hair disorders that promote regrowth and scalp health.',
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    icon: Baby,
    title: 'Child Care',
    description: 'Gentle and safe treatments for children including developmental issues, allergies, and behavioral concerns.',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
  },
  {
    icon: Heart,
    title: 'Women\'s Health',
    description: 'Comprehensive care for hormonal imbalances, PCOS, menstrual disorders, menopause, and fertility issues.',
    color: 'from-rose-500 to-rose-600',
    bgColor: 'bg-rose-50',
  },
  {
    icon: Brain,
    title: 'Mental Health',
    description: 'Holistic approach to anxiety, depression, stress disorders, and sleep problems without dependency risks.',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
  },
];

function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
        <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold mb-4"
          >
            Our Services
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Comprehensive Homeopathy{' '}
            <span className="text-gradient">Treatments</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We offer specialized homeopathic treatments for a wide range of health conditions. 
            Our natural remedies are safe, effective, and personalized to your needs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full border border-gray-100 card-hover`}>
                {/* Decorative Gradient Top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />
                
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <a
                  href="#appointment"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>

                {/* Hover Effect Decoration */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-300 blur-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Not sure which treatment is right for you?
          </p>
          
          <motion.a
            href="#appointment"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all btn-shine"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;