import React from 'react';
import SHOP_DATA from './shop.data';
import CollectoinPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectoinProps }) => (
          <CollectoinPreview key={id} {...otherCollectoinProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
