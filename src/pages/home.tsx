import React from 'react'
import ChatBox from '../components/ChatContainer'
import SideBar from '../components/SideBar'
import StatusBar from '../components/StatusBar'

const Home: React.FC = () => {
  return (
    <>
      <div>
        <SideBar />
        <StatusBar />
        <ChatBox />
      </div>
    </>
  )
}

export default Home
