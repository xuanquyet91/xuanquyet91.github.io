import React from 'react'
import  styled from 'styled-components'
import {Badge} from '@material-ui/core';
import {Search, ShoppingCartOutlined} from '@material-ui/icons'



const Container = styled.div`
    height:60px;
`  
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
` 
const Left = styled.div`
  flex:1;
  display:Flex;
  align-items:center;
  // justify-content: space-between;
`
const Language = styled.span`
  font-size:14;
  cursor:pointer;
`
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items:center;
  margin-left:35px;
  padding:5px;
`
const Input=styled.div`
  border:none;
  width: 100px;
`
const Center = styled.div`
Flex:1;
text-align:center;
`
const Logo=styled.div`
  font-weight:bold;
`
const Right = styled.div`
  Flex:1;
  display:flex;
  align-items:center;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size: 15px;
  cursor:pointer;
  margin-left: 25px;
  opacity: 0.5;
`


const Navbar = () => {

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <Search style={{color:'gray', fontSize:'15px'}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            PRODUCT.
          </Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="secondary">
              <ShoppingCartOutlined  />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar