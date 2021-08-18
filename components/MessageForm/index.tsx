const MessageForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="message"
        placeholder="Type something to chat..."
      />
      <button type="submit">{'>'}</button>
    </form>
  )
}

export default MessageForm
