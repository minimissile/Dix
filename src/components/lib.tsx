import React from "react";
import {Typography} from "antd";

// 类型守卫
const isError = (value: any): value is Error => value?.message;

// 公共的错误信息展示容器
export const ErrorBox = ({error}: { error: unknown }) => {
  if (isError(error)) {
    return <Typography.Text type={"danger"}>{error?.message}</Typography.Text>
  }
  return null
}
