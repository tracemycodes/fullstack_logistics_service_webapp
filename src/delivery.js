// This file holds all the data used as mock up and content for this application, make changes to get your custom design or to make changes to the different sections.

//All image import files

//Landing page images for slider
import landingImg1 from './assets/industrial-port-container-yard.jpg';
import landingImg2 from './assets/ship-container-harbor.jpg';
import landingImg3 from './assets/factory-worker-landing.jpg';
import landingImg4 from './assets/aerial-landing.jpg';

// About section icons for carousel
import containerImg from './assets/icons/cargo-container-crane.svg';
import shipmentImg from './assets/icons/cruise.svg';

//Contact at the header
const contact = {
  email: 'mail@example.com',
  tel: '+145(2466)888',
};

//navbar component
const navContainer = {
  logo: '',
  navItems: ['home', 'services', 'company', 'pages', 'news', 'contact'],
};

//landing page info
const landingPageInfo = {
  title: 'Shipping Products Worldwide',
  text: 'with 100% Customer Satisfaction',
  slider: [
    {
      id: '01',
      img: landingImg1,
    },
    {
      id: '02',
      img: landingImg2,
    },
    {
      id: '03',
      img: landingImg3,
    },
    {
      id: '04',
      img: landingImg4,
    },
  ],
};

const aboutPageInfo = {
  title: 'transtics shipping corp',
  header: 'Taking care of you and your business all the way',
  text: 'Solving your supply chain needs from end to end taking the complexity out of container shipping. We are at the forefront of developing innovation',
  card: [
    {
      id: '01',
      icon: containerImg,
      header: 'Secured Containers',
      cardInfo:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, eius? Natus magni ab dignissimos officiis. Amet nam ad odio id fugiat voluptatum?',
    },
    {
      id: '02',
      icon: shipmentImg,
      header: 'Modern Vessels',
      cardInfo:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, eius? Natus magni ab dignissimos officiis. Amet nam ad odio id fugiat voluptatum?',
    },
    {
      id: '03',
      icon: shipmentImg,
      header: 'Packaged goods',
      cardInfo:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, eius? Natus magni ab dignissimos officiis. Amet nam ad odio id fugiat voluptatum?',
    },
  ],
  backgroundImg: '../../assets/map-mercator.svg',
};

const logisticSectionInfo = {
  header: 'Logistics Services',
  text: 'Solving your supply chain needs from end to end taking the complexity out of container shipping. We are at the forefront of developing innovation',
  tabGroup: [
    {
      id: '01',
      icon: '../../assets/icons/movers.svg',
      tabHeader: 'Business Logistics',
    },
    {
      id: '02',
      icon: '../../assets/icons/truck-loading.svg',
      tabHeader: 'Military Logistics',
    },
    {
      id: '03',
      icon: '../../assets/icons/reschedule-date.svg',
      tabHeader: 'Event Logistics',
    },
  ],
  cardInfo: [
    {
      id: '01',
      cardImg: '../../assets/truck-img.jpg',
      cardHeader: 'Truck',
      subHeader: 'Delivery',
      cardText:
        'We offer a Global Logistics Network with our Worldwide offices.',
    },
    {
      id: '02',
      cardImg: '../../assets/ship-cargo.jpg',
      cardHeader: 'Ocean',
      subHeader: 'Shipping',
      cardText:
        'We offer a Global Logistics Network with our Worldwide offices.',
    },
    {
      id: '03',
      cardImg: '../../assets/plane-flying.jpg',
      cardHeader: 'Air',
      subHeader: 'Freight',
      cardText:
        'We offer a Global Logistics Network with our Worldwide offices.',
    },
    {
      id: '04',
      cardImg: '../../assets/truck-img.jpg',
      cardHeader: 'Cargo',
      subHeader: 'Delivery',
      cardText:
        'We offer a Global Logistics Network with our Worldwide offices.',
    },
    {
      id: '05',
      cardImg: '../../assets/ship-cargo.jpg',
      cardHeader: 'Storage',
      subHeader: 'Facilities',
      cardText:
        'We offer a Global Logistics Network with our Worldwide offices.',
    },
    {
      id: '06',
      cardImg: '../../assets/plane-flying.jpg.jpg',
      cardHeader: 'Warehousing',
      subHeader: 'Facilities',
      cardText:
        'We offer a Global Logistics Network with our Worldwide offices.',
    },
  ],
};

