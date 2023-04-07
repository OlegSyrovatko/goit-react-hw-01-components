import styled from '@emotion/styled';

export const Li = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.3);
  &:not(:first-of-type) {
    margin-top: 15px;
  }
`;

export const Onlining = styled.span`
  display: inline-block;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: ${props => props.isOnline ? props.theme.colors.green : props.theme.colors.red};
`;

export const IMG = styled.img`
  border-radius: 10%;
`;

export const Perc = styled.span`
  font-size: 18px;
  line-height: 24px;
`;

