import React, { Component } from "react";
import styled from 'styled-components';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Container } from "styled-bootstrap-grid";
import {Layout} from "../components";

let RegBackground = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    box-sizing: border-box;
`;
let RegisterForm = styled.div`
    text-align: center;
    width: 350px;
    box-sizing: border-box;
    padding: 40px;
    background: lightgrey;
 ${props => !!props.err && `
    border: 1px solid red;
            ` 
        }
    h2 {
        margin: 0 0 20px;
        padding: 0;
        color: #fff;
        font-size: 30px;
        text-transform: uppercase;
    }
    .input-group {
        position: relative;
        width: 100%;
        margin-bottom: 25px;
        input {
            height: 40px;
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
            font-size: 18px;
            outline: none;
            border: 1px solid #000;
            :focus ~ span, :valid ~ span {
                top: -12px;
                left: 12px;
                font-size: 12px;
                padding: 2px 4px;
                border: 1px solid #000;
                background: #ff7676;
            }
        }
        span {
            position: absolute;
            top: 10px;
            left: 20px;
            padding: 0;
            transition: 0.5s;
            pointer-events: none;
            background: #fff;
            text-transform: uppercase;
        }
        .submit {
            background: #FFB0B0;
            border: none;
            box-shadow: none;
            text-transform: uppercase;
            cursor: pointer;
            font-weight: 600;
            :hover {
                background: #ff7676;
            }
        }
    }
    .forgottenPassword {
            display: block;
            text-align: center;
            color: #fff;
            a {
                text-decoration: none;
                font-weight: 700;
                color: #fff;
            }
        }
`;
class Register extends Component {

    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone: '',
        err: false,
        errMessage: ''
    };

    constructor(props) {
        super(props);
        this.notificationDOMRef = React.createRef();
    }

  
    addNotification = () => {
        this.notificationDOMRef.current.addNotification({
            title: " Error ",
            message: this.state.errMessage,
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: { duration: 2000 },
            dismissable: { click: true }
        });
    };
   
    bind = (field, e) => {
        this.setState({
            [field]: e.target.value
        });
    };

   
    
    render() {
        return (
            <Layout>
                <Container>
                    <RegBackground>
                        <ReactNotification ref={this.notificationDOMRef} />
                        <RegisterForm err={this.state.err}>
                            <h2>Регистрация</h2>
                            <form onSubmit={(e) => {this.register(e)}}>
                                <div className="input-group">
                                    <input type="text" onChange={(e) => {this.bind('first_name', e)}} value={this.state.first_name} required/>
                                    <span>Имя</span>
                                </div>
                                <div className="input-group">
                                    <input type="text"  onChange={(e) => {this.bind('last_name', e)}} value={this.state.last_name} required/>
                                    <span>Фамилия</span>
                                </div>
                                <div className="input-group">
                                    <input type="email"  onChange={(e) => {this.bind('email', e)}} value={this.state.email} required/>
                                    <span>E-mail</span>
                                </div>
                                <div className="input-group">
                                    <input type="password"  onChange={(e) => {this.bind('password', e)}} value={this.state.password} required/>
                                    <span>Пароль</span>
                                </div>
                                <div className="input-group">
                                    <input type="text"  onChange={(e) => {this.bind('phone', e)}} value={this.state.phone} required/>
                                    <span>Номер телефона</span>
                                </div>
                                <div className="input-group">
                                    <input className="submit" type="submit" value="Зарегистрировать"/>
                                </div>
                            </form>
                        </RegisterForm>
                    </RegBackground>
                </Container>
            </Layout>
        );
    }
}
export default Register;