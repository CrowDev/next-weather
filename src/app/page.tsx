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
  const ENDPOINT = `${BASE_URL}/currentconditions/v1/${cityKey}?apikey=${KEY}`
  const res = await fetch(ENDPOINT)
  return res.json()
}

export default async function Dashboard() {
  const cityKey = await cityFetching('New York')
  const [currentConditions]: TCurrentConditions[] = await currentConditionFetching(cityKey)
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <main className='grid grid-rows-[200px_150px_200px] grid-cols-[30%_70%] grid-flow-col gap-5'>
          <MainWeather currentConditions={currentConditions} />
          <WeatherByTime />
          <CurrentConditions />
          <Forecast cityKey={cityKey} />
        </main>
      </Suspense>
    </div>
  )
}
