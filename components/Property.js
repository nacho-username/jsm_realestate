import Link from 'next/link'
import Image from 'next/image'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'
import defaultImg from '../assets/images/bbs-hero.jpg'

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link href={`/property/${externalID}`} passHref>
    <div className='flex flex-wrap w-64 p-4 justify-start cursor-pointer'>
      <div>
        <Image
          src={coverPhoto ? coverPhoto.url : defaultImg}
          width={400}
          height={260}
        />
        <div className='w-full'>
          <div className='flex pt-2 align-middle justify-between'>
            <div className='flex align-middle'>
              {isVerified && <GoVerified className='inline text-green-500' />}
              <p className='font-bold text-sm pl-2'>
                US {millify(price)}
                {rentFrequency && `/${rentFrequency}`}
              </p>
            </div>
            <div>
              <Image
                className='rounded-full'
                src={agency?.logo?.url}
                width={50}
                height={50}
                objectFit='contain'
              />
            </div>
          </div>
          <div className='flex align-middle p-2 justify-between w-[250px] text-blue-600 text-xs'>
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{' '}
            <BsGridFill />
          </div>
          <p className='text-sm text-gray-500'>
            {title.length > 30 ? `${title.substring(0, 30)}...` : title}
          </p>
        </div>
      </div>
    </div>
  </Link>
)

export default Property
