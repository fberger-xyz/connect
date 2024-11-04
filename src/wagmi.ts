import { getDefaultConfig } from '@rabby-wallet/rabbykit'
import { createClient } from 'viem'
import { createConfig, http } from 'wagmi'
import { goerli, mainnet } from 'wagmi/chains'

const walletConnectProjectId = '572586a808fa0462edb485f181680943'

const configParams = getDefaultConfig({
    projectId: walletConnectProjectId,
    appName: 'Connect',
    chains: [mainnet, ...(process.env.NODE_ENV === 'development' ? [goerli] : [])],
    client({ chain }) {
        return createClient({ chain, transport: http() })
    },
})

export const config = createConfig(configParams)
