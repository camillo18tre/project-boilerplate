import { useMousePosition } from 'react-haiku';

const Cursor = () => {
  const { x, y } = useMousePosition();

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-20 h-20 rounded-full border border-cream/30 bg-transparent duration-100 -mt-10 -ml-10 pointer-events-none`}
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
    />
  );
};

export default Cursor;
