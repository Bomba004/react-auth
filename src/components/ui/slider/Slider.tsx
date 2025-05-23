
import { useState, useEffect } from 'react';

type SliderItem = { id: number; image: string; };
type SliderProps = {
  className?: string;
  items: SliderItem[];
  timePlay?: number;
  btnSlide?: boolean;
  btnImage?: boolean;
};

export const Slider = ({ className, items, timePlay = 5000, btnSlide = true, btnImage = true }: SliderProps) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => { setCurrentIndex((prev) => (prev + 1) % items.length); };
  const prevSlide = () => { setCurrentIndex((prev) => (prev - 1 + items.length) % items.length); };
  const goToSlide = (index: number) => { setCurrentIndex(index); };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => { nextSlide(); }, timePlay);
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className={`w-full h-full rounded-[0.5em] overflow-hidden ${className}`}>
      <div className="relative w-full h-full">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-full">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`duration-700 ease-in-out ${index === currentIndex ? 'block' : 'hidden'}`}
            >
              <img
                src={item.image}
                // className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                className="absolute block w-full h-full"
                alt={`Slide ${item.id}`}
                draggable={false} // <--- هنا الإضافة
              />
            </div>
          ))}
        </div>

        {/* Slider indicators */}
        {btnImage && (
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {items.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                aria-current={currentIndex === index ? 'true' : undefined}
                aria-label={`Slide ${index + 1}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        )}

        {/* Slider controls */}
        {btnSlide && (
          <>
            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none rtl:rotate-180"
              onClick={prevSlide}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30">
                <svg className="w-4 h-4 text-white dark:text-gray-800" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                </svg>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none rtl:rotate-180"
              onClick={nextSlide}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30">
                <svg className="w-4 h-4 text-white dark:text-gray-800" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
              </span>
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default Slider;