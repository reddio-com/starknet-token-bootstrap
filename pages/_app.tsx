import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState, useEffect } from "react"
import Source from "@/components/source"


import { StarknetProvider } from "@/components/starknetprovider"

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Or a loading placeholder
  }

  require('dotenv').config();

  return <StarknetProvider>
      <Component {...pageProps} />
      <Source/>
    </StarknetProvider>
}
