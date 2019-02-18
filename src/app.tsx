import * as React from 'react';

export const App: React.StatelessComponent<{}> = (props) => {
	return (
		<div className="row">
			{props.children}
		</div>
	);
}
