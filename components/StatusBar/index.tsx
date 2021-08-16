import React from 'react'
import styled from 'styled-components'
import UserInfo from '../UserInfo'

const StatusBar: React.FC = () => {
  const StyledStatusBar = styled.div`
    display: flex;
    align-items: center;
    padding-inline: 15px;
    background-color: #393958;
  `

  return (
    <StyledStatusBar>
      <UserInfo />
    </StyledStatusBar>
  )
}

export default StatusBar
