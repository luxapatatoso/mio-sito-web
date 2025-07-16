# 🚀 Come usare il progetto Next.js

## 📁 Struttura del progetto
```
mio-sito-web/
├── src/app/           # Pagine e componenti
├── public/            # File statici (immagini, etc.)
├── apri-progetto.sh   # Script per aprire il progetto
└── COME-USARE.md      # Questo file
```

## 🎯 Come aprire il progetto

### Opzione 1: Doppio click sull'alias
- Vai sulla **Scrivania**
- Trova la cartella `mio-sito-web`
- **Doppio click** per aprirla in Finder
- **Drag & drop** la cartella su Cursor

### Opzione 2: Script automatico
```bash
./apri-progetto.sh
```

### Opzione 3: Comandi manuali
```bash
cd /Users/luca/mio-sito-web
cursor .
npm run dev
```

## 🌐 Visualizzare il sito
1. **Avvia il server**: `./avvia-server.sh`
2. **Controlla lo stato**: `./stato-server.sh`
3. **Apri il browser** su: `http://localhost:3000`

### 🚀 Gestione server
```bash
./avvia-server.sh    # Avvia server in background
./stato-server.sh    # Controlla se è attivo
./ferma-server.sh    # Ferma il server
tail -f server.log   # Vedi i log in tempo reale
```

## 📝 Modificare il sito
- **Pagina principale**: `src/app/page.tsx`
- **Layout globale**: `src/app/layout.tsx`
- **Stili**: `src/app/globals.css`

## 🎨 Tecnologie utilizzate
- **Next.js 15** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling responsive
- **Cursor AI** - Editor con AI

## 📚 Comandi utili
```bash
npm run dev      # Avvia server sviluppo
npm run build    # Build per produzione
npm run start    # Avvia server produzione
npm run lint     # Controlla qualità codice
```

## 🆘 Aiuto
- **Cursor AI**: Premi `Cmd + K` per chiedere aiuto
- **Documentazione**: https://nextjs.org/docs
- **Tailwind**: https://tailwindcss.com/docs 