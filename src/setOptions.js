const allowedProperties = [
  'cMapUrl',
  'cMapPacked',
  'disableWorker',
  'workerSrc',
];

const makeSetOptions = pdfjs => (options, setDangerously) => {
  if (!(options instanceof Object)) {
    return;
  }

  /* eslint-disable no-param-reassign */
  Object.keys(options)
    .filter(property => setDangerously || allowedProperties.includes(property))
    .forEach((property) => {
      pdfjs.PDFJS[property] = options[property];
    });
};

export default makeSetOptions;
