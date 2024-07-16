'use client';

import React, { useState } from 'react';
import { useRef, useCallback, useEffect } from 'react';
import './Chat.css';
import TextareaAutosize from 'react-textarea-autosize';
import IconButton from '@mui/material/IconButton';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { textFieldClasses } from '@mui/material';

export function Chat() {
  const containerWidth = 500;
  const [messages, setMessages] = useState([]);
  const [currentTypingId, setCurrentTypingId] = useState(null);

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: true },
      {
        text: `Your message is: "${message}"`,
        isUser: false,
        isTyping: true,
        id: Date.now(),
      },
    ]);
  };

  return (
    <div
      style={{
        width: containerWidth,
        minWidth: containerWidth,
        display: 'flex',
        gap: 20,
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          borderRadius: 4,
          boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)',
          color: '#1C1B1F',
          display: 'flex',
          flexDirection: 'column',
          borderStyle: 'solid',
          paddingLeft: 18,
          paddingRight: 18,
          paddingTop: 10,
          paddingBottom: 5,
          overflowY: 'auto',
          height: '75vh',
          position: 'fixed',
          width: containerWidth,
        }}
      >
        <h1>
          <b>질문하셈</b>
        </h1>
        <MessageList messages={messages} currentTypingId={currentTypingId} />
        {/* <MessageForm onSendMessage={handleSendMessage} /> */}
        <Sending onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export function Sending({ onSendMessage }) {
  const [text, setText] = useState('');
  const active = text != '';
  const handleSubmit = (event) => {
    event.preventDefault();
    onSendMessage(text);
    setText('');
  };

  const handleUserKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  return (
    <div
      style={{
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 1,
        flexShrink: 1,
        boxShadow: 'rgba(81, 93, 239, 0.5) 0px 0px 4px 0px',
        minHeight: 38,
        backgroundColor: 'transparent',
        borderRadius: 18,
        padding: 2,
        paddingLeft: 12,
        paddingRight: 5,
        overflow: 'hidden',
        fontSize: 14,
        marginBottom: 12,
      }}
    >
      <TextareaAutosize
        style={{
          maxWidth: '100%',
          width: '100%',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          caretColor: 'rgb(55, 53, 47)',
          flexGrow: 1,
          padding: '4px 0px',
          overflow: 'auto',
          color: 'rgb(55, 53, 47)',
          cursor: 'text',
          resize: 'none',
        }}
        className="focus:outline-none"
        placeholder="입력하세요"
        minRows={1}
        maxRows={5}
        onKeyPress={handleUserKeyPress}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <IconButton
        aria-label="arrow"
        size="small"
        disabled={!active}
        sx={{ color: 'rgb(81, 93, 239)' }}
        style={{ width: 35, height: 35 }}
        onClick={handleSubmit}
      >
        <ArrowCircleRightIcon
          fontSize="large"
          style={{
            width: 30,
            height: 30,
            transform: 'rotate(-90deg)',
          }}
        />
      </IconButton>
    </div>
  );
}

const MessageList = ({ messages, currentTypingId }) => {
  const scrollRef = useRef(null);
  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <div className="messages-list">
      {messages.map((message, index) => (
        <Message key={index} {...message} currentTypingId={currentTypingId} />
      ))}
      <div style={{ height: 0, width: 0 }} ref={scrollRef} />
    </div>
  );
};

const Message = ({ text, isUser, isTyping, id, currentTypingId }) => {
  return (
    <div className={isUser ? 'user-message' : 'ai-message'}>
      {isTyping && currentTypingId === id ? (
        <p>
          {' '}
          {text.split('\n').map((text, index) => (
            <>
              <span key={index}>{text}</span>
              <br />
            </>
          ))}
        </p>
      ) : (
        <p>
          {' '}
          {text.split('\n').map((text, index) => (
            <>
              <span key={index}>{text}</span>
              <br />
            </>
          ))}
        </p>
      )}
    </div>
  );
};
