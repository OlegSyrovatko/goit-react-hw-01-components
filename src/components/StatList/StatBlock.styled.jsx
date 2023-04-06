import styled from '@emotion/styled';

export const StatBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 300px;
  padding: 20px;
  border: solid 1px black;
  background-color: ${props => props.theme.colors.white};
  border-radius: 4px;
  color: ${props => props.theme.colors.primaryText};
`;


export const StatGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
