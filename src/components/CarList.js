import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { removeCar, updateCar} from '../store/slices/carsSlice';


function CarList() {
  const dispatch = useDispatch();
  const {cars, name} = useSelector (({form, cars: { data, searchTerm}}) => {
    const filteredCars = data.filter((car)=>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      cars: filteredCars,
      name: form.name
    }
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id))
  };

  const handleCarUpdate = (car) => {
    dispatch(updateCar(car.id));
    alert(`${car.name} Güncellendi` );

  };

  const renderedCars = cars.map((car) => {

    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
      <p>
        {car.name} - ${car.cost}
      </p>
      <button className='button is-danger'
      onClick={() => handleCarDelete(car)}
      >
        Delete
      </button>
      <button className='buttonn' onClick={() => handleCarUpdate(car)}>
         Update
      </button>
      </div>
      
    )
    
  });
  return (
    <div className='car-list'>
      {renderedCars}
      <hr/>
      CarList
    </div>
    
  )
}

export default CarList
