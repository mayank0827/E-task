import React from 'react';

const ImageList = ({ news }) => {
  const renderedArticles = news?.map((article , index) => (
    <div key={index} className="news-item">
      <h3>{article?.title}</h3>
      <img src={article.urlToImage}/>
      <p>{article?.description}</p>
    </div>
  ));

  return (
    <div className="news-list">
      {renderedArticles}
    </div>
  );
};

export default ImageList;