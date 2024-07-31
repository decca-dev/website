export interface IProject {
  name: string;
  description: string;
  status: 'Done' | 'Work in progress';
  url: string;
}

export const projects: IProject[] = [
  {
    name: "Tree Farmer's online shop",
    description: 'The official online shop of the Tree Farmer discord bot.',
    status: 'Done',
    url: 'https://shop.treefarmer.xyz',
  },
  {
    name: 'React hooks and components',
    description: 'A collection of my custom react utilities and helpers.',
    status: 'Done',
    url: 'https://github.com/decca-dev/react-components-and-hooks',
  },
  {
    name: 'Yack',
    description: 'Remaking Js functions in C',
    url: 'https://github.com/decca-dev/yack',
    status: 'Work in progress',
  },
];
