'use client'

import { Outfit } from 'next/font/google'
import React from 'react'
import { PrivyProvider } from '@privy-io/react-auth'
import { defineChain } from 'viem'

import './globals.css'

const font = Outfit({ subsets: ['latin'] })

const Sepolia = defineChain({
	id: 11155111,
	name: 'Sepolia test network',
	network: 'Sepolia test network',
	nativeCurrency: {
		decimals: 18,
		name: 'Sepolia test network',
		symbol: 'SepoliaETH',
	},
	rpcUrls: {
		default: {
			http: ['https://sepolia.infura.io/v3/'],
		},
	} as any,
	blockExplorers: {
		default: { name: 'Explorer', url: 'https://sepolia.etherscan.io' },
	},
}) as any

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<PrivyProvider
					appId='cm1sxr64c007nifor7cfxbmgg'
					config={{
						appearance: {
							theme: 'light',
							accentColor: '#676FFF',
							logo: 'https://your-logo-url',
						},
						embeddedWallets: {
							createOnLogin: 'users-without-wallets',
						},
						defaultChain: Sepolia,
						supportedChains: [Sepolia],
					}}
				>
					{children}
				</PrivyProvider>
			</body>
		</html>
	)
}
