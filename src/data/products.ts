import type { Step } from "../types";

export const productData: Step[] = [
  {
    id: 'cameras',
    title: 'chooseYourCameras',
    icon: '📷',
    products: [
      {
        id: 'wyze-cam-v4',
        name: 'Wyze Cam v4',
        description:
          'The clearest Wyze Cam ever made. The clearest Wyze Cam ever made. The clearest Wyze Cam ever made.',
        price: 27.98,
        compareAtPrice: 35.98,
        category: 'cameras',
        variants: [
          {
            id: 'white',
            label: 'White',
            color: '#FFF',
            image: new URL('/src/assets/images/arlo-cam-white.png', import.meta.url).href,
          },
          {
            id: 'black',
            label: 'Black',
            color: '#000',
            image: new URL('/src/assets/images/arlo-cam-black.png', import.meta.url).href,
          },
          {
            id: 'grey',
            label: 'Grey',
            color: '#AAAAAA',
            image: new URL('/src/assets/images/arlo-cam-grey.png', import.meta.url).href,
          },
        ],
        defaultVariant: 'white',
      },
      {
        id: 'wyze-cam-v3',
        name: 'Wyze Cam Pan V3',
        description: '360° pan and 180° tilt security camera. Learn More',
        price: 34.98,
        compareAtPrice: 39.98,
        category: 'cameras',
        variants: [
          {
            id: 'white',
            label: 'White',
            color: '#FFF',
            image: new URL('/src/assets/images/wyze-cam-pan-v3-white.png', import.meta.url).href,
          },
          {
            id: 'black',
            label: 'Black',
            color: '#1A1A1A',
            image: new URL('/src/assets/images/wyze-cam-pan-v3-black.png', import.meta.url).href,
          },
        ],
        defaultVariant: 'white',
      },
      {
        id: 'wyze-cam-floodlight-v2',
        name: 'Wyze Cam Floodlight v2',
        description: '2K floodlight camera with a 160° wide-angle view for your garage.',
        price: 69.98,
        compareAtPrice: 89.98,
        category: 'cameras',
        variants: [
          {
            id: 'white',
            label: 'White',
            color: '#FFF',
            image: new URL('/src/assets/images/wyze-cam-floodlight-v2-white.png', import.meta.url).href,
          },
          {
            id: 'black',
            label: 'Black',
            color: '#000',
            image: new URL('/src/assets/images/wyze-cam-floodlight-v2-black.png', import.meta.url).href,
          },
        ],
        defaultVariant: 'white',
      },
      {
        id: 'wyze-duo-cam-doorbell',
        name: 'Wyze Duo Cam Doorbell',
        description: 'Two cameras. Two views. Double the porch protection.',
        price: 69.98,
        category: 'cameras',
        variants: [
          {
            id: 'black',
            label: 'Black',
            color: '#000',
            image: new URL('/src/assets/images/wyze-duo-cam-doorbell-black.png', import.meta.url).href,
          },
        ],
        defaultVariant: 'black',
      },
      {
        id: 'wyze-battery-cam-pro',
        name: 'Wyze Battery Cam Pro',
        description:
          'Protect anywhere. See everything in 2.5K HDR. No power outlet or electrician needed.',
        price: 89.98,
        category: 'cameras',
        variants: [
          {
            id: 'white',
            label: 'White',
            color: '#FFF',
            image: new URL('/src/assets/images/wyze-battery-cam-pro-white.png', import.meta.url).href,
          },
          {
            id: 'black',
            label: 'Black',
            color: '#000',
            image: new URL('/src/assets/images/wyze-battery-cam-pro-black.png', import.meta.url).href,
          },
        ],
        defaultVariant: 'white',
      },
    ],
  },

  {
    id: 'plan',
    title: 'chooseYourPlan',
    icon: '📋',
    products: [
      {
        id: 'cam-unlimited',
        name: 'Cam Unlimited',
        description:
          'Unlock unlimited camera support, extended cloud storage, AI-powered event detection, and priority customer support.',
        price: 15.99,
        priceSufex: '/mo',
        compareAtPrice: 19.99,
        category: 'plan',
        variants: [
          {
            id: 'black',
            label: 'Black',
            color: '#000',
            image: new URL('/src/assets/icons/wyze-logo.svg', import.meta.url).href,
          },
        ],
      },
    ],
  },

  {
    id: 'sensors',
    title: 'chooseYourSensors',
    icon: '🔒',
    products: [
      {
        id: 'wyze-scale-ultra',
        name: 'Wyze Scale Ultra',
        description: 'Magnetic sensor for doors and windows',
        price: 23.99,
        compareAtPrice: 47.99,
        category: 'sensors',
        variants: [
          {
            id: 'black',
            label: 'Black',
            color: '#000',
            image: new URL('/src/assets/images/wyze-scale-ultra.webp', import.meta.url).href,
          },
        ],
        defaultVariant: 'black',
      },
      {
        id: 'motion-sensor',
        name: 'Motion Sensor',
        description: 'Passive infrared motion detector',
        price: 39.99,
        category: 'sensors',
        variants: [
          {
            id: 'white',
            label: 'White',
            color: '#fff',
            image: new URL('/src/assets/images/wyze-sense-motion.webp', import.meta.url).href,
          },
        ],
      },
    ],
  },

  {
    id: 'accessories',
    title: 'addExtraProtection',
    icon: '🛡️',
    products: [
      {
        id: 'micro-sd',
        name: 'Wyze Cam V4 32GB MicroSD Card',
        description: 'Security camera storage expansion',
        price: 199.99,
        compareAtPrice: 249.99,
        category: 'accessories',
        variants: [
          {
            id: 'black',
            label: 'Black',
            color: '#000',
            image: new URL('/src/assets/images/wyze-microsd.webp', import.meta.url).href,
          },
        ],
        defaultVariant: 'black',
      },
      {
        id: 'wyze-outdoor-power-adapter',
        name: 'Wyze Outdoor Power Adapter',
        description:
          'Ready for rain, snow, or shine. Works with multiple Wyze camera models.',
        price: 49.99,
        category: 'accessories',
        variants: [
          {
            id: 'white',
            label: 'White',
            color: '#000',
            image: new URL('/src/assets/images/wyze-outdoor-power-adapter.webp', import.meta.url).href,
          },
        ],
        defaultVariant: 'white',
      },
    ],
  },
];