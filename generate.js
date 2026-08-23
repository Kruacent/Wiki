const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'data/abilities');
const outputDir = path.join(__dirname, 'docs/capacites');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.js'));

files.forEach(file => {
  // On lit le fichier comme un simple texte, sans l'exécuter
  const content = fs.readFileSync(path.join(inputDir, file), 'utf-8');

  // Fonction pour extraire le texte entre guillemets (simples, doubles ou backticks)
  const extractString = (key) => {
    const regex = new RegExp(`${key}\\s*:\\s*(['"\`])([\\s\\S]*?)\\1`, 'i');
    const match = content.match(regex);
    return match ? match[2] : null;
  };

  const name = extractString('name') || file.replace('.js', '');
  const type = extractString('type') || 'Autre';
  const keybind = extractString('keybind');
  const cooldown = extractString('cooldown');

  // Extraction de la description (qui peut être en JSX ou en String)
  let description = 'Description introuvable.';
  
  // 1. On teste si c'est une string standard ("texte")
  let descMatch = content.match(/description\s*:\s*(['"`])([\s\S]*?)\1/i);
  if (descMatch) {
    description = descMatch[2];
  } else {
    // 2. Si c'est du JSX (ex: <>texte</> ou <div>texte</div>)
    // On prend tout ce qui suit "description:" jusqu'à la fin du bloc
    descMatch = content.match(/description\s*:\s*([\s\S]*?)(?:,[\s\n]*[a-zA-Z0-9_]+\s*:|}$)/i);
    if (descMatch) {
      // On supprime toutes les balises HTML/JSX (<...>) pour ne garder que le texte pur
      description = descMatch[1].replace(/<[^>]*>?/gm, '').trim();
    }
  }

  // Création du contenu Markdown
  const markdownContent = `---
title: ${name}
description: Capacité ${type} du serveur.
---

# ${name}

**Type :** ${type}  
${keybind ? `**Touche :** <kbd>${keybind}</kbd>  ` : ''}
${cooldown ? `**Temps de recharge :** ${cooldown}  ` : ''}

---

## Description
${description}
`;

  const outputFileName = file.replace('.js', '.md');
  fs.writeFileSync(path.join(outputDir, outputFileName), markdownContent);
  console.log(`✅ Fichier généré : ${outputFileName}`);
});

console.log("🎉 Terminé ! Toutes les capacités ont été converties.");