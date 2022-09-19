<script lang="ts">
	import { getContext, onMount, tick } from 'svelte';

	const X_CELL_COUNT: number = 20;
	const Y_CELL_COUNT: number = 20;
	const MAX_ZOOM = 3;
	const MIN_ZOOM = 1;
	const SCROLL_SENSITIVITY = 0.0005;

	let canvasContainer: HTMLDivElement;
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let cellSize: number;

	let zoom: number = 1;
	let offset: {
		x: 0,
		y: 0,
	};

	function handleKey(event: KeyboardEvent) {
		if (event.metaKey) {
			event.preventDefault();
		}
	}

	function scrollZoom(event: WheelEvent) {
		if (!Number.isInteger(event.deltaY)) {
			if (event.deltaY > 0) {
			zoom = Math.min(MAX_ZOOM, zoom + event.deltaY * SCROLL_SENSITIVITY);
		} else {
			zoom = Math.max(MIN_ZOOM, zoom + event.deltaY * SCROLL_SENSITIVITY);
		}
		console.log(event);
		}
	}

	function drawCell(size: number, zoom: number) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save();
		ctx.scale(zoom, zoom);
		ctx.beginPath();
		ctx.translate(size, size);
		ctx.imageSmoothingEnabled = false;
		ctx.strokeStyle = '#000';
		ctx.lineWidth = 1;

		[...Array(X_CELL_COUNT + 1).keys()].map((row) => {
			ctx.translate(0.5, 0.5);
			ctx.moveTo(-size, row * size);
			ctx.lineTo(canvas.width + size, row * size);
			ctx.stroke();
			ctx.translate(-0.5, -0.5);

			if (row === 0 || row === 19) {
				ctx.fillStyle = 'wheat';
				ctx.fillRect(row * size, 0, size, size);
				ctx.fillRect(row * size, 19 * size, size, size);
			}
		});

		[...Array(Y_CELL_COUNT + 1).keys()].map((col) => {
			ctx.translate(0.5, 0.5);
			ctx.moveTo(col * size, -size);
			ctx.lineTo(col * size, canvas.height + size);
			ctx.stroke();
			ctx.translate(-0.5, -0.5);
		});
		
		ctx.restore();
	}

	$: if (ctx) {
		drawCell(cellSize, zoom);
	}

	onMount(() => {
		ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

		const resizeObserver = new ResizeObserver((entries) => {
			for (let entry of entries) {
				canvas.width = Math.floor(entry.contentRect.width / X_CELL_COUNT) * (X_CELL_COUNT + 2);
				canvas.height = Math.floor(entry.contentRect.height / Y_CELL_COUNT) * (Y_CELL_COUNT + 2);
				cellSize = Math.floor(entry.contentRect.width / X_CELL_COUNT);
				ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
			}
		});
		resizeObserver.observe(canvasContainer);
	});
</script>

<svelte:window
	on:keydown="{handleKey}"
/>

<div class="CanvasCell" bind:this={canvasContainer}>
	<canvas bind:this={canvas} on:wheel|preventDefault={scrollZoom}/>
</div>

<style lang="scss">
	.CanvasCell {
		width: 100%;
		aspect-ratio: 1;
		background: wheat;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	canvas {
		display: block;
		background: white;
	}
</style>
