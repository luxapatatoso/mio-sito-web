import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Carat Servizi</h3>
                <p className="text-sm text-neutral-400">Formazione & Sicurezza</p>
              </div>
            </div>
            <p className="text-neutral-300 mb-4 max-w-md">
              Ente di formazione accreditato dalla Regione Veneto. 
              Oltre 30 anni di esperienza nella formazione aziendale e sicurezza sul lavoro.
            </p>
            <div className="space-y-2 text-sm text-neutral-300">
              <p>✅ UNI EN ISO 9001 - IT19/0711</p>
              <p>✅ Ente Accreditato Regione Veneto - Codice 3718</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servizi</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servizi/rspp" className="text-neutral-300 hover:text-white transition-colors">
                  Corsi RSPP
                </Link>
              </li>
              <li>
                <Link href="/servizi/antincendio" className="text-neutral-300 hover:text-white transition-colors">
                  Formazione Antincendio
                </Link>
              </li>
              <li>
                <Link href="/servizi/sicurezza-alimentare" className="text-neutral-300 hover:text-white transition-colors">
                  Sicurezza Alimentare
                </Link>
              </li>
              <li>
                <Link href="/servizi/e-learning" className="text-neutral-300 hover:text-white transition-colors">
                  Corsi E-Learning
                </Link>
              </li>
              <li>
                <Link href="/calendario" className="text-neutral-300 hover:text-white transition-colors">
                  Calendario Corsi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <div className="space-y-3 text-sm text-neutral-300">
              <div className="flex items-start space-x-2">
                <span className="text-accent-500">📍</span>
                <div>
                  <p>Via Antica Loreggia, 3/A</p>
                  <p>31023 RESANA (TV)</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent-500">📞</span>
                <a href="tel:+390423715927" className="hover:text-white transition-colors">
                  0423.715927
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent-500">📧</span>
                <a href="mailto:info@caratservizi.it" className="hover:text-white transition-colors">
                  info@caratservizi.it
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent-500">📱</span>
                <span>Lun-Ven: 8:30-12:30, 14:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-neutral-400">
              © 2025 Carat Servizi Srl - P.IVA 03284070269
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-neutral-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookie" className="text-sm text-neutral-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/termini" className="text-sm text-neutral-400 hover:text-white transition-colors">
                Termini e Condizioni
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 