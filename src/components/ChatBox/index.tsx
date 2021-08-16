import React from 'react'
import styled from 'styled-components'
import Chat from '../Chat'
import MessageForm from '../MessageForm'

const StyledChatBox = styled.div`
  background-color: grey;
`

const ChatBox: React.FC = () => {
  return (
    <StyledChatBox>
      <Chat />
      <MessageForm />
    </StyledChatBox>
  )
}

export default ChatBox
