import {
  Avatar,
  Badge,
  Card,
  CardBody,
  CardFooter,
  Chip,
} from "@nextui-org/react";
import { Film, Star } from "lucide-react";
import { motion } from "framer-motion";

export interface AnimeProps {
  id: number;
  name?: string;
  image?: {
    original: string;
  };
  kind?: string;
  score?: number;
  episodes?: number;
}

export interface Prop {
  anime: AnimeProps;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Animecard = ({ anime }: Prop) => {
  return (
    <motion.div
      variants={variants}
      animate="visible"
      initial="hidden"
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="w-full p-2"
    >
      <Card className="w-full h-full">
        <CardBody className="overflow-hidden p-0">
          <img
            alt={anime?.name}
            className="w-full h-[37vh] md:h-72 object-cover"
            src={`https://shikimori.one/${anime?.image?.original}`}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <div className="flex flex-col justify-start items-start text-center">
            <h1 className="font-medium text-sm md:text-base">{anime?.name}</h1>
            <div className="flex mt-2 text-center justify-center items-center">
              <div className="flex justify-center items-center text-center">
                <Star size={14} color="yellow" />
                <span className="mx-1 mt-[2px] text-yellow-300">
                  {anime.score}
                </span>
              </div>
              <div className="flex justify-center items-center text-center ml-4">
                <Film size={15} color="#f31260" />
                <span className="mx-1 mt-[2px]">{anime.episodes}</span>
              </div>
            </div>
          </div>
          <Chip color="default" variant="faded">
            {anime.kind}
          </Chip>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default Animecard;
