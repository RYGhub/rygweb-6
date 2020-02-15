const path = require('path');


export default function (config, env, helpers) {
	config.module.rules.push(
		{
			test: /\.nojekyll$/,
			loader: 'file-loader',
			options: {
				name: '.nojekyll'
			}
		}
	);
	config.module.rules.push(
		{
			test: /CNAME$/,
			loader: 'file-loader',
			options: {
				name: 'CNAME'
			}
		}
	);
};
