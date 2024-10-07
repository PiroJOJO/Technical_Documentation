import React, { useState, useEffect } from 'react';

function PostsPanel() {
  const [posts, setPosts] = useState([]);
  const [countPosts, setCount] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const slider = (change) => {
    setCount(Number(change.target.value));
  };

  return (
    <div class='main'>
      <h2 id="main_title"> РАСПОЗНАВАНИЕ КАТАРАКТЫ ПО СИСТЕМЕ
        КЛАССИФИКАЦИИ ПОМУТНЕНИЙ ХРУСТАЛИКА LOCS-꠲ <br />АЛГОРИТМОМ НА ОСНОВЕ НЕЙРОННЫХ СЕТЕЙ
      </h2>
      <hr/>
      <br/>
      <h3 class='h3'>Посты</h3>
      <br />
      <p class='intro_list'>
        <h4 htmlFor="visiblePosts">Количество постов: {countPosts}</h4>
        <input class="slider"
          type="range"
          min="0"
          max={posts.length}
          value={countPosts}
          onChange={slider}
        />

        <ul>
          {posts.slice(0, countPosts).map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </p>

    </div>
  );
};

export default PostsPanel;



