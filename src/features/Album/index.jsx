import React from 'react';

import AlbumList from './components/AlbumList';

function AlbumFeature(props) {
  const albumList = [
    {
      idx: 1,
      name: 'Nhạc Việt',
      thumnailURL:
        'https://photo-zmp3.zmdcdn.me/cover/9/a/5/4/9a547c214248610d4907fa5b60b1b3b5.jpg',
    },
    {
      idx: 2,
      name: 'Nhạc Âu Mỹ',
      thumnailURL:
        'https://photo-zmp3.zmdcdn.me/cover/d/8/5/6/d856eafd7198e0f534ef400d088c7cda.jpg',
    },
    {
      idx: 3,
      name: 'Nhạc Trung',
      thumnailURL:
        'https://photo-zmp3.zmdcdn.me/cover/4/0/7/0/407056603b2048fe1c1ed6e05bda95d0.jpg',
    },
  ];
  return (
    <div>
      <h2>Có thể bạn sẽ thích </h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
