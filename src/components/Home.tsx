import Reviews from "./Reviews";


export default function Home() {
  return (
    <div className="overflow-hidden relative w-full flex flex-col items-center justify-center"> 
      <img className="md:block hidden top-24 w-full min-h-[80svh] bg-slate-400 h-3/4  flex-col align-middle justify-center" src="./hoome.jpg" />
      <img className="md:hidden block top-24 w-full min-h-[80svh] bg-slate-400 h-3/4  flex-col align-middle justify-center" src="./home1.jpg"/>
        <h1 className="absolute md:top-20 sm:top-72 top-32 text-center -translate-x-1/2 left-1/2  w-1/2 rounded-2xl md:p-8 p-4 text-xl md:text-4xl font-bold text-white  "> Indulge in a cultural and culinary adventure with your friendly Indian hosts in Delhi, who will share their home, heart, and heritage with you.</h1>
      <div className="flex md:flex-row flex-col gap-8 my-5">
        <div className="flex flex-col gap-1">
          <img src="https://static.wixstatic.com/media/364290_6af64d98de6549e3b74f6182bf2d4179~mv2.png/v1/fill/w_139,h_139,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/years.png" width={139} height={139} />
          <h1 className="text-2xl text-center font-semibold text-gray-800">5+ Years</h1>
        </div>
        <div className="flex flex-col gap-1">
          <img src="https://static.wixstatic.com/media/364290_0498bd6af4ac4e3dbec9e9e7f97546db~mv2.png/v1/fill/w_139,h_139,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/people.png" width={139} height={139} />
          <h1 className="text-2xl text-center font-semibold text-gray-800">650+ Guests</h1>
        </div>
        <div className="flex flex-col gap-1">
          <img src="https://static.thenounproject.com/png/4882662-200.png" width={139} height={139} />
          <h1 className="text-2xl text-center font-semibold text-gray-800">500+  Reviews</h1>
        </div>
        <div className="flex flex-col gap-1">
          <img src="https://static.wixstatic.com/media/364290_41ce5884168f48a7b01ed21f1b2e340c~mv2.png/v1/fill/w_139,h_139,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/globe.png" width={139} height={139} />
          <h1 className="text-2xl text-center font-semibold text-gray-800">75+ Nations</h1>
        </div>
      </div>

      <br />
      <br /><br />
      <h1 className="text-3xl mt-3 p-4">Here is what our Guests say about us</h1>
      <Reviews/>
    </div>
    
  );
}
