import React from "react"
import { MainLayout } from "../../Layout"

function Landing() {
    return (
        <MainLayout>
            <section className="w-full flex flex-col md:flex-row-reverse items-center justify-around">
                <img
                    src="https://via.placeholder.com/500x500"
                    alt="placeholder"
                />
                <div className="flex flex-col">
                    <span className="text-8xl font-bevan">tixly</span>
                    <span className="text-5xl font-bold">
                        Create &amp; Manage
                    </span>
                    <span className="text-7xl font-bold">Your Tickets</span>
                    <span className="text-6xl font-bevan text-end">easily</span>
                    <a
                        href="/login"
                        className="bg-black text-white px-4 py-2 rounded-md font-bold text-center block mx-auto mt-4"
                    >
                        Create Event
                    </a>
                </div>
            </section>
            <section className="bg-black w-full">
                <div className="w-full flex md:flex-row flex-col items-center justify-evenly text-white">
                    <div className="p-2 bg-gray-300 w-[23rem]">
                        <div className="w-full h-auto mb-4 aspect-square">
                            <img
                                className="object-cover object-center w-full h-full"
                                src="https://via.placeholder.com/250x250"
                                alt=""
                            />
                        </div>
                        <span className="text-2xl font-bold block text-center">
                            Feature 1
                        </span>
                        <p className="leading-relaxed text-lg">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Dicta numquam ducimus doloremque perspiciatis
                            asperiores quae quo, maiores natus laborum sequi!
                        </p>
                    </div>
                    <div className="p-2 bg-gray-300 w-[23rem]">
                        <div className="w-full h-auto mb-4 aspect-square">
                            <img
                                className="object-cover object-center w-full h-full"
                                src="https://via.placeholder.com/250x250"
                                alt=""
                            />
                        </div>
                        <span className="text-2xl font-bold block text-center">
                            Feature 1
                        </span>
                        <p className="leading-relaxed text-lg">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Dicta numquam ducimus doloremque perspiciatis
                            asperiores quae quo, maiores natus laborum sequi!
                        </p>
                    </div>
                    <div className="p-2 bg-gray-300 w-[23rem]">
                        <div className="w-full h-auto mb-4 aspect-square">
                            <img
                                className="object-cover object-center w-full h-full"
                                src="https://via.placeholder.com/250x250"
                                alt=""
                            />
                        </div>
                        <span className="text-2xl font-bold block text-center">
                            Feature 1
                        </span>
                        <p className="leading-relaxed text-lg">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Dicta numquam ducimus doloremque perspiciatis
                            asperiores quae quo, maiores natus laborum sequi!
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full bg-gradient-to-r from-transparent to-red-500 h-[24rem]">
                <div className="h-full w-full flex items-center justify-center font-bold text-7xl font-bevan">
                    Create Your Event
                </div>

            </section>
        </MainLayout>
    )
}

export default Landing
