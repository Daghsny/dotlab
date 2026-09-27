<u>@daghsny| Projet dotLab | 4STi | 2026/2027 | Lycée Argoub</u>
Création des documents Web
<u>Consignes</u>
a. Toutes les fonctions JavaScript doivent être enregistrées dans un fichier nommé " mesControles.js ".
b. Toutes les règles CSS doivent être enregistrées dans le fichier " mesStyles.css ".
c. Toutes les pages HTML doivent être reliées au fichier " mesStyles.css ".
d. Les pages " index.html ”, " acceuil.html ", " inscription.html " et " reservation.html " doivent être reliées au fichier " mesControles.js ".
e. Le clic sur le bouton " Annuler " de chaque formulaire à créer, permet d’initialiser les champs.
Création de la page index du site
1) index.html
a. Créer la page " index.html " tout en la reliant au fichier " mesStyles.css " afin de respecter la disposition ci-contre. Sachant que :
L’élément <h1> contient le titre : dotLab avec l’image du logo.
L’élément <nav> représente le volet de navigation et contient les liens hypertextes suivants :
Accueil (servira de lien vers la page " accueil.html ").
Réserver un espace (servira de lien vers la page
" reservation.html ").
Rejoindre dotLab (servira de lien vers la page
" inscription.html ").
L’élément <main> contient la zone iframe qui servira pour l’affichage de différentes pages de ce site et contient par défaut la page " Accueil.html ").

L’élément <footer> représente le pied de page et contient les lignes suivantes :
dotLab |Adresse : Technopôle El Argoub, Lab02 | Email : contact@dotlab.tn
b. Ajouter au fichier " mesStyles.css ", les règles permettant d’appliquer aux éléments de cette page, les mises en forme spécifiées dans le tableau suivant :
Elément	Mise en forme
h1	Taille24 pixel engras
header	Couleur arrière-plan : #240c2d, Couleur du texte :blanc;<br>Marge interne 20px en haut et en bas,<br>Ombre0_décalage horizontale, _2pxde décalage vertical avec unepropagation de5px
Liste à puce	Liste alignée à droite, Les éléments alignés sur une seule ligne<br>Les éléments espacés de20px, Liste sans style depuces<br>f
Les liens<br>hypertextes	Couleur : #ff , Non soulignés, Arrière-plan: #240c2d, Marge interne :5px<br>Lors du survole en dessus avec la souris la couleur du texte du lien change vers #062459et<br>l’arrière-plans de couleur : rgb(0, 255, 255, 0.1) avec des angles à rayons de2px<br>f
footer	Couleur de l’arrière-plan  #240c2d,  Couleur du texte :  #ff , Texte centré<br>Espacement interne haut et bas de20px<br>Espacement avant de40px

1
<u>@daghsny| Projet dotLab | 4STi | 2026/2027 | Lycée Argoub</u>
2) accueil.html
Créer la page d’accueil puis l’enregistrée dans votre dossier de travail sous le nom accueil.html toute en respectant la disposition ci-contre et en suivant l’exemple.
NB : l’insertion des élément audio et vidéo sera reportée pour ultérieurement.
3) inscription.html
a. Créer la page " inscription .html " tout en la reliant au fichier " mesStyles.css " afin de respecter la disposition cicontre. Sachant que :

L’élément <h1> contient le titre : Rejoindre dotLab
L’élément <h2> contient le texte : « Soyer le bienvenu et complétez le formulaire ci-dessous. »

Elément	Mise en forme
h1	Taille 24pixel engras**_
h2	Espacement en bas de20pixels _
Formulaire	Aligné les éléments duformulaireslabeletinputhorizontalement et verticalement.
input	Avec des bordure arrondis(arrondissement de5pixels)
Domaine	Liste déroulante relatifs auxstratUpdont les propriétés des éléments est la l suivantes :<br><br>Robotique<br><br>Intelligence artificielle<br><br>Cybersécurité
Membres	Accepteque des nombres.
Boutons<br>REJOINDRE<br>etANNULER<br>i	<br>Couleur du texte :blanc_
fieldset	Bordure double etpointillée de couleur #240c2det d’épaisseur égale à 3px.
legend	Taille 16pixel engras**_

