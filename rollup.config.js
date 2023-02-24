import typescript2 from 'rollup-plugin-typescript2';

const createOutputOptions = (options) => ({
  exports: 'named',
  name: 'deflight',
  ...options,
});

const options = {
  input: './src/index.ts',
  output: [
    createOutputOptions({
      file: './dist/index.js',
      format: 'commonjs',
    }),
    createOutputOptions({
      file: './dist/index.cjs',
      format: 'commonjs',
    }),
    createOutputOptions({
      file: './dist/index.mjs',
      format: 'esm',
    }),
    createOutputOptions({
      file: './dist/index.esm.js',
      format: 'esm',
    }),
  ],
  plugins: [
    typescript2({
      clean: true,
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true,
    }),
  ],
};

export default options;
