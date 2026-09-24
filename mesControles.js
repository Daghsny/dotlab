/* ==========================================================================
   mesControles.js - script JavaScript commun au site CUBE
   ========================================================================== */

/* tableaux parallèles utilisés pour la recherche séquentielle de la
   capacité d'un espace (voir afficherCapacite() et verifierReservation()) */
const idEspaces = ["E01", "E02", "E03"];
const capacites = [4, 10, 6];


/* ===========================================================================
   SÉANCE 1 - index.html
   =========================================================================== */

/* afficherMessage(msg) : affiche le paramètre msg dans le paragraphe #msgVideo
   appelée par les événements onplay et onpause de l'élément <video> */
function afficherMessage(msg) {
    document.getElementById("msgVideo").innerHTML = msg;
}


/* ===========================================================================
   SÉANCE 2 - reservation.html
   =========================================================================== */

/* initReservation() : appelée au chargement de la page (onload).
   Désactive tous les champs des fieldsets "Créneau demandé" et
   "Espace ou ressource" tant qu'aucun type de demande n'est choisi */
function initReservation() {
    document.getElementById("dateResa").disabled = true;
    document.getElementById("heureDebut").disabled = true;
    document.getElementById("heureFin").disabled = true;
    document.getElementById("listEspace").disabled = true;
    document.getElementById("nbPersonnes").disabled = true;
    document.getElementById("listRessource").disabled = true;
}

/* activer(type) : appelée par le clic sur l'un des 2 boutons radio.
   Active les champs communs du créneau, puis active les champs propres
   au type choisi ("E" pour Espace, "R" pour Ressource) et désactive
   (en vidant leur valeur) les champs de l'autre type */
function activer(type) {
    document.getElementById("dateResa").disabled = false;
    document.getElementById("heureDebut").disabled = false;
    document.getElementById("heureFin").disabled = false;

    if (type == "E") {
        document.getElementById("listEspace").disabled = false;
        document.getElementById("nbPersonnes").disabled = false;

        document.getElementById("listRessource").disabled = true;
        document.getElementById("listRessource").value = "";
    } else {
        document.getElementById("listRessource").disabled = false;

        document.getElementById("listEspace").disabled = true;
        document.getElementById("nbPersonnes").disabled = true;
        document.getElementById("listEspace").value = "";
        document.getElementById("nbPersonnes").value = "";
        document.getElementById("capaciteAffichee").innerHTML = "";
    }
}

/* rechercherPosition(valeur, tableau) : recherche séquentielle (boucle while)
   de "valeur" dans "tableau" ; retourne sa position, ou tableau.length si
   la valeur n'a pas été trouvée. Module réutilisé par afficherCapacite()
   et verifierReservation() */
function rechercherPosition(valeur, tableau) {
    let pos = 0;
    while (pos < tableau.length && tableau[pos] != valeur) {
        pos = pos + 1;
    }
    return pos;
}

/* afficherCapacite() : appelée par le onchange de la liste "listEspace".
   Affiche la capacité de l'espace sélectionné dans #capaciteAffichee */
function afficherCapacite() {
    const idSel = document.getElementById("listEspace").value;
    const pos = rechercherPosition(idSel, idEspaces);

    if (pos < idEspaces.length) {
        document.getElementById("capaciteAffichee").innerHTML = "Capacité : " + capacites[pos] + " personne(s)";
    } else {
        document.getElementById("capaciteAffichee").innerHTML = "";
    }
}

/* verifierReservation() : fonction booléenne appelée par onsubmit="return verifierReservation()"
   contrôle l'ensemble des champs du formulaire de réservation */
