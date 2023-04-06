import styled from '@emotion/styled';

const generateRandomColor = () => {
  const colors = ['#F94144', '#F3722C', '#F8961E', '#F9C74F', '#90BE6D', '#43AA8B', '#4D908E', '#577590', '#277DA1', '#FF9B54'];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const Li = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 100%;
  background-color: ${generateRandomColor};
  color: ${props => props.theme.colors.white};
`;

export const Label = styled.span`
  font-size: 10px;
  line-height: 16px;
`;

export const Perc = styled.span`
  font-size: 14px;
  line-height: 20px;
`;