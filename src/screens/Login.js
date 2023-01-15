import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import styled from 'styled-components';
import Button from '../components/Button/button';
import Input from '../components/Input/Input';
import {defaultTheme} from '../utils';

const Login = () => {
  return (
    <Container
      resizeMode="cover"
      source={require('../assets/images/background.png')}>
      <SectionWrapper>
        <LogoImage source={require('../assets/images/logo.png')} />
        <Title>Login into your Account</Title>
        <View
          style={{
            marginTop: 20,
          }}>
          {/* <ErrorText>Something went wrong. Please try again.</ErrorText> */}
          <Input label="Email" />
          <Input label="Password" type="password" />
        </View>
        <View>
          <Button text="Login" isDisabled={true} />
        </View>
      </SectionWrapper>
    </Container>
  );
};

const styles = StyleSheet.create({});

const Container = styled.ImageBackground`
  padding: ${props => props.theme.spacing.md};
  flex: 1;
  justify-content: center;
`;

const SectionWrapper = styled.View``;
const LogoImage = styled.Image`
  width: 65px;
  height: 65px;
`;
const Title = styled.Text`
  font-size: ${props => props.theme.typeScale.heading}px;
  margin-top: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.blackColor};
  font-weight: bold;
  font-family: ${props => props.theme.fontFamily.bold};
  text-align: left;
`;

const ErrorText = styled.Text`
  color: ${props => props.theme.errorColor};
  font-size: ${props => props.theme.typeScale.caption}px;
  font-family: ${props => props.theme.fontFamily.regular};
`;
export default Login;
