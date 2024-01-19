import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { Amplify } from 'aws-amplify';
import amplifyconfig from '../aws-exports';
Amplify.configure(amplifyconfig);

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
