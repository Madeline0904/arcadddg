const breakpoints = [3000, 200]

function imageLink(asset: string, size: number) {
	return `./assets/img/${asset}.${size}w.jpg`
}

export const slides = [
	{
		asset: 'huta_katowice',
		width: 3000,
		height: 4000,
		description: '',
		title: 'Huta Katowice',
	},
	{
		asset: 'huta_katowice1',
		width: 3000,
		height: 4000,
		description: '',
		title: 'Huta Katowice',
	},
	{
		asset: 'huta_katowice2',
		width: 3000,
		height: 4000,
		description: '',
		title: 'Huta Katowice',
	},
	{
		asset: 'huta_katowice3',
		width: 3000,
		height: 4000,
		description: '',
		title: 'Huta Katowice',
	},
	{
		asset: 'elektrownia_Nidzica',
		width: 3000,
		height: 4000,
		description: '',
		title: 'Elektrownia Nidzica',
	},
	{
		asset: 'elektrownia_Nidzica2',
		width: 3000,
		height: 4000,
		description: '',
		title: 'Elektrownia Nidzica',
	},
	{
		asset: 'elektrownia_Nidzica4',
		width: 3000,
		height: 4000,
		description: '',
		title: 'Elektrownia Nidzica',
	},
	{
		asset: 'elektrownia_Nidzica5',
		width: 3000,
		height: 4000,
		description: '',
		title: 'Elektrownia Nidzica',
	},
	{
		asset: 'elektrownia_Nidzica6',
		width: 3000,
		height: 4000,
		description: '',
		title: 'Elektrownia Nidzica',
	},
	{
		asset: 'elektrownia_Nidzica7',
		width: 3000,
		height: 4000,
		description: '',
		title: 'Elektrownia Nidzica',
	},
	{
		asset: 'elektrownia_Nidzica9',
		width: 3000,
		height: 4000,
		description: '',
		title: 'Elektrownia Nidzica',
	},
	{
		asset: 'elektrownia_Nidzica10',
		width: 3000,
		height: 4000,
		description: '',
		title: 'Elektrownia Nidzica',
	},
	{
		type: 'video',
		asset: '',
		poster: './assets/img/most_tarnow.png',
		src: './assets/img/most_tarnow.png',
		title: 'Most Tarnów',
		width: 1080,
		height: 1920,
		sources: [
			{
				src: './assets/img/most_tarnow.mp4',
				type: 'video/mp4',
			},
		],
	},
	{
		type: 'video',
		asset: '',
		poster: './assets/img/most_tarnow2.png',
		src: './assets/img/most_tarnow2.png',
		title: 'Most Tarnów',
		width: 1080,
		height: 1920,
		sources: [
			{
				src: './assets/img/most_tarnow2.mp4',
				type: 'video/mp4',
			},
		],
	},
	{
		type: 'video',
		asset: '',
		poster: './assets/img/elektrownia_nidzica.png',
		src: './assets/img/elektrownia_nidzica.png',
		title: 'Elektrownia Nidzica',
		width: 1080,
		height: 1920,
		sources: [
			{
				src: './assets/img/Elektrownia_Nidzica.mp4',
				type: 'video/mp4',
			},
		],
	},
	{
		type: 'video',
		asset: '',
		poster: './assets/img/elektrownia_nidzica2.png',
		src: './assets/img/elektrownia_nidzica2.png',
		title: 'Elektrownia Nidzica',
		width: 1080,
		height: 1920,
		sources: [
			{
				src: './assets/img/Elektrownia_Nidzica2.mp4',
				type: 'video/mp4',
			},
		],
	},
	{
		type: 'video',
		asset: '',
		poster: './assets/img/elektrownia_nidzica3.png',
		src: './assets/img/elektrownia_nidzica3.png',
		title: 'Elektrownia Nidzica',
		width: 1080,
		height: 1920,
		sources: [
			{
				src: './assets/img/Elektrownia_Nidzica3.mp4',
				type: 'video/mp4',
			},
		],
	},
	{
		type: 'video',
		asset: '',
		poster: './assets/img/elektrownia_porebka.png',
		src: './assets/img/elektrownia_porebka.png',
		title: 'Elektrownia Porębka',
		width: 1080,
		height: 1920,
		sources: [
			{
				src: './assets/img/elektrownia_Porebka.mp4',
				type: 'video/mp4',
			},
		],
	},
]

export function getSlides(dstWidth = 2000) {
	return slides.map(({ asset, width, height, ...rest }) => {
		if (rest.type === 'video') {
			return rest
		}
		return {
			src: imageLink(asset, dstWidth),
			width,
			height,
			srcSet: breakpoints.map(breakpoint => ({
				src: imageLink(asset, breakpoint),
				width: breakpoint,
				height: Math.round((height / width) * breakpoint),
			})),
			...rest,
		}
	})
}

export default slides
