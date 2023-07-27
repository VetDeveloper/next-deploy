import { useEffect, useMemo, useState } from 'react'
import { IRepository, ObjectType } from '../data/JsonRepository'

const useRepository = (repository: IRepository) => {
  const [data, setData] = useState<Array<ObjectType>>(repository.getAll())

  const setOne = (keyValue: ObjectType) => {
    repository.setOne(keyValue)
    setData([...repository.getAll()])
  }
  const getAll = () => data
  const getOneByName = (name: Pick<ObjectType, "name">) => repository.getOne(name)

  return {
    getAll,
    setOne,
    getOneByName,
  }
}

export default useRepository
