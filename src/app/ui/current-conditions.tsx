import { CurrentConditions as TCurrentConditions } from '../@types'

interface Props {
	currentConditions: TCurrentConditions
}

export const CurrentConditions = ({currentConditions}: Props) => {
	return (
		<section className='bg-slate-800 rounded-lg p-5'>
			CurrentConditions
		</section>
	)
}