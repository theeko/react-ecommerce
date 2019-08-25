import React from "react";
import styled from "styled-components";

import Directory from "../../components/directory/Directory";

interface IProps {
  className?: {};
}

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const Home = ({ className }: IProps): JSX.Element => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Home;
