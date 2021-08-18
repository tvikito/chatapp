const Chat = () => {
  const messages = ['ahoj', 'cas uy jsem']

  return (
    <div>
      {messages.map((message) => (
        <p key={message}>{message}</p>
      ))}
    </div>
  )
}

export default Chat
