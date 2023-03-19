import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import { Search } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Messages from './Messages';

const Wrapper = styled.div`
  flex: 0.71;
  width: 100%;
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(10, 150, 200, 0.05);
  .top-container {
    background-color: rgba(255, 255, 255, 1);
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .info-container-left {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 5px 15px;
    height: 40px;
    transition: all 0.3s ease-in;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    border-radius: 10px;
  }
  .info-container-right {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 5px 15px;
    height: 40px;
    cursor: pointer;
  }
  .border {
    height: 35px;
    width: 0.5px;
    background-color: gray;
    margin: 0 5px;
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
    &:hover {
      scale: 1.1;
      color: white;
    }
  }
  .profile-icon {
    height: 35px;
    width: 35px;
    border-radius: 50%;
  }
  .name-container {
    display: flex;
    flex-direction: column;
    height: 30px;
  }
  .name {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  .status {
    font-size: 10px;
    font-weight: 400;
  }
  .typing-container {
    height: 50px;
    width: 97%;
    background-color: rgba(10, 150, 200, 0.07);
    border-radius: 10px;
    position: absolute;
    bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 10px;
  }
  .typing-container-left {
    margin-left: 20px;
    flex: 0.05;
  }
  .typing-container-middle {
    flex: 0.8;
    height: 30px;
    display: flex;
  }
  .typing-input {
    width: 90%;
    background: none;
    outline: none;
    border: none;
    font-size: 12px;
    &::placeholder {
      color: rgba(10, 150, 200, 1);
    }
  }
  .typing-container-right {
    flex: 0.15;
    display: flex;
    align-items: center;
    gap: 25px;
    justify-content: flex-end;
    margin-right: 20px;
  }
  .bottom-icons {
    transition: all 0.4s ease-in-out;
    &:hover {
      scale: 1.1;
    }
  }
  .no-image {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-color: rgba(10, 150, 200, 0.12);
  }
`;

const Chat = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { userId } = params;
  const getChats = async () => {
    await axios
      .get(`http://localhost:8000/api/user/${userId}`)
      .then((response) => {
        setResult(response.data);
        setLoading(false);
        console.log(result)
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    getChats();
  }, []);
  const [value, setValue] = useState('');
  return (
    <Wrapper>
      {/* TOP */}
      <div className="top-container">
        <div className="info-container-left">
          <div className="profile-icon-container">
            {loading ? (
              <div className="no-image"></div>
            ) : (
              <img src={result.pic} className="profile-icon" />
            )}
          </div>
          <div className="name-container">
            <div className="name">{result.username}</div>
            <div className="status">Online</div>
          </div>
        </div>
        <div className="info-container-right">
          <Search style={{ color: 'black', fontSize: '22px' }} />
          <div className="border"></div>
          <KeyboardArrowDownIcon style={{ color: 'black', fontSize: '22px' }} />
        </div>
      </div>
      {/* Middle */}
      <Messages />
      {/* Bottom */}
      <div className="typing-container">
        <div className="typing-container-left">
          <KeyboardVoiceOutlinedIcon
            className="bottom-icons"
            style={{ cursor: 'pointer', color: 'rgba(10, 150, 200, 1)' }}
          />
        </div>
        <div className="typing-container-middle">
          <input
            className="typing-input"
            type="text"
            placeholder="Write a Meassage . . ."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="typing-container-right">
          <AddBoxRoundedIcon
            className="bottom-icons"
            style={{ cursor: 'pointer', color: 'rgba(10, 150, 200, 1)' }}
          />
          <SendRoundedIcon
            className="bottom-icons"
            style={{ cursor: 'pointer', color: 'rgba(10, 150, 200, 1)' }}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Chat;
