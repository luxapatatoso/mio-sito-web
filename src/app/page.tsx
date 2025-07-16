

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Il Mio Sito</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#chi-siamo" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Chi Siamo</a>
                <a href="#servizi" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Servizi</a>
                <a href="#contatti" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contatti</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Benvenuto nel mio
            <span className="text-blue-600"> sito web</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Un sito web moderno, responsive e professionale creato con Next.js, 
            TypeScript e Tailwind CSS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Inizia Ora
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Scopri di Più
            </button>
          </div>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section id="chi-siamo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Chi Siamo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Siamo un team appassionato di sviluppatori web che crea 
              esperienze digitali straordinarie.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design Creativo</h3>
              <p className="text-gray-600">Creiamo design unici e accattivanti che catturano l'attenzione.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600">Siti web veloci e ottimizzati per la migliore esperienza utente.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Responsive</h3>
              <p className="text-gray-600">Perfetto su tutti i dispositivi: desktop, tablet e mobile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi Section */}
      <section id="servizi" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              I Nostri Servizi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Offriamo soluzioni complete per il tuo business digitale.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Sviluppo Web", description: "Siti web moderni e performanti", icon: "🌐" },
              { title: "E-commerce", description: "Negozi online completi", icon: "🛒" },
              { title: "App Mobile", description: "Applicazioni native e cross-platform", icon: "📱" },
              { title: "SEO", description: "Ottimizzazione per i motori di ricerca", icon: "🔍" }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contatti Section */}
      <section id="contatti" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contattaci
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pronto a trasformare la tua idea in realtà? Parliamone!
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Il tuo nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="la-tua-email@esempio.com"
                />
              </div>
              <div>
                <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-2">
                  Messaggio
                </label>
                <textarea
                  id="messaggio"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Raccontaci il tuo progetto..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Invia Messaggio
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Il Mio Sito</h3>
            <p className="text-gray-400 mb-6">
              Creato con ❤️ usando Next.js, TypeScript e Tailwind CSS
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white">Termini</a>
              <a href="#" className="text-gray-400 hover:text-white">Cookie</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
