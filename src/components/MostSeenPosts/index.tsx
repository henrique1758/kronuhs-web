import { Swiper, SwiperSlide } from "swiper/react";

import { MostSeenCard } from "../MostSeenCard";

import "swiper/css";

interface Post {
    id: string;
    title: string;
    description: string;
}

interface MostSeenPostsSliderProps {
    posts: Post[];
}

export function MostSeenPostsSlider({ posts }: MostSeenPostsSliderProps) {
    return (
        <Swiper slidesPerView={1.5}>
            {posts.map(post => {
                return (
                    <SwiperSlide key={post.id}>
                        <MostSeenCard 
                            title={post.title} 
                            description={post.description} 
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}