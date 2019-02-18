import { ProductEntity } from '../../model';
import { products } from './mockData';

const baseURL = 'https://api.floraxchange.nl/artikel?relatieid=215';

const fetchProducts = (): Promise<ProductEntity[]> => {
  	return Promise.resolve(products);
};

const fetchProductsAsync = (): Promise<ProductEntity[]> => {
 	const productsURL = `${baseURL}`;

  	return fetch(productsURL)
		.then((response) => (response.json()))
		.then(mapToProducts);
};

const mapToProducts = (floraProducts: any[]): ProductEntity[] => {
  	return floraProducts.map(mapToProduct);
};

const mapToProduct = (floraProduct): ProductEntity => {
	return {
		AanbodRegels: floraProduct.AanbodRegels,
		ArtikelGroep: floraProduct.ArtikelGroep,
		ArtikelGroepNaam: floraProduct.ArtikelGroepNaam,
		Beladingen: floraProduct.Beladingen,
		Code: floraProduct.Code,
		Eigenschappen: floraProduct.Eigenschappen,
		Fotos: floraProduct.Fotos,
		Hoogte: floraProduct.Hoogte,
		ID: floraProduct.ID,
		Naam: floraProduct.Naam,
		Potmaat: floraProduct.Potmaat,
		PotmaatNumeriek: floraProduct.PotmaatNumeriek,
		VbnProductCode: floraProduct.VbnProductCode,
		VbnProductNaam: floraProduct.VbnProductNaam,
	};
};

export const productAPI = {
	fetchProducts,
	fetchProductsAsync,
};
