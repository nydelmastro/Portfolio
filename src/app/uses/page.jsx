import React from "react";
import UsesSection from "../../components/UsesSection/UsesSection";
import Profile from "../../components/Profile/Profile";

export const metadata = {

  title: 'Portfolio - Uses',
  description: 'The uses page of my portfolio.',
}
const items = [
  {
    groupName: 'Workstation',
    items: [
      {
        title: 'Ryzen 7 5800x does the work',
        description:
          ' I am currently using a Ryzen 7 5800 desktop computer, and the difference from my previous Intel-based 16” MacBook Pro is astounding. Even under heavy loads, such as our various launch simulations, Ive yet to hear the fans turn on—a significant improvement.',
      },
      {
        title: 'HP 2k Resolution Monitor',
        description:
          'Bigger resolution, the better',
      },
      {
        title: 'Asus Azoth 75%',
        description:
          'This keyboard is great. It’s wireless, has a great feel, and the battery lasts forever. I’ve been using this keyboard for a few years now and it’s great.',
      },
      {
        title: 'Logitech MX Master 3',
        description:
          'I’ve been using this mouse for a few years now and it’s great. It’s wireless, has a great feel, and the battery lasts forever.',
      },
      {
        title: 'Steelseries Nova pro wireless',
        description:
          'The nova pro wireless is a great headset. It’s wireless, has a great feel, and the battery lasts forever.',
      },
    ],
  },
  {
    groupName: 'Coding',
    items: [
      {
        title: 'Github Codespaces',
        description:
          'Codespaces with copilot is a great combination. It’s fast, has great features, and is highly customizable.',
      },
    ],
  },
  {
    groupName: 'Design',
    items: [
      {
        title: 'Figma',
        description:
          'Easy to use, great desings',
      },
      {
        title: 'Whimsical',
        description:
          'Easy to use, great desings. I use Whimsical for all of my wireframing and flowchart needs. It’s fast, has great features, and is highly customizable.',
      },
    ],
  },
  {
    groupName: 'Productivity',
    items: [
      {
        title: 'Teams',
        description:
          'Teams was a great tool for communication and collaboration. It’s fast, and the features are great.',
      },

    ],
  },
];

export default function Uses() {
  return (
    <div>
    <Profile
        title="My set up"
        content="As a cybersecurity analyst, my equipment typically consists of the following:"
      />
      <UsesSection items={items} />
    </div>
  );
}
