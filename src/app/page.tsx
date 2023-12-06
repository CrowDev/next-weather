import { Suspense } from 'react'
import Loading from './loading'
import { MainWeather } from './ui/main-weather'
import { WeatherByTime } from './ui/weather-by-time'
import { CurrentConditions } from './ui/current-conditions'
import { Forecast } from './ui/forecast'
import { CurrentConditions as TCurrentConditions } from './@types'

const BASE_URL = process.env.ACCU_API
const KEY = process.env.ACCU_KEY

const cityFetching = async (cityName = '') => {
  const ENDPOINT = `${BASE_URL}/locations/v1/cities/search?apikey=${KEY}&q=${cityName}`
  const res = await fetch(ENDPOINT)
  if (!res.ok) {
    throw new Error('Failed to fetch')
  }
  const data = await res.json()
  const cityKey = data.find((data: any) => data.Country.ID === 'US').Key
  return cityKey
}

const currentConditionFetching = async (cityKey: string) => {
  const ENDPOINT = `${BASE_URL}/currentconditions/v1/${cityKey}?apikey=${KEY}&details=true`
  const res = await fetch(ENDPOINT)
  return await res.json()
}

const hourlyForecastFetching = async (cityKey: string) => {
  const ENDPOINT = `${BASE_URL}forecasts/v1/hourly/12hour/${cityKey}?apikey=${KEY}&details=true&metric=true`
  const res = await fetch(ENDPOINT)
  return await res.json()
}

export default async function Dashboard() {
  const cityKey = await cityFetching('New York')
  const [currentConditions]: TCurrentConditions[] = await currentConditionFetching(cityKey)
  const hourlyForecast = await hourlyForecastFetching(cityKey)
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <main className='grid grid-rows-[200px_200px_1fr] grid-cols-[30%_70%] grid-flow-col gap-5'>
          <MainWeather currentConditions={currentConditions} />
          <WeatherByTime hourlyForecast={hourlyForecast} />
          <CurrentConditions currentConditions={currentConditions} />
          <Forecast cityKey={cityKey} />
        </main>
      </Suspense>
    </div>
  )
}
