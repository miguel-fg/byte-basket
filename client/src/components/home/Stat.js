import ScrollCounter from "../animation/scrollCounter";

const Stat = () => {
  return (
    <div className="stat">
      <h3>Our Inventory By The Numbers</h3>
      <div className="metric-wrapper">
        <div className="metric">
          <h4>Items in total</h4>
          <div className="stat-line"></div>
          <ScrollCounter counterId="counter1" targetNumber={1053} speed={10} />
        </div>
        <div className="metric">
          <h4>Top-Requested Item</h4>
          <div className="stat-line"></div>
          <p>Basmati Rice</p>
        </div>
        <div className="metric">
          <h4>Items added today</h4>
          <div className="stat-line"></div>
          <ScrollCounter counterId="counter1" targetNumber={129} speed={80} />
        </div>
      </div>
    </div>
  );
};

export default Stat;
