import { DailyForecast, Forecast as TForecast } from '../@types'
import Image from 'next/image'
import { DateTime } from 'luxon'

const BASE_URL = process.env.ACCU_API
const KEY = process.env.ACCU_KEY

const fetchForecast = async (cityKey: string) => {
	const ENDPOINT = `${BASE_URL}/forecasts/v1/daily/5day/${cityKey}?apikey=${KEY}`
	const res = await fetch(ENDPOINT)
	return res.json()
}

interface Props {
	cityKey: string
}

export const Forecast = async ({ cityKey }: Props) => {
	const forecast: TForecast = await fetchForecast(cityKey)
	console.log(forecast)
	const getDateInfo = (item: DailyForecast) => {
		const date = DateTime.fromMillis(item.EpochDate * 1000)
		const day = date.day
		const month = date.month
		const weekDay = date.weekdayShort
		return {
			day,
			month,
			weekDay
		}
	}
	const farenheitToCelsius = (farenheit: number) => {
		return Math.round((farenheit - 32) * 5 / 9)
	}
	return (
		<section className='row-span-full bg-slate-800 rounded-lg p-5'>
			<span></span>
			<ul className='grid grid-rows-5 h-full'>
				{
					forecast.DailyForecasts.map((item: DailyForecast, index: number) => {
						const icon = item.Day.Icon < 10 ? `0${item.Day.Icon}` : item.Day.Icon
						const nightIcon = item.Night.Icon < 10 ? `0${item.Night.Icon}` : item.Night.Icon
						const {
							day,
							month,
							weekDay
						} = getDateInfo(item)
						return (
						<li key={item.EpochDate}>
							<article className='flex h-full gap-5 items-center'>
								<section className='flex flex-col gap-1'>
									<div className='font-bold text-xl'>
										{weekDay}
									</div>
									<div className='font-semibold text-lg'>
										{day}/{month}
									</div>
								</section>
								<section className='flex gap-2'>
									<span className='font-bold text-3xl'>{farenheitToCelsius(item.Temperature.Maximum.Value)}°</span>
									<span className='font-semibold text-xl'>/</span>
									<span className='font-semibold text-xl'>{farenheitToCelsius(item.Temperature.Minimum.Value)}°</span>
								</section>
								<section className='flex flex-col gap-2'>
									<article className='flex'>
										<div className='flex flex-col'>
											<span>Day</span>
											<span>{item.Day.IconPhrase}</span>
										</div>
										<figure>
											<Image 
													src={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`}
													alt='Wheather day icon'
													width={75}
													height={45}
													style={{objectFit: 'none'}}
													/>
										</figure>
									</article>
									<article className='flex'>
										<div className='flex flex-col'>
											<span>Night</span>
											<span>{item.Night.IconPhrase}</span>
										</div>
										<figure>
											<Image 
													src={`https://developer.accuweather.com/sites/default/files/${nightIcon}-s.png`}
													alt='Wheather day icon'
													width={75}
													height={45}
													style={{objectFit: 'none'}}
													/>
										</figure>
									</article>
								</section>
							</article>
						</li>
					)})
				}
			</ul>
		</section>
	)
}