# DAI_Labo_HTTP
## STEP 1
### Demo
1. Build l'image Docker : docker build -t dai/apache_php . 
2. Run l'image Docker : docker run -d -p 9090:80 dai/apache_php:latest
3. Accéder au contenu (index.html) du serveur à l'adresse suivante: localhost:9090
### Dockerfile
FROM: permet de donner le nom de l'image parente (~template)
COPY: permet de copier nos dossiers sources locaux dans la container pour que celui-ci puisse les afficher
### Fichiers configs Apache
`/etc/apache2`
C'est ici que sur un serveur Debian se trouve les fichier de configuration pour permettre notamment l'utilisation de Virtual Hosts
