import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import './styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const businesses = useSelector((state: RootState) => state.business.businesses);
  const balance = useSelector((state: RootState) => state.business.balance);

  return (
    <div className="dashboard-container">
      <h2>Welcome to the 90s Economic Strategy Game</h2>
      <div className="balance">Balance: {balance} TON</div>
      <h2>Your Businesses</h2>
      <ul className="business-list">
        {businesses.map((business, index) => (
          <li key={index}>
            <img src={`/assets/images/${business.name.toLowerCase().replace(/ /g, '-')}.png`} alt={business.name} />
            <span>{business.name}</span>
            <div>Profit: {business.profit} TON</div>
            <div>Production Time: {business.productionTime} minutes</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
