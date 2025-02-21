import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout'; 
import '../css/videoPage.css';

const YouTubePage = () => {
  const [videos, setVideos] = useState([]);
  const channelId = 'UC1YCc_4VhGfTrAo1CMGSuFQ';

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`);
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'text/xml');
        const items = xmlDoc.getElementsByTagName('entry');
        
        const videoList = Array.from(items).map(item => ({
          title: item.getElementsByTagName('title')[0].textContent,
          url: item.getElementsByTagName('link')[0].getAttribute('href'),
          thumbnail: item.getElementsByTagName('media:thumbnail')[0].getAttribute('url'),
          published: item.getElementsByTagName('published')[0].textContent,
        }));

        setVideos(videoList);
      } catch (error) {
        console.error('Erreur lors de la récupération des vidéos', error);
      }
    };

    fetchVideos();
  }, [channelId]);

  return (
    <Layout
      title="Chaîne YouTube"
      description="Découvrez les dernières vidéos et articles de la chaîne YouTube"
    >
      <div className="layout-container">
        {/* Affichage des vidéos */}
        {videos.length === 0 ? (
          <p className="loading">Chargement des vidéos...</p>
        ) : (
          <div className="video-grid">
            {videos.map((video, index) => (
              <div key={index} className="video-card">
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                </a>
                <div className="video-info">
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-date">{new Date(video.published).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default YouTubePage;