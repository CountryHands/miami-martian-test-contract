<script>
	import Icon from '@iconify/svelte';

	let socialIcons = [
		{ icon: 'akar-icons:discord-fill', link: 'https://discord.gg/Hmn9WR9TJJ' },
		{ icon: 'akar-icons:twitter-fill', link: 'https://twitter.com/MartianClub_MIA' },
		{
			icon: 'entypo-social:instagram-with-circle',
			link: 'https://www.instagram.com/miamimartianclub/'
		}
		// {icon:"simple-icons:opensea", link: ""}
	];
</script>

<!-- <div class="fixed flex flex-col space-y-7 top-1/3 left-5 text-white text-4xl "> -->
<div class="flex flex-row justify-between w-48 text-white text-3xl ">
	{#each socialIcons as socialIcon}
		<a href={socialIcon.link} target="_blank" rel="noopener noreferrer">
			<Icon
				icon={socialIcon.icon}
				class="transition transform hover:-translate-y-1 hover:scale-125 motion-reduce:transition-none motion-reduce:hover:transform-none"
			/>
		</a>
	{/each}
</div>
