import { Container, Section,Img } from './../../Container.js'
import { LoginWrraper, LoginContainer, LoginContainerItems, LoginInputs, LoginText } from './login.js'

import email from './../../assets/img/input/email.png'
import password from './../../assets/img/input/protection.png'


const Login = ()=>{
    return(
      <Section>
        <Container>
          <LoginWrraper>
            <LoginContainer>
                <LoginContainerItems container={'loginSignup'}>
                    <LoginText text={'login'}>Login</LoginText>
                    <LoginText text={'signup'}>Signup</LoginText>
                </LoginContainerItems>
                <LoginContainerItems container={'containerInput'}>
                    <LoginInputs input={'email'} type='email' placeholder='Email' />
                    <LoginInputs input={'password'} type='password' placeholder='Password'/>
                    {/* <LoginInputs input={'history'} type='radio'/> */}
                </LoginContainerItems>
                <LoginInputs input={'btn'} type='submit' value='LOGIN'/>
                <LoginText text={'forgote'}>Forget Password</LoginText>
            </LoginContainer>   
          </LoginWrraper>
        </Container>
      </Section>
    )
}

export {Login}