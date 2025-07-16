'use client';

import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedSection = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedCard = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedButton = ({ children, className = '', onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export const AnimatedIcon = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -180 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      whileHover={{ rotate: 360 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 ${className}`}
    >
      <span className="text-2xl">{children}</span>
    </motion.div>
  );
};

export const AnimatedCounter = ({ value, label }: { value: number; label: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring" }}
      className="text-center"
    >
      <div className="text-4xl font-bold text-blue-600">
        {value}
      </div>
      <p className="text-gray-600 mt-2">{label}</p>
    </motion.div>
  );
}; 