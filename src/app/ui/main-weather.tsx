import Image from 'next/image'
import { CurrentConditions } from '../@types'

interface Props {
	currentConditions: CurrentConditions
}

export const MainWeather = ({ currentConditions }: Props) => {
	const src = `https://developer.accuweather.com/sites/default/files/${currentConditions.WeatherIcon}-s.png`
	return (
		<section className='bg-slate-800 rounded-lg p-5 grid grid-rows-3 grid-cols-[2fr_100px] grid-flow-col'>
			<h2 className='text-3xl'>New York</h2>
			<h3 className='text-4xl'>{currentConditions.Temperature.Metric.Value}</h3>
			<h4 className='text-xl'>{currentConditions.WeatherText}</h4>
			<figure className='row-span-full w-full h-full relative'>
			<Image 
					src={src}
					alt='Wheather icon'
					width={75}
					height={45}
					style={{objectFit: 'none'}}
					/>
			</figure>
		</section>
	)
}