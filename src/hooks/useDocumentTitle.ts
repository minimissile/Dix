import {useEffect, useRef} from "react";

/**
 * 设置浏览器标题
 * @param title {string} 要设置的标题
 * @param keepOnUnmount {boolean} 页面回退时是否缓存当前标题
 */
export const  useDocumentTitle = (title: string, keepOnUnmount = true) => {
  const oldTitle = useRef(document.title).current

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        document.title = oldTitle
      }
    }
  }, [keepOnUnmount, oldTitle])
}

/**
 * 知识点:
 * useRef的作用
 *    useRef返回一个可变的ref对象，其.current属性被初始化为传递的参数(initialValue) 返回的对象将在组件的整个生命周期内持续存在。
 * useEffect的作用
 *
 * */
