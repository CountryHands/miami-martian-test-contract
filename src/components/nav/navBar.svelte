<script>
	import logo from '../../assets/images/logoHere.png';
	import Hamburger from './hamburger.svelte';
	import Menu from './menu.svelte';

	export let sidebar = false;
</script>

<header class="flex justify-between bg-black p-2 items-center text-white border-b-2">
	<nav class="flex">
		<Hamburger bind:open={sidebar} />
		<a href="/" class="flex items-center">
			<img src={logo} class="mr-3 h-12 sm:h-16" alt="Miami Martian Logo" />
			<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-primary"
				>Miami Martian Club</span
			>
		</a>
	</nav>

	<Menu />
</header>
