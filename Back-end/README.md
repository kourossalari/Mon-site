# Kouros Portfolio — Back-end

API back-end du portfolio de Kouros Salari (Node.js / Express), gère l'envoi du formulaire de contact par email.

## Structure

\`\`\`
Back-end/
├── config/
│   └── mailer.js       # configuration de l'envoi d'email
├── routes/
│   └── contact.js       # route du formulaire de contact
├── server.js             # point d'entrée
├── .env
└── package.json
\`\`\`

## Installation

\`\`\`bash
npm install
\`\`\`

## Configuration

Créer un fichier `.env` à la racine avec les variables suivantes :

\`\`\`dotenv
EMAIL_USER=       # adresse Gmail utilisée pour l'envoi
EMAIL_PASS=       # mot de passe d'application Gmail
EMAIL_RECEIVER=   # adresse qui reçoit les messages du formulaire
\`\`\`

⚠️ Ne jamais committer le `.env` — vérifier qu'il est dans `.gitignore`.

## Lancer en développement

\`\`\`bash
npm run dev
\`\`\`

Le serveur démarre sur `http://localhost:PORT` (voir `.env`).