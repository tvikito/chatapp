import styled from 'styled-components'

const SideBar = () => {
  const StyledSidebar = styled.div`
    background-color: #3f3f5f;
    display: flex;
    grid-column: 1/2;
    grid-row: 1/4;
  `

  return <StyledSidebar>Sidebar</StyledSidebar>
}

export default SideBar
