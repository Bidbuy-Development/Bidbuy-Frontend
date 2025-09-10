const ClipImage = ({ image }) => {
  return (
    <div className="w-full flex justify-center">
      <img
        src={image}
        alt="Info"
        className="object-cover w-full max-w-full h-[300px] md:h-[400px] lg:h-[500px] aspect-[3/4] 
                   [clip-path:polygon(0%_0%,40%_0%,40%_10%,60%_10%,60%_20%,100%_20%,100%_100%,40%_100%,40%_90%,20%_90%,20%_80%,0%_80%,0%_0%)]"
      />
    </div>
  );
};

export default ClipImage;
