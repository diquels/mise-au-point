# Mise au Point Qualification

_Started 2026-04-25 07:29 UTC_

---

## User

On continue le retravail de la page La Mise au Point. Trois modifications à appliquer, toutes liées au passage d'une inscription directe à une inscription via formulaire de qualification. L'intention : garder la porte ouverte, mais reprendre le geste "je marche à côté de toi" avant le paiement.

## Assistant

_[tool: list_files]_

Je vais examiner la page actuelle pour comprendre ce qui existe avant les modifications.

_[tool: read_file]_

Je comprends bien le geste : on remplace l'inscription directe par un formulaire de qualification, pour garder cette posture "je marche à côté de toi" jusqu'au paiement. 

Pour bien viser, j'ai besoin de précisions avant de toucher au code. Tu m'as dit "trois modifications" — peux-tu me les détailler ?

Voici ce que je devine, dis-moi si je suis dans le ton :

1. **Section Tarifs** : la phrase actuelle dit *"Tu peux t'inscrire directement ci-dessous. Il n'y a pas d'appel préalable pour la Mise au Point : tu sais déjà ce que tu viens chercher."* — elle dit l'inverse de ce qu'on veut maintenant. Faut-il la réécrire pour annoncer le formulaire de qualification ? (ex : *"Avant de réserver, on prend cinq minutes ensemble par écrit. Pas d'appel obligatoire, pas de barrière — juste quelques questions pour que j'arrive auprès de toi en sachant déjà qui tu es."*)

2. **CTA principal** : remplacer *"Réserver ma Mise au Point"* par quelque chose comme *"Demander ma place"*, *"Écrire avant de réserver"*, *"Commencer par quelques mots"* ? Et la sticky mobile *"Réserver ma matinée"* au même diapason.

3. **Le formulaire lui-même** : tu veux que je l'intègre dans la page (section dépliable ou nouvelle section après les tarifs) ? Ou que le CTA pointe vers une ancre/page séparée ? Et quelles questions doit-il contenir ?

Peux-tu me confirmer les trois modifications exactes que tu as en tête, et notamment :
- les questions du formulaire (3 ? 5 ? lesquelles ?)
- où il doit vivre (inline dans la page, ou écran séparé)
- le wording du nouveau CTA

Une fois ces points calés, j'applique d'un coup.

## User

① Réécrire le bloc "Tarifs et inscription" (section 8)
Ajouter "150 €/personne" sur le tarif Duo pour clarifier la lecture.
Au niveau du bloc .price-block Duo, sous les "300 €", ajouter une ligne plus discrète (mono IBM Plex, 12px, copper, letter-spacing 0.08em) :

soit 150 €/personne

Réécrire le paragraphe "Tu peux t'inscrire directement..." (lignes 1273-1274 actuelles).
Remplacer les deux paragraphes par :

Les ateliers ont lieu 4 samedis par an, en matinée (généralement 9h30 à 12h), entre Vannes et Quimper. Le lieu exact (plage, forêt, port, ville) est choisi avec toi dans l'email qui suit ta confirmation, en fonction de ce que tu as envie de photographier. Tu viens avec le boîtier que tu as, même un ancien, même un téléphone. Un carnet, si tu aimes écrire.
Pour rejoindre l'atelier, tu réponds à trois questions courtes ci-dessous. Je lis tes réponses, et je te reviens personnellement sous 48h — soit avec un lien pour confirmer ta place, soit pour te dire que ce n'est peut-être pas le bon endroit pour toi en ce moment, et pourquoi. Dans les deux cas, tu as une réponse de ma main.

Remplacer le bouton "Réserver ma Mise au Point" par un bouton qui ancre vers le formulaire (nouvelle section à créer, voir ②). Libellé : "Répondre aux trois questions". Garder le style .btn-copper existant.

## Assistant

_[tool: str_replace_edit]_

① appliqué :

- **Tarif Duo** : ajout de la ligne "soit 150 €/personne" (mono, 12px, copper, letter-spacing 0.08em) sous les 300 €.
- **Paragraphes Tarifs** : réécrits — le premier garde le ton avec "ta confirmation" au lieu de "ton inscription", le second annonce le formulaire et la promesse "réponse de ma main sous 48h".
- **CTA principal** : remplacé par "Répondre aux trois questions", ancré vers `#qualification` (la section que tu vas me décrire en ②), style `.btn-copper` conservé.

Prêt pour ② — la nouvelle section formulaire. Dis-moi les trois questions et le ton que tu veux pour le bloc.

## User



## Assistant

_[tool: snip]_

