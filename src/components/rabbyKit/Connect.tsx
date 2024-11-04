'use client'

import { BaseError, useAccount, useConnect, useDisconnect, useConfig } from 'wagmi'
// import { BaseError, useAccount, useConnect, useDisconnect, createConfig, http, createStorage, useConfig } from 'wagmi'
import { useEffect, useRef } from 'react'
import { createModal } from '@rabby-wallet/rabbykit'
import { useTheme } from 'next-themes'
import { AppThemes, IconIds } from '@/enums'
import { useKeyboardShortcut } from '@/hooks/useKeyboardShortcutArgs'
import { shortenAddress } from '@/utils'
import toast from 'react-hot-toast'
import { toastStyle } from '@/config/toasts.config'
import IconWrapper from '../common/IconWrapper'
// import { arbitrum, base, gnosis, mainnet } from 'wagmi/chains'

export function ConnectOrDisconnect() {
    const account = useAccount()
    const { error } = useConnect()
    const { disconnect } = useDisconnect()
    const { resolvedTheme } = useTheme()
    const rabbyKitRef = useRef<ReturnType<typeof createModal>>()
    const config = useConfig()
    // const config = createConfig({
    //     chains: [mainnet, arbitrum, base, gnosis],
    //     storage: createStorage({ storage: window.localStorage }),
    //     transports: {
    //         [mainnet.id]: http('https://eth.llamarpc.com'),
    //         [arbitrum.id]: http('https://arbitrum.llamarpc.com	'),
    //         [base.id]: http('https://base.llamarpc.com'),
    //         [gnosis.id]: http('https://rpc.gnosischain.com'),
    //     },
    // })

    useEffect(() => {
        if (!rabbyKitRef.current) {
            rabbyKitRef.current = createModal({
                showWalletConnect: true,
                wagmi: config,
                customButtons: [],
                language: 'en',
                theme: (resolvedTheme ?? 'dark') as AppThemes,
                // themeVariables https://rabbykit.rabby.io/docs/theming#themevariables
            })
        }
    }, [config])
    useEffect(() => {
        if (account.status === 'connected') toast.success('Connected', { style: toastStyle })
        else if (account.status === 'connecting') toast('Connecting...', { style: toastStyle })
        else if (account.status === 'disconnected') toast('Disconnected', { style: toastStyle })
    }, [account.status])
    useEffect(() => {
        if (error) toast.error(`Wallet error: ${(error as BaseError).shortMessage}`, { style: toastStyle })
    }, [error])
    useKeyboardShortcut({
        key: 'Escape',
        onKeyPressed: () => rabbyKitRef.current?.close(),
    })

    return account.isConnecting ? (
        <button className="flex items-center gap-4 rounded-md border border-light-hover px-2.5 py-0.5 hover:bg-light-hover">
            <div className="size-2 rounded-full bg-orange-400" />
            <p className="text-base font-bold">Connecting</p>
            <IconWrapper icon={IconIds.LOADING} className="my-0.5 size-4" />
        </button>
    ) : account.isConnected ? (
        <button
            className="group flex items-center gap-4 rounded-md border border-light-hover bg-light-hover px-2.5 py-0.5 hover:bg-light-hover"
            onClick={() => disconnect()}
        >
            <div className="size-2 rounded-full bg-green-500" />
            <p className="text-base font-bold">{shortenAddress(String(account.address))}</p>
            <IconWrapper icon={IconIds.DISCONNECT} className="my-0.5 size-4 text-inactive group-hover:text-red-600" />
        </button>
    ) : (
        <button
            className="flex items-center gap-4 rounded-md border border-light-hover px-2.5 py-0.5 text-inactive hover:bg-light-hover hover:text-default"
            onClick={() => rabbyKitRef.current?.open()}
        >
            <div className="size-2 rounded-full bg-red-600" />
            <p className="text-base font-bold">Connect</p>
            <IconWrapper icon={IconIds.WALLET} className="my-0.5 size-4" />
        </button>
    )
}

{
    /* {error && <div>{(error as BaseError).shortMessage}</div>} */
}