import React, { useEffect } from "react";
import AOS from "aos";
import toast from "react-hot-toast";
import contact from "../../Assets/Contact us-pana.svg";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const massage = form.massage.value;

    if (fullName && email && massage) {
      toast.success("Massage Sent Successfully");
    }
    form.reset();
  };

  return (
    <div data-aos="fade-down" id="contact">
      <section className=" mb-10">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-center text-5xl font-bold text-info uppercase mt-10">
            Contact Me
          </h1>
          <p className="mt-3 text-primary">To Know More Information</p>
          <div className="lg:flex lg:items-center lg:-mx-6">
            <img src={contact} alt="Contact" className="w-5/12" />

            <div className="mt-8 lg:w-1/2 lg:mx-6 text-left">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden b rounded-lg  lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                <form onSubmit={handleSubmit} className="mt-6">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-primary">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Alex Axe"
                      className="block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-primary">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="alex@axe.com"
                      required
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm">Message</label>
                    <textarea
                      name="massage"
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform bg-secondary text-neutral focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 hover:bg-info">
                    Sent
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
