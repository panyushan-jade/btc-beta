export interface IFooter {
  name: string;
  urlName?: string;
  link?: string;
}

export interface IFooterList {
  title: string;
  children: IFooter[];
}

export const useFooter = () => {
  const footerList = reactive<IFooterList[]>([
    {
      title: 'Company',
      children: [
        {
          name: 'Careers',
        },
        {
          name: 'About Us',
          urlName: 'about',
        },
        {
          name: 'Press Kit',
          link: '/resources/BTC Beta.zip',
        },
      ],
    },
    {
      title: 'Participate',
      children: [
        {
          name: 'Projects',
        },
        {
          name: 'Quest',
        },
        {
          name: 'Portfolio',
        },
      ],
    },
    {
      title: 'Help',
      children: [
        {
          name: 'Gitbook',
          link: 'https://btcbetas-organization.gitbook.io/btc-beta-doc/',
        },
        {
          name: 'Terms & Conditions',
          link: '/resources/Terms&Conditions.pdf',
        },
        {
          name: 'Privacy Policy',
          link: '/resources/PrivacyPolicy.pdf',
        },
      ],
    },
  ]);

  return {
    footerList,
  };
};
