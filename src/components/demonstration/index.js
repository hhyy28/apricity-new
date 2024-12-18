import { Wrapper } from './styled';
import DemonstrationComponent from '../demonstrationComponent';
import ProductCardShort from '../productCardShort';

export default function Demonstrations({ visiblefooter, demonstration }) {
  return (
    <Wrapper>
      <DemonstrationComponent />
      <ProductCardShort
        visiblefooter={visiblefooter}
        productCard={demonstration.productCard}
      />
    </Wrapper>
  );
}
