# Idaimmo-P.final-

Idaimmo-P.final- est une application web moderne de gestion immobilière, développée principalement avec JavaScript (React pour le frontend), Node.js/Express (pour le backend), MongoDB (base de données), HTML et CSS.

Ce projet permet aux utilisateurs de rechercher, d’ajouter, de modifier et de gérer des biens immobiliers de façon efficace : tout se fait facilement via une interface intuitive et responsive.

---

## Fonctionnalités principales

- **Recherche de biens immobiliers** par critères (localisation, prix, type, etc.)
- **Gestion sécurisée des utilisateurs** : création de compte, connexion, rôles administrateur/utilisateur
- **Ajout, modification et suppression** de biens immobiliers (admin uniquement)
- **Visualisation détaillée** de chaque bien avec photos
- **Interface utilisateur moderne** et adaptative (responsive)
- **Administration** : création d’utilisateurs admin pour la gestion avancée
- **Protection des routes sensibles** côté backend (middleware)
- **Gestion d’images** (liens externes ou images locales)

---

## Installation

### 1. Clonez le dépôt

```bash
git clone https://github.com/Isomael10/Idaimmo-P.final-.git
cd Idaimmo-P.final-
```

### 2. Installation du backend (Node.js/Express)

```bash
cd idaimmo-backend
npm install
npm run dev
```
> Le backend démarre sur le port 5000 par défaut.

### 3. Installation du frontend (React/Vite)

```bash
cd idaimmo
npm install
npm run dev
```
> Le frontend démarre sur le port 5173 par défaut.

### 4. Ouverture dans le navigateur

Accédez à [http://localhost:5173](http://localhost:5173)  
> La connexion au backend doit être active pour les fonctionnalités complètes.

---

## Prérequis

- Node.js & npm (pour le backend et le frontend)
- MongoDB (local ou distant)
- Un navigateur web moderne (Chrome, Firefox, Edge…)

---

## Structure du projet

```
Idaimmo-P.final-/
├── idaimmo-backend/        # API Express + modèles Mongoose
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── routes/
│   └── server.js
├── idaimmo/       # Application React
│   ├── src/
│   │   ├── components/
│   │   ├── data/           # sampleProperties.js
│   │   ├── api/            # Fonctions d'appel à l'API
│   │   └── assets/
│   ├── public/
│   └── index.html
└── README.md
```

---

## Utilisation

1. **Ouvrez l’application** dans votre navigateur.
2. **Créez un compte** utilisateur ou admin.
3. **Connectez-vous** pour accéder aux fonctionnalités d’ajout/modification/suppression de biens (admin).
4. **Cherchez des biens** via la barre de recherche ou les filtres.
5. **Consultez les détails** des biens, ajoutez/modifiez/supprimez si vous êtes admin.

---

## Gestion des administrateurs

- Un utilisateur "admin" peut être créé via un script ou MongoDB Compass :  
  Il dispose d’un rôle spécial pour gérer tous les biens.
- Les routes backend sensibles sont protégées par un middleware (`requireAdmin`).

---

## Contribution

Les contributions sont les bienvenues !  
Ouvrez une issue ou une pull request pour proposer une amélioration ou corriger un bug.

---

## Auteurs

| Prénom(s)        | Nom      | Adresse électronique                  | INE           |
|------------------|----------|---------------------------------------|---------------|
| Aïssatou         | CISS     | aissatou.ciss5@unchk.edu.sn           | N04347920212  |
| Aminata          | COLY     | aminata.coly8@unchk.edu.sn            | N00753120212  |
| Ismaïla          | DIALLO   | ismaila.diallo11@unchk.edu.sn         | N03533520211  |
| Ramatoulaye      | DIAWARA  | ramatoulaye.diawara@unchk.edu.sn      | N05323620212  |
| Souleymane       | DIOP     | soumleymane.diop8@unchk.edu.sn        | N00218120211  |
| Coumba           | DIOUF    | coumba.diouf30@unchk.edu.sn           | N06077320212  |
| Serigne          | NDAO     | serigne.ndao1@unchk.edu.sn            | N00144220211  |
| Mouhamed         | SOUMARE  | mouhamed.soumare1@unchk.edu.sn        | N05100420201  |

