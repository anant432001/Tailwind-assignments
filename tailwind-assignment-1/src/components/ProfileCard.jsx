export function ProfileCard() {
  return (
    <>
      <div className="bg-blue-400 h-72 flex justify-center items-center">
        <img
          className="w-44 h-44 rounded-full border-4 border-white mt-52 absolute"
          src="src/assets/manali.jpg"
        />
      </div>

      <div className="pt-16 flex flex-col items-center">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-xl font-bold text-gray-900">
            Anant Pandey <span className="text-base font-light">23</span>
          </h1>
          <p className="text-gray-500">Lucknow</p>
          <hr className="mt-5 w-full border-gray-200" />
        </div>
        <div className="mt-4 flex space-x-8">
          <div className="flex flex-col items-center">
            <span className="block text-gray-900 text-lg font-semibold">
              80K
            </span>
            <span className="text-gray-500">Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="block text-gray-900 text-lg font-semibold">
              803K
            </span>
            <span className="text-gray-500">Likes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="block text-gray-900 text-lg font-semibold">
              1.4K
            </span>
            <span className="text-gray-500">Photos</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
