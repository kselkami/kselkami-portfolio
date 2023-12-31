import React from 'react';

const Contact = () => {
  return (
    <div
      className="w-full text-gray-900 border-t-4 border-t-gray-900"
      id="contact"
    >
      <div className="flex justify-center align-center w-full max-w-[560px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1150px] mx-auto px-4 my-20 lg:my-32">
        <div className="flex flex-col w-full">
          {/* title */}
          <div className="my-4 lg:mx-12">
            <h2 className="text-5xl font-bold mb-4">Let's work together</h2>
            <span className="italic">What to do need to get done?</span>
          </div>

          <form className="my-16 lg:mx-12 flex flex-col md:flex-row gap-10 lg:gap-4 min-h-[500px] md:min-h-[400px]">
            {/* left */}
            <div className="w-full flex flex-col">
              {/* inputs */}
              <div className="flex flex-col gap-4">
                <div className="px-2">
                  <input
                    className="w-full px-2 py-1 mb-2 bg-transparent outline-none"
                    placeholder="Name"
                    type="text"
                  />
                  <hr className="h-[3px] bg-gray-900" />
                </div>
                <div className="px-2">
                  <input
                    className="w-full px-2 py-1 mb-2 bg-transparent outline-none"
                    placeholder="Email"
                    type="email"
                  />
                  <hr className="h-[3px] bg-gray-900" />
                </div>
                <div className="px-2">
                  <input
                    className="w-full px-2 py-1 mb-2 bg-transparent outline-none"
                    placeholder="Phone (Optional)"
                    type="text"
                  />
                  <hr className="h-[3px] bg-gray-900" />
                </div>
              </div>
            </div>

            {/* right */}
            <div className="w-full h-full flex flex-col gap-4 p-2">
              <div className="h-[60%]">
                <textarea
                  placeholder="I would like to build..."
                  className="bg-transparent border-2 border-gray-900 w-full h-full p-2 outline-none rounded-md"
                  name="details"
                />
              </div>
              <button
                type="submit"
                className="w-fit py-2 px-4 border-2 border-gray-900 font-bold rounded-md"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="w-full h-full max-h-[250px] border-2 border-gray-900 rounded-lg overflow-hidden">
            <img
              className="object-cover hover:scale-[1.05] transition-transform duration-750"
              src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_1920,c_limit/GoogleMapTA.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
