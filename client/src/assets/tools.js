import electronics1 from "./electronics_1.jfif";
import electronics2 from "./electronics_2.jfif";
import electronics3 from "./electronics_3.jfif";
import electronics4 from "./electronics_4.jfif";
import electronics5 from "./electronics_5.jfif";
// import bars_solid from "./bars.svg";
import bell_regular from "./bell-regular.svg";
import user_solid from "./user_solid.svg"
import cart_shopping from "./cart-shopping-solid.svg";
import ZeeZade from "./ZeeZade_logo.jfif";
import samsung2 from "./samsung2.jfif";
import samsung from "./samsung.jfif";
import main_bg from "./main_bg2.jfif";
import itel_phone from "./itel_phone.jfif";
import headset from "./headset.jfif";
import blinder from "./blinder.jfif";
import electronics_bg from "./electronic_bg.jfif";
import arrow from "./arrow-right-solid.svg";
import star from "./star-regular.svg";
import star_solid from "./star-solid.svg";
import electric_cooker from "./electric_cooker.jfif";
import electric_cooker2 from "./electric_cooker2.jfif";
import electric_cooker3 from "./electric_cooker3.jfif";
import electric_pot from "./electric_pot.jfif";
import electric_pot2 from "./electric_pot2.jfif";
import fridge from "./fridge.jfif";
import fridge2 from "./fridge2.jfif";
import iphone15 from "./iphone_15.webp";
import iphone15_2 from "./iphone15_2.jfif";
import pot from "./pot.jfif";
import tecno_pop10 from "./tecno_pop10.jfif";



export const tools = {
  electronics1,
  ZeeZade,
  cart_shopping,
  user_solid,
  samsung2,
  samsung,
  main_bg,
  itel_phone,
  headset,
  blinder,
  electronics_bg,
  arrow,
  electronics1,
  electronics2,
  electronics3,
  electronics4,
  electronics5,
  // bars_solid,
  bell_regular,
  star,
  star_solid,
  electric_cooker,
  electric_cooker2,
   electric_cooker3,
   electric_pot,
   electric_pot2,
   fridge,
   fridge2,
   iphone15,
   iphone15_2,
   pot,
   tecno_pop10
}


export const categories = [
  {
    text: "Phone",
    path: "samsung",
    Image: samsung2,
    bgColor: "#FEF6DA"

  },

  {
    text: "Phone",
    path: "samsung",
    Image: samsung,
    bgColor: "#FEF6DA"

  },

  {
    text: "Blender",
    path: "grinder",
    Image: blinder,
    bgColor: "#FEE0E0"

  },

    {
    text: "Phone",
    path: "itel",
    Image:  itel_phone,
    bgColor: "#FEE0E0"

  },

     {
    text: "Headset",
    path: "itel",
    Image: electronics3 ,
    bgColor: "#FEE0E0"

  },
{
  text: "headset",
    path: "itel",
    Image:  electronics1,
    bgColor: "#FEE0E0"

  },

    {
    text: "Phone",
    path: "samsung",
    Image: electronics2,
    bgColor: "#FEF6DA"

  },


  

  
];


export const dummyProducts = [
  {
    _id:"fff1",
    name: "Samsung Galaxy S21",
    category: "Electronics",
    price: "700,000",
    offerPrice: "550,000",
    rating: 4.5,
    image: electronics5,
    description: [
      "6.2-inch display",
      "128GB storage",
      "8GB RAM",
      "Triple camera system",
      "4000mAh battery"
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    inStock: true,
  },


  {
    _id:"fff2",
    name: "Apple iPhone 12",
    category: "Electronics",
    price: "900,000",
    offerPrice: "700,000",
    rating: 4.7,
    image: electronics4,
    description: [
      "6.1-inch display",
      "64GB storage",
      "4GB RAM",
      "Dual camera system",
      "2815mAh battery"
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    inStock: true,
  },


  {
    _id:"fff3",
    name: "Sony WH-1000XM4 Headphones",
    category: "Audio",
    price: "23,000",
    offerPrice: "15,000",
    rating: 4.8,
    image: headset,
    description: [
      "Noise-canceling technology",
      "30-hour battery life",
      "Touch sensor controls",
      "Voice assistant integration"
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    inStock: true,
  },
  {
    _id:"fff4",
    name: "Fridge",
    category: "electronics",
    price: "800,000",
    offerPrice: "750,000",
    rating: 4.6,
    image: fridge,
    description: [
      "6ft double-door fridge",
      "Frost-free technology",
      "Energy-efficient",
      "Spacious interior with adjustable shelves",
      "LED lighting"
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    inStock: true,
  },

    {
    _id:"fff4",
    name: "Fridge",
    category: "electronics",
    price: "1,200,000",
    offerPrice: "900,000",
    rating: 4.6,
    image: fridge2,
    description: [
      "6ft double-door fridge",
      "Frost-free technology",
      "Energy-efficient",
      "Spacious interior with adjustable shelves",
      "LED lighting"
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    inStock: true,
  }

  ,
  {
    _id:"fff5",
    name: "Electric Cooker",
    category: "Kitchen Appliances",
    price: 150,
    offerPrice: 120,
    rating: 4.3,
    image: electric_cooker,
    description: [
      "Multi-functional electric cooker",
      "Pressure cooking, slow cooking, and steaming",
      "Easy-to-use digital controls",
      "Stainless steel inner pot"
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    inStock: true,
  },
];

export const features = [
  {
    icon: tecno_pop10,
    title: "Fastest Delivery",
    description: "items delivered under 1 hour."
  },
  {
    icon: tecno_pop10,
    title: "Best quality",
    description: "We are here to give you the best."
  },
  {
    icon: tecno_pop10,
    title: "Affordable Price",
    description: "Get the best high quality items at unbeatable prices."
  }
]


export const footerLink = [
  {
    title: "Quick link",
    links: [
      {text: "Home", url: "#"},
       {text: "Best Sellers", url: "#"},
       {text: " Offers & Deals", url: "#"},
       {text: "Contact Us", url: "#"},
       {text: "FAQs", url: "#"},
    ]
  },

      
  {
    title: "Need Help?",
    links: [
      {text: "Delivery information", url: "#"},
       {text: "Return & Refund Policy", url: "#"},
       {text: " Payment Methods", url: "#"},
       {text: "Track Your Order", url: "#"},
       {text: "Contact Us", url: "#"},
    ]
  },

    {
    title: "Follow Us",
    links: [
      {text: "Instagram", url: "#"},
       {text: "Twitter", url: "#"},
       {text: " Facebook", url: "#"},
       {text: "YouTube", url: "#"},
       
    ]
  },



 
]