import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  max-width: 100%;
  width: 300px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  color: ${props => props.theme.colors.white};
  text-shadow: 0.5px 0.5px 0.5px #4b1414;
  font-size: ${props => props.theme.fontSizes.s};
`;

export const Btn = styled.button`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  border: none;
  outline: none;
  border-radius: 8px;

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.background};
  box-shadow: ${p => p.theme.shadows.boxShadow};
  transition: all 0.2s ease-in-out;

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
      text-shadow: 1px 1px 1px #fff;

      box-shadow: inset 1px 1px 1px #4b1414, inset -1px -1px 1px #fff;

      svg {
        fill: ${p => p.theme.colors.text};
        stroke: ${p => p.theme.colors.text};
      }
    }
  }
`;