Je vais créer la section formulaire avec un mock visuel des trois questions (placeholder, en attendant que tu choisisses l'outil d'embed).

_[tool: str_replace_edit]_

_[tool: done]_

② appliqué. La nouvelle section `#candidature` vit entre Tarifs et Signature 1:1 :

- **Eyebrow** "Avant de s'inscrire" (mono copper) + titre *"Trois questions, et je te réponds."* + ta lede courte.
- **Conteneur formulaire** ivoire, max-width 680px, padding généreux (64px), bordure copper subtile.
- **3 questions** mises en forme avec radios stylisés (cercle copper rempli au check), zone texte pour Q1, et la sous-question "date" sous Q3.
- **Prénom + Email** sur deux colonnes (full-width en mobile).
- **Bouton** `.btn-copper` "Envoyer mes réponses".
- **Note de pied** mono 12px, opacité ~70% : *"Je te réponds personnellement sous 48h, à la main. Pas de séquence email automatique."*
- **Commentaire HTML** `<!-- Formulaire : à intégrer (Tally / Typeform / embed à déterminer) -->` placé juste avant le `<form>` pour repère.
- **CTA Tarifs** ré-ancré vers `#candidature` (et non plus `#qualification`).

Le `<form>` actuel est un mock visuel (preventDefault à la soumission). Quand tu auras choisi l'outil — Tally / Typeform / Formspree — on remplace le bloc par l'embed, ou on transforme ce HTML en formulaire réel qui poste vers ton endpoint. À toi pour ③.

## User

③ Masquer les éléments de travail visibles
Deux éléments qui doivent disparaître de l'affichage avant publication (les garder dans le code est OK si c'est utile pour itérer, mais cachés visuellement) :

La note "Reformulation à valider avec Linda" (ligne 1184) : ajouter une règle CSS .testimonial-note { display: none; } (ou la supprimer complètement si tu préfères).
Le placeholder du second témoignage (lignes 1190-1202, .testimonial-inner.reverse) : ajouter .testimonial-inner.reverse { display: none; }. On le réactivera quand le témoignage sera écrit.

Ajuster aussi le .testimonial-divider pour qu'il ne s'affiche pas s'il n'y a qu'un seul témoignage visible.

## Assistant

Je masque les trois éléments en CSS, avec des commentaires pour faciliter la réactivation plus tard.

_[tool: str_replace_edit]_

③ appliqué.

_[tool: snip]_

_[tool: done]_

Trois éléments masqués via CSS (le HTML reste en place pour itérer) :

- `.testimonial-note { display: none; }` — la pastille "Reformulation à valider avec Linda" disparaît.
- `.testimonial-inner.reverse { display: none; }` — le placeholder du témoignage #2 disparaît.
- `.testimonial-divider { display: none; }` — le trait séparateur disparaît aussi tant qu'il n'y a qu'un témoignage visible.

Bloc commenté `/* Masqués avant publication — réactiver quand le contenu sera prêt */` pour retrouver les trois lignes facilement le jour où Linda valide sa reformulation et où le second témoignage arrive : tu commentes ces trois règles et tout réapparaît tel quel.

## User

④ Mettre à jour la sticky bar mobile
Le libellé actuel "Réserver ma matinée" n'est plus exact (on ne réserve plus directement). La remplacer par :

Rejoindre l'atelier

Et faire pointer son href vers #candidature (la nouvelle section formulaire), pas vers #tarifs.
Faire de même pour l'ancre douce du hero :

Libellé actuel : "Voir les prochaines dates" → garder (cette ancre vers #tarifs reste pertinente, elle permet de voir les dates avant de s'engager).
Mais ajouter, sous cette ancre, une seconde ligne plus discrète (mono 12px, opacité 60%) :


Inscription via formulaire personnel de 3 questions.

Cette mention évite le sentiment de "piège" à la lecture du hero.

## Assistant

Je vais lire la zone hero pour cibler précisément.

_[tool: grep]_

_[tool: snip]_

_[tool: str_replace_edit]_

④ appliqué.

_[tool: done]_

_[tool: snip]_

④ appliqué :

- **Sticky mobile** : libellé "Rejoindre l'atelier", `href="#candidature"`, `aria-label` mis à jour.
- **Hero anchor** : "Voir les prochaines dates" conservé (vers `#tarifs`), avec une seconde ligne `.hero-anchor-note` ajoutée juste en dessous — mono 12px, opacité 60%, sans bordure ni flèche : *"Inscription via formulaire personnel de 3 questions."*

Le geste "porte ouverte mais qualifiée" est cohérent partout maintenant : hero → tarifs → formulaire, ou sticky mobile → directement formulaire pour qui défile vite.

