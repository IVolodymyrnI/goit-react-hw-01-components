import styled from 'styled-components';

export const Profile = styled.div`
  overflow: auto;
  margin: 0 auto;
  margin-bottom: 100px;
  background-color: white;
  width: 270px;
  border-radius: 7px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const Description = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
`;
export const Img = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 32px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;
export const Name = styled.p`
  font-size: 22px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const Tag = styled.p`
  text-align: center;
  margin-bottom: 12px;
  color: #808080;
`;
export const Location = styled.p`
  text-align: center;
  color: #808080;
`;
export const Stats = styled.ul`
  display: flex;
  list-style-type: none;
  text-align: center;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80px;
  width: 33%;
  background-color: rgba(102, 153, 204, 0.15);
  text-align: center;
  border: 1px solid #d8d8d8;
`;
export const Label = styled.span`
  font-size: 12px;
  color: #808080;
`;
export const Quantity = styled.span`
  font-size: 12px;
  font-weight: 700;
`;
