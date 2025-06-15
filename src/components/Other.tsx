import { Link } from "react-router-dom";

const Other = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 md:mt-4 gap-4 p-4">
        <div>
          <Link to={"https://www.getyourguide.com/meerut-l101136/delhi-immerse-in-indian-culture-at-a-vibrant-hindu-wedding-t892453/?ranking_uuid=cbcb1448-cda7-475c-bf7e-a335449aaef7"}>
          <div className="group relative w-full max-w-md mx-auto overflow-hidden">
            <img src="./Shadi.jpg" alt="Wedding" className="w-full h-[16rem] object-cover"/>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-bold text-center p-4">
                Attend an Indian Marriage
              </p>
            </div>
          </div>
          </Link>
        </div>

        <div>
          <Link to={"https://www.getyourguide.com/new-delhi-l231/spiritual-india-yoga-meditation-all-about-hinduism-t907069/?ranking_uuid=f52cb05e-14af-457f-80d3-31192ddd618e"}>
          <div className="group relative w-full max-w-md mx-auto overflow-hidden">
            <img src="./spiritual.jpg" alt="Wedding" className="w-full h-[16rem] object-cover"/>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-bold text-center p-4">
                Spiritual Tour
              </p>
            </div>
          </div>
          </Link>
        </div>

        <div>
          <Link to={"https://www.getyourguide.com/new-delhi-l231/enjoy-holi-festival-of-colours-in-delhi-with-local-family-t600672/?ranking_uuid=9af13246-fe7a-4ae4-ad16-e78830525238"}>
          <div className="group relative w-full max-w-md mx-auto overflow-hidden">
            <img src="./holi1.jpg" alt="Wedding" className="w-full h-[16rem] object-cover"/>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-bold text-center p-4">
                Holi Experience
              </p>
            </div>
          </div>
          </Link>
        </div>

        <div>
          <Link to={"https://www.getyourguide.com/new-delhi-l231/one-stop-place-for-all-your-favourite-activities-in-delhi-t894887/?ranking_uuid=eb4d7e7d-ee57-4fbc-a710-ba13f6319a20"}>
          <div className="group relative w-full max-w-md mx-auto overflow-hidden">
            <img src="./activities.jpg" alt="Wedding" className="w-full h-[16rem] object-cover"/>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-bold text-center p-4">
                10 Best Activities of India
              </p>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Other;