const trackSectionInfo = {
  header: 'Track your shipment with our latest shipment Tracker',
  trackImg: '../../assets/31226.jpg',
  h2: 'Global Leader of the Logistics',
  h3: 'All our efforts and investments are geared towards offering better solutions.',
  text: 'Solving Your supply chain needs from end to end, taking the complexity out of container shipping. We are at the forefront of developing innovative supply chain solutions.',
};

const shipSmartInfo = {
  header: 'Ship Smart with Transtics',
  text: 'Solving Your supply chain needs from end to end, taking the complexity out of container shipping. We are at the forefront of developing innovative supply chain solutions',
  img: '../../assets/11045.jpg',
};

const meritsInfo = {
  img: '../../assets/habour-img.jpg',
  slider: [
    {
      header: 'Our Advantages',
      meritText: [
        {
          id: '01',
          icon: '../../assets/icons/forklift.svg',
          h2: 'Warehouse Facility',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia exercitationem vitae, veritatis quidem velit!',
        },
        {
          id: '02',
          icon: '../../assets/icons/female-services-support.svg',
          h2: 'Customer Satisfaction',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia exercitationem vitae, veritatis quidem velit!',
        },
        {
          id: '03',
          icon: '../../assets/icons/road-map.svg',
          h2: 'Real-time Cargo Tracking',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia exercitationem vitae, veritatis quidem velit!',
        },
      ],
    },
    // next slider

    {
      header: 'Our Advantages',
      meritText: [
        {
          id: '01',
          icon: '../../assets/icons/forklift.svg',
          h2: 'Warehouse Facility',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia exercitationem vitae, veritatis quidem velit!',
        },
        {
          id: '02',
          icon: '../../assets/icons/female-services-support.svg',
          h2: 'Customer Satisfaction',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia exercitationem vitae, veritatis quidem velit!',
        },
        {
          id: '03',
          icon: '../../assets/icons/road-map.svg',
          h2: 'Real-time Cargo Tracking',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia exercitationem vitae, veritatis quidem velit!',
        },
      ],
    },

    // next slider

    {
      header: 'Our Advantages',
      meritText: [
        {
          id: '01',
          icon: '../../assets/icons/forklift.svg',
          h2: 'Warehouse Facility',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia exercitationem vitae, veritatis quidem velit!',
        },
        {
          id: '02',
          icon: '../../assets/icons/female-services-support.svg',
          h2: 'Customer Satisfaction',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia exercitationem vitae, veritatis quidem velit!',
        },
        {
          id: '03',
          icon: '../../assets/icons/road-map.svg',
          h2: 'Real-time Cargo Tracking',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia exercitationem vitae, veritatis quidem velit!',
        },
      ],
    },
  ],
};

const recentNewsInfo = {
  header: 'Recent News',
  text: 'Solving your supply chain needs from end to end, taking the complexity out of container shipping We are the forefront of developing innovation.',
  slider: [
    {
      id: '01',
      img: '',
      h3: 'Denso invests $10mn in india distribution',
      p1: 'By HARRY MENEAR - Mar 16, 2021 - 9:00AM',
    },
    {
      id: '02',
      img: '',
      h3: 'Denso invests $10mn in india distribution',
      p1: 'By HARRY MENEAR - Mar 16, 2021 - 9:00AM',
    },
    {
      id: '03',
      img: '',
      h3: 'Denso invests $10mn in india distribution',
      p1: 'By HARRY MENEAR - Mar 16, 2021 - 9:00AM',
    },
  ],
};

export {
  recentNewsInfo,
  meritsInfo,
  shipSmartInfo,
  trackSectionInfo,
  logisticSectionInfo,
  aboutPageInfo,
  landingPageInfo,
  navContainer,
  contact,
};
