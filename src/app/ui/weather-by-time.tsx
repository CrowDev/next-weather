import { DateTime } from 'luxon'
import { Hourly } from '../@types'

interface Props {
	hourlyForecast: Hourly[]
}

export const WeatherByTime = ({hourlyForecast}: Props) => {
	const getDateInfo = (item: Hourly) => {
		const hour = DateTime.fromMillis(item.EpochDateTime * 1000).toLocaleString(DateTime.TIME_24_SIMPLE)
		return hour
	}
	return (
		<section className='bg-slate-800 rounded-lg p-5 flex flex-col gap-3'>
			<p className='text-white font-bold'>Weather by Time</p>
			<article className='grid grid-cols-6 grow'>
				{hourlyForecast.map((hour: Hourly) => (
					<article key={hour.EpochDateTime} className='flex flex-col'>
						<p className='text-white text-sm'>{getDateInfo(hour)}</p>
						<p className='text-white font-medium'>{hour.Temperature.Value}°{hour.Temperature.Unit}</p>
					</article>
				))}
			</article>
		</section>
	)	
}