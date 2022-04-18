<script>
	export let open = false;
</script>

<aside class="absolute z-20 w-full h-full flex place-content-center bg-black border-r-2 shadow-lg" class:open>
	<nav class="flex flex-col text-center place-content-center text-2xl text-white">
        <a
		href="#uniqueMartians"
		class="block hover:text-primary"
		>About</a
	>
	<a
		href="#meetTheMartians"
		class="block hover:text-secondary"
		>Meet Martians</a
	>
	<a
		href="#roadMap"
		class="block hover:text-primary"
		>Road Map</a
	>
	<a
		href="#howTo"
		class="block hover:text-secondary"
		>How To</a
	>
	<a
		href="#martiansDao"
		class="block hover:text-primary"
		>DAO</a
	>
	<a
		href="mint"
		class="block hover:text-secondary"
		>Mint</a
	>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out
	}
	
	.open {
		left: 0
	}
</style>