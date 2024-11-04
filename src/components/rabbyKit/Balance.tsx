'use client'

import { useState } from 'react'
import { useAccount, useBalance } from 'wagmi'
import type { Address } from 'viem'
import { stringify } from '@/utils'

export function Balance() {
    return (
        <>
            <div>
                <AccountBalance />
            </div>
            <br />
            <div>
                <FindBalance />
            </div>
        </>
    )
}

export function AccountBalance() {
    const { address } = useAccount()
    const { data, refetch } = useBalance({
        address,
    })

    return (
        <div className="flex flex-col">
            <p>{data?.formatted}</p>
            <p>{data?.value?.toString()}</p>
            <p>{stringify(data?.value)}</p>
            <button onClick={() => refetch()}>refetch</button>
        </div>
    )
}

export function FindBalance() {
    const [address, setAddress] = useState<Address>()
    const { data, isLoading, refetch } = useBalance({ address })
    const [value, setValue] = useState('')
    return (
        <div>
            Find balance: <input onChange={(e) => setValue(e.target.value)} placeholder="wallet address" value={value} />
            <button onClick={() => (value === address ? refetch() : setAddress(value as Address))}>{isLoading ? 'fetching...' : 'fetch'}</button>
            <div>{data?.formatted}</div>
            <div>{data?.value}</div>
        </div>
    )
}
