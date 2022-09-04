import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { BsFilter } from 'react-icons/bs'
import SearchFilters from '../components/SearchFilters'
import Property from '../components/Property'
import noResult from '../assets/images/no-result.svg'
import { baseUrl, fetchApi } from '../utils/fetchApi'
import { CapitaliseFirstLetter } from '../utils/helpers'

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false)
  const router = useRouter()

  return (
    <div>
      <div
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
        className='flex cursor-pointer bg-gray-100 border-b-2 border-gray-200 p-2 font-bold font-lg justify-center items-center gap-2'
      >
        Search Property By Filters
        <BsFilter />
      </div>
      {searchFilters && <SearchFilters />}
      <div className='text-2xl p-2 font-bold'>
        Properties{' '}
        {router?.query?.purpose &&
          CapitaliseFirstLetter(router?.query?.purpose)}
      </div>
      <div className='flex flex-wrap'>
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </div>
      {properties.length === 0 && (
        <div className='flex justify-center items-center flex-col m-2 p-2'>
          <Image src={noResult} alt='no result' w={200} height={300} />
          <div className='text-2xl mt-2 capitalize'>No results found!</div>
        </div>
      )}
    </div>
  )
}

export default Search

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'for-rent'
  const rentFrequency = query.rentFrequency || 'yearly'
  const minPrice = query.minPrice || '0'
  const maxPrice = query.maxPrice || '1000000'
  const roomsMin = query.roomsMin || '0'
  const bathsMin = query.bathsMin || '0'
  const sort = query.sort || 'price-desc'
  const areaMax = query.areaMax || '35000'
  const locationExternalIDs = query.locationExternalIDs || '5002'
  const categoryExternalID = query.categoryExternalID || '4'

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  )

  return {
    props: {
      properties: data?.hits,
    },
  }
}
