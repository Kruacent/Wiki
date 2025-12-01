export default {
  name: "Airstrike",
  type: "Active",
  cooldown: "120s",
  keybind: "Configurer dans ServerSpecificSettings",
  description: (
    <>
      Demande un bombardement immédiat sur la position marquée par <strong>Set Position</strong>.
      <br/><br/>
      <strong>Effets :</strong>
      <ul>
        <li>Après un délai de <strong>5 secondes</strong>, une explosion frappe la zone.</li>
        <li>Inflige des dégâts à travers les portes et les murs dans un petit rayon.</li>
        <li>Ne fonctionne que si le ciel est dégagé (Surface).</li>
      </ul>
    </>
  )
};