import { useEffect, useState } from "react";
import images from "./images";

const Slider = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const previousImage = () => {
        setCurrentImage((prevIndex)=> (prevIndex=== 0 ? images.length - 1 : prevIndex - 1 ));
    }

    const nextImage = () => {
        setCurrentImage((prevIndex)=> (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }

    useEffect(()=>{
      const timer = setTimeout(()=>{
        nextImage();
      },5000);
      return ()=>{
        clearTimeout(timer);
      }
    },[currentImage])



    return(
        <div className="flex justify-center my-10">
          <button onClick={previousImage} className="hidden md:inline-block mx-5" >Previous</button>
            {images.map((url,index)=><img key={url} src={url} className={"w-[1000px] h-[600px] " + (currentImage === index ? "block" : "hidden")} alt="images"/>)}
          <button onClick={nextImage} className="hidden md:inline-block mx-5" >Next</button>
        </div>
    )
}

export default Slider;


