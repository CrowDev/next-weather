import { CurrentConditions as TCurrentConditions } from '../@types'
import Image from 'next/image'

interface Props {
	currentConditions: TCurrentConditions
}

// divide this in 4 parts: humidty, UV
export const CurrentConditions = ({currentConditions}: Props) => {

	const windSourceIcon = `https://developer.accuweather.com/sites/default/files/32-s.png`
	const precipSourceIcon = `https://developer.accuweather.com/sites/default/files/18-s.png`
	const uvSourceIcon = `https://developer.accuweather.com/sites/default/files/01-s.png`
	const { Wind } = currentConditions
	const { Precip1hr } = currentConditions
	return (
		<section className='grid grid-rows-2 grid-cols-2 gap-3'>
			<article className='bg-slate-800 rounded-lg p-2'>
				<section className='flex gap-2 min-h-[40px]'>
					<p className='font-bold self-center'>
						Wind
					</p>
					<figure className='self-center'>
						<Image src={windSourceIcon} alt='wind icon' width={65} height={35} />
					</figure>
				</section>
				<section>
					<p className='flex gap-3'>
						<span className='text-lg font-semibold'>{Wind.Speed.Metric.Value}</span>
						<small className='self-start font-medium'>{Wind.Speed.Metric.Unit}</small>
						<span className='text-lg font-semibold'>{Wind.Direction.Degrees}</span>
						<small className='self-start font-medium'>{Wind.Direction.Localized}</small>
						</p>
				</section>
			</article>
			<article className='bg-slate-800 rounded-lg p-2'>
				<section className='flex gap-2 min-h-[40px]'>
					<p className='font-bold self-center'>
						Precipitation
					</p>
					<figure className='self-center'>
						<Image src={precipSourceIcon} alt='wind icon' width={65} height={35} />
					</figure>
				</section>
				<section>
					<p className='flex gap-3'>
						<span className='text-lg font-semibold'>{Precip1hr.Metric.Value}</span>
						<small className='self-start font-medium'>{Precip1hr.Metric.Unit}</small>
					</p>
				</section>
			</article>
			<article className='bg-slate-800 rounded-lg p-2'>
				<section className='flex gap-2 min-h-[40px]'>
					<p className='font-bold self-center'>
						UV Index
					</p>
					<figure className='self-center'>
						<Image src={uvSourceIcon} alt='wind icon' width={65} height={35} />
					</figure>
				</section>
				<section>
					<p className='flex gap-3'>
						<span className='text-lg font-semibold'>{currentConditions.UVIndex}</span>
						<small className='self-start font-medium'>{currentConditions.UVIndexText}</small>
					</p>
				</section>
			</article>
			<article className='bg-slate-800 rounded-lg'>CurrentConditions</article>
		</section>
	)
}