import { Link } from "react-router-dom";
import WhatsappButton from "./WhatsappButton";

export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex justify-center items-center flex-row">
            <img src="./logo.jpeg" alt="logo" className="w-72 h-72 mt-4 " />
          </div>
          <div className="flex flex-col gap-3 w-96">
            <h1 className="text-lg font-semibold text-gray-800 mb-4">
              Contacts
            </h1>
            <div className="flex gap-3 items-center texxt-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" id="location"><g><path d="M50 8C34.6 8 22 20.4 22 35.7c0 32.6 25.6 54.9 26.7 55.9.7.6 1.9.6 2.6 0 1.1-1 26.7-23.4 26.7-55.9C78 20.4 65.4 8 50 8zm0 79.3c-5.2-5-24-25-24-51.6C26 22.6 36.8 12 50 12s24 10.6 24 23.7c0 26.6-18.8 46.6-24 51.6zM50 20c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0 28c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z"></path></g><g><path fill="#00F" d="M1644-370v1684H-140V-370h1784m8-8H-148v1700h1800V-378z"></path></g></svg>
            <p className="text-lg text-black">
              527, Sanskriti Apartments, Sector 19B, Dwarka, Delhi - 110075 (India)
            </p>
            </div>
            <div className="flex gap-3 items-center text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
              <p className="text-lg text-black">+91 99581 96343</p>
            </div>
            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
              <p className="text-lg text-black">nidhiroopakpalak@hotmail.com</p>
            </div>
            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
              <p className="text-lg text-black">nidhi.in@hotmail.com</p>
            </div>
            <div className="flex gap-3">

            <WhatsappButton />
            <Link to="https://maps.app.goo.gl/NbLtY5zLqjjGQi7w5" >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 48 48">
<path fill="#48b564" d="M35.76,26.36h0.01c0,0-3.77,5.53-6.94,9.64c-2.74,3.55-3.54,6.59-3.77,8.06	C24.97,44.6,24.53,45,24,45s-0.97-0.4-1.06-0.94c-0.23-1.47-1.03-4.51-3.77-8.06c-0.42-0.55-0.85-1.12-1.28-1.7L28.24,22l8.33-9.88	C37.49,14.05,38,16.21,38,18.5C38,21.4,37.17,24.09,35.76,26.36z"></path><path fill="#fcc60e" d="M28.24,22L17.89,34.3c-2.82-3.78-5.66-7.94-5.66-7.94h0.01c-0.3-0.48-0.57-0.97-0.8-1.48L19.76,15	c-0.79,0.95-1.26,2.17-1.26,3.5c0,3.04,2.46,5.5,5.5,5.5C25.71,24,27.24,23.22,28.24,22z"></path><path fill="#2c85eb" d="M28.4,4.74l-8.57,10.18L13.27,9.2C15.83,6.02,19.69,4,24,4C25.54,4,27.02,4.26,28.4,4.74z"></path><path fill="#ed5748" d="M19.83,14.92L19.76,15l-8.32,9.88C10.52,22.95,10,20.79,10,18.5c0-3.54,1.23-6.79,3.27-9.3	L19.83,14.92z"></path><path fill="#5695f6" d="M28.24,22c0.79-0.95,1.26-2.17,1.26-3.5c0-3.04-2.46-5.5-5.5-5.5c-1.71,0-3.24,0.78-4.24,2L28.4,4.74	c3.59,1.22,6.53,3.91,8.17,7.38L28.24,22z"></path>
</svg>
              </Link>
              <Link to={"https://linktr.ee/roopak_nidhi"}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 48 48">
