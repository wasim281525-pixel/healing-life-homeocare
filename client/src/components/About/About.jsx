import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, GraduationCap, Users, Clock, Stethoscope, Heart } from 'lucide-react';

const stats = [
  { icon: Users, value: '10,000+', label: 'Happy Patients', color: 'bg-blue-100 text-blue-600' },
  { icon: Clock, value: '10+', label: 'Years Experience', color: 'bg-green-100 text-green-600' },
  { icon: Award, value: '15+', label: 'Awards Won', color: 'bg-yellow-100 text-yellow-600' },
  { icon: Heart, value: '98%', label: 'Success Rate', color: 'bg-red-100 text-red-600' },
];

const qualifications = [
  { icon: GraduationCap, title: 'BHMS', desc: 'Bachelor of Homeopathic Medicine & Surgery', color: 'bg-blue-100 text-blue-600' },
  { icon: Stethoscope, title: 'MD (Homeo)', desc: 'Doctor of Medicine in Homeopathy', color: 'bg-green-100 text-green-600' },
  { icon: Award, title: 'Certified', desc: 'Registered with Homeopathy Council', color: 'bg-yellow-100 text-yellow-600' },
];

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 bg-gradient-to-r from-green-50 to-blue-50 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Meet Our Expert{' '}
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Homeopathy Doctor
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Personalized care with over a decade of experience in treating root causes naturally.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE (UPDATED HERO STYLE) */}
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
                  {/* Doctor Avatar Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-40 h-40 mx-auto mb-6 bg-white/30 rounded-full flex items-center justify-center">
                        <svg className="w-20 h-20 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-white/60 text-lg">Dr. Sarah Johnson</p>
                    </div>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent" />
                  
                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-display text-2xl font-bold mb-1">Dr. Sarah Johnson</h3>
                    <p className="text-primary-100 text-sm">Senior Homeopathy Consultant</p>
                  </div>
                </div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white px-4 py-2 rounded-xl shadow-lg text-sm font-semibold">
                10+ Years
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Dr. Shubhangi Kumari is a highly experienced homeopathic practitioner
              focused on treating the root cause of diseases through natural healing.
            </p>

            {/* Qualifications */}
            <div className="flex flex-wrap gap-4 mt-8">
              {qualifications.map((q, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-lg border rounded-2xl p-4 shadow-lg hover:shadow-xl transition"
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${q.color}`}>
                    <q.icon className="w-6 h-6" />
                  </div>

                  <p className="text-sm font-bold text-gray-900 text-center">{q.title}</p>
                  <p className="text-xs text-gray-500 text-center mt-1">{q.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <div className="mt-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>

                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm font-bold text-gray-900">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
