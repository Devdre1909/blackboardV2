import React from 'react';
import styled from 'styled-components/native';

const Button = ({text, isDisabled, ...props}) => {
  return (
    <ButtonContainer disabled={isDisabled} {...props}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.Pressable`
  background-color: ${({theme, disabled}) =>
    !disabled ? theme.accentColor : theme.disabledColor};
  padding: ${({theme}) => theme.spacing.xs};
  margin-top: ${({theme}) => theme.spacing.lg};
  padding: ${({theme}) => theme.spacing.md};
  border-radius: ${({theme}) => theme.borderRadius};
`;

const ButtonText = styled.Text`
  color: ${({theme}) => theme.whiteColor};
  text-align: center;
  font-weight: bold;
  font-size: ${({theme}) => theme.typeScale.body}px;
  font-family: ${({theme}) => theme.fontFamily};
`;

export default Button;
