import React from "react";
import {Typography,Spin} from "antd";
import styled from "@emotion/styled";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 类型守卫
const isError = (value: any): value is Error => value?.message;

// 公共的错误信息展示容器
export const ErrorBox = ({error}: { error: unknown }) => {
  if (isError(error)) {
    return <Typography.Text type={"danger"}>{error?.message}</Typography.Text>
  }
  return null
}

export const FullPageLoading = () => (
  <FullPage>
    <Spin size={"large"} />
  </FullPage>
);

export const FullPageErrorFallback = ({ error }: { error: Error | null }) => (
  <FullPage>
    <ErrorBox error={error} />
  </FullPage>
);
