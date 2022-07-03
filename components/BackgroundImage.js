import Image from 'next/image';
import { isMobile } from 'react-device-detect';

const BackgroundImage = ({
  src,
  alt,
  overlayBgClass,
  imgContainerClass,
  hoverScaleClass = false,
  mousePosition,
}) => {
  const scale = 0.3 / 30;

  const amountMovedX = mousePosition?.x * scale;
  const amountMovedY = mousePosition?.y * scale;

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <div className={`scale-105 w-full h-full ease-out `}>
        <div
          className={`relative w-full h-full duration-75`}
          style={
            !isMobile
              ? {
                  transform: `translateX(${amountMovedX}px) translateY(${amountMovedY}px)`,
                }
              : {}
          }
        >
          <div
            className={`absolute top-0 left-0 z-10 w-full h-full scale-105 ${
              overlayBgClass ? overlayBgClass : 'bg-zinc-900/70'
            } duration-700 ease-in-out `}
          ></div>
          <div className={imgContainerClass ? imgContainerClass : ''}>
            <Image
              src={src}
              alt={alt}
              layout="fill"
              objectFit="cover"
              quality={75}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;
