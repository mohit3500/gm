import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 78%;
  width: 98%;
  padding: 20px 15px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-wrap: wrap;

  .message-full-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    display: flex;
    align-items: flex-end;
  }

  .profile-icon-container {
    cursor: pointer;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: all 0.4s ease-in-out;
    margin-bottom: 2.5px;
    margin-left: 5px;
    &:hover {
      scale: 1.05;
      color: white;
    }
  }
  .profile-icon {
    height: 35px;
    width: 35px;
    border-radius: 50%;
  }
  .message-container {
    display: flex;
    align-items: center;
    min-height: 45px;
    min-width: 30px;
    border-radius: 17px 1px 17px 17px;
    cursor: pointer;
    max-height: 80vh;
    max-width: 23vw;
    padding: 10px;
    font-size: 15px;
    font-weight: 400;
    background-color: rgba(10, 150, 200, 0.4);
    transition: all 0.5s ease-in-out;
    &:hover {
      scale: 1.005;
    }
  }
`;

const Messages = () => {
  return (
    <Wrapper>
      <div className="message-full-container">
        <div className="message-container row-class">
          Mrwjfkhebkr
        </div>
        <div className="message-container row-class">
          Mrwjfkhebkrwadlnkmbkjfwalnkdm awjlfnkdbavjlcknd wrnjdlkcajwaclnknfwao
          auwvonicrlanivwcojqiwvbcjn ruqfwoen
        </div>
      </div>
        <div className="profile-container">
          <div className="profile-icon-container">
            <img
              src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
              alt=""
              className="profile-icon"
            />
          </div>
        </div>
    </Wrapper>
  );
};

export default Messages;
