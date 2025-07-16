# 🚀 Il Mio Sito Web

Un sito web moderno, responsive e professionale creato con Next.js, TypeScript e Tailwind CSS.

## ✨ Caratteristiche

- **🎨 Design Moderno** - Interfaccia pulita e accattivante
- **📱 Responsive** - Perfetto su tutti i dispositivi
- **⚡ Performance** - Ottimizzato con Next.js 15
- **🔒 Type Safety** - TypeScript per codice sicuro
- **🎯 SEO Ready** - Ottimizzato per i motori di ricerca
- **🚀 Deploy Ready** - Pronto per Vercel/Netlify

## 🛠️ Tecnologie

- **Next.js 15** - Framework React full-stack
- **TypeScript** - Type safety e migliore DX
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - Libreria UI moderna
- **ESLint** - Qualità del codice

## 🚀 Come iniziare

### Prerequisiti
- Node.js 18+
- npm o yarn

### Installazione
```bash
# Clona il repository
git clone https://github.com/tuousername/mio-sito-web.git
cd mio-sito-web

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

### Script utili
```bash
./avvia-server.sh    # Avvia server in background
./stato-server.sh    # Controlla stato server
./ferma-server.sh    # Ferma il server
```

## 📁 Struttura del progetto

```
src/
├── app/              # App Router (Next.js 13+)
│   ├── page.tsx      # Home page
│   ├── layout.tsx    # Layout globale
│   └── globals.css   # Stili globali
├── components/       # Componenti riutilizzabili
├── lib/             # Utility functions
└── types/           # TypeScript types
```

## 🎨 Personalizzazione

### Colori
Modifica i colori in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',
      secondary: '#1F2937',
    }
  }
}
```

### Contenuti
- **Home page**: `src/app/page.tsx`
- **Layout**: `src/app/layout.tsx`
- **Stili**: `src/app/globals.css`

## 📱 Responsive Design

Il sito è ottimizzato per:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🚀 Deploy

### Vercel (Raccomandato)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Carica la cartella .next
```

## 🤝 Contribuire

1. Fork il progetto
2. Crea un branch (`git checkout -b feature/AmazingFeature`)
3. Commit le modifiche (`git commit -m 'Add AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è sotto licenza MIT - vedi il file [LICENSE](LICENSE) per dettagli.

## 🙏 Ringraziamenti

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Vercel](https://vercel.com/) - Hosting e Deploy

---

Creato con ❤️ usando Next.js, TypeScript e Tailwind CSS
