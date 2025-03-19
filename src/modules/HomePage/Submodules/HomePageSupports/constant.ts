export const HOME_PAGE_SUPPORTS = [
  {
    button: {
      icon: 'discord',
      text: 'Join Community on Discord'
    },
    description: 'Hop into our Discord for tips from our community.',
    gradient: `radial-gradient(at 100% 100%, hsla(343,44%,95%,1) 0px, transparent 50%),
radial-gradient(at 0% 0%, hsla(34,28%,90%,1) 0px, transparent 50%),
radial-gradient(at 51% 50%, hsla(262,28%,94%,1) 0px, transparent 50%),
radial-gradient(at 0% 99%, hsla(355,83%,86%,1) 0px, transparent 50%),
radial-gradient(at 100% 0%, hsla(197,93%,81%,1) 0px, transparent 50%)`,
    illustration: [
      '/illustration/home-page/supports/illustration-discord-desktop.png',
      '/illustration/home-page/supports/illustration-discord-tablet.png',
      '/illustration/home-page/supports/illustration-discord-msite.png'
    ],
    title: 'Discord Community'
  },
  {
    button: {
      icon: 'mail-fill',
      text: 'Get Support via Email'
    },
    description: 'Reach out via email directly to CashBound team.',
    gradient: `radial-gradient(at 51% 51%, hsla(0,30%,95%,1) 0px, transparent 50%),
radial-gradient(at 100% 0%, hsla(281,89%,92%,1) 0px, transparent 50%),
radial-gradient(at 100% 100%, hsla(24,78%,81%,1) 0px, transparent 50%),
radial-gradient(at 0% 0%, hsla(316,62%,89%,1) 0px, transparent 50%),
radial-gradient(at 0% 100%, hsla(9,100%,82%,1) 0px, transparent 50%)`,
    illustration: [
      '/illustration/home-page/supports/illustration-email-desktop.png',
      '/illustration/home-page/supports/illustration-email-tablet.png',
      '/illustration/home-page/supports/illustration-email-msite.png'
    ],
    title: 'Email Support'
  }
] as const;
