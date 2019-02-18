import * as React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { App } from './app';
import { ProductsPage } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
	return (
		<HashRouter>
			<div className="container">
				<Route path="/" component={App} />
				<Switch>
					<Route exact path="/" component={ProductsPage} />
				</Switch>
			</div>
		</HashRouter>
	);
}
