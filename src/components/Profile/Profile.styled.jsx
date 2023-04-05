import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  position: relative;
  width: 300px;
  padding: 20px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 4px;
  color: ${props => props.theme.colors.primaryText};
`;

export const H2 = styled.h2`
  text-align: center;
  margin-top: 30px;
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const P = styled.p`
  color: ${props => props.theme.colors.secondaryText};
  text-align: center;
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;
`;

export const UL = styled.span`
  margin-top: 20px;
  background-color: ${props => props.theme.colors.secondaryBackGround};
  display: flex;
  list-style: none;
  width: 100%;
  height: 70px;
`;

export const LI = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;  
  border: 1px solid ${props => props.theme.colors.primaryBackGround};
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.secondaryText};
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
`;

export const Quantity = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
`;
