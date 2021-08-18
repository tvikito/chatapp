const MessageForm = () => {
  return (
    <div onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="message"
        placeholder="Type something to chat..."
      />
      <button type="submit">{'>'}</button>
    </div>
  )
}

export default MessageForm
