export default function () {
  return {
    isMobileMenuShown: false,
    links: [
      { route: 'Home', label: 'Home' },
      { route: 'Settings', label: 'Settings', onlyMobile: true },
    ],
  };
}
