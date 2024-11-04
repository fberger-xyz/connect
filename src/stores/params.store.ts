import { SupportedChains } from '@/enums';
import { create } from 'zustand'

export type ParsedParam = { value: string; isAddress: boolean }

export const useParamsStore = create<{
    rawParams: string
    parsedParams: { value: string; isAddress: boolean }[]
    selectedParam: string
    selectedChain: SupportedChains
    actions: {
        setParams: (rawParams: string, parsedParams: ParsedParam[], selectedParam: string) => void
        setSelectedAddress: (selectedParam: string) => void
        setSelectedChain: (selectedChain: SupportedChains) => void
    }
    computeds: Record<string, () => void>
}>((set) => ({
    rawParams: '',
    parsedParams: [],
    selectedParam: '',
    selectedChain: SupportedChains.ETH,
    actions: {
        setParams: (rawParams, parsedParams, selectedParam) => set(() => ({ rawParams, parsedParams, selectedParam })),
        setSelectedAddress: (selectedParam) => set(() => ({ selectedParam })),
        setSelectedChain: (selectedChain) => set(() => ({ selectedChain })),
    },
    computeds: {},
}))
