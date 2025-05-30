import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const handleRedirect = (url, e) => {
    if (url) {
      e && e.stopPropagation();
      window.open(url, '_blank');
    }
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"] | order(_updatedAt desc)';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    }).catch(error => {
      console.error('Error fetching testimonials:', error);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    }).catch(error => {
      console.error('Error fetching brands:', error);
    });
  }, []);

  return (
    <>
      {testimonials.length > 0 && (
        <>
          <div 
            className="app__testimonial-item app__flex"
            onClick={() => handleRedirect(testimonials[currentIndex]?.proofUrl)}
            style={{ cursor: testimonials[currentIndex]?.proofUrl ? 'pointer' : 'default' }}
          >
            {testimonials[currentIndex]?.imgurl && (
              <img 
                src={urlFor(testimonials[currentIndex]?.imgurl)} 
                alt={testimonials[currentIndex]?.name || 'Testimonial'} 
                onClick={(e) => testimonials[currentIndex]?.profileUrl && handleRedirect(testimonials[currentIndex].profileUrl, e)}
                style={{ cursor: testimonials[currentIndex]?.profileUrl ? 'pointer' : 'default' }}
                className="profile-image"
              />
            )}
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                {testimonials[currentIndex]?.profileUrl ? (
                  <h4 
                    className="bold-text name-link"
                    onClick={(e) => handleRedirect(testimonials[currentIndex].profileUrl, e)}
                  >
                    {testimonials[currentIndex].name}
                  </h4>
                ) : (
                  <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                )}
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            {brand.imgUrl && (
              <img src={urlFor(brand.imgUrl).url()} alt={brand.name} />
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);