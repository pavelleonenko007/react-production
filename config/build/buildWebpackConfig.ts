import { BuildOptions } from './types/config';
import { Configuration } from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): Configuration {
	const { mode, paths, isDev } = options;
	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
		},
		devtool: isDev ? 'inline-source-map' : undefined,
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(),
		plugins: buildPlugins(options),
		devServer: isDev ? buildDevServer(options) : undefined,
	};
}
