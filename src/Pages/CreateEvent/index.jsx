import React from "react"
import { MainLayout } from "../../Layout"

function CreateEvent() {
    return (
        <MainLayout>
            <section className="w-full h-screen flex items-center justify-center">
                <form action="" className="">
                    <div className="w-[24rem] grid gap-6 bg-red-200 p-4">
                        <div className="grid">
                            <label htmlFor="">Title</label>
                            <input
                                type="text"
                                placeholder="Enter Title Here.."
                            />
                        </div>
                        <div className="grid">
                            <label htmlFor="">Image URL</label>
                            <input
                                type="text"
                                placeholder="Enter Image URL Here.."
                            />
                        </div>
                        <div className="grid">
                            <label htmlFor="">Description</label>
                            <input
                                type="text"
                                placeholder="Enter Description Here.."
                            />
                        </div>
                    </div>
                </form>
            </section>
        </MainLayout>
    )
}

export default CreateEvent
