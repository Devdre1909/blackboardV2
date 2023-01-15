import React from 'react';
import {KeyboardAvoidingView, TextInput, View} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import {defaultTheme} from '../../utils';

const Input = ({type, label, placeholder, isError, errorMessage}) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <KeyboardAvoidingView
      style={{
        marginTop: 20,
      }}>
      <InputLabel>{label}</InputLabel>
      <InputWrapper isError={isError}>
        <InputField
          placeholder={placeholder || label}
          secureTextEntry={type === 'password' && !isPasswordVisible}
        />
        {type === 'password' && (
          <PasswordIconView
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={22}
              color={defaultTheme.disabledColor}
            />
          </PasswordIconView>
        )}
      </InputWrapper>
      {isError && errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </KeyboardAvoidingView>
  );
};

const InputWrapper = styled.View`
  border: 1px solid
    ${props =>
      props.isError ? props.theme.errorColor : props.theme.disabledColor};
  border-radius: ${props => props.theme.borderRadius};
  /* padding: ${props => props.theme.spacing.md} ${props =>
    props.theme.spacing.lg}; */
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.whiteColor};
`;

const InputLabel = styled.Text`
  font-size: ${props => props.theme.typeScale.caption}px;
  color: ${props => props.theme.blackColor};
  font-family: ${props => props.theme.fontFamily.regular};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const InputField = styled.TextInput`
  flex: 1;
  padding: ${props => props.theme.spacing.md};
  font-family: ${props => props.theme.fontFamily.regular};
  font-size: ${props => props.theme.typeScale.body}px;
  color: ${props => props.theme.blackColor};
`;

const PasswordIconView = styled.Pressable`
  padding: 0 ${props => props.theme.spacing.md};
`;

const ErrorText = styled.Text`
  color: ${props => props.theme.errorColor};
  font-size: ${props => props.theme.typeScale.caption}px;
  font-family: ${props => props.theme.fontFamily.regular};
`;

export default Input;
