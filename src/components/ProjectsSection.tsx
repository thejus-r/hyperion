import Image from "next/image";
import projectImage from "../../public/images/banner.png";
import { motion, Variants } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section className="sm:h-screen  pt-44 flex flex-col gap-8 bg-neutral-900 text-neutral-50">
      <div className="flex flex-col gap-2 p-12">
        <h2 className="uppecase text-xs font-semibold tracking-wide opacity-75">
          PROJECTS
        </h2>
        <p className="text-xl w-1/3">
          A curated selection of remarkable projects that have earned their
          place here.
        </p>
      </div>
      <motion.div className="w-full h-full flex flex-col md:flex-row">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </motion.div>
    </section>
  );
}

const projectCardVariants: Variants = {
  initial: {},
  hover: {},
};

const imageVariants: Variants = {
  initial: {
    scale: 1,
    filter: "brightness(0.5)",
  },
  hover: {
    scale: 1.1,
    filter: "brightness(1)",
  },
};

function ProjectCard() {
  return (
    <motion.div
      variants={projectCardVariants}
      initial="initial"
      whileHover="hover"
      className="w-full bg-neutral-900 relative overflow-clip"
    >
      <motion.div
        variants={imageVariants}
        transition={{
          ease: "easeInOut",
          duration: 0.75,
        }}
        className="w-full sm:h-full h-96"
      >
        <Image
          className="object-cover"
          src={projectImage}
          alt="banner"
          style={{
            width: "auto",
            height: "100%",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
