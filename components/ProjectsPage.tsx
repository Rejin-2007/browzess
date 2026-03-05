"use client";

import { motion } from "framer-motion";
import ImageSlider from "@/components/ImageSlider";

const projects = [
    {
        number: 5,
        name: "Poovar Boating",
        link: "https://www.poovarboating.in/",
        description:
            "An immersive platform highlighting unique water journeys, scenic landscapes, and experiences crafted for travelers seeking adventure and tranquility.",
        images: [
            "/Project5/p1.webp",
            "/Project5/p2.webp",
            "/Project5/p3.webp",
            "/Project5/p4.webp",
        ],
    },
    {
        number: 4,
        name: "SRM Educare",
        link: "https://www.srmeducare.com/",
        description:
            "A focused learning platform designed to guide aspirants with structured preparation, valuable resources, and a clear path toward competitive exam success.",
        images: [
            "/Project4/p1.webp",
            "/Project4/p2.webp",
            "/Project4/p3.webp",
            "/Project4/p4.webp",
        ],
    },
    {
        number: 3,
        name: "Poovar Island Boating",
        link: "https://poovarislandboating.com/",
        description:
            "Discover breathtaking backwater journeys, scenic waterways, and unforgettable travel moments through a seamless and engaging digital experience.",
        images: [
            "/Project3/p1.webp",
            "/Project3/p2.webp",
            "/Project3/p3.webp",
            "/Project3/p4.webp",
        ],
    },
    {
        number: 2,
        name: "Kerala University Film Festival",
        link: "https://kuff-five.vercel.app/",
        description:
            "A vibrant space celebrating cinema, storytelling, and creative expression while bringing together filmmakers, audiences, and cultural experiences.",
        images: [
            "/Project2/p1.webp",
            "/Project2/p2.webp",
            "/Project2/p3.webp",
            "/Project2/p4.webp",
        ],
    },
    {
        number: 1,
        name: "Kayaloram Resort",
        link: "https://www.poovarkayaloram.com/",
        description:
            "A peaceful digital experience showcasing nature, comfort, and memorable stays designed to inspire relaxation and luxury travel.",
        images: [
            "/Project1/p1.webp",
            "/Project1/p2.webp",
            "/Project1/p3.webp",
            "/Project1/p4.webp",
        ],
    },
];

export default function ProjectsPage() {
    return (
        <section className=" text-white pt-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 space-y-32">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-inter">
                        Selected Projects
                    </h1>

                    <p className="max-w-2xl mx-auto text-neutral-500 text-lg font-anonymous">
                        A collection of modern websites designed with performance,
                        clean UI, and strong digital presence.
                    </p>
                </motion.div>

                {/* Projects */}
                {projects.map((project, i) => (
                    <motion.div
                        key={project.number}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className={`flex flex-col md:flex-row ${i % 2 !== 0 ? "md:flex-row-reverse" : ""
                            } items-center gap-14`}
                    >
                        {/* Slider */}
                        <div className="w-full md:w-1/2">
                            <ImageSlider images={project.images} />
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-1/2 space-y-6">



                            <h2 className="text-3xl md:text-4xl font-bold">
                                {project.name}
                            </h2>
                            <div className="flex items-center gap-4">
                                <span className="text-sm border border-neutral-700 px-3 py-1 font-inter rounded-full text-neutral-400">
                                    Project #{project.number}
                                </span>
                            </div>
                            <p className="text-neutral-400 leading-relaxed max-w-xl font-anonymous">
                                {project.description}
                            </p>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-2 px-6 py-3 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition"
                            >
                                Visit Website
                            </a>

                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}