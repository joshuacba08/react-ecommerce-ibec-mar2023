const Banner = ({bgImage, children}) => {


  return (
    <div className={`w-full h-96 bg-blue-gray-100 flex justify-center  items-center relative`}>
        <img className="w-full h-full object-cover absolute brightness-75" src={bgImage}/>
        <div className="relative text-white">
            { children }
        </div>
    </div>
  )
}

export default Banner