2
      - **<u>@daghsny| Projet dotLab | 4STi | 2026/2027 | Lycée Argoub</u>** 

b. Le clic sur le bouton Rejoindre fait l’appel à une fonction JavaScript, nommée verif() , développée dans le fichier " mesControles.js " permettant de respecter les contrôles du formulaire suivants :
<u>L’identifanti</u> : est une chaine de caractère alphabétique acceptant l’espace de plus de 5 caractères
<u>Le nom du StartUp :</u> Une chaîne comportant deux lettres alphabétiques et trois chiffres ( AZ1234 ).
<u>Domaine :</u> Sélection obligatoire.
<u>Membres :</u> un entier compris entre 1 et 10.
<u>Participation :</u> Choix obligatoire d’au moins une option.
L’email : obligatoirement sous la forme suivante xxxxxxxx @ xxxx . xxx : vérifier l’existence et le bon emplacement des symbole @ et le point seulement.
Le numéro du téléphone : est un nombre de 8 chiffres ne commence ni par 0 ni par 1 ni par 6
<u>La date de création :</u> est une date strictement inferieur à la date actuelle ( date système )
<u>Description :</u> Une chaîne comportant au moins deux mots séparés par des espaces. Chaque mot du commentaire doit être formé uniquement par des lettres alphabétiques.
4) reservation.html
c. Créer la page " reservation .html " tout en la reliant au fichier " mesStyles.css " afin de respecter la disposition ci-contre. Sachant que :
L’élément <h1> contient le titre : Réserver un espace ou d'une ressource.
L’élément <h2> contient le texte : « Choisissez l'emplacement qui vous convient le mieux et complétez le formulaire ci-dessous. »
L’élément <aside> contient :
L’image plan du dotLab qui est enregistrée sous le nom « plan.png »
3 éléments <div> chacun contient un titre niveau 4 pour représenter le nom de l’espace à Réserver numérotés de 1 à 3 :
Espace ROBOTIQUE,
Salle de réunions,
Studio .
Le premier élément <section> contient un formulaire de réservation comme présenté ci-dessous :

<!-- Start of picture text -->
) a =ist Veo<br>= te = , = a8<br><!-- End of picture text -->
3
<u>@daghsny| Projet dotLab | 4STi | 2026/2027 | Lycée Argoub</u>

d. Ajouter au fichier "mesStyles.css", les règles permettant d’appliquer aux éléments de cette page, les mises en forme spécifiées dans le tableau suivant :
Elément	Mise en forme
h1	Taille 24pixel engras**_
h2	Espacement en bas de20pixels _
Formulaire	Aligné les éléments du formulaireslabeletinputhorizontalement et<br>verticalement.
input	Avec des bordure arrondis(arrondissement de5pixels)
espace	Liste déroulante relatifs auxespacesdont les propriétés des éléments est la<br>suivante :<br>`o`<br>Espace ROBOTIQUE,<br>`o`<br>Salle de réunions,<br>`o`<br>Studio.
Ressources	Liste déroulante relatifs auxressourcesdont les propriétés des éléments est la<br>suivante :<br>`o`<br>Casque VR<br>`o`<br>Imprimante 3D<br>`o`<br>Robotic BOX
Nombre depersonnes	Accepteque des nombres.
div	Largeur 100px<br>Hauteur 25px<br>Style de la police en gras<br>Alignement du texte :  center<br>Couleur du texte blanc<br>Couleur de l’arrière-plan violet avec une transparence de 50%<br>Chaque div aura sa position épinglée à l’espace convenable sur l’image comme<br>décrit dans lafigure à droite.

