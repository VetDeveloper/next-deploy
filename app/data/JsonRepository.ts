import findIndex from 'lodash/findIndex'

export type ObjectType = {
  readonly name: string
  value: string
}

export interface IRepository {
  getAll: () => Array<ObjectType>
  setOne: (keyValue: ObjectType) => ObjectType
  getOne: (name: Pick<ObjectType, 'name'>) => ObjectType
}

class JsonRepository implements IRepository {
  private static instance: IRepository
  private data: Array<ObjectType>

  constructor() {
    this.data = []
    for (let i = 1; i < 31; i++) {
      this.data.push({
        name: `foo${i}`,
        value: `bar${i}`,
      })
    }
  }

  static getInstance() {
    if (!JsonRepository.instance) {
      JsonRepository.instance = new JsonRepository()
    }
    return JsonRepository.instance
  }

  getAll = () => this.data

  setOne = (keyValue: ObjectType) => {
    this.data[findIndex(this.data, (e: ObjectType) => e.name === keyValue.name)] = keyValue
    return keyValue
  }

  getOne = ({ name }: Pick<ObjectType, 'name'>) => this.data[findIndex(this.data, (e: ObjectType) => e.name === name)]
}

export default JsonRepository
