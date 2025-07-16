#!/bin/bash

# Script per fermare il server Next.js
echo "🛑 Fermata server Next.js..."

# Vai alla directory del progetto
cd /Users/luca/mio-sito-web

# Trova e termina il processo del server
SERVER_PID=$(pgrep -f "npm run dev")

if [ -n "$SERVER_PID" ]; then
    echo "📊 Terminando processo: $SERVER_PID"
    kill $SERVER_PID
    echo "✅ Server fermato con successo!"
else
    echo "⚠️  Nessun server attivo trovato."
fi 