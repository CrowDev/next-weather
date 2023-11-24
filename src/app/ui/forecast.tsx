import { DailyForecast, Forecast as TForecast } from '../@types'
import Image from 'next/image'

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
	return (
		<section className='row-span-full bg-slate-800 rounded-lg p-5'>
			<span></span>
			<ul className='grid grid-rows-5'>
				{
					forecast.DailyForecasts.map((item: DailyForecast) => {
						const icon = item.Day.Icon < 10 ? `0${item.Day.Icon}` : item.Day.Icon
						return (
						<li key={item.EpochDate}>
							<figure>
								<Image 
									src={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`}
									alt='Wheather icon'
									width={75}
									height={45}
									style={{objectFit: 'none'}}
									/>
							</figure>
							<span>{item.Temperature.Minimum.Value}°</span>
							<span>{item.Temperature.Maximum.Value}°</span>
						</li>
					)})
				}
			</ul>
		</section>
	)
}