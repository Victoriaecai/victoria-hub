import './ArtGallery.css';

function ArtGallery() {
  const artPieces = [
    {
      id: 1,
      title: "Digital Portrait",
      description: "A vibrant digital portrait",
      imageUrl: "",
      instagramUrl: "https://instagram.com"
    },
    {
      id: 2,
      title: "Abstract Art",
      description: "Modern abstract composition",
      imageUrl: "",
      instagramUrl: "https://instagram.com"
    },
    {
      id: 3,
      title: "Landscape Study",
      description: "Serene landscape illustration",
      imageUrl: "",
      instagramUrl: "https://instagram.com"
    },
    {
      id: 4,
      title: "Character Design",
      description: "Original character concept",
      imageUrl: "",
      instagramUrl: "https://instagram.com"
    },
    {
      id: 5,
      title: "Still Life",
      description: "Detailed still life drawing",
      imageUrl: "",
      instagramUrl: "https://instagram.com"
    },
    {
      id: 6,
      title: "Concept Art",
      description: "Fantasy world concept",
      imageUrl: "",
      instagramUrl: "https://instagram.com"
    }
  ];

  return (
    <div className="art-gallery">
      <h2>Art Gallery</h2>
      <p className="gallery-description">
        Explore my collection of digital art and illustrations.
        Click on any piece to view it on Instagram.
      </p>

      <div className="gallery-grid">
        {artPieces.map((art) => (
          <a
            key={art.id}
            href={art.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="art-card-link"
          >
            <div className="art-card">
              <div className="art-image-container">
                <img
                  src={art.imageUrl}
                  alt={art.title}
                  className="art-image"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ArtGallery;