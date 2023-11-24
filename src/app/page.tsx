import { Suspense } from 'react'
import Loading from './loading'

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
    <section>
      <Suspense fallback={<Loading />}>
        {cityKey}
      </Suspense>
    </section>
  )
}
