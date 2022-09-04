import { useContext } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function ImageScrollBar({ data }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{
        type: 'progressbar',
      }}
      modules={[Navigation, Pagination]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <Image
            placeholder='blur'
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            sizes='(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext)

//   return (
//     <div className='flex justify-center items-center m-2'>
//       <FaArrowAltCircleLeft
//         onClick={() => scrollPrev()}
//         className='2xl font-bold'
//       />
//     </div>
//   )
// }

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext)

//   return (
//     <div className='flex justify-center items-center m-2'>
//       <FaArrowAltCircleRight
//         onClick={() => scrollNext()}
//         className='2xl font-bold'
//       />
//     </div>
//   )
// }

// export default function ImageScrollBar({ data }) {
//   return (
//     <ScrollMenu
//       LeftArrow={LeftArrow}
//       RightArrow={RightArrow}
//       style={{ overflow: 'hidden' }}
//     >
//       {data.map((item) => (
//         <div key={item.id} className='w-[1100px] overflow-hidden p-2'>
//           <Image
//             placeholder='blur'
//             blurDataURL={item.url}
//             src={item.url}
//             width={1000}
//             height={500}
//             sizes='(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px'
//           />
//         </div>
//       ))}
//     </ScrollMenu>
//   )
// }
