/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

declare module '@walletconnect/web3-provider/dist/umd/index.min.js' {
	import WalletConnectProvider from '@walletconnect/web3-provider/dist/esm/index';
	export default WalletConnectProvider;
}
