import styled from "@emotion/styled";
import logo from "assets/logo.svg";
import {LoginScreen} from './login'
import {RegisterScreen} from "./register";

export const UnauthenticatedApp = () => {
  return (
    <Container>
      <Header/>
      <LoginScreen/>
      <RegisterScreen/>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;
