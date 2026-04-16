import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, GraduationCap, Users, Clock, Stethoscope, Heart, Leaf, Shield } from 'lucide-react';

const stats = [
  { icon: Users, value: '10,000+', label: 'Happy Patients', color: 'bg-blue-100 text-blue-600' },
  { icon: Clock, value: '10+', label: 'Years Experience', color: 'bg-green-100 text-green-600' },
  { icon: Award, value: '15+', label: 'Awards Won', color: 'bg-yellow-100 text-yellow-600' },
  { icon: Heart, value: '98%', label: 'Success Rate', color: 'bg-red-100 text-red-600' },
];

const qualifications = [
  { icon: GraduationCap, title: 'BHMS', desc: 'Bachelor of Homeopathic Medicine & Surgery' },
  { icon: Stethoscope, title: 'MD (Homeo)', desc: 'Doctor of Medicine in Homeopathy' },
  { icon: Award, title: 'Certified', desc: 'Registered with Homeopathy Council' },
];

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-50 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-50 rounded-full filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
          >
            About Our Clinic
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Meet Our Expert{' '}
            <span className="text-gradient">Homeopathy Doctor</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            With over a decade of experience in homeopathic medicine, we provide 
            personalized care that focuses on treating the root cause of your ailments.
          </motion.p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Doctor Image & Info */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <div className="relative">
                      {/* Decorative Elements */}
                      <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl transform rotate-2" />
                      
                      {/* Main Image Card */}
                      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                        <div className="aspect-[4/5] bg-gradient-to-br from-primary-200 to-primary-300 relative">
                          
                          {/* Doctor Avatar */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              
                              {/* 🔥 IMAGE ADDED HERE */}
                              <img 
                                src="/doctor.png" 
                                alt="Dr. Shubhangi kumari"
                                className="w-40 h-40 mx-auto mb-6 rounded-full object-cover border-4 border-white shadow-lg"
                              />
                  
                              <p className="text-white/60 text-lg">Dr. Shubhangi kumari</p>
                            </div>
                          </div>
                  
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent" />
                  
                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-display text-2xl font-bold mb-1">Dr. Shubhangi kumari</h3>
                    <p className="text-primary-100 text-sm">Senior Homeopathy Consultant</p>
                  </div>
                </div>
              </div>
              
              {/* Experience Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <p className="text-4xl font-bold text-gradient">10+</p>
                  <p className="text-sm text-gray-600 mt-1">Years of<br/>Experience</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Dedicated to Your Natural Healing Journey
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                Dr. Shubhangi kumari is a highly experienced homeopathic practitioner 
                with a passion for holistic healthcare. She completed her BHMS from 
                the prestigious Homeopathy Medical College and later pursued her MD 
                in Homeopathy from Mumbai University.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                With over 10 years of clinical experience, Dr. Shubhangi has successfully 
                treated thousands of patients suffering from chronic diseases, skin 
                disorders, allergies, and pediatric conditions. Her approach combines 
                traditional homeopathic principles with modern diagnostic techniques.
              </p>

              {/* Qualifications */}
              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                {qualifications.map((qual, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-gray-50 rounded-xl p-4 text-center"
                  >
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${qual.color}`}>
                      <qual.icon className="w-6 h-6" />
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{qual.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{qual.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  { icon: Leaf, text: '100% Natural' },
                  { icon: Shield, text: 'Safe for All Ages' },
                  { icon: Heart, text: 'Holistic Care' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full"
                  >
                    <feature.icon className="w-5 h-5 text-primary-600" />
                    <span className="text-sm font-medium text-primary-700">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="mt-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                
                <motion.p
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                >
                  {stat.value}
                </motion.p>
                
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