4
<u>@daghsny| Projet dotLab | 4STi | 2026/2027 | Lycée Argoub</u>
	<br>Lors du survol avec la souris au-dessous d’un élément :<br><br>Le texte sera souligné<br><br>Couleur du texte : chartreuse ;<br><br>L’élément ne seraplus transparent
aside:<br>conteneur de l’image	Largeur 50%, Hauteur 400px;<br>Aligné à gauche,<br>Espacement à droite de 10px
section:<br>conteneur du formulaire	Largeur 40%,<br>Aligné àgauche,
BoutonsRESERVERet<br>ANNULER	Couleur du texte :blanc_

a. Le clic sur l’un espace à réserver fait l’appel d’une fonction JavaScript nommé espace(x) , développée dans le fichier " mesControles.js " permettant de mettre du choix exact de l’Espace réservé.
b. Le clic sur le bouton Réserver fait l’appel à une fonction JavaScript, nommée verif() , développée dans le fichier " mesControles.js " permettant de respecter les contrôles du formulaire suivants :
<u>StartUp :</u> est une chaine de caractère alphabétique acceptant l’espace de plus de 3 caractères
<u>La date de la réservation :</u> est une date strictement supérieure à la date actuelle ( date système  <u>L’heure de réservation :</u> varie entre 08:00 et 19:59 ( cad avant 20h)
<u>Le nombre de personne</u> : est un nombre strictement positif et inferieur ou égale à la capacité de l’espace réservé sachant que :
Espace ROBOTIQUE : capacité maximale 4 personnes.
Salle de réunions : capacité maximale 10 personnes.
Studio : capacité maximale 6 personnes.
Lors de la clique sur l’espace choisit :
Le bouton Radio espace sera sélectionnée.
Le bouton Radio espace sera désélectionnée.
La liste déroulante des espaces doit afficher l’espace sélectionnée.
La liste déroulante des ressources sera grisée.
Lors de la Bouton Radio espace :
Active la liste déroulante des espaces.
La liste déroulante des ressources sera grisée.
Lors de la Bouton Radio ressources :
Active la liste déroulante des ressources.
La liste déroulante des espaces sera grisée.
5) commande.html
5
<u>@daghsny| Projet dotLab | 4STi | 2026/2027 | Lycée Argoub</u>
a. Créer la page " commande.html " tout en la reliant au fichier " mesStyles . css " afin de respecter la disposition ci-contre. Sachant que :

<!-- Start of picture text -->
‘Commandez<br>nos produits:<br>Prix350TND —Quantité: ©<br>E <p Casque vr<br>Se ospszvon Prix 54ND Quantié:<br>) esp32 V 03 Prix 78 TND Quantié: 1<br>= CC ScreenLCD Prix26 TND Quantité:<br>Screen LED Prix 125 TND<br>fj POX Robotique Prix270TND — quentns: 0<br>><br>Pack Primaire Pack Secondaire Pack Universitaire<br><!-- End of picture text -->
L’élément <h1> contient le titre : dotShop
L’élément <h2> contient le texte :
« Commandez vos produits :
L’élément <section> contient :
Quatre éléments <div> pour représenter des box pour des produits avec bordure de couleur Vert et arrondis aux côtés. Chacun contient un champs texte qui représente la quantité commandée de ce produit.
Elément	Types d'élément du champ<br>de saisie.	Image	Libellé	Prix
Box 01	Casque VR	Casque VR	Café expresso	350 TND
Box 02	Boutons radio<br>(pour choisir entre deux types de esp32)	Esp32	Esp32 V01<br>esp32 V03	54 TND<br>78 TND
Box 03	Liste déroulante<br>(pour choisir entre deux types de Screen).	Screen	Screen LCD<br>Screen LED	26 TND<br>125 TND
Box 04	Range<br>(pour choisir entre Pack primaire,<br>Secondaire, et Universitaire)	Box Robotique	Box Robotique	270 TND

