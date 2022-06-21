import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const updateChatData = (updatedEntry) => {
    const entries = chatData.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      } else {
        return entry;
      }
    });

    setChatData(entries);
    likeCount();
  };

  const likeCount = () => {
    return chatData
      .map((entry) => {
        return entry.liked ? 1 : 0;
      })
      .reduce((acc, current) => acc + current);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        <section>
          <span id="heartWidget" className="widget">
            {likeCount()} ❤️s
          </span>
        </section>
      </header>
      <main>
        <ChatLog entries={chatData} onUpdateEntry={updateChatData} />
      </main>
    </div>
  );
};

export default App;
