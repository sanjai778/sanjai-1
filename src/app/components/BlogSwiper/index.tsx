'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './BlogSwiper.css';

interface Post {
  id: number;
  title: string;
  miniContent: string;
  date: string;
  slug: string;
  featuredImage: string | null;
  categories: Category[];
}

interface Category {
  id: number;
  name: string;
}

interface BlogSwiperProps {
  posts?: Post[];
}

export default function BlogSwiper({ posts = [] }: BlogSwiperProps) {
  if (posts.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <Swiper
      modules={[EffectFade, Mousewheel, Pagination]}
      spaceBetween={30}
      effect={'fade'}
      loop={true}
      mousewheel={{
        invert: false,
      }}
      pagination={{
        el: '.blog-slider__pagination',
        clickable: true,
      }}
      className="blog-slider"
    >
      {posts.map((post) => (
        <SwiperSlide key={post.id} className="blog-slider__item">
          <div className="blog-slider__img">
            <Image 
              src={post.featuredImage || 'https://via.placeholder.com/500'} 
              alt={post.title} 
              width={500}
              height={500}
            />
          </div>
          <div className="blog-slider__content">
            <Link href={`/blogs/${post.slug}`} > <span className="blog-slider__code">{new Date(post.date).toLocaleDateString()}</span>
            <div className="blog-slider__title">{post.title}</div>
            <div className="blog-slider__text">{post.miniContent}</div>
            <span className="btn btn-outline-primary">Read More</span></Link>
          </div>
        </SwiperSlide>
      ))}
      <div className="blog-slider__pagination" id="blog-slider-pagination"></div>
    </Swiper>
  );
}
