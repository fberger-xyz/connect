export interface CowswapOrder {
    creationDate: string
    owner: string
    uid: string
    availableBalance: null
    executedBuyAmount: string
    executedSellAmount: string
    executedSellAmountBeforeFees: string
    executedFeeAmount: string
    executedSurplusFee: string
    invalidated: boolean
    status: string
    class: string
    settlementContract: string
    fullFeeAmount: string
    solverFee: string
    isLiquidityOrder: boolean
    fullAppData: string
    sellToken: string
    buyToken: string
    receiver: string
    sellAmount: string
    buyAmount: string
    validTo: number
    appData: string
    feeAmount: string
    kind: string
    partiallyFillable: boolean
    sellTokenBalance: string
    buyTokenBalance: string
    signingScheme: string
    signature: string
    interactions: {
        pre: unknown[]
        post: unknown[]
    }
}
