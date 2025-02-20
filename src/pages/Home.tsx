import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";

export function Home() {
    return (
        <main className="container mx-auto max-w-7xl px-6 flex-grow">
            <section className="flex flex-col items-center justify-center">
                <section className="flex relative overflow-hidden lg:overflow-visible w-full flex-nowrap justify-between items-center h-[calc(100vh_-_64px)] 2xl:h-[calc(84vh_-_64px)]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="text-center leading-8 md:leading-10 md:text-left">
                            <div className="inline-block">
                                <h1 className="font-bold text-3xl lg:text-6xl">
                                    <span className="from-[#51DEEC] to-[#3023AE] bg-clip-text text-transparent bg-gradient-to-b">
                                        Effortlessly
                                    </span>{" "}
                                    build and share your C++ packages.
                                </h1>
                            </div>
                            <h2 className="my-4 text-lg lg:text-xl font-normal text-default-500">
                                Intuitive and fast package manager and build system.
                            </h2>
                            <div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    href="https://docs.cabinpkg.com/installation/"
                                    startIcon={
                                        <FontAwesomeIcon icon={faDownload} width={15} />
                                    }
                                    sx={{ marginRight: 2 }}
                                >
                                    Install Cabin
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    size="large"
                                    href="https://docs.cabinpkg.com"
                                    endIcon={<FontAwesomeIcon icon={faArrowRight} width={15} />}
                                >
                                    Getting Started
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://vhs.charm.sh/vhs-12NaAvXqgDiV647TA2C356.gif"
                                width={800}
                                height={450}
                                alt="Demo of Cabin"
                            />
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
}
