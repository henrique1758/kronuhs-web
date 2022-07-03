import { Swiper, SwiperSlide } from "swiper/react";

import { MostSeenCard } from "../MostSeenCard";

import "swiper/css";

interface Post {
    id: string;
    title: string;
    content: string;
    bannerUrl: string;
    slug: string;
    author: {
        firstName: string;
    };
    category: {
        name: string;
    };
    _count: {
        views: number;
        likes: number;
    };
    createdAt: string;
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
                            content={post.content}
                            likes={post._count.likes}
                            views={post._count.views}
                            author={post.author.firstName}
                            publishedAt={post.createdAt}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}