function verifierReservation() {
    let msg = "";
    let valide = true;

    /* 1) Startup : champ non vide */
    const nomStartup = document.getElementById("nomStartup").value.trim();
    if (nomStartup == "") {
        msg = "Veuillez indiquer le nom de la startup.";
        valide = false;
    }

    /* 2) Type de demande : un bouton radio doit être coché
       (accès via getElementsByName, comme prévu au programme) */
    let type = "";
    if (valide) {
        const boutons = document.getElementsByName("typeDemande");
        for (let i = 0; i < boutons.length; i++) {
            if (boutons[i].checked) {
                type = boutons[i].value;
            }
        }
        if (type == "") {
            msg = "Veuillez choisir Espace ou Ressource.";
            valide = false;
        }
    }

    /* 3) Date de réservation >= date du jour */
    if (valide) {
        const dateResa = document.getElementById("dateResa").value;
        const dateAujourdhui = new Date().toISOString().substring(0, 10);
        if (dateResa == "" || dateResa < dateAujourdhui) {
            msg = "La date de réservation ne peut pas être dans le passé.";
            valide = false;
        }
    }

    /* 4) Heure fin strictement postérieure à l'heure début */
    if (valide) {
        const heureDebut = document.getElementById("heureDebut").value;
        const heureFin = document.getElementById("heureFin").value;
        if (heureDebut == "" || heureFin == "" || heureFin <= heureDebut) {
            msg = "L'heure de fin doit être postérieure à l'heure de début.";
            valide = false;
        }
    }

    /* 5) Contrôles spécifiques selon le type de demande */
    if (valide) {
        if (type == "E") {
            const idEspaceSel = document.getElementById("listEspace").value;
            if (idEspaceSel == "") {
                msg = "Veuillez sélectionner un espace.";
                valide = false;
            } else {
                const nb = parseInt(document.getElementById("nbPersonnes").value);
                const pos = rechercherPosition(idEspaceSel, idEspaces);
                if (isNaN(nb) || nb < 1 || nb > capacites[pos]) {
                    msg = "Le nombre de personnes dépasse la capacité de l'espace.";
                    valide = false;
                }
            }
        } else {
            const idRessourceSel = document.getElementById("listRessource").value;
            if (idRessourceSel == "") {
                msg = "Veuillez sélectionner une ressource.";
                valide = false;
            }
        }
    }

    document.getElementById("erreur").innerHTML = msg;
    return valide;
}


/* ===========================================================================
   SÉANCE 3 - inscription.html
   =========================================================================== */

/* convMaj(id) : convertit en majuscules le contenu du champ dont
   l'identifiant est passé en paramètre (appelée par onblur="convMaj('idStartup')") */
function convMaj(id) {
    const champ = document.getElementById(id);
    champ.value = champ.value.toUpperCase();
}

/* compterCaracteres() : appelée à chaque relâchement de touche (onkeyup)
   dans la zone "description". Met à jour le nombre de caractères
   restants (maxlength = 150) */
function compterCaracteres() {
    const max = 150;
    const texte = document.getElementById("description").value;
    const restant = max - texte.length;

    const compteur = document.getElementById("compteur");
    compteur.innerHTML = restant;

    /* le texte du compteur devient rouge lorsqu'il reste moins de 10 caractères */
    if (restant < 10) {
        compteur.style.color = "red";
    } else {
        compteur.style.color = "";
    }
}

/* afficherAide() / cacherAide() : affichent/masquent une aide contextuelle
   au survol du champ "Domaine" (onmouseover / onmouseout) */
function afficherAide() {
    document.getElementById("aideDomaine").innerHTML = "Choisissez ou saisissez un domaine dans la liste.";
}

function cacherAide() {
    document.getElementById("aideDomaine").innerHTML = "";
}

/* verifierInscription() : fonction booléenne appelée par onsubmit="return verifierInscription()"
   contrôle les champs du formulaire d'inscription à l'aide d'un code d'erreur
   traité par une structure switch */
function verifierInscription() {
    const champIdStartup = document.getElementById("idStartup");
    const idStartup = champIdStartup.value.toUpperCase();
    champIdStartup.value = idStartup;

    const nomStartup = document.getElementById("nomStartup").value.trim();
    const telephone = document.getElementById("telephone").value;
    const dateCreation = document.getElementById("dateCreation").value;
    const dateAujourdhui = new Date().toISOString().substring(0, 10);

    let code = 0;

    /* 1) identifiant : chaîne de 5 caractères, 2 lettres suivies de 3 chiffres */
    const lettres = idStartup.substring(0, 2);
    const chiffres = idStartup.substring(2);
    if (idStartup.length != 5 || !isNaN(lettres) || isNaN(chiffres)) {
        code = 1;
    }
    /* 2) nom de la startup non vide */
    else if (nomStartup == "") {
        code = 2;
    }
    /* 3) téléphone : chaîne de 8 chiffres */
    else if (telephone.length != 8 || isNaN(telephone)) {
        code = 3;
    }
    /* 4) date de création <= date du jour */
    else if (dateCreation == "" || dateCreation > dateAujourdhui) {
        code = 4;
    }

    let msg = "";
    switch (code) {
        case 1:
            msg = "Identifiant invalide (2 lettres suivies de 3 chiffres).";
            break;
        case 2:
            msg = "Le nom de la startup est obligatoire.";
            break;
        case 3:
            msg = "Le téléphone doit être composé de 8 chiffres.";
            break;
        case 4:
            msg = "La date de création ne peut pas être dans le futur.";
            break;
        default:
            msg = "";
    }

    document.getElementById("erreurInscription").innerHTML = msg;
    return code == 0;
}
