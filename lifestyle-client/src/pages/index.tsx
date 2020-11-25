import * as React from 'react';
import SEO from 'src/components/organisms/SEO';
import { graphql } from 'gatsby';
import NavBar from 'src/components/molecules/nav-bar';
import 'antd/dist/antd.css';
import 'src/assets/styles/index.css';
import MainPage from 'src/components/organisms/main';
import { useSelector, useDispatch } from 'react-redux';
import { requestProducts } from 'src/actions/redux';
import { RootState } from 'src/state';
import { defaultFilter } from 'src/utils/constants/defaultFilter';

const Home: React.FC<IHomeProps> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = data.site.siteMetadata.description;

  const [filters, setFilters] = React.useState<IFilters>(defaultFilter);
  const [priceValues, setPriceValues] = React.useState<number[]>([20, 50]);
  const [modalFilter, setModalFilter] = React.useState<boolean>(false);

  const onChangePrice = (value: number[]) => setPriceValues(value);

  const products: IProduct[] = useSelector((state: RootState) => state.productsReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestProducts(filters));
  }, [filters]);

  const onSearchCategory = (id: string) => {
    setFilters((currentFilters) => ({ ...currentFilters, category: id }));
  };

  const onTypingSearch = (text: string) => {
    setFilters((currentFilters) => ({ ...currentFilters, text: text }));
  };

  const onOpenModal = () => {
    setModalFilter(!modalFilter);
  };

  console.log(products);
  return (
    <React.Fragment>
      <SEO title={siteTitle} description={siteDescription} />
      <NavBar onSearchCategory={onSearchCategory} onTypingSearch={onTypingSearch} />
      <MainPage
        onChangePrice={onChangePrice}
        priceValues={priceValues}
        onOpenModal={onOpenModal}
        modal={modalFilter}
        data={products}
      />
    </React.Fragment>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
