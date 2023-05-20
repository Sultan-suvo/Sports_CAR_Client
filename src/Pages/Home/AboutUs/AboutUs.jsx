import img from '../../../assets/about.jpg'
const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">About Us</h2>
        <div className="my-8 flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            
            <p className="text-base mb-6">
              At CarZone, we are passionate about cars. With years of experience in the automotive industry, we strive to provide our customers with the best selection of high-quality vehicles. Our dedicated team is committed to delivering exceptional customer service and ensuring a seamless car-buying experience.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img className="w-full rounded-lg" src={img} alt="About Us Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
