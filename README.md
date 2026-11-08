# Country-api
Cette petite application Node communique avec l'API RestCountries pour afficher des informations relatives à tous les pays du monde fournies par RestCountries.

## Stack actuel
- Node 22
- module `node:http`


## Stack prévue
- Tailwind CDN
- RestCountries v5

## Variables d'environnement
`RESTCOUNTRIES_API_KEY`, la clé est obligatoire à mettre dans .env, jamais commitée.

## Prérequis
- Node 22

## Scripts
- npm install
- npm run dev : lancement de l'application en mode développement
- npm start : lancement du serveur
- npm test : lancement des tests

## Structure
Navigateur → country-api → RestCountries
Les données sont récupérées grâce à l'api de restcountries par notre projet country-api qui les expose via une interface en HTML stylisée avec tailwind

## Installation
1. npm install
2. copier .env.example vers .env
3. renseigner la clé RESTCOUNTRIES_API_KEY
4. npm start

## Statut
En développement
