export default {
  name: "Teleportation",
  type: "Active",
  cooldown: "130s",
  keybind: "Configurer dans ServerSpecificSettings",
  description: (
    <>
      Vous téléporte instantanément au point marqué par <strong>Set Position</strong>.
      <br/><br/>
      <strong>Coût & Risques :</strong>
      <ul>
        <li style={{color: '#e57373'}}>Coût : <strong>60 PV</strong></li>
        <li>Restriction : Impossible si le point est dans un Ascenseur ou une autre Zone.</li>
        <li>Aléatoire : Il y a <strong>5% de chance</strong> de rater la cible et d'atterrir sur un joueur aléatoire.</li>
      </ul>
    </>
  )
};