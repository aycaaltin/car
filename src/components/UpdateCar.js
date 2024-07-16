import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateCar } from '../store/slices/carsSlice';

function UpdateCar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const car = useSelector((state) => state.cars.data.find((car) => car.id === id));

  const [name, setName] = useState(car ? car.name : '');
  const [cost, setCost] = useState(car ? car.cost : '');

  const handleUpdate = () => {
    dispatch(updateCar({ id, name, cost }));
    alert(`${name} Güncellendi`);
    navigate('/');
  };

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div>
      <h2>Update Car</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Cost:</label>
          <input
            type="text"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateCar;
