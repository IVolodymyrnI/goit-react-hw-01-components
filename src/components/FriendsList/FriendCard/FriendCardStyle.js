import styled from 'styled-components';

export const Status = styled.span`
  background-color: ${props => (props.className ? 'green' : 'red')};
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 10px;
  margin-left: 10px;
`;
export const Avatar = styled.img`
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 5px;
  margin-right: 10px;
`;
export const Name = styled.p`
  font-weight: 600;
`;
