

import { AnimatedSection, AnimatedCard, AnimatedButton, AnimatedIcon } from '@/components/AnimatedSection';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  const services = [
    {
      icon: "🛡️",
      title: "RSPP",
      description: "Responsabile del Servizio di Prevenzione e Protezione",
      color: "bg-primary-100",
      iconColor: "text-primary-600"
    },
    {
      icon: "🔥",
      title: "Antincendio",
      description: "Formazione antincendio e gestione emergenze",
      color: "bg-danger-100",
      iconColor: "text-danger-600"
    },
    {
      icon: "🍽️",
      title: "Sicurezza Alimentare",
      description: "HACCP e formazione per settore alimentare",
      color: "bg-secondary-100",
      iconColor: "text-secondary-600"
    },
    {
      icon: "⚡",
      title: "E-Learning",
      description: "Corsi online certificati e flessibili",
      color: "bg-accent-100",
      iconColor: "text-accent-600"
    }
  ];

  const testimonials = [
    {
      name: "Marco Rossi",
      role: "RSPP - Azienda Metalmeccanica",
      content: "Carat Servizi ha gestito tutta la formazione della nostra azienda con professionalità e competenza. Consigliatissimi!",
      rating: 5
    },
    {
      name: "Laura Bianchi",
      role: "HR Manager - Settore Alimentare",
      content: "Ottima esperienza con i corsi di sicurezza alimentare. Personale preparato e servizio impeccabile.",
      rating: 5
    },
    {
      name: "Giuseppe Verdi",
      role: "Datore di Lavoro - Edilizia",
      content: "Formazione antincendio eccellente. I nostri dipendenti sono ora preparati per ogni emergenza.",
      rating: 5
    }
  ];

  const certifications = [
    { name: "UNI EN ISO 9001", code: "IT19/0711" },
    { name: "Ente Accreditato", code: "Regione Veneto 3718" },
    { name: "30+ Anni", code: "di Esperienza" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50">
      <Header />
      
      {/* Hero Section */}
      <AnimatedSection>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8">
                <AnimatedSection delay={0.2}>
                  <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 leading-tight">
                    Formazione obbligatoria per la tua{' '}
                    <span className="text-primary-600">azienda</span>
                  </h1>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4}>
                  <p className="text-xl text-neutral-600 leading-relaxed">
                    Carat Servizi è l'ente di formazione accreditato che ti accompagna 
                    nella gestione della sicurezza e formazione obbligatoria per legge.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.6}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <AnimatedButton className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg">
                      Richiedi Preventivo
                    </AnimatedButton>
                    <AnimatedButton className="border-2 border-primary-500 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg">
                      Vedi Calendario
                    </AnimatedButton>
                  </div>
                </AnimatedSection>
              </div>

              {/* Form */}
              <AnimatedSection delay={0.8}>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-neutral-800 mb-6">
                    Richiedi informazioni
                  </h3>
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Certifications Banner */}
      <section className="py-8 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {certifications.map((cert, index) => (
              <AnimatedSection key={cert.name} delay={index * 0.2}>
                <div className="text-white">
                  <div className="text-2xl font-bold">{cert.name}</div>
                  <div className="text-primary-100">{cert.code}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
                I Nostri Servizi
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Formazione completa e certificata per tutti i settori aziendali
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedCard key={service.title} delay={index * 0.1}>
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className={`text-2xl ${service.iconColor}`}>{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
                Perché Scegliere Carat Servizi
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Oltre 30 anni di esperienza nel settore della formazione e sicurezza
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard delay={0.2}>
              <AnimatedIcon delay={0.3}>🏆</AnimatedIcon>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Accreditamento</h3>
              <p className="text-neutral-600">Ente accreditato dalla Regione Veneto per la formazione continua aziendale.</p>
            </AnimatedCard>
            <AnimatedCard delay={0.4}>
              <AnimatedIcon delay={0.5} className="bg-secondary-100">⚡</AnimatedIcon>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Flessibilità</h3>
              <p className="text-neutral-600">Corsi in aula e online, calendario flessibile per le tue esigenze.</p>
            </AnimatedCard>
            <AnimatedCard delay={0.6}>
              <AnimatedIcon delay={0.7} className="bg-primary-100">📋</AnimatedIcon>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Compliance</h3>
              <p className="text-neutral-600">Formazione conforme alle normative vigenti e sempre aggiornata.</p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
                Cosa Dicono i Nostri Clienti
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                La soddisfazione dei nostri clienti è la nostra priorità
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard key={testimonial.name} delay={index * 0.2}>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent-500">⭐</span>
                  ))}
                </div>
                <p className="text-neutral-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-neutral-800">{testimonial.name}</div>
                  <div className="text-sm text-neutral-500">{testimonial.role}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto a Formare la Tua Azienda?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contattaci per un preventivo personalizzato e inizia subito la formazione obbligatoria
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg">
                Richiedi Preventivo
              </AnimatedButton>
              <AnimatedButton className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg">
                Chiamaci Ora
              </AnimatedButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
