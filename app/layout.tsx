import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChildProps } from '@/types'
import type { Metadata } from 'next'
import { Crete_Round, Work_Sans } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'

const creteRound = Crete_Round({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-creteRound',
})
const workSans = Work_Sans({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-workSans',
})

export const metadata: Metadata = {
	metadataBase: new URL('https://muzaffar-portfolio.vercel.app'),
	title: 'Muffy dasturlashga oid maqolalar',
	description:
		'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
	authors: [{ name: 'Muzaffar Orziboyev', url: 'https://muzaffar-portfolio.vercel.app' }],
	icons: { icon: '/favicon.png' },
	keywords:
		"muffy badriddinov, muslima, azamjonova, Muslimaxon, muslima azamjonova, Azamjonova, Azamjonova, Muslima, muslima, muslima, Muslima, Muslima, Muslima, muffy, dasturlash kurslari, dasturlashga oid darslar, reactjs uzbek tilida, vuejs uzbek tilida, redux uzbek tilida, muffy, muffy academy, bepul dasturlash, rezyume yozish, portfolio, muffy javascript, muffy raqamli avlod, javascript, reactjs, vuejs, javascript darslari, reactjs darslari, vuejs darslari, dasturlash darslari, o'zbek tilida dasturlash, reactjs o'zbek tilida, reactjs darslari o'zbek tilida, javascript darslari, javascript darslari o'zbek tilida, dasturash darslari o'zbek tilida, dasturlashni o'rganish, dasturlash, IT loyihalar o'zbek tilida",
	openGraph: {
		title: 'Muffy dasturlashga oid maqolalar',
		description:
			'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
		type: 'website',
		url: 'https://muzaffar-portfolio.vercel.app',
		locale: 'en_EN',
		images: 'https://media.graphassets.com/kXL006lyRnW46IKTHdHs',
		countryName: 'Uzbekistan',
		siteName: 'Muffy',
		emails: 'muzaffarorziboyev@gmail.com',
	},
}

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
					storageKey='blog-theme'
				>
					<NextTopLoader showSpinner={false} />
					{children}
					<Toaster position='top-center' />
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
