import React from 'react';
import styled from 'styled-components';
import { Button } from '../styles/GlobalStyles'

const Header = ({ walletAddress }) => {
    return (
        <Wrapper>
             <Title>Assets</Title>
            <ButtonContainer>
                <WalletLink>
                    <WalletLinkTitle>Wallet Connected</WalletLinkTitle>
                    <WalletAddress>
                        {walletAddress.slice(0,7)}...{walletAddress.slice(35)}
                    </WalletAddress>
                </WalletLink>
                <Button style={{ backgroundColor: '#3773f5', color: '#000', marginRight: '1rem' }}>Buy / Sell</Button>
                <Button color='#fff'>Send / Receive</Button>
            </ButtonContainer>
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.div`
    width: calc(100% - 3rem);
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #282b2f;
    display: flex;
    align-items: center;
`;

const Title = styled.div`
    font-size: 2rem;
    font-weight: 800;
    flex: 1;
`;

const ButtonContainer = styled.div`
    display: flex;
    /* align-items: center; */
`

const WalletLink = styled.div`
    font-size: 0.8rem;
    border: 1px solid #282b2f;
    border-radius: 50rem;
    font-size: 1.2rem;
    margin-right: 1rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const WalletLinkTitle = styled.div`
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
    color: #27ad75;
    font-weight: 600;
`

const WalletAddress = styled.div`
    font-size: 0.8rem;
`;