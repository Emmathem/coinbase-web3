import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Main from "../components/main";

const Dashboard = ({ address }) => {
    return (
        <Wrapper>
            <MainContainer>
                <Header />
                <Main />
            </MainContainer>
        </Wrapper>
    )
}

export default Dashboard;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #0a0b0d;
    color: white;
    display: flex;
`;

const MainContainer = styled.div`
    flex: 1;
`