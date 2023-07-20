# VPG

VPG est une application web construite avec Node.js, Express, Sequelize, AdminJS pour le backend et React.js, Tailwind CSS pour le frontend. Cette application utilise MySQL comme base de données.

Prérequis;
Avant de pouvoir exécuter ce projet, vous devez avoir les éléments suivants installés sur votre machine :

Node.js
npm
MySQL

Installation;
Clonez le dépôt du projet à partir de GitHub en utilisant la commande git clone : git clone https://github.com/Ben0813/VPG.git

Installation des dépendances du backend;
Naviguez jusqu'au répertoire du backend en utilisant la commande cd, puis installez les dépendances du projet en utilisant npm : npm install

Configuration de la base de données MySQL;
Installez MySQL sur votre machine si vous ne l'avez pas déjà fait.

Ouvrez MySQL dans votre terminal ou votre interface graphique.

Créez une nouvelle base de données pour votre projet :

CREATE DATABASE vpg_database;
Assurez-vous de mettre à jour le fichier .env dans le répertoire back avec les informations correctes de la base de données :

DB_HOST=localhost
DB_NAME=vpg_database
DB_USER=your_mysql_username
DB_PASS=your_mysql_password

Démarrage du serveur backend
Vous pouvez démarrer le serveur backend en exécutant la commande suivante : npm start (Pour le premier démarrage du serveur, dans app.js passer la valeur de "false" à "true" (ligne 129) cela synchronisera les models avec sequelize. Ensuite executez la commande : npm start.)

Une fois les models synchronisés, n'oubliez pas de retablir la valeur à false!

Votre serveur backend devrait maintenant être en cours d'exécution à l'adresse http://localhost:3000.

Création d'un utilisateur administrateur;
Pour pouvoir accéder à l'interface AdminJS, vous devez d'abord créer un utilisateur avec le rôle d'administrateur. Vous pouvez le faire en créant un fichier admin.js dans votre dossier models et en y ajoutant le code suivant :

// admin.js
import User from "./user.js";
import bcrypt from "bcryptjs";

async function createAdminUser() {
  const hashedPassword = await bcrypt.hash("adminpassword", 10); // Remplacez 'adminpassword' par le mot de passe que vous voulez pour l'administrateur

  await User.create({
    id: 1,
    name: "admin", // Remplacez 'admin' par le nom d'utilisateur que vous voulez pour l'administrateur
    email:"admin@mail.com", // Remplacez 'admin@mail.com' par l'email que vous voulez pour l'administrateur
    password: hashedPassword,
    role: "admin",
  });

  console.log("Admin user created");
}

createAdminUser();


Enregistrez le fichier et exécutez la commande suivante : node ./models/admin.js

Maintenant, vous devriez pouvoir vous connecter à l'interface AdminJS avec le nom d'utilisateur et le mot de passe de l'administrateur que vous venez de créer.

Si vous rencontrez des difficultés, vous pouvez également, dans app.js passer la valeur de "false" à "true" (ligne 129) cela synchronisera les models avec sequelize. Ensuite executez la commande : npm start.
Une fois les models synchronisés, n'oubliez pas de retablir la valeur à false!

=> Attention, une fois votre administrateur créé, n'oubliez pas de supprimer le fichier admin.js pour préserver la sécurité de votre application. <=

Installation des dépendances du frontend;
Naviguez jusqu'au répertoire du frontend en utilisant la commande cd, puis installez les dépendances du projet en utilisant npm : npm install

Démarrage du serveur frontend;
Vous pouvez démarrer le serveur frontend en exécutant la commande suivante : npm start
Votre application frontend devrait maintenant être en cours d'exécution à l'adresse http://localhost:3001.

Vous devriez maintenant être en mesure d'exécuter l'application VPG sur votre machine locale. Si vous rencontrez des problèmes, n'hésitez pas à me contacter. 

=> Attention également à bien créer vos variables d'environement pour le front et le back. <=
