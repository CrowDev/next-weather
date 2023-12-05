import { DateTime } from 'luxon'
import { Hourly } from '../@types'

interface Props {
	hourlyForecast: Hourly[]
}

export const WeatherByTime = ({hourlyForecast}: Props) => {
	const getDateInfo = (item: Hourly) => {
		const date = DateTime.fromMillis(item.EpochDateTime * 1000)
		const day = date.day
		const month = date.month
		const weekDay = date.weekdayShort
		return {
			day,
			month,
			weekDay
		}
	}
	return (
		<section className='bg-slate-800 rounded-lg p-5 grid grid-cols-6 place-items-center'>
			{hourlyForecast.map((hour: Hourly) => (
				<article key={hour.EpochDateTime} className='flex flex-col items-center'>
					<p className='text-white text-sm'>{getDateInfo(hour).day}</p>
					{/* <img src={`https://developer.accuweather.com/sites/default/files/${hour.WeatherIcon < 10 ? `0${hour.WeatherIcon}` : hour.WeatherIcon}-s.png`} alt={hour.IconPhrase} /> */}
					<p className='text-white text-sm'>{hour.Temperature.Value}°{hour.Temperature.Unit}</p>
				</article>
			))}
		</section>
	)	
}