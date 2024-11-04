'use client'

import PageWrapper from '@/components/common/PageWrapper'
import { Account } from '@/components/rabbyKit/Account'
import { Balance } from '@/components/rabbyKit/Balance'
import { BlockNumber } from '@/components/rabbyKit/BlockNumber'
import { Connect } from '@/components/rabbyKit/Connect'
import { Connected } from '@/components/rabbyKit/Connected'
import { NetworkSwitcher } from '@/components/rabbyKit/NetworkSwitcher'
import { ReadContract } from '@/components/rabbyKit/ReadContract'
import { ReadContracts } from '@/components/rabbyKit/ReadContracts'
import { ReadContractsInfinite } from '@/components/rabbyKit/ReadContractsInfinite'
import { SendTransaction } from '@/components/rabbyKit/SendTransaction'
import { SendTransactionPrepared } from '@/components/rabbyKit/SendTransactionPrepared'
import { SignMessage } from '@/components/rabbyKit/SignMessage'
import { SignTypedData } from '@/components/rabbyKit/SignTypedData'
import { Token } from '@/components/rabbyKit/Token'
import { WatchContractEvents } from '@/components/rabbyKit/WatchContractEvents'
import { WatchPendingTransactions } from '@/components/rabbyKit/WatchPendingTransactions'
import { WriteContract } from '@/components/rabbyKit/WriteContract'
import { WriteContractPrepared } from '@/components/rabbyKit/WriteContractPrepared'

export default function Page() {
    return (
        <PageWrapper className="mb-10 gap-5">
            <div>
                <Connect />
                <Connected>
                    <hr />
                    <h2>Network</h2>
                    <NetworkSwitcher />
                    <br />
                    <hr />
                    <h2>Account</h2>
                    <Account />
                    <br />
                    <hr />
                    <h2>Balance</h2>
                    <Balance />
                    <br />
                    <hr />
                    <h2>Block Number</h2>
                    <BlockNumber />
                    <br />
                    <hr />
                    <h2>Read Contract</h2>
                    <ReadContract />
                    <br />
                    <hr />
                    <h2>Read Contracts</h2>
                    <ReadContracts />
                    <br />
                    <hr />
                    <h2>Read Contracts Infinite</h2>
                    <ReadContractsInfinite />
                    <br />
                    <hr />
                    <h2>Send Transaction</h2>
                    <SendTransaction />
                    <br />
                    <hr />
                    <h2>Send Transaction (Prepared)</h2>
                    <SendTransactionPrepared />
                    <br />
                    <hr />
                    <h2>Sign Message</h2>
                    <SignMessage />
                    <br />
                    <hr />
                    <h2>Sign Typed Data</h2>
                    <SignTypedData />
                    <br />
                    <hr />
                    <h2>Token</h2>
                    <Token />
                    <br />
                    <hr />
                    <h2>Watch Contract Events</h2>
                    <WatchContractEvents />
                    <br />
                    <hr />
                    <h2>Watch Pending Transactions</h2>
                    <WatchPendingTransactions />
                    <br />
                    <hr />
                    <h2>Write Contract</h2>
                    <WriteContract />
                    <br />
                    <hr />
                    <h2>Write Contract (Prepared)</h2>
                    <WriteContractPrepared />
                </Connected>
            </div>
        </PageWrapper>
    )
}
