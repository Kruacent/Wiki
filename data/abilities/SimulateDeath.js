export default {
  name: "Simulation de Mort",
  type: "Active",
  cooldown: "60s",
  keybind: "Configurer dans ServerSpecificSettings",
  description: (
    <>
      Vos talents de mime vous permettent de simuler un décès convaincant.
      <br/>
      À l'activation :
      <ul>
        <li>Un <strong>ragdoll</strong> est généré à votre position avec une cause de mort aléatoire.</li>
        <li>Vous devenez <strong>Invisible</strong> et immobile pendant <strong>10 secondes</strong>.</li>
      </ul>
    </>
  )
};