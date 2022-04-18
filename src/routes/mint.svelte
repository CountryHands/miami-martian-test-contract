<script>
	import whitelist from '../whitelist';
	import mmcABI from '../miamiMartianAbi.json';
	import Web3Modal from 'web3modal';
	import { ethers, BigNumber } from 'ethers';
	import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js';

	const miamiMartianClubAddress = '0xAF8D22A643ccF073374e15CFc4bE6db9B2ddBF14';
	
	let provider;

	let userInfo = {
		address: '',
		connected: false,
		msg: ''
	};

	let count = 1;

	let paused = false;

	const getRootAndProof = (whitelistIn, addressIn) => {
		const leafNodes = whitelistIn.map((addr) => ethers.utils.keccak256(addr));
		const merkleTree = new MerkleTree(leafNodes, ethers.utils.keccak256, {
			sortPairs: true
		});
		const claimingAddress = ethers.utils.keccak256(addressIn);
		const hexProof = merkleTree.getHexProof(claimingAddress);

		return hexProof;
	};

	let web3Modal;
	const handleWalletConnect = async () => {
		const providerOptions = {
			walletconnect: {
				package: WalletConnectProvider,
				options: {
					infuraId: '4b87b4a0ae8b42cfa80b0ac1284e6fc0'
				}
			}
		};
		web3Modal = new Web3Modal({
			// network: 'mainnet', // optional
			cacheProvider: true, // optional
			providerOptions // required
		});

		const instance = await web3Modal.connect();
		provider = new ethers.providers.Web3Provider(instance);
		const signer = provider.getSigner();

		userInfo = {
			address: await signer.getAddress(),
			connected: true,
			msg: 'successfully connected'
		};
	};

	const handleDisconnect = async () => {
		if (provider.close) {
			await provider.close();

			await web3Modal.clearCachedProvider();
			provider = null;
		}

		userInfo = {
			address: '',
			connected: false,
			msg: 'successfully disconnected'
		};
	};
	const incrementCount = () => {
		count += 1;
	};

	const decrementCount = () => {
		if (count <= 1) {
			return;
		}
		count -= 1;
	};

	const handleMint = async () => {
		// @ts-ignore
		const contract = new ethers.Contract(
			miamiMartianClubAddress,
			// @ts-ignore
			mmcABI.output.abi,
			provider.getSigner()
		);

		try {
			let price = BigNumber.from(0);
			const hexProof = getRootAndProof(whitelist, userInfo.address);
			const checkClaimed = await contract.userHasClaimed(userInfo.address);
			const isAllowed = await contract.isAllowed(hexProof, userInfo.address);

			if (!checkClaimed && isAllowed) {
				price = await contract.whitelistAddressPrice(userInfo.address);
				if (count > 1) {
					userInfo.msg = 'Whitelist user can not mint more than one with discount provided.';
					return;
				}
			} else {
				price = await contract.price();
				if (count > 50) {
					userInfo.msg = 'User can not mint more than 50 in one transaction.';
					return;
				}
			}

			const final_price = price.mul(count).toString();
			const response = await contract.mint(count, hexProof, {
				gasLimit: 6000000,
				value: final_price
			});
			console.log('response: ', response);
		} catch (err) {
			console.log('error: ', err);
		}
	};
</script>

<div class="flex flex-col w-screen h-screen -mt-36  sm:-mt-40 justify-center items-center">
	{#if !userInfo.connected}
		<button on:click={handleWalletConnect} class="rounded bg-secondary w-40 h-12"> Connect </button>
	{:else}
		<div class="flex flex-col w-1/2 h-1/3  place-content-evenly place-items-center">
			<button on:click={handleDisconnect} class="rounded bg-secondary w-40 h-12">
				Disconnect
			</button>

			<div class="flex flex-row w-1/2 justify-evenly items-center">
				<button class="rounded bg-black text-white text-2xl  w-12 h-12" on:click={decrementCount}
					>-</button
				>
				<p class="text-2xl text-white">{count}</p>
				<button class="rounded bg-black text-white text-2xl  w-12 h-12" on:click={incrementCount}
					>+</button
				>
			</div>

			{#if !paused}
				<button on:click={handleMint} class="rounded bg-secondary w-40 h-12"> Mint </button>
			{/if}
		</div>
	{/if}

	<div class=" flex flex-col my-5 text-center text-white">
		<p>
			Address: {userInfo.address}
		</p>
		<p>
			{userInfo.msg}
		</p>
	</div>
</div>
