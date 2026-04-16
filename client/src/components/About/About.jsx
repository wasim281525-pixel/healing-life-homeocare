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
    desc: "Bachelor of Homeopathy",
  },
  {
    icon: Stethoscope,
    title: "MD",
    desc: "Homeopathy Specialist",
  },
  {
    icon: Award,
    title: "Certified",
    desc: "Registered Doctor",
  },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Meet Our Doctor
          </h2>
          <p className="text-gray-600 mt-2">
            10+ years experience in homeopathy treatment
          </p>
        </div>

        {/* Main */}
        <div ref={ref} className="grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <img
              src="/DrShubhangi.png"
              alt="Doctor"
              className="rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6"
          >

            <h3 className="text-xl font-semibold">
              Natural Healing with Care
            </h3>

            <p className="text-gray-600">
              We treat diseases using safe and natural homeopathy methods focused on root cause healing.
            </p>

            {/* Qualifications */}
            <div className="grid grid-cols-3 gap-3">
              {qualifications.map((q, i) => (
                <div key={i} className="bg-gray-50 p-3 rounded-lg text-center">
                  <q.icon className="w-5 h-5 mx-auto text-blue-600" />
                  <p className="font-semibold text-sm mt-1">{q.title}</p>
                  <p className="text-xs text-gray-500">{q.desc}</p>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="flex gap-3 flex-wrap">
              {[
                { icon: Leaf, text: "Natural" },
                { icon: Shield, text: "Safe" },
                { icon: Heart, text: "Care" },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                  <f.icon className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-700">{f.text}</span>
                </div>
              ))}
            </div>

          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-5 bg-white shadow rounded-lg">
              <div className={`w-10 h-10 mx-auto mb-2 rounded ${s.color} flex items-center justify-center`}>
                <s.icon className="w-5 h-5" />
              </div>
              <p className="text-xl font-bold">{s.value}</p>
              <p className="text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