<u>NB :</u> La zone de texte Quantité est désactivée par défaut et contient une valeur égale à Zéro. Suivant chaque box produit, elle sera active et obtient une valeur de 1 qui peut être incrémenter selon le choix de client.
<u>Exemple :</u>
La zone texte de quantité dans le box 1 sera activer et contenant la valeur 1 après que le checkbox devant l’image avait été cocher.
6
<u>@daghsny| Projet dotLab | 4STi | 2026/2027 | Lycée Argoub</u>
La zone texte de quantité dans le box 2 sera activer et contenant la valeur 1 après avoir sélectionner une des bouton radio.
La zone texte de quantité dans le box 3 sera activer et contenant la valeur 1 après avoir sélectionner une des options du menu déroulant.
La zone texte de quantité dans le box 4 et l’input de type range seront activer (La zone texte de quantité aura en plus la valeur 1 ) après que le checkbox devant l’image avait été cocher.
b. Ajouter au fichier " mesStyles.css ", les règles permettant d’appliquer aux éléments de cette page, les mises en forme spécifiées dans le tableau suivant :
Elément	Mise en forme
h1	Taille 24pixel engras
h2	Espacement en bas de 20 pixels<br>Couleur du texte : #5d4037
img	Largeur : 50px<br>Hauteur : 50px<br><br>Lors du survol avec la souris au-dessous d’une image :<br>L’image aura un effet de transformation de  scale de 1.5
div	Largeur 100%<br>Un ombre vert horizontale de 5px verticale de 5px et propagation de 5px<br>Border à angle arrondis de 5px<br>Marge de 20px<br>Padding de 20px

