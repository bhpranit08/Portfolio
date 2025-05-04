import React, { useState } from "react";

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            name: "Purple Star",
            description:
                "Purple Star in an Inventory Management System which can be used to keep track of inventory, stores and purchases.",
            technologies: [
                "react",
                "tailwind",
                "mongodb",
                "express",
                "nodejs",
                "daisyui",
            ],
            link: "https://inventory-management-system-azp9.onrender.com",
            gitLink: false,
            changeColor: false,
        },
        {
            name: "AaryaTM Website",
            description:
                "This is a website for AaryaTM, a startup which provides solutions for Hotels, Travel Agencies and Restaurants.",
            technologies: ["html", "css", "php", "js", "mysql"],
            link: "https://aaryatm.com",
            gitLink: false,
            changeColor: false,
        },
        {
            name: "Messaging App",
            description:
                "Messaging App is a full-stack real-time chat application.",
            technologies: [
                "react",
                "tailwind",
                "mongodb",
                "express",
                "nodejs",
                "daisyui",
                "socket.io",
            ],
            link: "https://the-messaging-app.onrender.com",
            gitLink: "https://github.com/bhpranit08/THE_MESSAGING_APP",
            gitChangeColor: false,
            changeColor: false,
        },
    ]);

    const [games, setGames] = useState([
        {
            name: "Pokemon Memory Game",
            description:
                "Pokemon Memory Game is a fun game made using React and pokemon API.",
            technologies: ["react", "css"],
            link: "https://memory-game-sigma-one.vercel.app/",
            gitLink: "https://github.com/bhpranit08/Memory-Game",
            gitChangeColor: false,
            changeColor: false,
        },
        {
            name: "Where's Waldo?",
            description: "Where's Waldo? is a fun game made using MERN stack.",
            technologies: ["react", "css", "mongodb", "express", "nodejs"],
            link: "https://pranitbhadnari.com.np",
            gitLink: "https://github.com/bhpranit08/Where-s-Waldo",
            gitChangeColor: false,
            changeColor: false,
        },
    ]);

    return (
        <div
            className="w-full lg:w-7xl flex flex-col items-center justify-center gap-10"
            id="projects"
        >
            <h1 className="text-6xl text-lime-400">PROJECTS</h1>
            <div className="flex w-full items-center lg:items-start justify-center gap-4 flex-col lg:flex-row">
                {projects.map((project, index) => (
                    <div
                        className="flex-1 h-full max-w-xs lg:max-w-2xl rounded-lg transition-all duration-300 transform hover:scale-y-102 hover:shadow-lg border p-4 shadow-lime-400 flex-col items-center justify-center gap-2"
                        key={index}
                    >
                        <div className="flex flex-col w-full items-center justify-between h-full">
                            <h1 className="text-2xl font-bold text-center">
                                {project.name}
                            </h1>
                            <p className="text-center">{project.description}</p>
                            <div className="flex flex-wrap max-w-full gap-1 items-center justify-center font-mono">
                                {project.technologies.map(
                                    (technology, index) => (
                                        <p
                                            key={index}
                                            className="text-sm bg-gray-800 rounded-lg p-1 font-bold text-center"
                                        >
                                            {technology}
                                        </p>
                                    )
                                )}
                            </div>
                            <div className="flex items-center justify-center gap-4">
                                {project.gitLink && (
                                    <a
                                        target="_blank"
                                        href={project.gitLink}
                                        className="w-7 group transition duration-300"
                                        onMouseEnter={() =>
                                            setProjects((prevProjects) =>
                                                prevProjects.map((p, i) =>
                                                    i === index
                                                        ?   {
                                                                ...p,
                                                                gitChangeColor: true,
                                                            }
                                                        : p
                                                )
                                            )
                                        }
                                        onMouseLeave={() =>
                                            setProjects((prevProjects) =>
                                                prevProjects.map((p, i) =>
                                                    i === index
                                                            ? {
                                                                ...p,
                                                                gitChangeColor: false,
                                                            }
                                                            : p
                                                )
                                            )
                                        }
                                    >
                                        <svg
                                            aria-label="GitHub logo"
                                            width="36"
                                            height="36"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill={
                                                    !project.gitChangeColor
                                                        ? "white"
                                                        : "#84cc16"
                                                }
                                                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                                            />
                                        </svg>
                                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-400"></span>
                                    </a>
                                )}
                                <a
                                    target="_blank"
                                    href={project.link}
                                    className="w-7 group transition duration-300"
                                    onMouseEnter={() =>
                                        setProjects((prevProjects) =>
                                            prevProjects.map((p, i) =>
                                                i === index
                                                    ? {
                                                        ...p,
                                                        changeColor: true,
                                                        }
                                                    : p
                                            )
                                        )
                                    }
                                    onMouseLeave={() =>
                                        setProjects((prevProjects) =>
                                            prevProjects.map((p, i) =>
                                                i === index
                                                    ? {
                                                        ...p,
                                                        changeColor: false,
                                                        }
                                                    : p
                                            )
                                        )
                                    }
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill={
                                            !project.changeColor
                                                ? "white"
                                                : "#84cc16"
                                        }
                                    >
                                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                                    </svg>
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-400"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col w-full items-center lg:items-start lg:flex-row justify-center gap-4 space-x-4">
                {games.map((game, index) => (
                    <div
                        className="flex-1 h-full max-w-xs rounded-lg lg:max-w-2xl transition-all duration-300 transform hover:scale-y-102 hover:shadow-lg border p-4 shadow-lime-400 flex-col items-center justify-center gap-2"
                        key={index}
                    >
                        <div className="flex flex-col w-full items-center justify-between h-full">
                            <h1 className="text-2xl font-bold">{game.name}</h1>
                            <p className="text-center">{game.description}</p>
                            <div className="flex flex-wrap max-w-72 gap-1 items-center justify-center font-mono">
                                {game.technologies.map((technology, index) => (
                                    <p
                                        key={index}
                                        className="text-sm bg-gray-800 rounded-lg p-1 font-bold text-center"
                                    >
                                        {technology}
                                    </p>
                                ))}
                            </div>
                            <div className="flex items-center justify-center gap-4">
                                <a
                                    target="_blank"
                                    href={game.gitLink}
                                    className="w-7 group transition duration-300"
                                    onMouseEnter={() =>
                                        setGames((prevGames) =>
                                            prevGames.map((p, i) =>
                                                i === index
                                                    ? {
                                                        ...p,
                                                        gitChangeColor: true,
                                                        }
                                                    : p
                                            )
                                        )
                                    }
                                    onMouseLeave={() =>
                                        setGames((prevGames) =>
                                            prevGames.map((p, i) =>
                                                i === index
                                                    ? {
                                                            ...p,
                                                            gitChangeColor: false,
                                                        }
                                                    : p
                                            )
                                        )
                                    }
                                >
                                    <svg
                                        aria-label="GitHub logo"
                                        width="36"
                                        height="36"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill={
                                                !game.gitChangeColor
                                                    ? "white"
                                                    : "#84cc16"
                                            }
                                            d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                                        ></path>
                                    </svg>
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-400"></span>
                                </a>
                                <a
                                    target="_blank"
                                    href={game.link}
                                    className="w-7 group transition duration-300"
                                    onMouseEnter={() =>
                                        setGames((prevGames) =>
                                            prevGames.map((p, i) =>
                                                i === index
                                                    ? {
                                                            ...p,
                                                            changeColor: true,
                                                        }
                                                    : p
                                            )
                                        )
                                    }
                                    onMouseLeave={() =>
                                        setGames((prevGames) =>
                                            prevGames.map((p, i) =>
                                                i === index
                                                    ? {
                                                            ...p,
                                                            changeColor: false,
                                                        }
                                                    : p
                                            )
                                        )
                                    }
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill={
                                            !game.changeColor
                                                ? "white"
                                                : "#84cc16"
                                        }
                                    >
                                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                                    </svg>
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-400"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
