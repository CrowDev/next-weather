import { CurrentConditions as TCurrentConditions } from '../@types'
import Image from 'next/image'

interface Props {
	currentConditions: TCurrentConditions
}

// divide this in 4 parts: wind, humidty, pressure, UV
export const CurrentConditions = ({currentConditions}: Props) => {

	const windSourceIcon = `https://developer.accuweather.com/sites/default/files/32-s.png`
	const { Wind } = currentConditions
	return (
		<section className='grid grid-rows-2 grid-cols-2 gap-3'>
			<article className='bg-slate-800 rounded-lg p-2'>
				<section className='flex gap-2'>
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
			<article className='bg-slate-800 rounded-lg'>CurrentConditions</article>
			<article className='bg-slate-800 rounded-lg'>CurrentConditions</article>
			<article className='bg-slate-800 rounded-lg'>CurrentConditions</article>
		</section>
	)
}