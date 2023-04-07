import styled from '@emotion/styled';

export const FriendBlock = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 300px;
  padding: 20px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 4px;
  color: ${props => props.theme.colors.primaryText};
`;

