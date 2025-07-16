#!/bin/bash

# Script per avviare il server Next.js in background
echo "🚀 Avvio server Next.js in background..."

# Vai alla directory del progetto
cd /Users/luca/mio-sito-web

# Controlla se il server è già attivo
if pgrep -f "npm run dev" > /dev/null; then
    echo "⚠️  Il server è già attivo!"
    echo "📊 Processo: $(pgrep -f 'npm run dev')"
    echo "🌐 URL: http://localhost:3000"
    exit 0
fi

# Avvia il server in background
nohup npm run dev > server.log 2>&1 &
SERVER_PID=$!

echo "✅ Server avviato con PID: $SERVER_PID"
echo "🌐 URL: http://localhost:3000"
echo "📝 Log: server.log"
echo ""
echo "💡 Per fermare il server: ./ferma-server.sh"
echo "💡 Per vedere i log: tail -f server.log" 