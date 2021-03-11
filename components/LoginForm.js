import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

const LoginRegisterButton = styled.div`
    margin-top: 10px;
`;

const FormStyle = styled(Form)`
    padding: 10px;
`;


import useInput from '../hooks/useInput';
const LoginForm = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    //onSubmitForm에서는 따로 e.preventDefault 안해줘도 됨.
    const onSubmitForm = useCallback(() => { //useCallback함수는 함수를 캐시에 저장한다. 따라서 리랜더링해도 다시 호출 안함.
        console.log({ id, password });
    }, [id, password]);
    return (
        <FormStyle onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password" value={password} onChange={onChangePassword} type="password" required />
            </div>
            <LoginRegisterButton>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="signup"><a><Button>회원가입</Button></a></Link>
            </LoginRegisterButton>
        </FormStyle>
    )
};

export default LoginForm;