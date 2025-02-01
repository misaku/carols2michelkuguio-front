import './photo.css'




const Photo = ({ src, alt = "Foto" }) => {
    return (
        <div className="photo-container">
            <img src={src} alt={alt} className="photo" />
        </div>
    
        )
  };
  
  export default Photo;