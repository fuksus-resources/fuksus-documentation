// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  { title: "Terms of Service", href: "/terms-of-service" },
  {
    title: "Marketplace",
    href: "/fuksus-marketplace",
    noLink: true,
    items: [
      { title: "Installation", href: "/installation" },
      {
        title: 'Configuration',
        href: '/configuration',
        noLink: true,
        items: [
          { title: 'General', href: '/general-config' },
          { title: 'Translating', href: '/translating' },
        ]
      }
    ]
  },
  {
    title: "House Robberies",
    href: "/fuksus-houserobberies",
    noLink: true,
    items: [
      { title: "Installation", href: "/installation" },
      {
        title: 'Configuration',
        href: '/configuration',
        noLink: true,
        items: [
          { title: 'General', href: '/general-config' },
          { title: 'Translating', href: '/translating' },
        ]
      }
    ]
  },
  {
    title: "Crafting",
    href: "/fuksus-crafting",
    noLink: true,
    items: [
      { title: "Installation", href: "/installation" },
      {
        title: 'Configuration',
        href: '/configuration',
        noLink: true,
        items: [
          { title: 'General', href: '/general-config' },
          { title: 'Translating', href: '/translating' },
        ]
      }
    ]
  },
  {
    title: "Combat Visuals",
    href: "/fuksus-combatvisuals",
    noLink: true,
    items: [
      { title: "Installation", href: "/installation" },
      {
        title: 'Configuration',
        href: '/configuration',
        noLink: true,
        items: [
          { title: 'General', href: '/general-config' },
          { title: 'Translating', href: '/translating' },
        ]
      }
    ]
  },
  // {
  //   title: "Getting Started",
  //   href: "/getting-started",
  //   noLink: true,
  //   items: [
  //     { title: "Introduction", href: "/introduction" },
  //     {
  //       title: "Installation",
  //       href: "/installation",
  //       items: [
  //         { title: "Laravel", href: "/laravel" },
  //         { title: "React", href: "/react" },
  //         { title: "Gatsby", href: "/gatsby" },
  //       ],
  //     },
  //     { title: "Quick Start Guide", href: "/quick-start-guide" },
  //     {
  //       title: "Project Structure",
  //       href: "/project-structure",
  //       items: [
  //         { title: "Layouts", href: "/layouts" },
  //         { title: "Integrations", href: "/integrations" },
  //         {
  //           title: "Manual",
  //           href: "/manual",
  //           items: [
  //             { title: "JavaScript", href: "/javascript" },
  //             { title: "Typescript", href: "/typescript" },
  //             { title: "Golang", href: "/golang" },
  //           ],
  //         },
  //       ],
  //     },
  //     { title: "Changelog", href: "/changelog" },
  //     {
  //       title: "FAQ",
  //       href: "/faq",
  //     },
  //   ],
  // }
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
