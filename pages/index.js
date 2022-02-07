import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useWeb3 } from '@3rdweb/hooks'
import styled from 'styled-components'
import Dashboard from './Dashboard'
import { Button } from '../styles/GlobalStyles'

export default function Home() {
  const { address, connectWallet } = useWeb3();
  return (
    <Wrapper>
      {address ? (<Dashboard address={address} />) : (

        <WalletConnect>
          <Button onClick={() => connectWallet('injected')}>Connect Wallet</Button>
          <Details>You need Chrome to be <br /> able to run this app</Details>
        </WalletConnect>

      )}

    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: #0a0b0d;
  color: white;
  display: grid;
  place-items: center;
`

const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Details = styled.div`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
  color: #282b2f;
`;