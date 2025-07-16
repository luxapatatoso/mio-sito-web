#!/bin/bash

# Script per controllare lo stato del server Next.js
echo "📊 Stato server Next.js..."

# Vai alla directory del progetto
cd /Users/luca/mio-sito-web

# Controlla se il server è attivo
SERVER_PID=$(pgrep -f "npm run dev")

if [ -n "$SERVER_PID" ]; then
    echo "✅ Server ATTIVO"
    echo "📊 PID: $SERVER_PID"
    echo "🌐 URL: http://localhost:3000"
    echo "🌐 Network: http://172.20.10.6:3000"
    echo ""
    echo "💡 Per vedere i log: tail -f server.log"
    echo "💡 Per fermare: ./ferma-server.sh"
else
    echo "❌ Server NON ATTIVO"
    echo ""
    echo "💡 Per avviare: ./avvia-server.sh"
fi 