<script>
	import Icon from '@iconify/svelte';

	let articleStages = [
		{
			id: 0,
			stage: 'Stage 1:',
			info: 'Creation of the Miami Martians',
			ptag: 'Mint date is revealed. Discord is opened. Hype is gathered.',
			isOpened: false
		},
		{
			id: 1,
			stage: 'Stage 2:',
			info: 'Martian Mint',
			ptag: ' Our minting process will be unique, like us! Once minting begins, each week a limited amount of martians will be available to mint. At the end of each week, a portion of the revenue generated from mint will be used to purchase tables/VIP experiences across different nightclubs in Miami. Wallet addresses who minted during that week will be whitelisted to claim their spots in these experiences.',
			isOpened: false
		},
		{
			id: 2,
			stage: 'Stage 3:',
			info: 'Martian DAO Opens',
			ptag: 'Once all martians have been minted, Miami Martian Club Members will gain access to the Martian DAO through ownership of their martian. Royalties collected in the secondary market will be used to fuel the martian treasury. The martian DAO will govern these funds. Holders may vote on proposals as to how the treasury is spent, invested, or dispersed.',
			isOpened: false
		},
		{
			id: 3,
			stage: 'Stage 4:',
			info: 'Martian Club Members Program',
			ptag: "Miami Martian Club Members gain access to guest lists, VIP experiences, and custom events at nightclubs and venues across Miami.",
			isOpened: false
		}
	];

	const handleIsOpened = (
		/** @type {{ id: any; stage?: string; info?: string; ptag?: string; isOpened: any; }} */ articleStage
	) => {
		articleStages[articleStage.id].isOpened = !articleStage.isOpened;
	};
</script>

<section id="roadMap" class="h-full flex flex-col place-content-center text-white my-32">
	<h1 class="text-6xl text-primary font-black my-8"><span class="text-shadow">Road</span> <span class="text-white">Map</span></h1>
	{#each articleStages as articleStage}
		<article>
			<button class="w-full" on:click={() => handleIsOpened(articleStage)}>
			<div class="flex flex-row items-center justify-between my-5 px-2">
				<div class="flex flex-row w-full items-center">
					<h3
						class="flex-none bg-secondary rounded-lg w-24 sm:w-1/6 h-12 flex justify-center items-center text-black text-lg sm:text-xl font-bold"
					>
						{articleStage.stage}
					</h3>
					<h3 class="mx-auto sm:ml-4 text-md sm:text-lg">{articleStage.info}</h3>
				</div>
				{#if articleStage.isOpened}
						<Icon
							icon="akar-icons:minus"
							class="text-lg sm:text-2xl transition transform hover:scale-125 motion-reduce:transition-none motion-reduce:hover:transform-none"
						/>
				{:else}
						<Icon
							icon="akar-icons:plus"
							class="text-lg sm:text-2xl transition transform hover:scale-125 motion-reduce:transition-none motion-reduce:hover:transform-none"
						/>
				{/if}
			</div>
		</button>
			{#if articleStage.isOpened}
				{#if articleStage.id == 3}
				<p class="px-8 mb-20 text-md sm:text-lg">{articleStage.ptag}</p>
				{:else}
				<p class="px-8 text-md sm:text-lg">{articleStage.ptag}</p>
				{/if}
			{/if}
		</article>
	{/each}
</section>


<style>
    .text-shadow {
		text-shadow: 1px 0 20px rgb(200 255 0 / 31%);
    }
</style>