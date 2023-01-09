import React, {FC} from 'react';
import {Button, Form, Input} from "antd";
import {useRootDispatch} from "../../BLL/BLL_helpers/hooks";

interface IForm {
    email: string,
    password: string
}

interface IAuthForm {
    title: string,
    action: any,
}

const AuthForm: FC<IAuthForm> = ({title, action}) => {
    const dispatch = useRootDispatch();
    const [form] = Form.useForm();
    const formHandler = ({email, password}: IForm) => {
        dispatch(action({email, password, returnSecureToken: true}));
        form.resetFields();
    }


    return (
        <>
            <Form
                form={form}
                scrollToFirstError={true}
                onFinish={formHandler}>

                <Form.Item
                    name='email'
                    label='E-mail'
                    rules={[
                        {type: 'email', message: ''},
                        {required: true, message: 'Enter your e-mail'}
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name='password'
                    label='Password'
                    rules={[
                        {required: true, message: 'Enter your password'}
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        {title}
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
};

export default AuthForm;