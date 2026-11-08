Country-api
cette petite application node communique avec l'api restcountry pour afficher des informations relatives à tous les pays du monde fournient par restcountry.

stack
    -node 22
    -module node:http
    -tailwind CDN
    -RestCountries v5
    -render

variable d'environnement
    RESTCOUNTRY_API_KEY

prerequis
    -node 22

script
    npm install
    npm run dev : lancement de l'application en mode developpement
    npm start : lancement en mode production
    npm test : lancement du runner test integre a node js, 

documentation
    [workflow](./docs/workflow.md)
