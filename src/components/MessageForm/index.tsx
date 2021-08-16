import styled from 'styled-components'

const MessageForm = () => {
  const StyledForm = styled.form`
    position: relative;
    height: 8%;
    input {
      width: 100%;
      padding-left: 20px;
    }
    button {
      color: #278ee2;
      position: absolute;
      right: 0px;
      padding-inline: 20px;
      background-color: transparent;
      font-size: 24px;
      cursor: pointer;
    }

    & > * {
      border: none;
      height: 100%;
    }
  `
  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="message"
        placeholder="Type something to chat..."
      />
      <button type="submit">{'>'}</button>
    </StyledForm>
  )
}

export default MessageForm
