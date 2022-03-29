import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  height:60px;
  color:white;
  background-color: teal;
  display:flex;
  justify-content: center;
  align-items:center;
`


const Announcement = () => {
  return (
    <Container>
      Super deal! Super deal! Super deal! 
    </Container>
  )
}

export default Announcement