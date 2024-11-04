'use client'

import PageWrapper from '@/components/common/PageWrapper'
import { useSearchParams } from 'next/navigation'
import { ethers } from 'ethers'
import { ParsedParam, useParamsStore } from '@/stores/params.store'
import { useEffect } from 'react'
import { cn, shortenAddress } from '@/utils'
import IconWrapper from '@/components/common/IconWrapper'
import { IconIds } from '@/enums'
import { chainsConfig, supportedCategoriesConfig } from '@/config/app.config'
import Image from 'next/image'
import LinkWrapper from '@/components/common/LinkWrapper'
import SvgMapper from '@/components/common/SvgMapper'
import { linkForChainAppAndAddress } from '@/utils/apps.util'
import { useRouter } from 'next/navigation'

export default function Page() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const { selectedParam, selectedChain, parsedParams, actions } = useParamsStore()

    useEffect(() => {
        const _rawParams = searchParams.get('safes') ?? ''
        const _splittedParams = _rawParams.split(',')
        const _parsedParams: ParsedParam[] = []
        let _selected = ''
        if (Array.isArray(_splittedParams)) {
            for (let paramIndex = 0; paramIndex < _splittedParams.length; paramIndex++) {
                const value = String(_splittedParams[paramIndex]).trim().toLowerCase()
                if (_parsedParams.some((param) => param.value === value)) continue
                const isAddress = ethers.isAddress(value)
                if (!_selected && isAddress) _selected = value
                _parsedParams.push({ value, isAddress })
            }
        }
        if (!_selected) _parsedParams.push({ value: '0xC234E41AE2cb00311956Aa7109fC801ae8c80941', isAddress: true })
        router.push(
            `?safes=${_parsedParams
                .filter((param) => param.isAddress)
                .map((address) => address.value)
                .join(',')}`,
        )

        actions.setParams(_rawParams, _parsedParams, _selected)
    }, [searchParams])

    return (
        <PageWrapper className="mb-10 gap-5">
            <div className="flex w-full flex-col gap-2.5 border-l border-light-hover">
                {/* addresses */}
                <p className="pl-5 text-light-hover">safes</p>
                <div className="flex items-start gap-2.5 border-b border-light-hover pb-5 pl-5">
                    {parsedParams
                        .filter((param) => param.isAddress)
                        .map((address, addressIndex) => (
                            <div key={address.value} className="flex w-full items-center gap-3">
                                <p className="text-inactive">{addressIndex + 1}</p>
                                <button
                                    className={cn('flex gap-3 rounded-md border px-2.5 py-1.5 transition-all duration-100', {
                                        'bg-light-hover border-primary text-primary': selectedParam === address.value,
                                        'text-inactive hover:text-primary border-light-hover': selectedParam !== address.value,
                                    })}
                                    onClick={() => actions.setSelectedAddress(address.value)}
                                >
                                    {address.isAddress ? <p>{shortenAddress(address.value)}</p> : <p>{address.value}</p>}
                                </button>
                                <button className="flex items-center text-inactive hover:text-primary">
                                    <IconWrapper icon={IconIds.CARBON_COPY} className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                </div>

                {/* chains */}
                <p className="pl-5 text-light-hover">chains</p>
                <div className="flex items-start gap-2.5 border-b border-light-hover pb-5 pl-5">
                    {Object.values(chainsConfig)
                        .sort((curr, next) => curr.index - next.index)
                        .map((chain) => (
                            <div key={chain.id} className="flex items-center gap-1.5">
                                <button
                                    className={cn('flex gap-3 rounded-md border px-2.5 py-1.5 transition-all duration-100', {
                                        'text-primary bg-light-hover border-primary': selectedChain === chain.id,
                                        'text-inactive hover:text-primary border-light-hover': selectedChain !== chain.id,
                                    })}
                                    onClick={() => actions.setSelectedChain(chain.id)}
                                >
                                    <Image
                                        src={`https://safe-transaction-assets.safe.global/chains/${chain.id}/chain_logo.png`}
                                        width={24}
                                        height={24}
                                        alt={chain.gnosisPrefix}
                                    />
                                </button>
                            </div>
                        ))}
                </div>

                {/* apps */}
                <div className="flex flex-wrap gap-x-6 gap-y-4 border-b border-light-hover pb-5 pl-5">
                    {supportedCategoriesConfig.map((category) => (
                        <div key={category.name} className="flex flex-col gap-2.5">
                            <p className="w-12 text-light-hover">{category.name}</p>
                            <div className="flex gap-1.5">
                                {category.apps.map((app) => (
                                    <LinkWrapper
                                        key={app.id}
                                        target="_blank"
                                        className={cn('group flex gap-3 rounded-md border border-light-hover px-3 py-1.5 items-center', {})}
                                        href={linkForChainAppAndAddress(chainsConfig[selectedChain], app, selectedParam)}
                                    >
                                        {app.svg ? (
                                            <SvgMapper icon={app.svg} className="h-6 w-6 text-inactive" />
                                        ) : (
                                            <Image src={app.iconUrl} width={24} height={24} alt={app.id} className="rounded-full" />
                                        )}
                                        <IconWrapper
                                            icon={IconIds.IC_BASELINE_OPEN_IN_NEW}
                                            className="h-4 w-4 text-inactive group-hover:text-primary"
                                        />
                                    </LinkWrapper>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* pending orders */}
                <p className="pl-5 text-light-hover">orders</p>
                <div className="flex items-start gap-2.5 pb-5 pl-5">
                    <p className="pl-5 text-light-hover">none</p>
                </div>
            </div>
        </PageWrapper>
    )
}
