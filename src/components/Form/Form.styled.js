import styled from 'styled-components';

export const FormSection = styled.section`
  background-color: ${props => props.theme.colors.lightBtnBackground};
`;

export const FormWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    display: flex;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
    max-width: ${props => props.theme.breakpoints.desktop + 'px'};
  }

  .formPicWrapper {
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
      width: 670px;
      height: 354px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
      width: 670px;
      height: 454px;
    }
  }

  .formBtn {
    font-size: 16px;
    text-align: center;
    justify-content: center;
    width: 156px;
    margin-top: 8px;
    color: ${props => props.theme.colors.lightTextColor};
    background-color: ${props => props.theme.colors.mainAccentColor};
    opacity: 0.9;

    &:hover,
    &:focus {
      opacity: 1;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
      margin-top: 15px;
    }
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 51px;
  padding-bottom: 25px;
  max-width: ${props => props.theme.breakpoints.tablet - 1 + 'px'};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    padding: 32px;
    width: 690px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
    padding-left: 20px;
    padding-right: 28px;
    padding-top: 56px;
    padding-bottom: 77px;
    width: 690px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: ${props => props.theme.fonts.weights.regular};
  line-height: 1.5;
  margin-bottom: 69px;
  color: ${props => props.theme.colors.darkTextColor};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    font-size: 40px;
    line-height: 1.4;
    margin-bottom: 24px;
  }
`;

export const Label = styled.label`
  position: relative;
`;

export const Input = styled.input`
  font-size: 16px;
  line-height: 1.4;
  width: 100%;
  padding: 15px 8px;
  margin-bottom: 16px;
  color: ${props => props.theme.colors.inputPlaceholder};
  background-color: ${props => props.theme.colors.lightTextColor};
  border: 1px solid ${props => props.theme.colors.inputColor};
  border-radius: 5px;
  outline: none;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    font-size: 18px;
    line-height: 1.4;
    margin-bottom: 16px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
    margin-bottom: 25px;
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 8px;
  bottom: -6px;
  color: ${props => props.theme.colors.error};

  .formIcon {
    margin-right: 2px;
  }
`;

export const ErrorText = styled.p``;
