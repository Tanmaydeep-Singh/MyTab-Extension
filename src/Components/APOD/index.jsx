import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function APOD() {
    const [image, setImage] = useState("");
    const [data, setData] = useState("");

    useEffect(() => {
        const fetchAPOD = async () => {
            try {
                const url = `https://api.nasa.gov/planetary/apod?api_key=z5hhCoqFeBu81pqbs4ecXWmqWhC14Guys64loKes`;
                const response = await fetch(url);
                const result = await response.json();
                const today = new Date().toISOString().split("T")[0];
                const cachedData = {
                    image: result.hdurl,
                    data: result.explanation,
                    date: today,
                };
                localStorage.setItem("APOD", JSON.stringify(cachedData));
                setImage(result.hdurl);
                setData(result.explanation);
            } catch (error) {
                console.error("Error fetching APOD:", error);
            }
        };

        const loadFromCacheOrFetch = () => {
            const cachedAPOD = localStorage.getItem("APOD");
            if (cachedAPOD) {
                const { image, data, date } = JSON.parse(cachedAPOD);
                const today = new Date().toISOString().split("T")[0];
                if (date === today) {
                    setImage(image);
                    setData(data);
                } else {
                    fetchAPOD();
                }
            } else {
                fetchAPOD();
            }
        };

        loadFromCacheOrFetch();

        const now = new Date();
        const millisUntilMidnight =
            new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() - now.getTime();

        const timer = setTimeout(() => {
            fetchAPOD();
        }, millisUntilMidnight);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex z-30 justify-center items-center h-screen backdrop-blur-lg bg-gradient-to-b from-[#0b0d1f] via-[#1a1b41] to-[#3a3d80] text-white">
            <motion.div
                className="relative w-1/3 bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-lg flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div
                    className="flex-grow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {image && (
                        <img
                            src={image}
                            alt="Astronomy Picture of the Day"
                            className="w-full h-3/4 object-cover rounded-xl"
                        />
                    )}
                </motion.div>
                <motion.div
                    className="text-white text-sm mt-4 overflow-y-scroll h-1/4 p-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {data}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default APOD;
