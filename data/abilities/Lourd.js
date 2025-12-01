export default {
  name: "Lourd",
  type: "Passif",
  description: (
    <>
      Votre armement est si lourd que vos munitions affectent votre mobilité.
      <br/>
      Vous subissez un effet <strong>Slowness</strong> proportionnel à la quantité de balles de <strong>7.62 (Logicer)</strong> que vous portez.
      <br/><br/>
      <strong>Formule :</strong> 1 Niveau de ralentissement par tranche de 100 balles.
      <ul>
        <li>200 Balles = Slowness II (Très lent)</li>
        <li>100 Balles = Slowness I (Lent)</li>
        <li>0 Balles = Vitesse normale</li>
      </ul>
    </>
  )
};