c. Le clic sur le bouton Valider fait l’appel d’une fonction JavaScript nommé choix() , développée dans le fichier " mesControles.js " permettant de valider la commande.
Partie II : Création de la base de données
Le concepteur du site utilise la base de données simplifiée intitulée Le_Traditionnel décrite par la représentation textuelle suivante :
7
<u>@daghsny| Projet dotLab | 4STi | 2026/2027 | Lycée Argoub</u>
Client <u>(</u> <u>email</u> <u>, tel, nom)</u>
Réservation <u>(</u> <u>idReservation</u> <u>, espace, numTable, email#, dateR, heureP, nbPersonnes)</u>
Produit <u>(</u> <u>idProduit</u> , nomProduit, prix, qteStock)
Commande <u>(</u> <u>idCommande</u> , idReservation#)
LigneCommande <u>(</u> <u>idCommande#, idProduit#</u> , qte, caracteristiques)
Les descriptions des différents champs sont présentées dans le tableau suivant :
Champs	Type	Description	Contrainte
email	Chaine de 30 caractères	Email d’un client	Clé primaire
tel	Numérique de 8 chiffres	Téléphone d’un client	
nom	Chaine de 20 caractères	Nom d’un client	
idReservation	entier	Identifiant d’une<br>réservation	Clé primaire<br>auto-incrémenté
espace	Chaine de 10 caractères	Nom d‘un espace	
numTable	Entier de 2 chiffres	Numéro de table dans un<br>espace	
dateR	Date	Date d’une réservation	
heureP	heure	Heure d’une réservation	
nbPersonnes	Entier de 2 chiffres	Nombre de personnes<br>pour une réservation	
idProduit	entier	Identifiant d’un produit	Clé primaire<br>auto-incrémenté
nomProduit	Chaine de 20 caractères	Nom d’un produit	
prix	décimale (10,3)	Prix d’un produit	Un réel strictement positif
qteStock	Entier de 3 chiffres	Quantité de stock d’un<br>produit	Un entier positif
idCommande	entier	Identifiant d’une<br>commande	Clé primaire<br>auto-incrémenté
qte	entier de 3 chiffres	Quantité d’un produit<br>commandée	Un entier strictement positif
caracteristiques	Chaine de 40 caractères	Caractéristiques d’un<br>produit commandé	

a. Créer une base de données en lui attribuant le nom " TraditionnelBD ".
b. Créer les tables conformément à la représentation textuelle et aux descriptions des champs présentées dans le tableau.
8
<u>@daghsny| Projet dotLab | 4STi | 2026/2027 | Lycée Argoub</u>
c. Créer les relations entre les différentes tables.
d. Insérer les lignes suivantes dans les tables jardin et parcelle :
CHAMP<br>DESCRIPTION<br>TYPE

e. Exporter cette base de données au format SQL dans votre dossier de travail.
Partie III : Site web dynamique (Suite )
9
<u>@daghsny| Projet dotLab | 4STi | 2026/2027 | Lycée Argoub</u>
6) Créer le fichier " Reservation.php " permettant :
Afficher le message "Erreur : Espace inexistant" dans le cas où l’espace identifié par le nom espace saisi, n’existe pas dans la base,
ou bien,
Afficher le message "Erreur : Espace déjà réservé" dans le cas où l’espace identifié par le nom saisi, existe dans la table réservation avec une date de réservation identique à celle saisie par le client ,
ou bien,
Afficher le message "Erreur : client inexistant" dans le cas où le client identifié par l’email saisi, n’existe pas dans la base,
ou bien,
Insérer les données relatives à la réservation de l’espace, puis d’afficher le message "Réservation effectuée avec succès" .
7) Mise à jour de la page " reservation.html ” :
Dans la réalité, lorsqu'on fait une réservation en ligne, il est impératif de confirmer la réservation. Et cela se fait lorsqu'on reçoit un SMS contenant le code de réservation.
Pour cela, on se propose d’ajouter dans la page réservation une div contenant :
Une zone de texte contenant une sorte de CAPTCHA : contenant un code aléatoire.
Une zone de texte ou on doit introduire ce code pour confirmation.
Bouton confirmer pour valider.

Et puis ajouter les modifications nécessaires
au niveau de :
La fonction JavaScript pour créer la fonction qui permet de créer la captcha
Les styles CSS " mesStyles.css ".
8) Créer le fichier " Annulation.php " permettant :
10
<u>@daghsny| Projet dotLab | 4STi | 2026/2027 | Lycée Argoub</u>
Afficher le message "Erreur : Réservation existante" dans le cas où la réservation à annuler <u>(identifiée par le nom espace saisi)</u> n’existe pas dans la base, ou bien elle existe dans la base mais avec une date antécédente.
ou bien,
Supprimer les données relatives à la réservation de l’espace, puis d’afficher le message "Annulation effectuée avec succès" .
9) Affichage de l’addition :
Ouvrir la page "affectation.html" et compléter les attributs de la balise
Sachant que le clic sur le bouton " Commander " fait appel à :
Une fonction JavaScript nommée " Choix " qui permet de valider la commande,
Un fichier intitulé " commande.php ".
NB: on doit ajouter une zone de texte concernant le client qui doit commander
10) Créer le fichier "" commande.php " permettant d’:
Afficher le message " Erreur : client inexistant " dans le cas où le client identifié par l’email saisi, n’existe pas dans la base,
ou bien,
Insérer les données relatives à la commande puis d’afficher le message " Commande effectuée avec succès " en affichant l’addition totale sous forme d’un tableau.
11) Créer le fichier " modifierReservation.php " permettant :
Afficher le message "Erreur : Réservation inexistante" dans le cas où la réservation à modifer <u>(identifiée par le nom espace saisi)</u> n’existe pas dans la base, ou bien elle existe dans la base mais avec une date antécédente.
ou bien,
Modifie les données relatives à la réservation de l’espace, puis d’afficher le message "modification effectuée avec succès" .
12) Créer le fichier " afficherEtatEspace.php " permettant :
11
