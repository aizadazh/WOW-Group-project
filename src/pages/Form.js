import React, { Component } from "react";
import { Container } from "styled-bootstrap-grid";
import {Layout} from "../components";
// import FormContent from "../components/layout/FormContent";
import reactDOM from "react-dom";

// const LoginBox = styled.div`
//   width: 150px;
//   height: 400px;
//   border-radius: 1px solid ${colors.black_1};
//   background: ${colors.grey_1};
//   display: flex;
//   align-item: center;
//   justify-content: center;
// `;

// const LoginContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   background: ${colors.white};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;

// const BoxController = styled.div`
//   visibility: visible;
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   max-width: 24em;
//   min-width: 21em;
//   height: 35px;
//   -webkit-box-shadow: 0px 0px 20px 0px ${colors.black_1};
//   box-shadow: 0px 0px 20px 0px ${colors.black_1};
//   margin-bottom: 30px;
//   align-items: center;
//   transitiion-visibility: 0.5s easy-out;
// `;

// const Controller = styled.div`
// flex: 1;
// text-align: center;
// height: 100%;
// line-height: 2;
// cursor: pointer;
// `;
class Form extends Component {  

  constructor(props) {
    super(props);
    this.state = {};
  }

    render(){
      return (
        <Layout>
            <Container>
              {/* <LoginBox>
                <LoginContainer>
                  <BoxController>
                    <Controller>
                      Войти
                    </Controller>
                    <Controller>
                      Регистрация
                    </Controller>
                  </BoxController>
                </LoginContainer>
              </LoginBox> */}
        <h2>Войти</h2>
        
        </Container>
                </Layout>
       );
    }
  }
	export default Form;

  // ReactDOM.render(<App />, document.getElementById('root'));
