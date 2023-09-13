import React from  'react'
import './testimonials.css'
import avatar1 from '../../assets/github.jpg'
import avatar2 from '../../assets/4U6A9629A.jpg'
import avatar3 from '../../assets/4U6A9431.jpg'
import avatar4 from '../../assets/my-image.jpg'
import {Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
  {
    avatar: avatar1,
    Department: 'IT Department',
    Review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure soluta facilis veniam quas officia, optio, commodi dolore autem laudantium quidem illum facere itaque suscipit repudiandae voluptates eaque sed rem!'
  },
  {
    avatar: avatar2,
    Department: 'HR Department',
    Review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure soluta facilis veniam quas officia, optio, commodi dolore autem laudantium quidem illum facere itaque suscipit repudiandae voluptates eaque sed rem!'
  },
  {
    avatar: avatar3,
    Department: 'Finance Department',
    Review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure soluta facilis veniam quas officia, optio, commodi dolore autem laudantium quidem illum facere itaque suscipit repudiandae voluptates eaque sed rem!'
  },
  {
    avatar: avatar4,
    Department: 'Board Members',
    Review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure soluta facilis veniam quas officia, optio, commodi dolore autem laudantium quidem illum facere itaque suscipit repudiandae voluptates eaque sed rem!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from staff</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, Department, Review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="staff__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className="department">{Department}</h5>
                <small className="department__review">{Review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials