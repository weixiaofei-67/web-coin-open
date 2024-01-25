import { createWeb3Modal, walletConnectProvider, EIP6963Connector } from '@web3modal/wagmi1'

import { configureChains, createConfig } from '@wagmi/core'
import { mainnet } from 'viem/chains'
import { publicProvider } from '@wagmi/core/providers/public'
import { InjectedConnector } from '@wagmi/core'
import { CoinbaseWalletConnector } from '@wagmi/core/connectors/coinbaseWallet'
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'
import { watchAccount, disconnect, getAccount } from '@wagmi/core'

// 1. Define constants
const projectId = 'd35717e7bee289fc7fdee5cd82d8b4c5'

// 2. Configure wagmi client
const { chains, publicClient } = configureChains(
  [mainnet],
  [walletConnectProvider({ projectId }), publicProvider()]
)

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({ chains, options: { projectId, showQrModal: false, metadata } }),
    new EIP6963Connector({ chains }),
    new InjectedConnector({ chains, options: { shimDisconnect: true } }),
    new CoinbaseWalletConnector({ chains, options: { appName: metadata.name } })
  ],
  publicClient
})

// 3. Create modal
const modal = createWeb3Modal({ wagmiConfig, projectId, chains })

function connect() {
    if (getAccount().isConnected) {
      disconnect()
    } else {
      modal.open()
    }
  }
  
  
  const btnEl = document.getElementById('btn')
  const userEl = document.getElementById('user')
  
  btnEl.addEventListener('click', connect)
  
  // listening for account changes
  watchAccount(account => {
    userEl.innerText = account.address ?? ''
    if (account.isConnected) {
      btnEl.innerText = 'Disconnect'
    } else {
      btnEl.innerText = 'Connect'
    }
  })
