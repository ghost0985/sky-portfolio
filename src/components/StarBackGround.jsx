import { useEffect, useState } from "react";

export const StarBackGround = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () =>
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    generateStars();
    generateMeteors();

    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: 0,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Light Background Layer */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isDarkMode ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background: "linear-gradient(to bottom, #93c5fd, #3b82f6, #fcd34d)",
        }}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full animate-pulse-subtle transition-colors duration-1000"
            style={{
              width: star.size + "px",
              height: star.size + "px",
              left: star.x + "%",
              top: star.y + "%",
              opacity: star.opacity,
              animationDuration: star.animationDuration + "s",
              backgroundColor: "rgba(213, 217, 224, 0.9)",
              boxShadow: "0 0 8px 2px rgba(59,130,246,0.4)",
            }}
          />
        ))}

        {meteors.map((meteor) => (
          <div
            key={meteor.id}
            className="absolute rounded-full animate-meteor transition-colors duration-1000"
            style={{
              width: meteor.size * 50 + "px",
              height: meteor.size * 2 + "px",
              left: meteor.x + "%",
              top: meteor.y + "%",
              animationDelay: meteor.delay + "s",
              animationDuration: meteor.animationDuration + "s",
              background:
                "linear-gradient(to right, #fcd34d, rgba(252,211,77,0))",
              boxShadow: "0 0 8px 3px rgba(252,211,77,0.4)",
            }}
          />
        ))}
      </div>

      {/* Dark Background Layer */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isDarkMode ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(ellipse at bottom, #0f172a 0%, #020617 100%)",
        }}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full animate-pulse-subtle transition-colors duration-1000"
            style={{
              width: star.size + "px",
              height: star.size + "px",
              left: star.x + "%",
              top: star.y + "%",
              opacity: star.opacity,
              animationDuration: star.animationDuration + "s",
              backgroundColor: "rgba(255,255,255,0.9)",
              boxShadow: "0 0 10px 2px rgba(255,255,255,0.4)",
            }}
          />
        ))}

        {meteors.map((meteor) => (
          <div
            key={meteor.id}
            className="absolute rounded-full animate-meteor transition-colors duration-1000"
            style={{
              width: meteor.size * 50 + "px",
              height: meteor.size * 2 + "px",
              left: meteor.x + "%",
              top: meteor.y + "%",
              animationDelay: meteor.delay + "s",
              animationDuration: meteor.animationDuration + "s",
              background:
                "linear-gradient(to right, white, rgba(255,255,255,0))",
              boxShadow: "0 0 10px 5px rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>

      {/* Global Fade Overlay */}
      <div
        className={`absolute inset-0 bg-black pointer-events-none transition-opacity duration-700 ${
          isDarkMode ? "opacity-40" : "opacity-0"
        }`}
      />
    </div>
  );
};
