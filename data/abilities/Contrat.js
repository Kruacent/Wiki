export default {
  name: "Contrat d'Assassinat",
  type: "Passif",
  description: (
    <>
      Au début de la manche, une <strong>cible</strong> vous est assignée.
      <br/><br/>
      <strong>Règles d'engagement :</strong>
      <ul>
        <li>Le <strong>Friendly Fire</strong> est activé contre votre cible (vous pouvez la tuer même si c'est un allié).</li>
        <li>La cible reçoit des indices sensoriels si vous êtes proche.</li>
      </ul>
      <br/>
      <strong>Conditions :</strong>
      <ul>
        <li style={{color: '#4caf50'}}><strong>SUCCÈS :</strong> Vous tuez la cible vous-même.</li>
        <li style={{color: '#e57373'}}><strong>ÉCHEC :</strong> La cible meurt par quelqu'un d'autre ou s'échappe.</li>
      </ul>
    </>
  )
};