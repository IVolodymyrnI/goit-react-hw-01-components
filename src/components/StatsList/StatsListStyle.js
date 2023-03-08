import styled from 'styled-components';

export const StatsListStyle = styled.ul`
  display: flex;
  list-style-type: none;
`;
export const StatsListItem = styled.li`
  display: flex;
  height: 70px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
  background-color: ${props => {
    switch (props.className) {
      case 'pdf':
        return '#A020F0';
      case 'docx':
        return '#89CFF0';
      case 'mp3':
        return '#FF0000';
      case 'psd':
        return '#24DBC9';
      default:
        return 'white';
    }
  }};
`;
export const Label = styled.span``;
export const Percentage = styled.span``;
