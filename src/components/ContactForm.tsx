'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    azienda: '',
    servizio: '',
    messaggio: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula invio form
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form dopo 3 secondi
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nome: '',
        email: '',
        telefono: '',
        azienda: '',
        servizio: '',
        messaggio: ''
      });
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-neutral-700 mb-1">
            Nome e Cognome *
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Il tuo nome"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
            Email *
          </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="la-tua-email@esempio.com"
            />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-neutral-700 mb-1">
            Telefono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Il tuo numero"
          />
        </div>
        <div>
          <label htmlFor="azienda" className="block text-sm font-medium text-neutral-700 mb-1">
            Azienda
          </label>
          <input
            type="text"
            id="azienda"
            name="azienda"
            value={formData.azienda}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Nome azienda"
          />
        </div>
      </div>

      <div>
        <label htmlFor="servizio" className="block text-sm font-medium text-neutral-700 mb-1">
          Servizio di Interesse
        </label>
        <select
          id="servizio"
          name="servizio"
          value={formData.servizio}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="">Seleziona un servizio</option>
          <option value="rspp">Corsi RSPP</option>
          <option value="antincendio">Formazione Antincendio</option>
          <option value="sicurezza-alimentare">Sicurezza Alimentare</option>
          <option value="e-learning">Corsi E-Learning</option>
          <option value="altro">Altro</option>
        </select>
      </div>

      <div>
        <label htmlFor="messaggio" className="block text-sm font-medium text-neutral-700 mb-1">
          Messaggio
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          value={formData.messaggio}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="Descrivi le tue esigenze di formazione..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
          isSubmitting 
            ? 'bg-neutral-400 cursor-not-allowed' 
            : 'bg-accent-500 hover:bg-accent-600 text-white'
        }`}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Invio in corso...
          </div>
        ) : isSubmitted ? (
          <div className="flex items-center justify-center text-green-100">
            ✅ Messaggio inviato!
          </div>
        ) : (
          'Richiedi Preventivo'
        )}
      </motion.button>

      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-sm text-neutral-600"
        >
          Ti contatteremo entro 24 ore!
        </motion.div>
      )}
    </form>
  );
};

export default ContactForm; 