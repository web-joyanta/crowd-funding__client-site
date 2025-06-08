import slider1 from "../assets/slider-1.jpg"
import slider2 from "../assets/slider-2.jpg"
import slider3 from "../assets/slider-3.jpeg"
import layer from "../assets/layer-slider-line.png"
import layerIcon from "../assets/layer-slider-icon.jpg"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom"

const Banner = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                autoplay={{
                    delay: 13000,         // 3 seconds between slides
                    disableOnInteraction: false, // autoplay continues after user interaction
                }}
                modules={[Pagination, Navigation, Autoplay]} // Add Autoplay here
                className="mySwiper w-full h-full mx-auto px-5">

                {/* slider 01 */}
                <SwiperSlide className="relative text-lg">
                    <div className="relative bg-center bg-cover w-full h-96 lg:h-screen"
                        style={{
                            backgroundImage: `url(${slider1})`,
                            height: 'calc(100vh - 250px)'
                        }}>
                        <div className="flex text-white flex-col justify-center items-center text-center h-full gap-3 md:gap-6">
                            <img src={layerIcon} alt="layer-Icon" />
                            <p className="underline text-sm md:text-xl font-medium"> Start Your Crowdfunding Journey Today!</p>
                            {/* typeing animation */}
                            <TypeAnimation
                                sequence={[
                                    'Raise Funds Fast',
                                    2000,
                                    'Launch Your Dream',
                                    2000,
                                    'Fuel Your Vision',
                                    2000,
                                    'Get Backed Today',
                                    2000,
                                ]}
                                wrapper="h1"
                                speed={50}
                                repeat={Infinity}
                                className="text-4xl md:text-7xl font-extrabold text-white"
                            />
                            <Link to="/campaigns" className="mt-2 lg:mt-5" >
                                <button className="btn md:btn-lg text-sm bg-linear-to-r from-sky-500 to-violet-500 border-hidden text-white">All Campaign</button>
                            </Link>
                        </div>
                        <img className="absolute right-0 bottom-0 w-32 md:w-48 lg:w-72" src={layer} alt="slider-1" />
                    </div>
                </SwiperSlide>
                {/* slider 02 */}
                <SwiperSlide className="relative text-lg">
                    <div className="relative bg-center bg-cover w-full h-96  lg:h-screen"
                        style={{
                            backgroundImage: `url(${slider2})`,
                            height: 'calc(100vh - 250px)'
                        }}>
                        <div className="flex text-white flex-col justify-center items-center text-center h-full gap-3 md:gap-6">
                            <img src={layerIcon} alt="layer-Icon" />
                            <p className="underline text-sm md:text-xl font-medium"> Anyone can start a campaign.</p>
                            {/* typeing animation */}
                            <TypeAnimation
                                sequence={[
                                    'Fund What Matters',
                                    2000,
                                    'Backed by the Crowd',
                                    2000,
                                    'Start a Movement',
                                    2000,
                                    'Dream It. Fund It.',
                                    2000,
                                ]}
                                wrapper="h1"
                                speed={50}
                                repeat={Infinity}
                                className="text-4xl md:text-7xl font-extrabold text-white"
                            />
                            <Link to="/campaigns" className="mt-2 lg:mt-5" >
                                <button className="btn md:btn-lg text-sm bg-linear-to-r from-sky-500 to-violet-500 border-hidden text-white">All Campaign</button>
                            </Link>
                        </div>
                        <img className="absolute right-0 bottom-0 w-32 md:w-48 lg:w-72" src={layer} alt="slider-1" />
                    </div>
                </SwiperSlide>
                {/* slider 03 */}
                <SwiperSlide className="relative text-lg ">
                    <div className="relative bg-center bg-cover w-full h-96 lg:h-screen "
                        style={{
                            backgroundImage: `url(${slider3})`,
                            height: 'calc(100vh - 250px)'
                        }}>
                        <div className="flex text-white flex-col justify-center items-center text-center h-full gap-3 md:gap-6">
                            <img src={layerIcon} alt="layer-Icon" />
                            <p className="underline text-sm md:text-xl font-medium">Equity-based gives business shares.</p>
                            {/* typeing animation */}
                            <TypeAnimation
                                sequence={[
                                    'Together, We Build',
                                    2000,
                                    'Funding the Future',
                                    2000,
                                    'From Idea to Impact',
                                    2000,
                                    'Create. Share. Succeed.',
                                    2000,
                                ]}
                                wrapper="h1"
                                speed={50}
                                repeat={Infinity}
                                className="text-4xl md:text-7xl font-extrabold text-white"
                            />
                            <Link to="/campaigns" className="mt-2 lg:mt-5" >
                                <button className="btn md:btn-lg text-sm bg-linear-to-r from-sky-500 to-violet-500 border-hidden text-white">All Campaign</button>
                            </Link>
                        </div>
                        <img className="absolute right-0 bottom-0 w-32 md:w-48 lg:w-72" src={layer} alt="slider-1" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;