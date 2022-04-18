<script>
	import martian8 from '../assets/images/8.png';
	import martian17 from '../assets/images/17.png';
	import martian37 from '../assets/images/37.png';
	import martian43 from '../assets/images/43.png';
	import martian75 from '../assets/images/75.png';
	import martian86 from '../assets/images/86.png';
	import martian117 from '../assets/images/117.png';
	import martian130 from '../assets/images/130.png';
	import martian136 from '../assets/images/136.png';
	import martian149 from '../assets/images/149.png';
	import martian152 from '../assets/images/152.png';
	import martian162 from '../assets/images/162.png';
	import martian167 from '../assets/images/167.png';
	import martian192 from '../assets/images/192.png';
	import martian199 from '../assets/images/199.png';
	import martian223 from '../assets/images/223.png';
	import martian236 from '../assets/images/236.png';
	import martian248 from '../assets/images/248.png';
	import martian294 from '../assets/images/294.png';
	import martian321 from '../assets/images/321.png';
	import martian396 from '../assets/images/396.png';
	import martian468 from '../assets/images/468.png';
	import martian659 from '../assets/images/659.png';
	import martian1130 from '../assets/images/1130.png';
	import martian1240 from '../assets/images/1240.png';
	import martian1244 from '../assets/images/1244.png';
	import martian1295 from '../assets/images/1295.png';

	let martianImages = [
		martian8,
		martian17,
		martian37,
		martian43,
		martian75,
		martian86,
		martian117,
		martian130,
		martian136,
		martian149,
		martian152,
		martian162,
		martian167,
		martian192,
		martian199,
		martian223,
		martian236,
		martian248,
		martian294,
		martian321,
		martian396,
		martian468,
		martian659,
		martian1130,
		martian1240,
		martian1244,
		martian1295
	];

	$: setInterval(nextSlide, 300);

	const nextSlide = () => {
		const tempArray = [...martianImages];
		if (tempArray.length > 0) {
			const e = tempArray.shift();
			if (e) {
				tempArray.push(e);
				martianImages = tempArray;
			}
		}
	};
</script>

<section id="meetTheMartians" class="h-full place-content-center text-white my-32">
	<h1 class="text-6xl text-primary font-black my-8">
		<span class="text-shadow">Meet</span>
		<span class="text-white">The</span>
		<span class="text-shadow">Miami</span>
		<span class="text-white">Martians</span>
	</h1>
	<div class="h-full flex place-content-center">
		<img src={martianImages[0]} alt="A Miami Martian" class="sm:w-10/12 xl:w-5/12" />
	</div>
</section>

<style>
	.text-shadow {
		text-shadow: 1px 0 20px rgb(200 255 0 / 31%);
	}
</style>
