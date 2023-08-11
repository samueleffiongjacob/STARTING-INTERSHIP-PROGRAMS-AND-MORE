const path = require('path');

export default {
    entry: './server.ts',
    mode: 'production',
    target: 'node',
    output: {
        path: path.resolve(__dirname, '.'),
        foldername: 'build'
    }
}