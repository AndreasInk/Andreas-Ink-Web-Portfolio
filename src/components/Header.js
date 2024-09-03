import React from 'react';
import styled from 'styled-components';
import andreas from "./Andreas.png"
const Container = styled.div`
  text-align: left;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Name = styled.h1`
  text-align: left;   
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Bio = styled.p`
  text-align: left;
  font-size: 1rem;
  margin-bottom: 10px;
`;

const Work = styled.p`
  text-align: left;
  font-size: 0.875rem;
  color: gray;
`;

const Header = ({ name, bio, work, darkMode }) => (
  <Container darkMode={darkMode}>
    <ProfileImage src={andreas} alt="Profile" />
    <Name>{name}</Name>
    <Bio>{bio}</Bio>
    <Work>{work}</Work>
  </Container>
);

export default Header;