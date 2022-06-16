import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = ({ id, sender, body, timeStamp, liked }) => {
  // const [likeCount, setLikeCount] = useState(0);

  const toggleHeart = () => {
    liked = !liked;
  };

  return (
    <div className={`chat-entry ${sender === 'Vladimir' ? 'local' : 'remote'}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button onClick={toggleHeart} className="like">
          {!liked ? '🤍' : '❤️'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
};

export default ChatEntry;
