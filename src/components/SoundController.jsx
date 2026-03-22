import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const SoundController = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Elegant royalty-free ambient track
    audioRef.current = new Audio('https://assets.mixkit.co/music/download/mixkit-beautiful-dream-493.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2; // Keep it soft in the background

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy prevented it or link failed silently
        });
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      onClick={toggleSound}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors relative"
      aria-label="Toggle ambient sound"
    >
      {isPlaying ? (
        <>
          <Volume2 size={20} />
          <span className="absolute top-0 right-0 flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75 transform -translate-y-1 translate-x-1" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 transform -translate-y-1 translate-x-1" />
          </span>
        </>
      ) : (
        <VolumeX size={20} />
      )}
    </motion.button>
  );
};

export default SoundController;
