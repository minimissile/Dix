import React, {useState} from "react";
import styled from "@emotion/styled";
import logo from "assets/logo.svg";
import {LoginScreen} from './login'
import {RegisterScreen} from "./register";
import {Card, Button} from "antd";
import {useTranslation} from "react-i18next";
import {ErrorBox} from "../components/lib";
import {useDocumentTitle} from "../hooks/useDocumentTitle";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const {t, i18n} = useTranslation()

  useDocumentTitle('请登录注册以继续')

  const hanleChangeLang = () => {
    let lang = localStorage.lang || 'en'
    i18n.changeLanguage(lang === 'en' ? 'zh-CN' : 'en').then(() => localStorage.setItem('lang', lang === 'en' ? 'zh-CN' : 'en'))
  }

  return (
    <Container>
      <Header>
        <span onClick={hanleChangeLang}>切换语言</span>
      </Header>
      <ShadowCard>
        <Title>{isRegister ? "请注册" : "请登录"}</Title>
        <ErrorBox error={error}></ErrorBox>
        {isRegister ? <RegisterScreen onError={setError}/> : <LoginScreen/>}
        <Button type={"link"} onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? t('goLogin') : t('goRegister')}
        </Button>
      </ShadowCard>
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

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

export const LongButton = styled(Button)`
  width: 100%;
`;
