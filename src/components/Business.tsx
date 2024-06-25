import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBusiness, deductBalance } from '../store/slices/business-slice';
import './styles/Business.css';
import { RootState } from '../store/store';

const Business: React.FC = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state: RootState) => state.business.balance);
  const businesses = useSelector((state: RootState) => state.business.businesses);

  const handleAddBusiness = (business: any) => {
    if (balance >= business.price) {
      dispatch(deductBalance(business.price));
      dispatch(addBusiness(business));
    } else {
      alert("Not enough balance to buy this business");
    }
  };

  const businessOptions = [
    { name: 'Soviet Press Kiosk', price: 100, profit: 10, productionTime: 5 },
    { name: 'Racketeering', price: 500, profit: 50, productionTime: 15 },
    { name: 'Black Market', price: 1000, profit: 100, productionTime: 30 },
    { name: 'Video Rental', price: 2000, profit: 200, productionTime: 60 }
  ];

  return (
    <div className="business-container">
      <h2>Buy a Business</h2>
      <div className="business-selection">
        {businessOptions.map((business, index) => (
          <button key={index} onClick={() => handleAddBusiness(business)}>
            <img src={`/assets/images/${business.name.toLowerCase().replace(/ /g, '-')}.png`} alt={business.name} />
            <span>{business.name}</span>
          </button>
        ))}
      </div>
      <h2>Owned Businesses</h2>
      <ul>
        {businesses.map((business, index) => (
          <li key={index}>
            <img src={`/assets/images/${business.name.toLowerCase().replace(/ /g, '-')}.png`} alt={business.name} />
            <span>{business.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Business;
