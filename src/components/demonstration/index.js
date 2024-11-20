import { Wrapper } from './styled';
import ProductCard from '../productCard';
import DemonstrationComponent from '../demonstrationComponent';

export default function Demonstrations({ visibleFooter, demonstration }) {
  return (
    <Wrapper>
      <DemonstrationComponent />
      <ProductCard
        visibleFooter={visibleFooter}
        productCard={demonstration.productCard}
      />
    </Wrapper>
  );
}
