 DAI_Labo_HTTP
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

## STEP 2 
### Partie a 
1. Création du fichier Dockerfile qui contient les informations de l'image node à utiliser ainsi que les 
actions qui seront effectuées avec celle-ci: coper le code puis l'éxécuter.
2. Installation de chance avec: npm install --save chance. Chance est un programme que l'on peut trouver
sur npm qui est le package manager de node
3. Utilisation de Chance dans le code pour saluer chaleuresement des peronnes aux hasard
4. Docker build
5. Docker run qui affiche bien le nom d'une personne aléatoire
### Partie b
1. Installation du framework Express dans notre dossier source: npm install --save express
2. Ecriture du code Express qui permet de renvoyer des personnes aléatoires sous format JSON
en utilisant Chance (déjà vu dans la partie a)
3. Pour tester notre code nous allons maintenant utiliser 2 méthodes différentes:
- Utilisation de busybox: ce container va nous permettre de nous "infiltrer" directement dans le réseau et accèder via cette busybox à notre serveur node.
On récupère l'adresse ip de notre container avec "docker inspect NOM_DU_CONTAINER", puis en observant le champs IPAdress 
- La 2ème méthode consiste à mapper le port de notre container sur un port localhost avec la commande suivante: docker run --publish 3000:3000 dai/express. Nous pouvons désormais utiliser Postman ou Insomnia pour effectuer des requêtes HTTP préparées sur notre localhost:3000

