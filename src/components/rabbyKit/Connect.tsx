'use client'

import { BaseError } from 'viem'
import { useAccount, useConfig, useConnect, useDisconnect } from 'wagmi'
import { useEffect, useRef } from 'react'
import { createModal } from '@rabby-wallet/rabbykit'
import { useTheme } from 'next-themes'
import { AppThemes } from '@/enums'

export function Connect() {
    const { connector, isConnected } = useAccount()
    const { error } = useConnect()
    const { disconnect } = useDisconnect()
    const { resolvedTheme } = useTheme()

    const rabbyKitRef = useRef<ReturnType<typeof createModal>>()
    const config = useConfig()

    useEffect(() => {
        if (!rabbyKitRef.current) {
            rabbyKitRef.current = createModal({
                showWalletConnect: true,
                wagmi: config,
                customButtons: [],
                language: 'en',
                theme: (resolvedTheme ?? 'dark') as AppThemes,
                // https://rabbykit.rabby.io/docs/theming#themevariables
                // themeVariables: {
                //     '--rk-border-radius': '16px',
                //     '--rk-font-family': '',
                //     '--rk-primary-button-font-size': '',
                //     '--rk-primary-button-color': '',
                //     '--rk-primary-button-bg': '',
                //     '--rk-primary-button-border': '',
                //     '--rk-primary-button-border-radius': '',
                //     '--rk-primary-button-hover-color': '',
                //     '--rk-primary-button-hover-bg': '',
                //     '--rk-primary-button-hover-border': '',
                // },
            })
        }
    }, [config])

    return (
        <div>
            <div>
                {isConnected && <button onClick={() => disconnect()}>Disconnect from {connector?.name}</button>}

                {/* <br /> */}

                {/* <button
                    onClick={() => {
                        rabbyKitRef.current?.setTheme('light')
                        rabbyKitRef.current?.open()
                    }}
                >
                    light mode
                </button> */}

                {/* <br /> */}

                {/* <button
                    onClick={() => {
                        rabbyKitRef.current?.setTheme('dark')
                        rabbyKitRef.current?.open()
                    }}
                >
                    dark mode
                </button>
                <br /> */}

                {!isConnected && <button onClick={() => rabbyKitRef.current?.open()}>open RabbyKit</button>}
                <br />

                <button onClick={() => rabbyKitRef.current?.open({ forceOpen: true })}>force open RabbyKit</button>
                {/* {connectors
          .filter((x) => x.ready && x.id !== connector?.id)
          .map((x) => (
            <button key={x.id} onClick={() => connect({ connector: x })}>
              {x.name}
              {isLoading && x.id === pendingConnector?.id && ' (connecting)'}
            </button>
          ))} */}
            </div>

            {error && <div>{(error as BaseError).shortMessage}</div>}
        </div>
    )
}
