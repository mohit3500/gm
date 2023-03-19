import React from 'react';
import styled from 'styled-components';
import Dashboard from '../components/Dashboard';
import Message from '../components/ChatGroup';

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
`;

const ProfilePage = () => {
  return (
    <Wrapper>
      <Dashboard />
      <Message />
    </Wrapper>
  );
};

export default ProfilePage;
