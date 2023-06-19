import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopByCategoryCard from './ShopByCategoryCard';

const ShopByCategory = () => {
  const [tabDetails, setTabDetails] = useState([]);

  useEffect(() => {
    fetch('https://assignment-11-server-six-tawny.vercel.app/shobCategory')
      .then(res => res.json())
      .then(data => setTabDetails(data))
      .catch(error => {
        console.error('Error fetching shop by category:', error);
      });
  }, []);

  return (
    <div>
      <h2 className='text-center my-12 text-4xl font-bold mb-8'>Shop By Category</h2>
      <div>
        <Tabs>
          <TabList className="flex mb-4">
            {tabDetails.map(category => (
              <Tab key={category.id} className="p-4">
                {category.title}
              </Tab>
            ))}
          </TabList>

          {tabDetails.map(category => (
            <TabPanel key={category.id}>
              <div className="toy-container mx-3 grid md:grid-cols-2 gap-4">
                {category.toys.map(toy => (
                  <ShopByCategoryCard
                    key={toy.name}
                    picture={toy.picture}
                    name={toy.name}
                    price={toy.price}
                    rating={toy.rating}
                    details={toy.details}
                  />
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
