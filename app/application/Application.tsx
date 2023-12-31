import { useRef, useState } from 'react'
import JsonRepository, { ObjectType } from '../data/JsonRepository'
import Select from './Select'
import useRepository from './useRepository'
import clsx from 'clsx'

const Application = () => {
  const { getAll, setOne, getOneByName } = useRepository(JsonRepository.getInstance())
  const [selected, setSelected] = useState<string>('')
  const newValueRef = useRef<HTMLInputElement>(null)
  const submitHandler = () => {
    selected &&
      newValueRef.current &&
      setOne({
        name: selected,
        value: newValueRef.current.value,
      })
  }

  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-center">
      <form className="ml-5 mr-5">
        <Select getAll={getAll} setSelected={setSelected} />
        <label htmlFor="first_name" className="block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Enter new value
        </label>
        <input
          type="text"
          id="first_name"
          ref={newValueRef}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="bar-example"
          required
        />
        <button
          type="button"
          onClick={submitHandler}
          className="w-full mt-10 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
          Change value
        </button>
      </form>
      <div className={clsx('mt-5 sm:mt-0 sm:self-center text-lg max-w-full sm:max-w-[50%]', !selected && 'hidden')}>
        <h3 className="text-gray-500">Actual data:</h3>
        {selected && <pre className=" overflow-auto">{JSON.stringify(getOneByName({ name: selected }), null, 2)}</pre>}
      </div>
    </div>
  )
}

export default Application
