import React, { useState } from 'react';
import styled from 'styled-components'
import { Form, Input, Button, Checkbox } from 'antd';
import LoginAuth from '../../../public/login_auth.svg'

type EmailModeProps = 'login' | 'register';

const OAuthLogin: React.FC = () => {

  // 登录方式
  const [mode, setMode] = useState<'email'>('email') // email ... ...
  // email 登录模式
  const [emailMode, setEmailMode] = useState<EmailModeProps>('login')

  const onFinishEmail = (values: any): void => {
    console.log('Success:', values);
  };

  const onFinishFailedEmail = (errorInfo: any): void => {
    console.log('Failed:', errorInfo);
  };

  // 设置 email 登录模式
  const setEmailModeFn = (val: EmailModeProps): void => {
    setEmailMode(val)
  }

  // Email form
  const EmailForm = () => {
    return (
      <StyledEmailForm
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinishEmail}
        onFinishFailed={onFinishFailedEmail}
      >
        <StyledFormItem
          label=""
          name="username"
          rules={[{ required: true, message: '请输入邮箱' }]}
        >
          <Input className="form-input" placeholder="请输入邮箱" />
        </StyledFormItem>

        <StyledFormItem
          label=""
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password className="form-input-password" placeholder="请输入密码" />
        </StyledFormItem>

        {
          emailMode === 'register' ?
          <StyledFormItem
            label=""
            name="code"
            rules={[{ required: true, message: '请输入验证码' }]}
          >
            <Input className="form-input" placeholder="请输入验证码" />
            <StyledFormBtnText className="code" type="button" onClick={ () => alert('发送验证码') }>获取验证码</StyledFormBtnText>
          </StyledFormItem> : null
        }

        <StyledFormItem className="space-between">
          <StyledFormFlexSpaceBetween>
            <StyledFormBtn htmlType="submit">
            { emailMode === 'login' ? '登录' : '注册' }
            </StyledFormBtn>
            {
              emailMode === 'login' ? <StyledFormBtnText type="button" onClick={() => setEmailModeFn('register') }>注册</StyledFormBtnText> : null
            }
            {
              emailMode === 'register' ? <StyledFormBtnText type="button" onClick={() => setEmailModeFn('login') }>登录</StyledFormBtnText> : null
            }
          </StyledFormFlexSpaceBetween>
        </StyledFormItem>
      </StyledEmailForm>
    )
  }

  return (
    <StyledWrapper>
      <StyledWrapperInner>
        <StyledWrapperMain>
          <StyledMethod>{ emailMode === 'login' ? '邮箱登录' : '邮箱注册' }</StyledMethod>
          <StyledWrapperContent>
            { EmailForm() }
          </StyledWrapperContent>
          <StyledFollowPublishAccount>关注「Andoromeda仙女座」公众号，即可登录。</StyledFollowPublishAccount>
        </StyledWrapperMain>
        <StyledDecoration src={ LoginAuth } alt="书桌" />
      </StyledWrapperInner>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fff;

  @keyframes invalid {
    0% {
      transform: translateX(0);
    }

    25% {
      transform: translateX(-6px);
    }

    50% {
      transform: translateX(0);
    }

    75% {
      transform: translateX(6px);
    }

    to {
      transform: translateX(0);
    }
  }
`
const StyledMethod = styled.p`
  font-size: 32px;
  font-weight: 600;
  padding: 0;
  margin: 0;
`
const StyledWrapperInner = styled.section`
  display: flex;
  align-items: flex-start;
  @media screen and (max-width: 900px) {
    text-align: center;
  }
`
const StyledWrapperMain = styled.section`
  width: 346px;
  overflow: hidden;
`
const StyledEmailForm = styled(Form)`
  width: 346px;
`

const StyledWrapperContent = styled.section`
  margin-top: 50px;
  display: flex;
  flex-wrap: nowrap;
  transition: transform 0.3s;
`

const StyledFollowPublishAccount = styled.section`
  margin-top: 80px;
  font-size: 12px;
  color: #9b9b9f;
`

const StyledDecoration = styled.img`
  margin-left: 200px;
  @media screen and (max-width: 1440px) {
    margin-left: 50px;
    width: 500px;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`

// ----------------- Email form -----------------
const StyledFormItem = styled(Form.Item)`
  width: 100%;
  .form-input[type="text"] {
    border: none;
    border-bottom: 1px solid #f1f1f1;
    transition: all .3s;
    border-radius: 0;
  }
  .form-input:focus,
  .form-input-password {
    box-shadow: none !important;
  }

  .form-input-password {
    border: none;
    border-bottom: 1px solid #f1f1f1;
    transition: all .3s;
    border-radius: 0;
  }
  .form-input-password:hover,
  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border-color: none !important;
  }

  .ant-form-item-control-input-content {
    position: relative;
  }
`
const StyledFormBtn = styled(Button)`
  border: none;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;

  padding: 0 30px;
  background-color: #fdab0e;
  font-weight: 600;
  color: #fff;
  transition: background-color .3s;
  &:disabled {
    cursor: not-allowed;
    background-color: #9b9b9f;
  }
  &:hover, &:focus, &:active {
    background-color: #f09e02;
    color: #fff;
  }
`
const StyledFormFlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
`
const StyledFormBtnText = styled.button`
  border: none;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;
  background-color: transparent;
  color: #9b9b9f;
  &.code {
    position: absolute;
    right: 0;
    bottom: 0px;
  }
`
// ----------------- Email form -----------------

export default OAuthLogin