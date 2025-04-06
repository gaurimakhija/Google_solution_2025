import { PNG } from "./png/png_assets";
import { SVG } from "./svg/svg_assets";

export const assets = {
  logo: SVG.logo,
  logoIcon: SVG.logoIcon,
  facebookIcon: SVG.facebookIcon,
  instagramIcon: SVG.instagramIcon,
  twitterIcon: SVG.twitterIcon,
  starIcon: SVG.starIcon,
  ratingStar: SVG.ratingStar,
  sampleImg1: PNG.sampleImg1,
  sampleImg2: PNG.sampleImg2,
  emailIcon: SVG.emailIcon,
  lockIcon: SVG.lockIcon,
  crossIcon: SVG.crossIcon,
  starGroup: PNG.starGroup,
  creditStar: SVG.creditStar,
  profileIcon: PNG.profileIcon,
};

export const stepsData = [
  {
    title: "Describe Your Vision",
    description:
      "Type a phrase, sentence, or paragraph that describes the image you want to create.",
    icon: SVG.stepIcon1,
  },
  {
    title: "Watch the Magic",
    description:
      "Our AI-powered engine will transform your text into a high-quality, unique image in seconds.",
    icon: SVG.stepIcon2,
  },
  {
    title: "Download & Share",
    description:
      "Instantly download your creation or share it with the world directly from our platform.",
    icon: SVG.stepIcon3,
  },
];

export const testimonialsData = [
  {
    image: PNG.profileImg1,
    name: "Donald Jackman",
    role: "Graphic Designer",
    stars: 5,
    text: "I’ve been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    image: PNG.profileImg2,
    name: "Richard Nelson",
    role: "Content Creator",
    stars: 5,
    text: "I’ve been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
];

export const plans = [
  {
    id: "Basic",
    price: 10,
    credits: 100,
    desc: "Best for personal use.",
  },
  {
    id: "Advanced",
    price: 50,
    credits: 500,
    desc: "Best for business use.",
  },
  {
    id: "Business",
    price: 250,
    credits: 5000,
    desc: "Best for enterprise use.",
  },
];
