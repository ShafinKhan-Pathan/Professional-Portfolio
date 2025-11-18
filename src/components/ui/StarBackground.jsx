const StarBackground = () => {
  return (
    <div className="stars-bg">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="shooting-star"
          style={{
            animationDelay: `${Math.random() * 4}s`,
            top: `${Math.random() * 60}%`,
            left: `${Math.random() * 60}%`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
