
const Browse = () => {
  return (
    <div className="flex justify-center items-center p-5 px-10">
      <div className="bg-gray-200 p-5 md:p-10 rounded-lg">
        <div className="flex items-center justify-center p-5">
          <h1 className="font-Integral font-extrabold text-2xl text-center md:text-4xl ">BROWSE BY DRESS STYLE</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <div className="relative inline-block rounded-md">
            <img src="/browse/casual.png" alt="casual" className="rounded-lg" />
            <p className="absolute top-0 left-0 p-4 text-black text-xl font-semibold ">
              Casual
            </p>
          </div>
          <div className="relative inline-block rounded-md">
            <img src="/browse/formal.png" alt="formal" className="rounded-lg" />
            <p className="absolute top-0 left-0 p-4 text-black text-xl font-semibold ">
              Formal
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <div className="relative inline-block rounded-md">
            <img src="/browse/party.png" alt="Party" className="rounded-lg" />
            <p className="absolute top-0 left-0 p-4 text-black text-xl font-semibold ">
              Party
            </p>
          </div>
          <div className="relative inline-block rounded-md">
            <img src="/browse/gym.png" alt="Gym" className="rounded-lg" />
            <p className="absolute top-0 left-0 p-4 text-black text-xl font-semibold ">
              Gym
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Browse