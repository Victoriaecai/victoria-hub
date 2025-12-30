import './ArtGallery.css';
import jellyfish from '../../assets/images/jellyfish.jpg';
import fan from '../../assets/images/fan.jpg';
import duck from '../../assets/videos/duck.mp4';
import cherryBlossom from '../../assets/images/cherryblossoms.png';
import bunnySandwich from '../../assets/images/bunnysandwich.png';
import fish from '../../assets/images/fish.png';
import { motion } from 'framer-motion';

function ArtGallery() {
  const artPieces = [
    {
      id: 1,
      title: "Floral Jellyfish",
      description: "A jellyfish made of flowers",
      image: jellyfish,
      instagramUrl: "https://www.instagram.com/p/Ct34HCSuWyt/?img_index=1"
    },
    {
      id: 2,
      title: "Japanese Fan",
      description: "Whimsical fan illustration with alive elements",
      image: fan,
      instagramUrl: "https://www.instagram.com/p/CvkAIGmu-M4/"
    },
    {
      id: 3,
      title: "Duck Animation",
      description: "A duck wanted to go skating, but it's a bit slippery!",
      image: duck,
      instagramUrl: "https://www.instagram.com/p/C2SKzUDOR5t/"
    },
    {
      id: 4,
      title: "Cherry Blossom Mason Jar",
      description: "Cherry Blossoms blooming at night in a mason jar",
      image: cherryBlossom,
      instagramUrl: "https://www.instagram.com/p/Clv8a13uO5z/"
    },
    {
      id: 5,
      title: "Bunny Fruit Sandwich",
      description: "A fruit sandwich.. with bunnies!",
      image: bunnySandwich,
      instagramUrl: "https://www.instagram.com/p/CsvyE6sOEDs/"
    },
    {
      id: 6,
      title: "Cherry Blossom Fish",
      description: "A koi fish embellished with cherry blossoms",
      image: fish,
      instagramUrl: "https://www.instagram.com/p/Cut68MEOMP5/"
    }
  ];

  return (
    <div className="art-gallery">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Art Gallery
      </motion.h2>
      <motion.p
        className="gallery-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Explore my collection of digital art illustrations!
      </motion.p>

      <motion.div
        className="gallery-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {artPieces.map((art) => (
          <motion.a
            key={art.id}
            href={art.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="art-card-link"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="art-card">
              <div className="art-image-container">
                {art.image.endsWith('.mp4') ? (
                  <video
                    src={art.image}
                    alt={art.title}
                    className="art-image"
                    controls
                    muted
                    loop
                    autoPlay
                  />
                ) : (
                  <img
                    src={art.image}
                    alt={art.title}
                    className="art-image"
                  />
                )}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

export default ArtGallery;