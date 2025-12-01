export default {
  name: "Force Open",
  type: "Active",
  cooldown: "30s",
  keybind: "Configurer dans ServerSpecificSettings",
  description: (
<>
      Activez la compétence pour tenter de <strong>forcer l'ouverture</strong> des portes verrouillées (sauf confinement 079).
      <br/>
      Attention : Plus la porte est sécurisée, plus les chances d'échec sont élevées et plus vous subirez de <strong>dégâts physiques</strong> en cas de raté.
      <br/><br/>
      <table style={{width: '100%', fontSize: '0.8rem', borderCollapse: 'collapse'}}>
        <thead>
          <tr style={{borderBottom: '1px solid #555', color: '#aaa'}}>
            <th style={{textAlign: 'left'}}>Type de Porte</th>
            <th style={{textAlign: 'center'}}>Succès</th>
            <th style={{textAlign: 'right'}}>Dégâts (Échec)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Porte Standard</td>
            <td style={{textAlign: 'center', color: '#4caf50'}}>40%</td>
            <td style={{textAlign: 'right', color: '#e57373'}}>-5 HP</td>
          </tr>
          <tr>
            <td>Checkpoint</td>
            <td style={{textAlign: 'center', color: '#ffb74d'}}>30%</td>
            <td style={{textAlign: 'right', color: '#e57373'}}>-10 HP</td>
          </tr>
          <tr>
            <td>Gate (A/B)</td>
            <td style={{textAlign: 'center', color: '#d32f2f'}}>20%</td>
            <td style={{textAlign: 'right', color: '#e57373'}}>-20 HP</td>
          </tr>
        </tbody>
      </table>
    </>
  )
};