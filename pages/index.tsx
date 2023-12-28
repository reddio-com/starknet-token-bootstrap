import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useAccount } from "@starknet-react/core";

import Connect from "@/components/connect";
import Info from "@/components/info";
import SignForm from "@/components/signform";
import TokenForm from "@/components/tokenform";
import NetworkInfo from "@/components/networkinfo";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { isConnected, address } = useAccount();

  return (
    <main className='h-screen'>
      <div className="h-full p-4 flex flex-col">
        <section className="flex justify-between">
          <Info />
          <SignForm />
        </section>
        <div className="flex-1 flex items-center text-center justify-center h-full">
          {isConnected ? (
            <div>
              <h1 className="title font-semibold text-4xl shadowed mb-8">
                Starknet dapp bootstrap
              </h1>
              <p>Hello, {address}</p>
              <TokenForm />
            </div>
          ) : (
            <Connect />
          )}
          <NetworkInfo />
        </div>
      </div>
    </main>
  )
}
