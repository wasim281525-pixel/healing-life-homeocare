import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Award,
  GraduationCap,
  Users,
  Clock,
  Stethoscope,
  Heart,
  Leaf,
  Shield,
} from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Patients", color: "bg-blue-100 text-blue-600" },
  { icon: Clock, value: "10+", label: "Years Experience", color: "bg-green-100 text-green-600" },
  { icon: Award, value: "15+", label: "Awards Won", color: "bg-yellow-100 text-yellow-600" },
  { icon: Heart, value: "98%", label: "Success Rate", color: "bg-red-100 text-red-600" },
];

const qualifications = [
  {
    icon: GraduationCap,
    title: "BHMS",
    desc: "Bachelor of Homeopathic Medicine & Surgery",
  },
  {
    icon: Stethoscope,
    title: "MD (Homeo)",
    desc: "Doctor of Medicine in Homeopathy",
  },
  {
    icon: Award,
    title: "Certified",
    desc: "Registered with Homeopathy Council",
  },
];

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">

      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-40 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Meet Our Expert Doctor
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            10+ years experience in holistic homeopathy treatment.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <motion.div animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">

              <img
                src="/DrShubhangi.png"
                alt="Doctor"
                className="w-full h-[450px] object-cover"
              />

              <div className="absolute bottom-0 w-full p-5 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-xl font-bold">Dr. Shubhangi Kumari</h3>
                <p className="text-sm">Homeopathy Specialist</p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }} className="space-y-6">

            <h3 className="text-2xl font-bold text-gray-900">
              Natural Healing with Experience
            </h3>

            <p className="text-gray-600">
              Focused on treating root causes using safe and natural homeopathy methods.
            </p>

            {/* QUALIFICATIONS */}
            <div className="grid sm:grid-cols-3 gap-4">
              {qualifications.map((q, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-xl text-center">
                  <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                    <q.icon className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-sm">{q.title}</p>
                  <p className="text-xs text-gray-500">{q.desc}</p>
                </div>
              ))}
            </div>

            {/* FEATURES */}
            <div className="flex gap-3 flex-wrap">
              {[
                { icon: Leaf, text: "Natural" },
                { icon: Shield, text: "Safe" },
                { icon: Heart, text: "Care" },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                  <f.icon className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-700">{f.text}</span>
                </div>
              ))}
            </div>

          </motion.div>
        </div>

        {/* STATS */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((s, i) => (
            <div key={i} className="bg-white shadow-md rounded-xl p-6 text-center">
              <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${s.color}`}>
                <s.icon className="w-6 h-6" />
              </div>
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-gray-500 text-sm">{s.label}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default About;