<linearGradient id="SVGID_1__x03G5TG9OoEO_gr1" x1="34.914" x2="13.079" y1="9.607" y2="31.443" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#60fea4"></stop><stop offset=".033" stop-color="#6afeaa"></stop><stop offset=".197" stop-color="#97fec4"></stop><stop offset=".362" stop-color="#bdffd9"></stop><stop offset=".525" stop-color="#daffea"></stop><stop offset=".687" stop-color="#eefff5"></stop><stop offset=".846" stop-color="#fbfffd"></stop><stop offset="1" stop-color="#fff"></stop></linearGradient><path fill="url(#SVGID_1__x03G5TG9OoEO_gr1)" d="M9.533,17.869h8.352l-5.917-5.641c-0.403-0.384-0.415-1.022-0.027-1.421l2.258-2.321 c0.393-0.404,1.041-0.404,1.434,0l5.621,5.779V6c0-0.552,0.448-1,1-1h3.496c0.552,0,1,0.448,1,1v8.264l5.622-5.767 c0.392-0.402,1.039-0.403,1.432,0l2.253,2.309c0.389,0.399,0.377,1.039-0.026,1.423l-5.912,5.625h8.349c0.552,0,1,0.448,1,1v3.23 c0,0.552-0.448,1-1,1h-8.403l5.965,5.796c0.399,0.388,0.405,1.027,0.013,1.422l-2.246,2.263c-0.391,0.394-1.027,0.394-1.418,0.001 l-8.376-8.418l-8.379,8.42c-0.39,0.392-1.025,0.393-1.416,0.002l-2.253-2.253c-0.395-0.395-0.39-1.036,0.01-1.424l5.965-5.794 H9.533c-0.552,0-1-0.448-1-1v-3.23C8.533,18.316,8.98,17.869,9.533,17.869z"></path><linearGradient id="SVGID_00000083063729885513219440000013149262690541979573__x03G5TG9OoEO_gr2" x1="28.171" x2="19.803" y1="32.611" y2="40.978" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#60fea4"></stop><stop offset=".033" stop-color="#6afeaa"></stop><stop offset=".197" stop-color="#97fec4"></stop><stop offset=".362" stop-color="#bdffd9"></stop><stop offset=".525" stop-color="#daffea"></stop><stop offset=".687" stop-color="#eefff5"></stop><stop offset=".846" stop-color="#fbfffd"></stop><stop offset="1" stop-color="#fff"></stop></linearGradient><path fill="url(#SVGID_00000083063729885513219440000013149262690541979573__x03G5TG9OoEO_gr2)" d="M22.238,30.589h3.496c0.552,0,1,0.448,1,1 V42c0,0.552-0.448,1-1,1h-3.496c-0.552,0-1-0.448-1-1V31.589C21.238,31.037,21.686,30.589,22.238,30.589z"></path><path fill="none" stroke="#10e36c" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M26.58,26.739l-1.87-1.879c-0.391-0.393-1.027-0.393-1.418,0l-7.67,7.708c-0.39,0.392-1.025,0.393-1.416,0.002	l-2.253-2.253c-0.395-0.395-0.39-1.036,0.01-1.424l4.197-4.077c0.644-0.626,0.201-1.717-0.697-1.717H9.533c-0.552,0-1-0.448-1-1	v-3.23c0-0.552,0.448-1,1-1h5.854c0.902,0,1.343-1.101,0.69-1.724l-4.109-3.917c-0.403-0.384-0.415-1.022-0.027-1.421l2.258-2.321	c0.393-0.404,1.041-0.404,1.434,0l3.905,4.014c0.626,0.643,1.717,0.2,1.717-0.697v-0.738"></path><path fill="none" stroke="#10e36c" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M21.253,6c0-0.552,0.448-1,1-1h3.496c0.552,0,1,0.448,1,1v5.805c0,0.897,1.09,1.34,1.716,0.698l3.906-4.007	c0.392-0.402,1.039-0.403,1.432,0l2.253,2.309c0.389,0.399,0.377,1.039-0.026,1.423l-4.1,3.901	c-0.654,0.622-0.214,1.724,0.689,1.724h5.848c0.552,0,1,0.448,1,1v3.23c0,0.552-0.448,1-1,1h-5.939	c-0.898,0-1.341,1.091-0.697,1.717l4.198,4.079c0.399,0.388,0.405,1.027,0.013,1.422l-2.246,2.263	c-0.391,0.394-1.027,0.394-1.418,0.001l-1.966-1.976"></path><path fill="none" stroke="#10e36c" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M21.238,34.277v-2.687c0-0.552,0.448-1,1-1h3.496c0.552,0,1,0.448,1,1V42c0,0.552-0.448,1-1,1h-3.496	c-0.552,0-1-0.448-1-1v-2.064"></path>
</svg>
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024 Cook and More. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
