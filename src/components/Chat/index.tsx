import styled from 'styled-components'

const Chat = () => {
  const messages = ['ahoj', 'cas uy jsem']

  const StyledChat = styled.div`
    height: 92%;
    background-color: #dcddf5;
  `

  return (
    <StyledChat>
      {messages.map((message) => (
        <p key={message}>{message}</p>
      ))}
    </StyledChat>
  )
}

export default Chat
