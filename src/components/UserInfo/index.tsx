import React from 'react'
import styled from 'styled-components'

const StyledUserInfo = styled.div`
  span {
    padding-right: 15px;
  }
`

const UserInfo = () => {
  return (
    <StyledUserInfo>
      <span>Matej Vykoukal</span>
      <span>Online</span>
    </StyledUserInfo>
  )
}

export default UserInfo
