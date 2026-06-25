import type { Step } from "../types";

export const productData: Step[] = [
  {
    id: 'cameras',
    title: 'Choose your cameras',
    icon: '📷',
    products: [
      {
        id: 'Wyze-cam',
        name: 'Wyze Cam v4',
        description: 'The clearest Wyze Cam ever made.',
        price: 27.98,
        compareAtPrice: 35.98,
        badge: 'Save 22%',
        category: 'cameras',
        variants: [
          { id: 'white', label: 'White', color: '#FFFFFF', image: '/src/assets/images/arlo-cam-white.png' },
          { id: 'black', label: 'Black', color: '#000', image: '/src/assets/images/arlo-cam-black.png' },
          { id: 'grey', label: 'Grey', color: '#999', image: '/src/assets/images/arlo-cam-grey.png' },
        ],
        defaultVariant: 'white'
      },
      {
        id: 'outdoor-cam',
        name: 'Outdoor Camera',
        description: 'Weatherproof 1080p HD outdoor camera with night vision',
        price: 149.99,
        compareAtPrice: 179.99,
        badge: 'Save 17%',
        category: 'cameras',
        variants: [
          { id: 'white', label: 'White', color: '#FFFFFF', image: '/src/assets/images/arlo-cam-white.png' },
          { id: 'black', label: 'Black', color: '#1A1A1A', image: '/src/assets/images/arlo-cam-black.png' }
        ],
        defaultVariant: 'white'
      },
      {
        id: 'doorbell',
        name: 'Video Doorbell',
        description: 'HD video doorbell with motion detection',
        price: 79.99,
        category: 'cameras',
        variants: [
          { id: 'white', label: 'White', color: '#FFFFFF', image: '/src/assets/images/arlo-cam-white.png' },
        ],
      }
    ]
  },
  {
    id: 'plan',
    title: 'Choose your plan',
    icon: '📋',
    products: [
      {
        id: 'basic-plan',
        name: 'Basic Plan',
        description: '30-day video storage for 1 camera',
        price: 5.99,
        category: 'plan'
      },
      {
        id: 'premium-plan',
        name: 'Premium Plan',
        description: '60-day video storage for unlimited cameras',
        price: 15.99,
        compareAtPrice: 19.99,
        badge: 'Save 20%',
        category: 'plan'
      }
    ]
  },
  {
    id: 'sensors',
    title: 'Choose your sensors',
    icon: '🔒',
    products: [
      {
        id: 'door-sensor',
        name: 'Door/Window Sensor',
        description: 'Magnetic sensor for doors and windows',
        price: 29.99,
        category: 'sensors',
        variants: [
          { id: 'white', label: 'White', color: '#FFFFFF', image: '/src/assets/images/arlo-cam-white.png' },
          { id: 'brown', label: 'Brown', color: '#8B4513', image: '/src/assets/images/arlo-cam-black.png' }
        ],
        defaultVariant: 'white'
      },
      {
        id: 'motion-sensor',
        name: 'Motion Sensor',
        description: 'Passive infrared motion detector',
        price: 39.99,
        category: 'sensors'
      }
    ]
  },
  {
    id: 'accessories',
    title: 'Add extra protection',
    icon: '🛡️',
    products: [
      {
        id: 'floodlight',
        name: 'Floodlight Camera',
        description: 'Security camera with built-in floodlight',
        price: 199.99,
        compareAtPrice: 249.99,
        badge: 'Save 20%',
        category: 'accessories'
      },
      {
        id: 'smoke-detector',
        name: 'Smoke Alarm',
        description: 'Smart smoke and CO detector',
        price: 49.99,
        category: 'accessories'
      }
    ]
  }
];