const label = (name, orientation) => `Testing on ${name} screen in ${orientation} mode`;

module.exports = [
  {
    width: 1920,
    height: 1080,
    type: 'desktop',
    message: label('Full High Definition', 'landscape'),
  },
  {
    width: 1280,
    height: 720,
    type: 'desktop',
    message: label('High Definition', 'landscape'),
  },
  {
    width: 2560,
    height: 1600,
    type: 'desktop',
    message: label('MacBook', 'landscape'),
  },
  {
    width: 1180,
    height: 820,
    type: 'desktop',
    message: label('iPad', 'landscape'),
  },
  {
    width: 820,
    height: 1180,
    type: 'tablet',
    message: label('iPad', 'portrait'),
  },
  {
    width: 844,
    height: 390,
    type: 'mobile',
    message: label('iPhone', 'landscape'),
  },
  {
    width: 390,
    height: 844,
    type: 'mobile',
    message: label('iPhone', 'portrait'),
  },
];
