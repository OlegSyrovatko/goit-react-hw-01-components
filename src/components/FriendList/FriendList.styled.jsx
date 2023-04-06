import styled from '@emotion/styled';

export const FriendBlock = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  width: 300px;
  padding: 20px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 4px;
  color: ${props => props.theme.colors.primaryText};
`;

