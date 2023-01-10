import React, {FC} from 'react';
import {Button, Form, Input} from "antd";
import classes from './authForm.module.css';

interface IForm {
    email: string,
    password: string
}

interface IAuthForm {
    title: string,
    formHandler: (email: string, password: string) => void,
}

const AuthForm: FC<IAuthForm> = ({title, formHandler}) => {

    const [form] = Form.useForm();
    const formSubmitHandler = ({email, password}: IForm) => {
        formHandler(email, password);
        form.resetFields();
    }

    return (
        <div className={classes.form_wrapper}>
            <Form
                form={form}
                scrollToFirstError={true}
                onFinish={formSubmitHandler}
                className={classes.form_body}
            >

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
        </div>
    )
};

export default AuthForm;