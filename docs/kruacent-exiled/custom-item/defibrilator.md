---
sidebar_position: 1041
title: SCP-1041 (Defibrilator)
tags:
    - SCP-1853
    - Soin
description: Dispositif médical anomal capable de restaurer la conscience d'un sujet décédé.
date: 2025-11-27
hide_table_of_contents: true
---

# Objet #1041 : "Defibrillator"

![Defibrilator](@site/static/img/doc/sou.jpg)

<div style={{backgroundColor: '#1b1b1d', borderLeft: '5px solid #e040fb', padding: '15px', marginBottom: '25px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #444', paddingBottom: '10px', marginBottom: '10px'}}>
    <strong style={{color: '#ccc', fontSize: '1.4em', fontFamily: 'monospace'}}>DOSSIER: SCP-1041</strong>
    <span style={{color: '#e040fb', fontWeight: 'bold', border: '1px solid #e040fb', padding: '2px 8px', borderRadius: '3px'}}>SAFE</span>
  </div>
  <div style={{fontFamily: 'monospace', color: '#ccc'}}>
    <strong>RESPONSABLE DU PROJET :</strong> Dr. Omer<br/>
    <strong>ANALYSTE MÉDICAL :</strong> Dr. Patrique<br/>
    <strong>ORIGINE :</strong> Récupération Site-19<br/>
  </div>
</div>

## 1. Description Technique

**SCP-1041** est un dispositif médical avancé ressemblant à un injecteur automatique, contenant un fluide luminescent de couleur <span style={{color: '#e040fb', fontWeight: 'bold'}}>MAGENTA</span>.

Contrairement à un défibrillateur conventionnel qui relance un cœur arrêté, cet objet agit comme une ancre de réalité. Il localise l'empreinte résiduelle d'un sujet décédé (Spectateur) et force sa conscience à se matérialiser à nouveau dans un corps physique reconstruit instantanément.

### Localisation (Spawn)

| Lieu | Chance d'apparition |
| :--- | :--- |
| **Confinement de SCP-079** | 50 % |
| **Casiers médical de n'importe quelle zone** | 50 % |

---

## 2. Protocole de Réanimation (Gameplay)

L'utilisation de cet objet ne nécessite pas de cibler un corps au sol.

### Mécanique de Cibles
Lors de l'activation, l'appareil scanne la zone :
1.  Il cherche les **positions de mort** (l'endroit exact où le joueur est décédé) autour de vous.
2.  Il sélectionne le mort dont la position est la **plus proche de vous**.
3.  Si aucune mort n'est enregistrée, l'objet n'est pas consommé (*Message : "There is no death"*).

### Effets de la Résurrection

<div style={{display: 'flex', gap: '15px', marginTop: '10px', flexWrap: 'wrap'}}>

  <div style={{flex: '1', backgroundColor: 'rgba(224, 64, 251, 0.1)', border: '1px solid #e040fb', borderRadius: '8px', padding: '15px'}}>
    <h4 style={{marginTop: 0, color: '#ea80fc'}}>CONDITION DU SUJET</h4>
    <ul style={{paddingLeft: '20px', margin: 0}}>
      <li><strong>Santé :</strong> Revient avec <span style={{color: '#ff5252', fontWeight: 'bold'}}>40 HP</span> (État critique).</li>
      <li><strong>Position :</strong> Téléporté directement <strong>sur l'utilisateur</strong>.</li>
      <li><strong>Protection :</strong> Invulnérabilité (GodMode) de 1 seconde.</li>
    </ul>
  </div>

  <div style={{flex: '1', backgroundColor: 'rgba(33, 150, 243, 0.1)', border: '1px solid #2196f3', borderRadius: '8px', padding: '15px'}}>
    <h4 style={{marginTop: 0, color: '#64b5f6'}}>RECRUTEMENT FORCÉ</h4>
    <p style={{fontSize: '0.9em', margin: 0}}>
      Le sujet réanimé adopte <strong>immédiatement votre faction et votre rôle</strong>.
    </p>
    <p style={{fontSize: '0.8em', fontStyle: 'italic', marginTop: '5px', color: '#aaa'}}>
      Exemple : Si un Chaos Insurgency réanime un garde MTF mort, ce dernier revient à la vie en tant que Chaos Insurgency.
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
> **Spécialiste Romain :** "Debout soldat ! Tu as 40% de capacité vitale et on a besoin de ton fusil. Tiens, prends ce Medkit."
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
"N'utilisez pas cet objet sous un feu nourri. Le sujet réapparaît avec seulement 40 PV. Si vous le ramenez pour qu'il prenne une balle perdue 0.5 seconde plus tard, vous avez gaspillé une ressource inestimable. Sécurisez la zone, puis réanimez."
:::