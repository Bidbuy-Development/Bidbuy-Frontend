
const ClipImage = ({ image }) => {
  return (
        <div className="">
          <img
            src={image}
            alt="Info"
            className="object-cover lg:w-[475px] lg:-[475px] max-lg:w-[full] max-lg:h-[700px] [clip-path:polygon(0%_0%,40%_0%,40%_10%,60%_10%,60%_20%,100%_20%,100%_100%,40%_100%,40%_90%,20%_90%,20%_80%,0%_80%,0%_0%)]"
        />
        </div>
)}

export default ClipImage