'use client'

import { Outfit } from 'next/font/google'
import React from 'react'
import { PrivyProvider } from '@privy-io/react-auth'

import './globals.css'

const font = Outfit({ subsets: ['latin'] })

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
					}}
				>
					{children}
				</PrivyProvider>
			</body>
		</html>
	)
}
