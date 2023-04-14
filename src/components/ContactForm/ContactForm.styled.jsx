import styled from 'styled-components';
import { Form as FormikForm, Field, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: ${props => props.theme.space[4]}px;
  padding: ${props => props.theme.space[3]}px;

  max-width: 100%;
  width: 500px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: 100%;
  width: 500px;

  color: ${props => props.theme.colors.white};
  text-shadow: ${props => props.theme.shadows.textShadow};
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
`;

export const FieldFormik = styled(Field)`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  max-width: 100%;

  border: 0;
  outline: 0;
  border-radius: 8px;
  color: ${props => props.theme.colors.white};
  text-shadow: 0 0.4px 0.4px #000;
  background-color: rgba(121, 68, 40, 0.406);
  backdrop-filter: blur(10.5px);
  box-shadow: inset 1px 1px 1px #b0706f, inset -1px -1px 1px #fff;

  font-size: ${props => props.theme.fontSizes.s};
  letter-spacing: 1.4px;
`;

export const ErrorMessage = styled(FormikError)`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  max-width: 500px;
  color: #9e0202;
  text-shadow: 0 0.4px 0.4px #000;
  background-color: rgba(121, 68, 40, 0.406);
  backdrop-filter: blur(10.5px);
  border-radius: 8px;
`;

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[2]}px;

  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  max-width: 100%;

  border: ${p => p.theme.borders.none};
  outline: none;
  border-radius: 8px;

  box-shadow: ${p => p.theme.shadows.boxShadow};
  transition: all 0.2s ease-in-out;

  background-color: ${p => p.theme.colors.background};

  color: ${p => p.theme.colors.white};
  text-shadow: ${props => props.theme.shadows.textShadow};

  cursor: pointer;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};

    color: ${p => p.theme.colors.text};
    text-shadow: 1px 1px 1px #fff;

    box-shadow: -2px -2px 2px #fff, 2px 2px 2px #4b1414;

    svg {
      fill: ${p => p.theme.colors.text};
      stroke: ${p => p.theme.colors.text};
    }

    :active {
      color: ${p => p.theme.colors.text};
      text-shadow: 1px 1px 1px 1px #fff;

      box-shadow: inset 1px 1px 1px #4b1414, inset -1px -1px 1px #fff;

      svg {
        fill: ${p => p.theme.colors.text};
        stroke: ${p => p.theme.colors.text};
      }
    }
  }
`;
