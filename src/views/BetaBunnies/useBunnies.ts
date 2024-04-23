import { IData } from '@cps/SwitchContent/index.vue';

export interface IBunnies {
  face: string;
  name: string;
  price: string;
  getStartLink: string;
  content: IData[];
}

export const useBunnies = () => {
  const bunniesList = reactive<IBunnies[]>([
    {
      face: require('@img/nfts/nft-1.png'),
      name: 'Alpha Aurum Bunnies',
      price: '0.15BTC',
      getStartLink: 'https://t.me/Alpha_Aurum_Bunnies',
      content: [
        {
          type: 'Description',
          text: [
            `Alpha Aurum Bunnies represent the pinnacle of the Beta Bunnies NFT hierarchy. These are the elite, the crème 
          de la crème of the collection, embodying the utmost rarity and prestige. Each Alpha Aurum Bunny is a 
          masterpiece of digital art, adorned with golden hues and regal features that signify their top-tier status. 
          Owners of an Alpha Aurum Bunny aren't just holding a digital asset; they hold a symbol of leadership and 
          exclusivity within the BTC Beta ecosystem. Their scarcity and unique attributes make them a sought-after 
          asset for collectors and enthusiasts who want to distinguish themselves in the digital realm.`,
          ],
          active: true,
        },
        {
          type: 'Benefits',
          text: [
            `Obtain $10,000 worth of platform tokens based on a platform valuation of $5 million, distributed over 10 weeks with 42,000 tokens airdropped each week.`,
            `Additional tokens for community building incentives:`,
            ` · Complete weekly community operation tasks to receive 5,000 platform tokens each week as a builder incentive.`,
            ` · Completing the community's weekly task of adding new addresses can earn you 3% of the existing community tokens holdings, with a total weekly reward cap of 50,000 tokens.`,
          ],
          active: false,
        },
      ],
    },

    {
      face: require('@img/nfts/nft-2.png'),
      name: 'Cryptic Carrot Bunnies',
      price: '0.05BTC',
      getStartLink: 'https://t.me/Cryptic_Carrot_Bunnies',
      content: [
        {
          type: 'Description',
          text: [
            `In contrast, Cryptic Carrot Bunnies are the playful and abundant tier within the Beta Bunnies NFT line. 
          These Bunnies, while still desirable and valuable, are designed to be more accessible, encouraging widespread 
          participation in the BTC Beta platform. Each Cryptic Carrot Bunny boasts its own charming and quirky traits, 
          wrapped in bright, carrot-themed colors that resonate with fun and approachability. Holding a Cryptic 
          Carrot Bunny is a sign of being part of a vibrant and growing community, representing the dynamic and 
          democratic spirit of the BTC Beta universe.`,
          ],
          active: true,
        },
        {
          type: 'Benefits',
          text: [
            `Obtain platform tokens valued at $3,000 based on a $5 million platform valuation, distributed over 10 weeks with 12,600 tokens airdropped each week.`,
            `Additional tokens for community building incentives:`,
            ` · Complete weekly community operation tasks to receive 1,000 platform tokens each week as a builder incentive.`,
            ` · Completing the community's weekly task of adding new addresses can earn you 1% of the existing community tokens holdings, with a total weekly reward cap of 10,000 tokens.`,
          ],
          active: false,
        },
      ],
    },
  ]);

  return {
    bunniesList,
  };
};
