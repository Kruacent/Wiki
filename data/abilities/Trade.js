export default {
  name: "Trade",
  type: "Active",
  cooldown: "1s",
  keybind: "Configurer dans ServerSpecificSettings",
  description: (
    <>
      Vos liens avec le casino vous permettent d'obtenir plus de pièces, peu importe le prix.
      <br/><br/>
      <strong>Fonctionnement :</strong>
      <ul>
        <li>
            <span style={{color: '#4caf50'}}>Si vous tenez un objet :</span> L'objet est détruit ➔ Vous recevez <strong>1 Pièce</strong>.
        </li>
        <li>
            <span style={{color: '#e57373'}}>Si vous avez les mains vides :</span> Vous sacrifiez <strong>10% de vos PV MAX</strong> ➔ Vous recevez <strong>1 Pièce</strong>.
        </li>
      </ul>
      <br/>
      <strong style={{color: '#d32f2f'}}>MORT SUBITE :</strong> Si vos PV Max tombent à 0, vous mourrez instantanément avec le message <em>"The casino always win"</em>.
    </>
  )
};