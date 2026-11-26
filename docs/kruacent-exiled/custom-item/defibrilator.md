---
sidebar_position: 1041
title: SCP-1041-KR (Defibrilator)
tags:
    - SCP-1853
    - Soin
description: Dispositif médical anomal capable de restaurer la conscience d'un sujet décédé.
date: 2025-11-27
hide_table_of_contents: true
---

import ACSHeader from '@site/src/components/docs/ACSHeader.tsx'
import SCPImage from '@site/src/components/docs/SCPImage.tsx'
import SCPVideo from '@site/src/components/docs/SCPVideo.tsx'
import DefibrilatorItem from '@site/static/img/doc/defibrillator.jpg'
import DefibrilatorAction from '@site/static/video/DefibrillatorUse.mp4'

<ACSHeader 
  item="SCP-1041-KR" 
  name="Defibrillator"
  ObjectClass="SAFE"
  Level="3"
  Disruption="VLAM"
  itemColor="#e040fb"
  credits={[
    { role: "Responsable Projet", name: "Dr. Omer" },
    { role: "Analyste Médical", name: "Dr. Patrique" },
  ]}
/>

# SCP-1041-KR : "Defibrillator"

<SCPImage
  src={DefibrilatorItem}
  alt="Item Defibrilator"
  width="500px"
  caption="Le defibrilator disposé par terre."
  type="normal"
/>

## 1. Description Technique

**SCP-1041-KR** est un dispositif médical avancé ressemblant à un injecteur automatique, contenant un fluide luminescent de couleur <span style={{color: '#e040fb', fontWeight: 'bold'}}>MAGENTA</span>.

Contrairement à un défibrillateur conventionnel qui relance un cœur arrêté, cet objet agit comme une ancre de réalité. Il localise l'empreinte résiduelle d'un sujet décédé et force sa conscience à se matérialiser à nouveau dans un corps physique reconstruit instantanément.

### Localisation

| Lieu | Chance d'apparition |
| :--- | :--- |
| **Confinement de SCP-079** | 50 % |
| **Confinement de SCP-096** | 10 % |
| **Confinement de SCP-330** | 10 % |
| **Confinement de SCP-939** | 10 % |
| **Casiers médical de n'importe quelle zone** | 50 % |
| **Casiers divers de n'importe quelle zone** | 20 % |

**Limite :** 4 Unités.

---

## 2. Protocole de Réanimation

L'utilisation de cet objet nécessite de **viser un corps au sol**.

### Mécanique de Cibles
Lors de l'activation :
1.  Vous devez viser un cadavre situé à **2,5 mètres** au maximum. Sinon, l'objet n'est pas consommé (*Message : "Rapprochez-vous ou visez un cadavre."*).
2.  Le joueur mort doit être spectateur et être mort depuis **60 secondes** au maximum. Sinon, la réanimation est refusée (*Message : "Mort trop ancienne."*).
3.  La réanimation dure **1 seconde**. Si vous vous éloignez de plus de 3,5 mètres du corps pendant ce temps, elle échoue et l'objet vous est rendu.

<SCPVideo 
  src={DefibrilatorAction} 
  title="Test Unité 04" 
  location="Laboratoire du Micro H.I.D" 
  caption="Le sujet convulse avant la réanimation."
/>

### Effets de la Résurrection

<div style={{display: 'flex', gap: '15px', marginTop: '10px', flexWrap: 'wrap'}}>

  <div style={{flex: '1', backgroundColor: 'rgba(224, 64, 251, 0.1)', border: '1px solid #e040fb', borderRadius: '8px', padding: '15px'}}>
    <h4 style={{marginTop: 0, color: '#ea80fc'}}>CONDITION DU SUJET</h4>
    <ul style={{paddingLeft: '20px', margin: 0}}>
      <li><strong>Santé :</strong> Revient avec <span style={{color: '#ff5252', fontWeight: 'bold'}}>20 % de ses PV max</span> et <strong>50 PV de bouclier</strong> (AHP)</li>
      <li><strong>Position :</strong> Réapparaît à l'emplacement de <strong>son corps</strong>.</li>
      <li><strong>Séquelles :</strong> Aveuglé 2 secondes, commotionné et assourdi 20 secondes.</li>
    </ul>
  </div>

  <div style={{flex: '1', backgroundColor: 'rgba(33, 150, 243, 0.1)', border: '1px solid #2196f3', borderRadius: '8px', padding: '15px'}}>
    <h4 style={{marginTop: 0, color: '#64b5f6'}}>RÔLE CONSERVÉ</h4>
    <p style={{fontSize: '0.9em', margin: 0}}>
      Le sujet réanimé revient avec <strong>le rôle qu'il avait au moment de sa mort</strong>.
    </p>
    <p style={{fontSize: '0.8em', fontStyle: 'italic', marginTop: '5px', color: '#aaa'}}>
      Exemple : Si un Chaos Insurgency réanime un garde mort, ce dernier revient à la vie en tant que garde.
    </p>
  </div>

</div>

---

## 3. Rapports de Terrain

Transcription des communications radio lors de l'incident de brèche 1041-Delta.

> **< Début de l'enregistrement >**
>
> **Capitaine Noé (MTF) :** "On a perdu l'unité Bravo dans le couloir des serveurs ! Ils se sont fait massacrer par SCP-939 !"
>
> **Spécialiste Romain (MTF) :** "Négatif Chef. J'ai récupéré un dispositif 1041 dans les casiers. Couvrez-moi."
>
> *[Bruit de chargement électrique aigu. Une déflagration de lumière magenta illumine le couloir.]*
>
> **Soldat (Voix inconnue) :** "Bordel... Je... J'étais mort ? Il faisait si froid."
>
> **Spécialiste Romain :** "Debout soldat ! Tu as 20% de capacité vitale et on a besoin de ton fusil. Tiens, prends ce Medkit."
>
> **Capitaine Noé :** "Bien joué Romain. L'effectif est remonté à 4 opérateurs. On avance."
>
> **< Fin de l'enregistrement >**

---

## 4. Notes de Recherche

:::info Observation du Dr. Patrique
"C'est fascinant. L'appareil ne semble pas se soucier de l'allégeance précédente du sujet. Il réécrit la mémoire musculaire et l'identité de groupe pour correspondre à celui qui appuie sur le bouton. C'est autant un outil de soin qu'un outil de conversion tactique."
:::

:::warning AVIS TACTIQUE DE MAËL
"N'utilisez pas cet objet sous un feu nourri. Le sujet réapparaît avec seulement 20 % de sa vie (et un peu de bouclier). Si vous le ramenez pour qu'il prenne une balle perdue 0.5 seconde plus tard, vous avez gaspillé une ressource inestimable. Sécurisez la zone, puis réanimez."
:::

---

## Trivia

- La faute de la traduction anglaise "re**sus**citate" est une référence à [Among US](https://fr.wikipedia.org/wiki/Among_Us).