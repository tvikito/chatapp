import React from 'react'
import styled from 'styled-components'
import ChatBox from '../components/ChatBox'
import SideBar from '../components/SideBar'
import StatusBar from '../components/StatusBar'

const App = styled.div`
  display: grid;
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  margin: 0;
  grid-template-columns: 3fr 9fr;
  grid-template-rows: 1fr 11fr;
`

const Home: React.FC = () => {
  return (
    <>
      <App>
        <SideBar />
        <StatusBar />
        <ChatBox />
      </App>
    </>
  )
}

export default Home
