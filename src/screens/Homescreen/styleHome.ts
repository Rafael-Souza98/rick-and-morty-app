import styled from 'styled-components/native';

export const ContentCard = styled.TouchableOpacity`
flex-direction: row;
align-items: center;
margin: auto;
width: 80%;

`;

export const ImageChar = styled.Image`
width: 120px;
height: 120px;
border-radius: 80px;
border:1px;

`;

export const ContentScreen = styled.SafeAreaView`
max-width: 450px;
background-color: ${props => props.theme.COLORS.PRIMARY};
padding-top: 5%;


`;

export const TextCard = styled.Text`
flex-wrap: wrap;
align-self: center;
margin-left: 5%;
justify-content: space-around;
padding-top: 2%;
color: ${props=>props.theme.COLORS.SECONDARY};

`;




