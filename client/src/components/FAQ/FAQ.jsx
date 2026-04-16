import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is homeopathy and how does it work?',
    answer: 'Homeopathy is a natural form of medicine that treats the whole person rather than just the symptoms. It works on the principle of "like cures like" - substances that cause symptoms in healthy people can cure similar symptoms in sick people when given in highly diluted forms. These remedies stimulate your body\'s natural healing response.',
  },
  {
    question: 'Are homeopathic medicines safe for children and pregnant women?',
    answer: 'Yes, homeopathic medicines are extremely safe for people of all ages, including children, pregnant women, and the elderly. Since the remedies are highly diluted, they have no toxic side effects and are non-addictive. However, it\'s always recommended to consult a qualified homeopath for proper guidance.',
  },
  {
    question: 'How long does it take to see results from homeopathic treatment?',
    answer: 'The response time varies depending on the condition, its duration, and individual constitution. Acute conditions may respond within hours or days, while chronic conditions may take weeks or months. We focus on long-term healing rather than quick fixes that mask symptoms.',
  },
  {
    question: 'Can I take homeopathic medicines alongside allopathic medicines?',
    answer: 'Yes, homeopathic medicines can generally be taken alongside conventional medicines. They do not interfere with other treatments. However, it\'s important to inform your homeopath about all medications you\'re taking so they can create the most effective treatment plan for you.',
  },
  {
    question: 'What conditions can be treated with homeopathy?',
    answer: 'Homeopathy can treat a wide range of conditions including chronic diseases (diabetes, hypertension, arthritis), skin disorders (eczema, psoriasis, acne), allergies, respiratory conditions (asthma, sinusitis), digestive problems, hormonal imbalances, mental health concerns (anxiety, depression), and pediatric conditions.',
  },
  {
    question: 'Do I need to follow any dietary restrictions during treatment?',
    answer: 'Your homeopath may advise you to avoid certain substances that can interfere with the remedies, such as strong coffee, mint, camphor, and excessive raw onion or garlic. However, these restrictions are usually minimal and temporary. Your doctor will provide specific guidance based on your treatment.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
          >
            <HelpCircle className="w-4 h-4" />
            FAQ
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Frequently Asked{' '}
            <span className="text-gradient">Questions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Find answers to common questions about homeopathic treatment.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-primary-200 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center p-8 bg-primary-50 rounded-3xl"
        >
          <h4 className="font-semibold text-xl text-gray-900 mb-2">Still have questions?</h4>
          
          <p className="text-gray-600 mb-6">
            Can\'t find the answer you\'re looking for? Please chat with our friendly team.
          </p>
          
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;