import AbilityCard from './AbilityCard';

const abilitiesReq = require.context('/data/abilities', false, /\.js$/);

const abilitiesDB = {};
abilitiesReq.keys().forEach((key) => {
  const fileName = key.replace('./', '').replace('.js', '');
  abilitiesDB[fileName] = abilitiesReq(key).default;
});

export const abilitiesList = []; 

abilitiesReq.keys().forEach((key) => {
  const fileName = key.replace('./', '').replace('.js', '');
  const data = abilitiesReq(key).default;
  abilitiesList.push({ ...data, id: fileName });
});

export default function AbilityLoader({ id, ...overrides }) {
  const data = abilitiesDB[id];

  if (!data) {
    return <div style={{color: 'red'}}>⚠ Capacité "{id}" introuvable (.js)</div>;
  }

  const finalData = { ...data, ...overrides };

  return (
    <AbilityCard 
      name={finalData.name}
      type={finalData.type}
      cooldown={finalData.cooldown}
      keybind={finalData.keybind}
      description={finalData.description}
    />
  );
}