import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../src/store';
import ImageSlider from './components/ImageSlider';
import InfoContainer from './components/InfoContainer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const { data, isLoading, error } = useSelector((state) => state.product);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching data...</div>;
  }

  return (
    <>
      {Object.keys(data).length ? (
        <div className="app-container">
          <ImageSlider />
          <InfoContainer />
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

export default App;
