import styled from 'styled-components'

const App = styled.div`
  display: grid;
  min-height: 100vh;
  width: 100%;
  margin: 0;
`

const Sidebar = styled.div`
  background-color: blue;
  display: flex;
  width: 30%;
  height: 100%;
`

const StatusBar = styled.div`
  background-color: red;
`
const Chat = styled.div`
  background-color: grey;
`

const Home = () => {
  return (
    <>
      <h1>Chat App</h1>
      <App>
        <Sidebar>Sidebar</Sidebar>
        <main>
          <StatusBar>status</StatusBar>
          <Chat>chat</Chat>
        </main>
      </App>
    </>
  )
}

export default Home
