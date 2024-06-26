import { useEffect, useState } from "react";

import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "./assets/2024-logo-landscape-red-white-p-500.png";
import { IoIosChatboxes, IoIosClose } from "react-icons/io";
import Modal from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const [clickedInputs, setClickedInputs] = useState({
    revenue: null,
    lookingFor: null,
    location: null,
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const handleInputClick = (inputType, id) => {
    setClickedInputs((prevState) => ({
      ...prevState,
      [inputType]: prevState[inputType] === id ? null : id,
    }));
  };

  const isClicked = (inputType, id) => clickedInputs[inputType] === id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = {
        fullName: e.target.elements.fullname.value,
        businessName: e.target.elements.businessname.value,
        businessEmail: e.target.elements.businessemail.value,
        phoneNumber: e.target.elements.phonenumber.value,
        revenue: clickedInputs.revenue,
        lookingFor: clickedInputs.lookingFor,
        location: clickedInputs.location,
        industry: e.target.elements.location.value,
        grant: clickedInputs.grant,
      };

      console.log(formDataToSend);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="bg-[#0E142B] relative text-white p-8 flex flex-col items-center">
        <div className="flex items-center gap-2 p-2 mb-6">
          <img className="w-48" src={logo} alt="" />
        </div>
        <div className="bg-[#0E142B] w-full md:w-full lg:w-8/12 border-white border rounded-2xl p-8   equal-shadow">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                data-aos-delay="500"
              >
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  className="w-full p-2 mb-4 focus:outline-none border-white border rounded-3xl bg-inherit placeholder:text-white text-center"
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                data-aos-delay="1500"
              >
                <input
                  type="text"
                  name="businessname"
                  placeholder="Business Name"
                  className="w-full p-2 mb-4 focus:outline-none border-white border rounded-3xl bg-inherit placeholder:text-white text-center"
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                data-aos-delay="2500"
              >
                <input
                  type="text"
                  name="businessemail"
                  placeholder="Business Email Address"
                  className="w-full p-2 mb-4 focus:outline-none border-white border rounded-3xl bg-inherit placeholder:text-white text-center"
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                data-aos-delay="3000"
              >
                <input
                  type="text"
                  name="phonenumber"
                  placeholder="Phone Number"
                  className="w-full p-2 mb-4 focus:outline-none border-white border rounded-3xl bg-inherit placeholder:text-white text-center"
                />
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-delay="500"
              className="flex flex-col mt-4 mb-4 items-center"
            >
              <p className="text-center mb-4">
                Company annual revenue for the last 12 months?
              </p>
              <div className="flex items-center justify-center">
                {/* <input
                
                  type="text"
                  id="over500"
                  name="revenue"
                  className={`w-full mr-2 p-2 text-xs md:text-lg  focus:outline-none focus:bg-[#117FC5] cursor-pointer border-white border rounded-3xl bg-inherit placeholder:text-white text-center caret-transparent ${
                    isClicked('revenue', 'over500') && 'clicked-input'
                  }`}
                  placeholder="Over 500k"
                  onClick={() => handleInputClick('revenue', 'over500')}
                /> */}
                <div
                  id="over500"
                  className={` mr-2 p-2 pr-5 pl-5 text-xs md:text-lg focus:outline-none focus:bg-[#117FC5] cursor-pointer border-white border rounded-3xl bg-inherit placeholder:text-white text-center caret-transparent ${
                    isClicked("revenue", "over500") && "clicked-input"
                  }`}
                  placeholder="Over 500k"
                  onClick={() => handleInputClick("revenue", "over500")}
                >
                  Over 500k
                </div>

                {/* <input
                  type="text"
                  id="lessThan500"
                  name="revenue"
                  className={`w-full p-2 text-xs md:text-lg focus:outline-none focus:bg-[#117FC5] cursor-pointer border-white border rounded-3xl bg-inherit placeholder:text-white text-center caret-transparent ${
                    isClicked('revenue', 'lessThan500') && 'clicked-input'
                  }`}
                  placeholder="Less than 500k"
                  onClick={() => handleInputClick('revenue', 'lessThan500')}
                /> */}
                <div
                  id="lessThan500"
                  className={` p-2 pr-5 pl-5 text-xs md:text-lg focus:outline-none focus:bg-[#117FC5] cursor-pointer border-white border rounded-3xl bg-inherit placeholder:text-white text-center caret-transparent ${
                    isClicked("revenue", "lessThan500") && "clicked-input"
                  }`}
                  placeholder="Less than 500k"
                  onClick={() => handleInputClick("revenue", "lessThan500")}
                >
                  Less than 500k
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="flex flex-col items-center"
            >
              <p className="text-center mb-4">What are you looking for?</p>
              <div className="flex flex-col items-center">
                <div className="flex items-center flex-col md:flex-row gap-4 mb-4">
                  {/* <input
                    type="text"
                    id="moreCustomers"
                    name="lookingFor"
                    className={`w-full md:mr-2 p-2 text-xs md:text-lg focus:outline-none  cursor-pointer border-white border rounded-3xl bg-inherit placeholder:text-white text-center caret-transparent ${
                      isClicked('lookingFor', 'moreCustomers') && 'clicked-input'
                    }`}
                    placeholder="More Customers"
                    onClick={() => handleInputClick('lookingFor', 'moreCustomers')}
                  /> */}
                  <div
                    id="moreCustomers"
                    className={` p-2 pr-5 pl-5 md:mr-2 text-xs md:text-lg focus:outline-none  cursor-pointer border-white border rounded-3xl bg-inherit placeholder:text-white text-center caret-transparent ${
                      isClicked("lookingFor", "moreCustomers") &&
                      "clicked-input"
                    }`}
                    placeholder="More Customers"
                    onClick={() =>
                      handleInputClick("lookingFor", "moreCustomers")
                    }
                  >
                    More Customers
                  </div>
                  {/* <input
                    type="text"
                    id="reducedCosts"
                    name="lookingFor"
                    className={`w-full p-2 text-xs md:text-lg focus:outline-none  cursor-pointer border-white border rounded-3xl bg-inherit placeholder:text-white text-center caret-transparent ${
                      isClicked('lookingFor', 'reducedCosts') && 'clicked-input'
                    }`}
                    placeholder="Reduced Overhead costs"
                    onClick={() => handleInputClick('lookingFor', 'reducedCosts')}
                  /> */}
                  <div
                    id="reducedCosts"
                    className={` p-2 pr-5 pl-5 text-xs md:text-lg focus:outline-none  cursor-pointer border-white border rounded-3xl bg-inherit placeholder:text-white text-center caret-transparent ${
                      isClicked("lookingFor", "reducedCosts") && "clicked-input"
                    }`}
                    placeholder="Reduced Overhead costs"
                    onClick={() =>
                      handleInputClick("lookingFor", "reducedCosts")
                    }
                  >
                    Reduced Overhead costs
                  </div>
                </div>
                <div className="flex items-center w-1/2">
                  {/* <input
                    type="text"
                    id="bothOptions"
                    name="lookingFor"
                    className={`w-full p-2 text-xs md:text-lg focus:outline-none  cursor-pointer  border-white border rounded-3xl bg-inherit placeholder:text-white text-center caret-transparent ${
                      isClicked('lookingFor', 'bothOptions') && 'clicked-input'
                    }`}
                    placeholder="Both"
                    onClick={() => handleInputClick('lookingFor', 'bothOptions')}
                  /> */}
                  <div
                    id="bothOptions"
                    className={`  p-2 w-full text-xs md:text-lg focus:outline-none  cursor-pointer  border-white border rounded-3xl bg-inherit placeholder:text-white text-center caret-transparent ${
                      isClicked("lookingFor", "bothOptions") && "clicked-input"
                    }`}
                    placeholder="Both"
                    onClick={() =>
                      handleInputClick("lookingFor", "bothOptions")
                    }
                  >
                    Both
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="flex flex-col items-center p-8"
            >
              <p className="text-center mb-4">Where are you located?</p>
              <div className="flex items-center flex-col gap-4 md:flex-row w-full">
                <div
                  id="canada"
                  className={` w-full md:mr-2 text-xs md:text-lg p-2 focus:outline-none focus:bg-[#117FC5] cursor-pointer border-white border rounded-3xl bg-inherit placeholder:text-white text-center caret-transparent ${
                    isClicked("location", "canada") && "clicked-input"
                  }`}
                  placeholder="Canada"
                  onClick={() => handleInputClick("location", "canada")}
                >
                  Canada
                </div>
                <div
                  id="usa"
                  className={` w-full md:mr-2 text-xs md:text-lg p-2 focus:outline-none focus:bg-[#117FC5] cursor-pointer border-white border rounded-3xl bg-inherit placeholder:text-white text-center caret-transparent ${
                    isClicked("location", "usa") && "clicked-input"
                  }`}
                  placeholder="USA"
                  onClick={() => handleInputClick("location", "usa")}
                >
                  USA
                </div>
                <div
                  id="international"
                  className={` w-full p-2 text-xs md:text-lg focus:outline-none focus:bg-[#117FC5] cursor-pointer border-white border rounded-3xl bg-inherit placeholder:text-white text-center caret-transparent ${
                    isClicked("location", "international") && "clicked-input"
                  }`}
                  placeholder="International"
                  onClick={() => handleInputClick("location", "international")}
                >
                  International
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="flex flex-col items-center mb-4"
            >
              <p className="text-center mb-2   text-white">Industry?</p>
              <div className="flex items-center w-1/2">
                <select
                  id="location"
                  name="location"
                  className="w-full p-2 pl-4 focus:outline-none  cursor-pointer border-white border rounded-3xl bg-[#0E142B] placeholder:text-white text-white caret-transparent"
                >
                  <option value="select" selected>
                    Select one
                  </option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Automovive">Automovive</option>
                  <option value="Construction">Construction</option>
                </select>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="flex flex-col items-center"
            >
              <p className="text-center mb-4">
                Are you interested in applying for a grant to get you started?
              </p>
              <div className="flex items-center justify-center w-full">
                <div
                  id="yesGrant"
                  className={`md:w-1/3  w-full mr-2 p-2 text-xs md:text-lg focus:outline-none cursor-pointer border-white border rounded-3xl bg-inherit placeholder:text-white text-center caret-transparent ${
                    isClicked("grant", "yesGrant") && "clicked-input"
                  }`}
                  onClick={() => handleInputClick("grant", "yesGrant")}
                >
                  Yes
                </div>
                <div
                  id="noGrant"
                  className={`md:w-1/3 w-full p-2 text-xs md:text-lg focus:outline-none cursor-pointer border-white border rounded-3xl bg-inherit placeholder:text-white text-center caret-transparent ${
                    isClicked("grant", "noGrant") && "clicked-input"
                  }`}
                  onClick={() => handleInputClick("grant", "noGrant")}
                >
                  No
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="flex items-center justify-center mt-8"
            >
              <button className="md:w-1/2 w-full  p-2 focus:outline-none focus:bg-[#117FC5] cursor-pointer border-white border rounded-3xl bg-inherit hover:bg-white hover:text-black">
                Apply Now
              </button>
            </div>
          </form>
        </div>
        <div>
          <div
            className="fixed bottom-8 bg-[#F23005] hover:scale-110 transition-transform duration-300 p-4 rounded-full right-12 cursor-pointer"
            onClick={toggleModal}
          >
            <IoIosChatboxes className="text-white text-3xl" />
          </div>

          <Modal isOpen={showModal} onClose={toggleModal} />
        </div>
      </div>
    </>
  );
}

export default App;
