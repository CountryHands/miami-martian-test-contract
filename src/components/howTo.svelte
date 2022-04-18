<script>
	let howToInfos = [
		{
			header: '1. How to Connect a crypto wallet:',
			body: 'A Metamask wallet is required for the storage of crypto currency and for the storage of your Martian. Press the “connect Wallet” Button in the top right corner once metamask has been added to your browser extension of choice. For more information on how to set up your metamask wallet, please visit https://metamask.io/'
		},
		{
			header: '2. Buying the correct amount of ETH.',
			body: 'ETH is the currency used on the Ethereum blockchain network. You can purchase Eth using your Metamask wallet. Once in your wallet, press the “buy” button and use either wyre or Transak to purchase your ETH. We recommend purchasing extra so that you have enough to cover gas fees. Want an idea of what gas fees are at the moment? Check out the Ethereum Gas Tracker in the Miami Martian Club discord server.'
		},
		{
			header: '3. How to mint your Martian:',
			body: 'The process of purchasing your Martian and having it verified as a Non-Fungible Token on the blockchain is called minting. Navigate to the tab labelled “Mint” and connect your crypto wallet. It is important to make sure your wallet is connected to the Ethereum Mainnet network before minting.'
		},
		{
			header: '4. What are gas Fees and Why am I being Charged them?',
			body: 'Just as it takes gas to power a car, it takes computing power to maintain the blockchain and deploy/execute the smart contracts that signify these images as non-fungible ERC-721 tokens. To see what the gas prices are now, check the Ethereum Gas Tracker in our discord.'
		},
		{
			header: '5. Once minted, Where can i find my martian?',
			body: 'Once Minted, your Martian will be transferred to your Metamask wallet. It may take a couple of minutes, but your Martian can be found under the ”NFT” section of your MOBILE Metamask wallet. To see your NFTs on your desktop wallet, connect that wallet to opensea and navigate to your profile. Your Martians should appear there. You may also need to import your Martian to your mobile wallet. Open Metamask on your mobile device and navigate to the NFT tab and click ”import NFT”. The address information can be found on your martian’s opensea listing within the “details” section. For more questions concerning the storage of your Martian in your Metamask visit https://metamask.io'
		},
		{
			header: '6. How to Access the martian DAO',
			body: 'Navigate to the drop down menu and select the “Enter DAO” button. Make sure your martian is in your wallet and your wallet is connected to the appropriate network. Our dao is hosted on Snapshot.org and will open as soon as minting begins.'
		},
		{
			header: '7. After I mint my NFT, How do i see it?',
			body: 'After minting your martian, you may not see it immediately in your metamask wallet. Don’t worry, this is normal. The metamask browser extension does’nt even let you see your NFTs. Head over to opensea.io, connect your wallet and check in your “hidden” NFTs tab. They will be viewable there or in your “collected” section. To import them so that they are viewable on your mobile metamask wallet, navigate to “import NFT” within your metamask mobile app (make sure you are on the wallet account you minted from). Then input the contract address and token ID found in the details section of your NFT viewable in Opensea.'
		}
	];
</script>

<section id="howTo" class="h-full place-content-center text-white my-32">
	<h1 class="text-6xl text-primary font-black my-8"><span class="text-shadow">How</span> <span class="text-white">To</span></h1>
	{#each howToInfos as howToInfo}
		<article class="my-5">
			<h3 class="text-secondary text-xl font-black">{howToInfo.header}</h3>
			<p class="mt-5 px-7">{howToInfo.body}</p>
		</article>
	{/each}
</section>

<style>
    .text-shadow {
		text-shadow: 1px 0 20px rgb(200 255 0 / 31%);
    }
</style>