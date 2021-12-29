import React, { useState } from "react";
import styled from "styled-components";
import ContactListComponent from "./components/ContactListComponent";
import ConversationComponent from "./components/ConversationComponent";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: row;
  align-items: center;
  background: #f8f9fb;
`;

const ChatPlaceholder = styled.img`
  width: 260px;
  height: 260px;
  object-fit: contain;
`;
const Placeholder = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap:10px;
  color: rgba(0, 0, 0, 0.45);
  span {
    font-size: 32px;
    color: #525252;
  }
`;
function App() {
  const [selectedChat, setChat] = useState();
  return (
    <Container>
      <ContactListComponent setChat={setChat} />
      {selectedChat ? (
        <ConversationComponent selectedChat={selectedChat} />
      ) : (
        <Placeholder>
          <ChatPlaceholder src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"/>
          <span>Keep your phone connected</span>
          WhatsApp connects to your phone to sync messages.
        </Placeholder>
      )}
    </Container>
  );
}

export default App;
