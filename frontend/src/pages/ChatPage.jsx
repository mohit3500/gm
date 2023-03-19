import React from 'react';
import styled from 'styled-components';
import Dashboard from '../components/Dashboard';
import ChatGroup from '../components/ChatGroup';
import Chat from '../components/Chat';

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
`;

const ChatPage = () => {

  return (
    <Wrapper>
      <Dashboard />
      <ChatGroup />
      <Chat />
    </Wrapper>
  );
};

export default ChatPage;
