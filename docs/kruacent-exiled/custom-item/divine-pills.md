---
sidebar_position: 1047
title: SCP-1047-KR (Divine Pills)
tags: 
  - Pillule
  - Soin
  - Consommable
description: Rapport d'analyse et procédure d'utilisation pour SCP-1047.
date: 2025-11-27
hide_table_of_contents: true
---

import ACSHeader from '@site/src/components/docs/ACSHeader.tsx'
import SCPImage from '@site/src/components/docs/SCPImage.tsx'
import DivinePillsItem from '@site/static/img/doc/sou.jpg'

<ACSHeader 
  item="SCP-1047-KR" 
  name="Divine Pills"
  ObjectClass="SAFE"
  Level="3"
  Disruption="VLAM"
  itemColor="#FFD700"
  credits={[
    { role: "Responsable projet", name: "Dr. Patrique" },
    { role: "Officier de recherche", name: "Chercheur Noé" },
  ]}
/>

# SCP-1047-KR : "Divine Pills"

<SCPImage
  src={DivinePillsItem}
  alt="Divine Pills"
  width="500px"
  caption="Divine pills in GR-18 room."
  type="normal"
/>

## 1. Description et Obtention

**SCP-1047-KR**, familièrement appelé *"Divine Pills"*, est une capsule pharmaceutique de couleur <span style={{color: '#FFD700', fontWeight: 'bold'}}>jaune luminescent</span>.

Contrairement aux substances médicales standard, cet objet n'a aucune propriété régénératrice sur les tissus vivants. Il agit comme un catalyseur de **réalité quantique**. Lors de sa consommation, l'objet tente de forcer un échange de matière entre l'utilisateur vivant et une conscience désincarnée située dans la noosphère locale.

---

### Localisation

| Lieu | Chance d'apparition |
| :--- | :--- |
| **Salle de GR-018 à LCZ** | **100 %** |
| **Casiers médical de la zone Entrance** | 25 % |
| **Casier divers de la zone Entrance** | 75 % |

---

## 2. Analyse Statistique

Les tests intensifs menés par le **Dr. Patrique** ont permis d'établir une cartographie précise des risques. L'ingestion de la pilule déclenche immédiatement l'un des deux scénarios suivants :

<div style={{display: 'flex', gap: '15px', marginTop: '20px', flexWrap: 'wrap'}}>

  <div style={{flex: '2', backgroundColor: 'rgba(56, 142, 60, 0.15)', border: '1px solid #388e3c', borderRadius: '8px', padding: '20px'}}>
    <h3 style={{marginTop: 0, color: '#66bb6a', display: 'flex', alignItems: 'center'}}>
      <span style={{fontSize: '2em', marginRight: '10px'}}>75%</span> SUCCÈS : TRANSLATION
    </h3>
    <p style={{margin: 0}}>
      <strong>Effet :</strong> Réanimation d'un allié.
    </p>
    <hr style={{borderColor: '#388e3c', opacity: 0.3}}/>
    <p style={{fontSize: '0.9em', fontStyle: 'italic', color: '#aaa'}}>
      Un joueur mort (Spectateur) réapparaît instantanément. Il a alors **33% de chance** de réapparaître à côté du joueur ayant ingesté SCP-1047.
    </p>
  </div>

  <div style={{flex: '1', backgroundColor: 'rgba(211, 47, 47, 0.15)', border: '1px solid #d32f2f', borderRadius: '8px', padding: '20px'}}>
    <h3 style={{marginTop: 0, color: '#ef5350', display: 'flex', alignItems: 'center'}}>
      <span style={{fontSize: '2em', marginRight: '10px'}}>25%</span> ÉCHEC
    </h3>
    <p style={{margin: 0}}>
      <strong>Effet :</strong> Mort immédiate.
    </p>
    <hr style={{borderColor: '#d32f2f', opacity: 0.3}}/>
    <p style={{fontSize: '0.9em', fontStyle: 'italic', color: '#aaa'}}>
      L'utilisateur s'effondre. L'objet est perdu.
    </p>
  </div>

</div>

---

## 3. Rapports d'Incidents et Tests

Les transcripts suivants ont été récupérés des archives personnelles du **Chercheur Noé**.

> **RAPPORT D'EXPÉRIENCE 1047-A**
>
> **Supervision :** Dr. Patrique
> **Sujet :** D-Class 6135 (Volontaire sous contrainte)
>
> **Chercheur Noé :** "Sujet 6135, ingérez la capsule."
> **D-6135 :** "Ça sent l'amande amère votre truc..." *[Le sujet avale]*
> **Chercheur Noé :** "Relevé des constantes... Attendez. Dr. Patrique, regardez les capteurs thermiques."
>
> *[Une détonation silencieuse se produit. Le sujet D-6135 est indemne. À sa droite, le corps du Garde Choco, décédé 5 minutes plus tôt, se reconstitue. Le garde reprend conscience, paniqué.]*
>
> **Dr. Patrique :** "Fascinant. Le transfert de masse a fonctionné. Notez : Succès du protocole de résurrection. Probabilité estimée validée."
>
> **RÉSULTAT :** <span style={{color: '#66bb6a', fontWeight: 'bold'}}>Réapparition d'un allié</span>

<br/>

> **RAPPORT D'EXPÉRIENCE 1047-B**
>
> **Supervision :** Dr. Patrique
> **Sujet :** D-Class 6136
>
> **Chercheur Noé :** "À votre tour, 6136. Mêmes paramètres."
> **D-4422 :** "Si lui a survécu, je devrais..." *[Le sujet avale]*
>
> *[Le sujet porte immédiatement ses mains à sa gorge. Convulsions violentes. Arrêt cardiaque total en 1.2 secondes.]*
>
> **Chercheur Noé :** "Perte du sujet. Aucune anomalie spatiale détectée."
> **Dr. Patrique :** "Comme prévu. La variable d'instabilité est toujours présente. Nettoyez la salle."
>
> **RÉSULTAT :** <span style={{color: '#ef5350', fontWeight: 'bold'}}>Mort du sujet</span>

---

## 4. Interraction avec 914

L'objet réagit aux mécanismes d'horlogerie de SCP-914.
Si placé dans la cabine d'entrée avec le sélecteur sur **Very Fine** :

* **10% de chance** de stabilisation moléculaire.
* Transformation en **[True Divine Pills](./true-divine-pills)**.

:::info Note du Dr. Patrique
"La version 'True' est la seule forme pure de cette anomalie. Elle supprime totalement le risque de décès de l'utilisateur."
:::

---

:::warning AVIS DE MAËL
"L'utilisation de SCP-1047 sur le terrain relève du pari. J'interdis formellement son utilisation si vous êtes le **dernier survivant** de votre escouade MTF ou Chaos. Risquer la défaite de toute l'opération sur un tirage à 25% est une faute professionnelle grave."
:::