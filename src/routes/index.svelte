<script>
	import HeaderMartian from '../components/headerMartian.svelte';
	import UniqueMartians from '../components/uniqueMartians.svelte';
	import MeetTheMartians from '../components/meetTheMartians.svelte';
	import HowTo from '../components/howTo.svelte';
	import RoadMap from '../components/roadMap.svelte';
	// import BuyMartian from '../components/buyMartian.svelte';
	import MartianDao from '../components/martianDao.svelte';
</script>

<HeaderMartian/>
<div class="mx-4 sm:container sm:mx-auto text-lg">
	<UniqueMartians />
	<MeetTheMartians/>
	<RoadMap />
	<HowTo />
	<!-- <BuyMartian /> -->
	<MartianDao />
</div>
