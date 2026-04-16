import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

function WhatsAppButton() {
  const phoneNumber = '919876543210'; // Replace with actual number
  const message = encodeURIComponent('Hello! I would like to book an appointment at Healing Life Homeocare.');

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{ 
          rotate: [0, -10, 10, -10, 0],
        }}
        transition={{ 
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.div>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium">
        Chat Now
      </span>
    </motion.a>
  );
}

export default WhatsAppButton;