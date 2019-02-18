import * as React from 'react';
import { productAPI } from '../../api/product';
import { ProductRow } from './productRow';

export class ProductsPage extends React.Component<any, any> {
    constructor(props) {
        super(props);
        // init products state
        this.state = { products: [] };
        // init products filtered state
        this.state = { productsFilter: [] };
        // bind search function
        this.filterList = this.filterList.bind(this);
    }

    public componentDidMount() {
        // fetch api and update states
        productAPI.fetchProductsAsync()
        .then((products) => {
            this.setState({ products });
            this.setState({ productsFilter: products });
        });
    }

    public filterList(event) {
        // temp let to keep state
        let updatedList = this.state.products;

        // filter list on potmaat with keyboard input
        updatedList = updatedList.filter((item) => {
            return item.PotmaatNumeriek === parseInt(event.target.value);
        });

        // if search is empty, return init state
        // else update state with search results
        if (!updatedList.length && event.target.value === '') {
            this.setState({ productsFilter: this.state.products });
        } else {
            this.setState({ productsFilter: updatedList });
        }
    }

    public render() {
        // render the whole thing including a search box
        return (
            <div>
                <div className="header">
                    <img src={require('../../img/floraxchange-logo.jpg')} className="logo" />
                    <input type="text" placeholder="Zoek op potmaat" onChange={this.filterList} />
                </div>
                <div className="row">
                    {
                        // map products in UI
                        this.state.productsFilter.map((product) =>
                        <ProductRow
                            key={product.ID}
                            product={product}
                        />
                        )
                    }
                </div>
            </div>
        );
    }
};
