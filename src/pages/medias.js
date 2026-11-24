import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './medias.module.css';

const TWITCH_CHANNEL = 'teamkruacent';
const YOUTUBE_CHANNEL_ID = 'UC1YCc_4VhGfTrAo1CMGSuFQ';
// La playlist « uploads » d'une chaîne YouTube a le même identifiant, préfixé par UU au lieu de UC.
const YOUTUBE_UPLOADS = `UU${YOUTUBE_CHANNEL_ID.slice(2)}`;

function TwitchPlayer() {
  return (
    <BrowserOnly fallback={<div className={styles.frame} />}>
      {() => {
        // Twitch exige le nom de domaine du site qui intègre le lecteur.
        const parent = window.location.hostname;
        const src = `https://player.twitch.tv/?channel=${TWITCH_CHANNEL}&parent=${parent}&muted=true&autoplay=false`;
        return (
          <div className={styles.frame}>
            <iframe src={src} title="Live Twitch de Kruaçent" allowFullScreen />
          </div>
        );
      }}
    </BrowserOnly>
  );
}

function YouTubePlaylist() {
  return (
    <div className={styles.frame}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/videoseries?list=${YOUTUBE_UPLOADS}`}
        title="Vidéos YouTube de Kruaçent"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default function Medias() {
  return (
    <Layout title="Médias" description="Le live Twitch et les vidéos YouTube de Kruaçent">
      <main className="container margin-vert--xl">
        <header className={styles.header}>
          <Heading as="h1">Médias</Heading>
          <p className={styles.lead}>
            Les parties du serveur en direct sur Twitch, et les meilleurs moments sur YouTube.
          </p>
        </header>

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <Heading as="h2">En direct sur Twitch</Heading>
            <div className={styles.links}>
              <Link className="button button--primary button--sm" href={`https://twitch.tv/${TWITCH_CHANNEL}`}>
                Ouvrir sur Twitch
              </Link>
            </div>
          </div>
          <p className={styles.text}>
            Quand un live est en cours, il s'affiche ici. Sinon, le lecteur propose les dernières rediffusions de la
            chaîne.
          </p>
          <TwitchPlayer />
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <Heading as="h2">Vidéos YouTube</Heading>
            <div className={styles.links}>
              <Link className="button button--secondary button--sm" href={`https://www.youtube.com/channel/${YOUTUBE_CHANNEL_ID}`}>
                Voir la chaîne
              </Link>
              <Link
                className="button button--primary button--sm"
                href={`https://www.youtube.com/channel/${YOUTUBE_CHANNEL_ID}?sub_confirmation=1`}
              >
                S'abonner
              </Link>
            </div>
          </div>
          <p className={styles.text}>
            Toutes les vidéos de la chaîne, de la plus récente à la plus ancienne. Utilisez le bouton de liste en haut
            à droite du lecteur pour choisir une vidéo.
          </p>
          <YouTubePlaylist />
        </section>
      </main>
    </Layout>
  );
}
