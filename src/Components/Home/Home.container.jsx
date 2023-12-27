import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageList from '../ImageShow/ImageList';

const Images = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'news',
            apiKey: '5ecda832e6124e56bde71a474e0c3919'
          }
        });
        console.log(response);
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h2>Latest News</h2>
      { news && <ImageList news={news} />}
    </div>
  );
};

export default Images;
