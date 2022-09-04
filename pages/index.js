import Link from 'next/link'
import Image from 'next/image'
import { baseUrl, fetchApi } from '../utils/fetchApi'
import Property from '../components/Property'

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <div className='flex flex-wrap justify-center align-middle m-4'>
    <Image src={imageUrl} width={500} height={300} alt='Banner' />
    <div className='p-4'>
      <p className='text-gray-500 text-sm font-medium'>{purpose}</p>
      <p className='text-3xl font-bold'>
        {title1}
        <br />
        {title2}
      </p>
      <p className='text-gray-700 text-lg py-4'>
        {desc1}
        <br />
        {desc2}
      </p>
      <button className='text-xl bg-blue-500 text-white rounded-md shadow-md px-8 py-2'>
        <Link href={linkName}>{buttonText}</Link>
      </button>
    </div>
  </div>
)

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <div>
      <Banner
        purpose={'RENT A HOME'}
        title1='Rental Homes for'
        title2='Everyone'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imageUrl='
      https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
      <div className='flex flex-wrap'>
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </div>
      <Banner
        purpose={'BUY A HOME'}
        title1='Find, Buy & Own Your'
        title2='Dream Home'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />
      <div className='flex flex-wrap'>
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  )
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  )

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  }
}
