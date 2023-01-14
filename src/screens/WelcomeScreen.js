import React from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import Button from '../components/Button/button';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

const WelcomeScreen = () => {
  const navigator = useNavigation();

  return (
    <Container>
      <LogoImage source={require('../assets/images/logo.png')} />
      <ContentWrapper>
        <Title>Welcome!</Title>
        <SubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </SubTitle>
        <Button
          text="Get Started"
          onPress={() => navigator.navigate('Login')}
        />
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.whiteColor};
  justify-content: space-between;
  align-items: center;
  padding: 0 2px;
`;

const ContentWrapper = styled.View`
  margin-bottom: ${DeviceHeight / 16}px;
`;

const LogoImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  margin-top: ${DeviceHeight / 4}px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: ${({theme}) => theme.typeScale.title}px;
  color: ${({theme}) => theme.blackColor};
  margin-bottom: ${({theme}) => theme.spacing.xs};
`;

const SubTitle = styled.Text`
  font-size: ${({theme}) => theme.typeScale.body};
`;

export default WelcomeScreen;
