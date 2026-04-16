import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Award,
  GraduationCap,
  Users,
  Clock,
  Stethoscope,
  Heart,
  Leaf,
  Shield
} from 'lucide-react';

const stats = [
  { icon: Users, value: '10,000+', label: 'Happy Patients', color: 'bg-blue-100 text-blue-600' },
  { icon: Clock, value: '10+', label: 'Years Experience', color: 'bg-green-100 text-green-600' },
  { icon: Award, value: '15+', label: 'Awards Won', color: 'bg-yellow-100 text-yellow-600' },
  { icon: Heart, value: '98%', label: 'Success Rate', color: 'bg-red-100 text-red-600' },
];

const qualifications = [
  {
    icon: GraduationCap,
    title: 'BHMS',
    desc: 'Bachelor of Homeopathic Medicine & Surgery',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Stethoscope,
    title: 'MD (Homeo)',
    desc: 'Doctor of Medicine in Homeopathy',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Award,
    title: 'Certified',
    desc: 'Registered with Homeopathy Council',
    color: 'bg-yellow-100 text-yellow-600'
  },
];

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-50 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
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
            Personalized holistic care focused on treating root causes, not just symptoms.
          </motion.p>

        </div>

        {/* Main Section */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">

              <div className="aspect-[4/5] relative bg-gradient-to-br from-primary-200 to-primary-300">

                {/* Doctor Image */}
                <img
                  src="/DrShubhangi.png"
                  alt="Dr. Shubhangi Kumari"
                  className="w-full h-full object-cover"
                />

                {/* Dark gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <img
                    src="/doctor.png"
                    alt="doctor"
                    className="w-14 h-14 rounded-full border-2 border-white mb-3"
                  />

                  <h3 className="text-2xl font-bold">
                    Dr. Shubhangi Kumari
                  </h3>

                  <p className="text-sm text-gray-200">
                    Senior Homeopathy Consultant
                  </p>
                </div>

              </div>
            </div>

            {/* Experience Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <p className="text-3xl font-bold text-gradient">10+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </motion.div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >

            <h3 className="text-2xl font-bold text-gray-900">
              Dedicated to Natural Healing
            </h3>

            <p className="text-gray-600">
              10+ years experience in treating chronic diseases, allergies, skin disorders using holistic homeopathy.
            </p>

            {/* Qualifications */}
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {qualifications.map((qual, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
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
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                { icon: Leaf, text: 'Natural' },
                { icon: Shield, text: 'Safe' },
                { icon: Heart, text: 'Holistic' },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full">
                  <f.icon className="w-4 h-4 text-primary-600" />
                  <span className="text-sm text-primary-700">{f.text}</span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

        {/* STATS */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-7 h-7" />
              </div>

              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default About;
