import { Dispatch, MutableRefObject, RefObject, SetStateAction } from 'react'
import { ObjectType } from '../data/JsonRepository'

type SelectProps = {
  getAll: () => Array<ObjectType>
  setSelected: Dispatch<SetStateAction<string>>
}

const Select = ({ getAll, setSelected }: SelectProps) => (
  <>
    <label htmlFor="objs" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Select an option
    </label>
    <select
      id="objs"
      onChange={(e) => setSelected(e.target.value)}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option hidden disabled selected>
        Select name
      </option>
      {getAll().map((e: ObjectType) => (
        <option>{e.name}</option>
      ))}
    </select>
  </>
)

export default Select
