import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle
      size={35}
      className="text-white/90 cursor-pointer"
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle
      size={35}
      className="text-white/90 cursor-pointer"
      onClick={handlePlay}
    />
  );

export default PlayPause;
