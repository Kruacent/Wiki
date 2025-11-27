---
sidebar_position: 1048
title: SCP-1048 (Deployable Wall)
tags:
    - Keycard
description: Dispositif de couverture tactique instantanée dissimulé sous la forme d'une carte d'accès.
date: 2025-11-27
hide_table_of_contents: true
---

# Objet #1048 : "Deployable Wall"

![Deployable Wall](@site/static/img/doc/sou.jpg)

<div style={{backgroundColor: '#1b1b1d', borderLeft: '5px solid #4caf50', padding: '15px', marginBottom: '25px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #444', paddingBottom: '10px', marginBottom: '10px'}}>
    <strong style={{color: '#ccc', fontSize: '1.4em', fontFamily: 'monospace'}}>DOSSIER: SCP-1048</strong>
    <span style={{color: '#4caf50', fontWeight: 'bold', border: '1px solid #4caf50', padding: '2px 8px', borderRadius: '3px'}}>SAFE</span>
  </div>
  <div style={{fontFamily: 'monospace', color: '#ccc'}}>
    <strong>RESPONSABLE R&D :</strong> Dr. Patrique<br/>
    <strong>INGÉNIERIE MATÉRIELLE :</strong> Dr. Choco<br/>
  </div>
</div>

## 1. Description Technique

**SCP-1048** apparaît, à l'œil nu, comme une carte d'accès standard de niveau 1 (Janitor Keycard) émettant une légère luminescente <span style={{color: '#4caf50', fontWeight: 'bold'}}>VERTE</span>.

En réalité, il s'agit d'un conteneur compact de nanobots à déploiement rapide développé par le **Dr. Patrique**. Lorsqu'il est activé, l'objet libère une structure polymère durcie qui s'expanse instantanément pour former une barricade physique capable de stopper les projectiles balistiques et de bloquer le passage de toutes entités.

### Localisation (Armement)

Cet objet est considéré comme de l'équipement militaire expérimental.
**Limite :** 2 Unités.

| Lieu | Chance d'apparition |
| :--- | :--- |
| **Casier conteneur d'arme** | 50 % |
| **Armurerie à côté de SCP-049** | 25 % |
| **Armurerie de LCZ** | 25 % |

---

## 2. Manuel de Déploiement (Gameplay)

:::danger Distinction Critique : JETER vs LÂCHER
Le mécanisme de déclenchement est sensible. Il existe une différence fondamentale entre **Lancer** l'objet via la touche du clavier et **Lâcher** via l'inventaire (lâcher au pied).
:::

L'objet utilise le lâcher via l'inventaire pour s'activer.

| Action Joueur | Résultat Technique | Effet en Jeu |
| :--- | :--- | :--- |
| **Dropper via l'inventaire** | **ACTIVATION** | L'objet est consommé. Un **MUR** apparaît instantanément devant vous à la position de la carte. |
| **Lancer la carte** <br/> | **INERTIE** | La carte est simplement jetée au loin. **Aucun mur n'apparaît.** Vous pouvez la ramasser pour réessayer. |

### Caractéristiques du Mur
* **Fonction :** Bloque les tirs (balles) et les déplacements (joueurs et SCPs).
* **Durabilité :** Indestructible par armes conventionnelles.
* **Usage :** Idéal pour bloquer une porte, un ascenseur ou se créer une "cover" dans un couloir vide.
* **Temps :** Le mur semble disparaître à partir de T+10s à partir de sa création.

---

## 3. Rapport de Test Terrain

Archives vidéo de la session d'entraînement de l'Epsilon-11.

> **< Début de l'enregistrement >**
>
> **Dr. Omer (Observateur) :** "Agent Romain, vous êtes poursuivi par SCP-939 dans le couloir adjacent. Vous n'avez pas assez d'endurance pour atteindre l'ascenseur. Action ?"
>
> **Agent Romain (MTF) :** "Je déploie le prototype 1048 !"
>
> *[L'Agent Romain court, regarde ses pieds et lâche la carte verte.]*
> *[Dans un bruit de dépressurisation hydraulique, une barricade de métal gris émerge du sol en 0.2 seconde.]*
>
> *[SCP-939 arrive à pleine vitesse et percute le mur violemment, étourdi par l'impact.]*
>
> **Agent Romain :** "Cible bloquée ! Je recharge et j'engage !"
>
> **Dr. Omer :** "Efficace. Notez cependant que le mur bloque aussi vos alliés. Ne coincez pas votre escouade, Romain."
>
> **< Fin de l'enregistrement >**

---

## 4. Directive Tactique

:::info Note du Chercheur Noé
"Nous avons remarqué que certains Classe-D essaient de 'lancer' la carte sur les gardes en espérant qu'un mur leur tombe dessus. Ça ne marche pas comme ça. Le mécanisme de sécurité empêche le déploiement en vol. Vous devez le poser."
:::

:::warning AVIS DE MAËL
"Cet outil est à double tranchant. Un mur mal placé dans un checkpoint peut condamner toute votre équipe à mort si vous bloquez leur retraite face à un SCP.
**Usage recommandé :** Bloquer l'entrée d'une salle pour gagner du temps, ou bloquer la sortie d'un ascenseur derrière vous."
:::