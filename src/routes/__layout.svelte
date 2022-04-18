<script>
	import '../app.css';
	import Navbar from '../components/nav/navBar.svelte';
	import Sidebar from '../components/nav/sideBar.svelte';
	import Footer from '../components/footer.svelte';

	

	let open = false;
</script>

<Sidebar bind:open />
<Navbar bind:sidebar={open} />
<div class="bg-black">
	<!-- <Icons/> -->
	<slot />
	<Footer />
</div>
