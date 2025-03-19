'use client'

import 'swiper/css'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const arrayPhoto: string[] = [
    '/slide.png',
    '/slide.png',
    '/slide.png',
    '/slide.png',
    '/slide.png',
    '/slide.png'
]

const arrayStar: number[] = [
    1,
    2,
    3,
    4,
    5
]

const arrayStack: string[] = [
    'React Native',
    'Flutter',
    'Tauri'
]

function Reviews() {
    return (
        <div className="pt-[89rem] pb-[213rem] px-[76rem]">
            <div className="bg-blue rounded-[32rem] flex gap-[12rem] p-[24rem]">
                
                <div className="!w-[959rem]">
                    <Swiper
                        className='!w-[959rem] overflow-hidden'
                        slidesPerView={1.5}>
                        {
                            arrayPhoto.map((el, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Image
                                            src={el}
                                            width={611}
                                            height={771}
                                            alt='slides' />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>

                <div className="w-[750rem] bg-white rounded-tr-[16rem] rounded-br-[16rem] ">
                    <div className="h-[771rem] p-[34rem] flex flex-col gap-[64rem]">
                        <div className="flex flex-col">
                            <div className="flex justify-between items-center">
                                <h2 className='mons text-[52rem] font-bold text-primary-text'>Название</h2>
                                <div className="flex gap-[4rem] items-center">
                                    {
                                        arrayStar.map(el => {
                                            return (
                                                <svg key={el} className='w-[52rem] h-[52rem]' width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9433 6.04011C27.7645 5.67727 27.4877 5.37173 27.1442 5.15807C26.8008 4.94441 26.4043 4.83118 25.9998 4.83118C25.5953 4.83118 25.1989 4.94441 24.8554 5.15807C24.5119 5.37173 24.2351 5.67727 24.0563 6.04011L18.8303 16.6308L7.14331 18.3294C6.74295 18.3872 6.36676 18.5559 6.05732 18.8165C5.74789 19.077 5.51756 19.4189 5.39242 19.8036C5.26728 20.1883 5.25232 20.6003 5.34924 20.993C5.44616 21.3857 5.65108 21.7435 5.94081 22.0258L14.3995 30.2699L12.4018 41.9093C12.3335 42.3077 12.3781 42.7173 12.5305 43.0918C12.6828 43.4662 12.9369 43.7906 13.264 44.0282C13.5911 44.2658 13.9781 44.4071 14.3813 44.4362C14.7845 44.4653 15.1878 44.3811 15.5456 44.1929L25.9998 38.6983L36.454 44.1929C36.8117 44.3805 37.2148 44.4643 37.6176 44.4348C38.0205 44.4054 38.4071 44.264 38.7338 44.0265C39.0606 43.789 39.3144 43.4649 39.4667 43.0908C39.619 42.7167 39.6636 42.3074 39.5956 41.9093L37.6023 30.2699L46.0566 22.0258C46.3463 21.7436 46.5513 21.3861 46.6483 20.9935C46.7453 20.6009 46.7306 20.189 46.6057 19.8044C46.4808 19.4198 46.2507 19.0778 45.9416 18.8172C45.6324 18.5565 45.2565 18.3876 44.8563 18.3294L33.1693 16.6308L27.9433 6.04011Z" fill="#0077FF"/>
                                                </svg>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <p className='text-primary-text/50 font-medium text-[40rem] jost'>Отрасль</p>
                        </div>
                        <div className="flex flex-col gap-[32rem]">
                            <div className="mons text-[32rem] text-primary-text">
                                <strong>Описание:</strong> Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. 
                            </div>
                            <div className="mons text-[32rem] text-primary-text">
                                <strong>Проблема клиента:</strong>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.  
                            </div>
                            <div className="flex gap-[20rem]">
                                {
                                    arrayStack.map((el, index) => {
                                        return (
                                            <div key={index} className="px-[32rem] py-[8rem] bg-blue rounded-[16rem] text-white text-[24rem] jost">{el}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;