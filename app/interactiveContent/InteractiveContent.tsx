import get from 'lodash/get'
import Application from '../application/Application'
import { MutableRefObject } from 'react'
import schoolText from '../data/schoolText'
import universityText from '../data/universityText'

const interactiveContentMap = {
  School: <span className={'text-slate-300'}>{schoolText}</span>,
  University: <span className={'text-slate-300'}>{universityText}</span>,
  App: <Application />,
}

const defaultValue = <span className={'text-slate-500'}>Вам необходимо что-то выбрать &uarr;</span>

const InteractiveContent = ({ title, refer }: { title: string; refer: MutableRefObject<HTMLInputElement | null> }) => {
  return (
    <div className={'mb-4 mt-8 max-w-[80%] border rounded-lg p-6'} ref={refer}>
      {get(interactiveContentMap, title, defaultValue)}
    </div>
  )
}

export default InteractiveContent
