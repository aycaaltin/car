import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store/slices/carsSlice';
import { useNavigate } from 'react-router-dom';

function CarList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      cars: filteredCars,
      name: form.name
    };
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const handleCarUpdate = (car) => {
    navigate(`/update/${car.id}`);
  };

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id} className={`panel ${bold ? 'bold' : ''}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button className='button is-danger' onClick={() => handleCarDelete(car)}>
          Delete
        </button>
        <button className='button' onClick={() => handleCarUpdate(car)}>
          Update
        </button>
      </div>
    );
  });

  return (
    <div className='car-list'>
      {renderedCars}
      <hr />
      CarList
    </div>
  );
}

export default CarList;
