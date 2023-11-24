import { Suspense } from 'react'
import Loading from './loading'
import { MainWeather } from './ui/main-weather'
import { WeatherByTime } from './ui/weather-by-time'
import { CurrentConditions } from './ui/current-conditions'
import { Forecast } from './ui/forecast'

const cityFetching = async (cityName = '') => {
  const BASE_URL = process.env.ACCU_API
  const KEY = process.env.ACCU_KEY
  const ENDPOINT = `${BASE_URL}/locations/v1/cities/search?apikey=${KEY}&q=${cityName}`
  const res = await fetch(ENDPOINT)
  if (!res.ok) {
    throw new Error('Failed to fetch')
  }
  const data = await res.json()
  const cityKey = data.find((data: any) => data.Country.ID === 'US').Key
  return cityKey
}

export default async function Dashboard() {
  const cityKey = await cityFetching('New York')
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <main className='grid grid-rows-[200px_150px_200px] grid-cols-[70%_30%] grid-flow-col gap-5'>
          <MainWeather />
          <WeatherByTime />
          <CurrentConditions />
          <Forecast />
        </main>
      </Suspense>
    </div>
  )
}
