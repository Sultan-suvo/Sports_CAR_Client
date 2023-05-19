import person2 from '../../assets/person 2.png';
import person3 from '../../assets/person 3.png';

const FeedbackSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-gray-500 mb-4">John Doe, CEO of Sports Car Company</div>
            <div className="text-gray-800 text-xl font-bold mb-4">
              Your website has transformed the way we experience sports cars. The information and resources available have helped us enhance our designs and deliver top-notch performance. Thanks for revolutionizing the industry!
            </div>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src="https://source.unsplash.com/100x100/?portrait" alt="Customer avatar" />
              <div>
                <div className="font-bold text-gray-800">Mary Smith</div>
                <div className="text-gray-500 text-sm">Marketing Manager, Sports Car Company</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-gray-500 mb-4">Jane Doe, Engineer at Sports Car Company</div>
            <div className="text-gray-800 text-xl font-bold mb-4">
              As an engineer in the sports car industry, your website has been an invaluable resource. The technical articles and insights have helped me stay up-to-date with the latest advancements and design principles. Keep up the fantastic work!
            </div>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={person2} alt="Customer avatar" />
              <div>
                <div className="font-bold text-gray-800">Bob Johnson</div>
                <div className="text-gray-500 text-sm">CTO, Sports Car Company</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-gray-500 mb-4">Jim Smith, Racing Enthusiast</div>
            <div className="text-gray-800 text-xl font-bold mb-4">
              Your website is a treasure trove for sports car enthusiasts like me. The articles, reviews, and buying guides have helped me make informed decisions and find my dream car. I am grateful for the valuable information you provide!
            </div>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={person3} alt="Customer avatar" />
              <div>
                <div className="font-bold text-gray-800">Lisa Rodriguez</div>
                <div className="text-gray-500 text-sm">Sports Car Enthusiast</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
