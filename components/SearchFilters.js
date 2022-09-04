import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { MdCancel } from 'react-icons/md'
import Image from 'next/image'

import { filterData, getFilterValues } from '../utils/filterData'

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData)
  const router = useRouter()

  const searchProperties = (filterValues) => {
    const path = router.pathname
    const { query } = router

    const values = getFilterValues(filterValues)

    values.forEach((item) => {
      query[item.name] = item.value
    })

    router.push({ pathname: path, query: query })
  }

  return (
    <div className='flex bg-gray-100 py-4  justify-center flex-wrap gap-2'>
      {filters.map((filter) => (
        <div key={filter.queryName}>
          <select
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  '
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  )
}

export default SearchFilters
