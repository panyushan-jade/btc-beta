export const useRoadmap = () => {
  const roadmapList = reactive([
    {
      title: 'Q2.2024',
      content: [
        'Beta Bunnies NFTs launched',
        'PUBLIC CASTING OF BTC BETA EXCLUSIVE TOKEN BEGINS',
        'BTC Beta IDO platform launched and officially accepts project coin applications',
      ],
    },

    {
      title: 'Q3.2024',
      content: [
        'Continue to optimize the IDO platform to attract more projects and investors.',
        'START COMMUNITY GOVERNANCE MECHANISM, ALLOWING PLATFORM TOKEN HOLDERS TO VOTE ON KEY PLATFORM MATTERS.',
        'Introduce decentralized indexing protocol to enhance data querying and handling abilities of developers.',
      ],
    },

    {
      title: 'Q4.2024',
      content: [
        'Develop a protocol for seamless cross-chain transfer between BRC20 and ERC20 assets.',
        'Launch smart contract audit services to enhance the security of IDO projects on the platform.',
        'Develop new features, such as enhanced AI query services, to improve user experience.',
      ],
    },

    {
      title: 'Q1.2025',
      content: [
        'Further expand the development of the cross-chain protocol, supporting more EVM networks.',
        'Research and design Bitcoin Layer 2 network architecture in preparation for the implementation of smart contract functionality.',
        'Add new partnership relationships to expand the service range of the ecosystem.',
      ],
    },
  ]);

  return {
    roadmapList,
  };
};
