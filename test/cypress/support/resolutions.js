const screen = (width, height, type = 'desktop') => ({ width, height, type });
const label = (name, orientation) => ({ message: `Testing on ${name} screen in ${orientation} mode` });

module.exports = [
  {
    ...screen(1920, 1080),
    ...label('Full High Definition', 'landscape'),
  },
  {
    ...screen(1280, 720),
    ...label('High Definition', 'landscape'),
  },
  {
    ...screen(2560, 1600),
    ...label('MacBook', 'landscape'),
  },
  {
    ...screen(1180, 820),
    ...label('iPad', 'landscape'),
  },
  {
    ...screen(820, 1180, 'tablet'),
    ...label('iPad', 'portrait'),
  },
  {
    ...screen(844, 390, 'mobile'),
    ...label('iPhone', 'landscape'),
  },
  {
    ...screen(390, 840, 'mobile'),
    ...label('iPhone', 'portrait'),
  },
];
