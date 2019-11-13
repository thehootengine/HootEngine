"use strict";

const webpack = require('webpack');
const exec = require('child_process').exec;

module.exports = {
    mode: 'development',
    context: `${__dirname}/src/`,
    entry: {
        hoot: './hoot.js'
    },
    performance: {
        hints: false
    },
    output: {
        path: `${__dirname}/build/`,
        filename: '[name].js',
        library: 'Hoot',
        libraryTarget: 'umd',
        sourceMapFilename: '[file].map',
        devtoolModuleFilenameTemplate: 'webpack:///[resource-path]', // string
        devtoolFallbackModuleFilenameTemplate: 'webpack:///[resource-path]?[hash]', // string
        umdNamedDefine: true
    }
};