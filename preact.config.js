const path = require('path');


export default (config, env, helpers) => {
	config.module.loaders[4].include = [
		path.resolve(__dirname, 'src', 'routes'),
		path.resolve(__dirname, 'src', 'components'),
		path.resolve(__dirname, 'src', 'meta'),
	];

	config.module.loaders[5].exclude = [
		path.resolve(__dirname, 'src', 'routes'),
		path.resolve(__dirname, 'src', 'components'),
		path.resolve(__dirname, 'src', 'meta'),
	];

	config.module.loaders.push(
		{
			test: /\.nojekyll$/,
			loader: 'file-loader',
			options: {
				name: '.nojekyll'
			}
		}
	);
	config.module.loaders.push(
		{
			test: /CNAME$/,
			loader: 'file-loader',
			options: {
				name: 'CNAME'
			}
		}
	);
};
