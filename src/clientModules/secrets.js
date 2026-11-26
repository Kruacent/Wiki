/**
 * Deux secrets qui tournent sur toutes les pages du wiki :
 * - un message dans la console du navigateur, pour les curieux qui ouvrent les DevTools ;
 * - le Konami code (↑ ↑ ↓ ↓ ← → ← → B A), qui ouvre le Terminal O5
 * (src/pages/o5-52d7f03b89.tsx : adresse volontairement impossible à deviner).
 * Voir secrets/SECRETS.md (hors du dépôt public) pour la liste complète des secrets.
 */
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const KONAMI = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];

function messageConsole() {
  const titre = 'font: 800 15px monospace; color: #3ddc68; background: #0c100d; padding: 6px 10px; letter-spacing: 2px;';
  const texte = 'font: 12px monospace; color: #9aa59c;';
  const code = 'font: 700 12px monospace; color: #3ddc68;';
  console.log('%cFONDATION SCP · SITE KRUAÇENT', titre);
  console.log(
    '%cAccès développeur détecté. Le Dr. Omer vous voit.\n' +
      'Le terminal de maintenance s’ouvre avec le code habituel : %c↑ ↑ ↓ ↓ ← → ← → B A',
    texte,
    code,
  );
}

function ecouterKonami() {
  let position = 0;
  window.addEventListener('keydown', (e) => {
    const cible = e.target;
    if (cible instanceof HTMLElement && (cible.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(cible.tagName))) return;
    const touche = e.key.toLowerCase();
    position = touche === KONAMI[position] ? position + 1 : touche === KONAMI[0] ? 1 : 0;
    if (position === KONAMI.length) {
      position = 0;
      window.location.assign('/o5-52d7f03b89');
    }
  });
}

if (ExecutionEnvironment.canUseDOM) {
  messageConsole();
  ecouterKonami();
}
