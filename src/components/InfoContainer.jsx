import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { addVariant } from '../store/slices/selectedVariantSlice';

function InfoContainer() {
  const { data } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  let product = data.product;
  let allVariants = data.product.variants;
  let colors = data.product.options[0].values;
  let sizes = data.product.options[1].values
    .map((size) => parseInt(size))
    .sort((a, b) => a - b);
  let widths = data.product.options[2].values;

  const [myVariant, setmyVariant] = useState({});

  const [variantPrice, setvariantPrice] = useState('83-103');
  const [variantID, setvariantID] = useState('Select all 3 options');

  const selectHandler = (e) => {
    let option = e.target.dataset.index;
    let value = e.target.value;
    setmyVariant((prevVariant) => {
      return {
        ...prevVariant,
        [option]: value,
      };
    });
  };

  const getColor = (e) => {
    console.log(e.target.value);
    dispatch(addVariant({ color: e.target.value }));
  };

  const findTheVariant = () => {
    console.log(myVariant);
    // dispacth an action to update the global state to chnage the image in ImageSlider Component
    // dispatch(addVariant(myVariant));
    let foundVariant = allVariants.filter((v) => {
      if (
        v.option1 === myVariant.option1 &&
        v.option2 === myVariant.option2 &&
        v.option3 === myVariant.option3
      ) {
        return v;
      }
    });

    setvariantID(foundVariant[0].id);
    setvariantPrice(foundVariant[0].price);
  };

  useEffect(() => {
    if (Object.keys(myVariant).length === 3) {
      findTheVariant();
    }
  }, [myVariant]);

  return (
    <div className="info-container">
      <div className="header-box">
        <h3>{product.title}</h3>
        <p>Stratford</p>
        <p>£ {variantPrice}</p>
      </div>
      <p className="line">_____________________</p>
      <div className="color-box">
        <p>
          COLOUR <small> {myVariant.option1}</small>
        </p>
        <div id="theme-picker-section" className="example-section">
          {colors.map((color) => (
            <input
              type="radio"
              name="theme"
              data-index="option1"
              value={color}
              key={color}
              onChange={selectHandler}
              onClick={getColor}
            ></input>
          ))}
        </div>
      </div>
      <div className="size-box">
        <p>SIZE</p>
        <div className="size-section">
          {sizes.map((size) => (
            <div className="size-radio" key={size}>
              <input
                type="radio"
                name="size"
                value={size}
                id={size}
                data-index="option2"
                onChange={selectHandler}
              />
              <label htmlFor={size}>{size}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="width-box">
        <p>WIDTH</p>
        <div className="width-section">
          {widths.sort().map((width) => (
            <div className="width-radio" key={width}>
              <input
                type="radio"
                name="width"
                value={width}
                id={width}
                data-index="option3"
                onChange={selectHandler}
              />
              <label htmlFor={width}>{width}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="print-box">
        <p className="green">{variantID}</p>
      </div>
    </div>
  );
}

export default InfoContainer;
