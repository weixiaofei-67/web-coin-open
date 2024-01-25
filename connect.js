import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi1'

import { mainnet, arbitrum } from 'viem/chains'

// 1. Define constants
const projectId = 'd35717e7bee289fc7fdee5cd82d8b4c5'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
const modal = createWeb3Modal({ wagmiConfig, projectId, chains })