# Réponses

## 1. React et JavaScript vanilla

React est une bibliothèque JavaScript qui permet de construire une interface avec des composants réutilisables. En JavaScript vanilla, on modifie souvent la page directement avec le DOM. Avec React, on décrit ce qu’il faut afficher et React met la page à jour lorsque les données changent.

## 2. DOM virtuel

Le DOM virtuel est une copie légère de l’interface gardée par React en mémoire. Quand une donnée change, React recalcule cette copie et la compare avec l’ancienne. Il met ensuite à jour dans la vraie page les éléments qui ont changé.

## 3. Props et state

Une prop est une donnée reçue du composant parent et l’enfant ne la modifie pas. Un state est une donnée qui peut changer et que le composant gère avec `useState`. Dans ce projet, `Header` reçoit `titre` en prop et `App` garde `recherche` dans son state.

## 4. Fichiers .tsx

Un fichier `.tsx` est un fichier TypeScript qui peut contenir du JSX. Le JSX permet d’écrire les éléments de l’interface dans un composant React. Les fichiers `.ts` servent ici aux données et aux types qui ne contiennent pas de JSX.

## 5. Tableau [] de useEffect

Le tableau vide indique que l’effet s’exécute au montage du composant et ne recommence pas à chaque rendu. Dans `ListeTaches`, il sert à charger les tâches une seule fois. La fonction de nettoyage empêche de modifier l’état si le composant est démonté avant la réponse.

## 6. Chargement, erreur et données

Le state `chargement` commence à `true` et le composant affiche un message pendant la requête. Le code vérifie la réponse, range les données reçues dans un state et attrape les erreurs avec `catch`. L’interface affiche ensuite le message d’erreur, le message de chargement ou la liste.

## 7. Les trois dossiers d’un projet Vite React

`src/` contient les composants, les données et les styles de l’application. `public/` sert aux fichiers statiques comme une image ou un favicon. `node_modules/` contient les paquets installés avec `npm install`.
