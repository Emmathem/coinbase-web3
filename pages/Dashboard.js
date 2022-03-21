import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Main from "../components/main";
import Sidebar from "../components/Sidebar";
import MetaPageTitle from "../components/MetaPageTitle";


const Dashboard = ({ address }) => {
    return (
        <Wrapper>
            <MetaPageTitle title="Dashboard" />
            <Sidebar />
            <MainContainer>
                <Header walletAddress={address} />
                <Main />
            </MainContainer>
        </Wrapper>
    )
}

export default Dashboard;

const Wrapper = styled.div`
    width: 100vw;
    /* height: 100vh; */
    background-color: #0a0b0d;
    color: white;
    display: flex;
    overflow: hidden;
`;

const MainContainer = styled.div`
    flex: 1;
`