import React, { useState } from 'react';
import moment from 'moment';
import './HomeContent.css';

function HomeContent() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  const handlePost = () => {
    if (input.trim()) {
      const newPost = {
        text: input,
        timestamp: moment(),
        likes: 0,
      };
      setPosts([newPost, ...posts]);
      setInput('');
    }
  };

  const handleLike = (index) => {
    const newPosts = [...posts];
    newPosts[index].likes += 1;
    setPosts(newPosts);
  };

  const handleDelete = (index) => {
    const newPosts = posts.filter((_, i) => i !== index);
    setPosts(newPosts);
  };

  const handleEdit = (index) => {
    const newText = prompt('Edit your post:', posts[index].text);
    if (newText !== null) {
      const newPosts = [...posts];
      newPosts[index].text = newText;
      setPosts(newPosts);
    }
  };

  return (
    <div className="home-content">
      <h1>Welcome to the Home Page</h1>
      <div className="post-creator">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What's on your mind?"
        />
        <button onClick={handlePost}>Post</button>
      </div>
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <p>{post.text}</p>
            <div className="post-actions">
              <span onClick={() => handleLike(index)}>Like ({post.likes})</span>
              <span onClick={() => handleEdit(index)}>Edit</span>
              <span onClick={() => handleDelete(index)}>Delete</span>
            </div>
            <span className="post-timestamp">{post.timestamp.fromNow()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeContent;
