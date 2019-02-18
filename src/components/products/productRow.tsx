import * as React from 'react';
import Popup from "reactjs-popup";
import { ProductEntity } from '../../model';

interface Props {
  	product: ProductEntity;
}

export const ProductRow: React.StatelessComponent<Props> = ({product}) => {
	return (
		<div className="col-sm-6 col-md-4 col-md-offset-5 mb-4 product-wrapper">
			<div className="product">
				<div>
					<span>{product.Naam}</span>
					<span>Potmaat: {product.Potmaat} | Hoogte: {product.Hoogte}</span>
					<Popup trigger={<button>Meer informatie</button>} position="bottom center" contentStyle={{ width: '500px' }}>
						<div>
							<div>Naam: {product.Naam}</div>
							<div>Code: {product.Code}</div>
							<div>Potmaat: {product.Potmaat}</div>
							<div>Hoogte: {product.Hoogte}</div>
							<div>VbnProductCode: {product.VbnProductCode}</div>
							<div>VbnProductNaam: {product.VbnProductNaam}</div>
							<div>ArtikelGroepNaam: {product.ArtikelGroepNaam}</div>
							<div>Etc...</div>
						</div>
					</Popup>
				</div>
				<img src={product.Fotos[0].UrlThumb360} />
			</div>
		</div>
	);
};
