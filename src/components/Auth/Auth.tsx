import React, {FC} from 'react';
import {Button, Form, Input} from "antd";
import {authenticate} from "../../BLL/store/todo-slice/todo-slice";
import {useRootDispatch} from "../../BLL/BLL_helpers/hooks";

interface IForm {
    email: string,
    password: string
}

const Auth: FC = (props) => {
    const [form] = Form.useForm();
    const dispatch = useRootDispatch();
    const formHandler = ({email, password}: IForm) => {
        dispatch(authenticate({email, password}));
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
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
};

export default Auth;