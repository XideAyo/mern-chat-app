import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatPage = () => {
  const [chat, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get('/api/chat');

    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chat.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
