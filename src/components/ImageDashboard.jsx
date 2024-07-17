import  { useEffect, useState } from 'react';

const App = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScrollY = 789;
      const newScale = scrollY >= maxScrollY ? 1.1 : 0.5 + scrollY / 1000; // 1.289 is 0.5 + 789 / 1000
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full h-[100vh]">
      <img
        src="public/Nilesh.svg"
        alt="Placeholder"
        style={{ transform: `scale(${scale})` }}
        className="transition-transform duration-200 rounded-custom32px w-[50vw]"
      />
    </div>
  );
};

export default App;
