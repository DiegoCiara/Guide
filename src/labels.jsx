export const Routes = [
  {
    page:'Overview',
    link:'/',
  },
  {
    page:'Início',
    link:'/home',
  },
];

export const ContentCards = [
  {
    title: 'Primeiro Card',
    subtitle: null,
    divisor: '',
    paragraph:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deserunt, dolorem quia sequi fuga modi.`,
    phrase: null ,
    button: null,
    link:'/',
  },
  {
    title: 'Segundo Card',
    subtitle: null,
    divisor: false,
    paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium libero voluptatem eaque dolore aperiam.",
    phrase: null,
    button:'Ver repositório',
    link:'/link',
  },
]

export const Pages = [
  {
    id: 1,
    path: "/",
    component: "OverView",
    pageTitle: "OverView",
    pageContent: [
      {
      type: "head",
      title: "OverView",
      paragraph: null,
      code: null,
      },
      {
      type: "subtitle",
      title: "Welcome to the DashboardThis ithe dashboard page where you can manage your data!",
      paragraph: null,
      code: null,
      },
      {
      type: "divisor",
      title: null,
      paragraph: null,
      code: null,
      },
      {
      type: "paragraph",
      title: null,
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deserunt, dolorem quia sequi fuga modi libero voluptatem eaque dolore aperiam, nemo ab architecto labore ut non autem facilis! Voluptatibus, rem.",
      code: null,
      },
      {
      type: "paragraph",
      title: null,
      paragraph: "Veja como isso fica no código:",
      code: null,
      },
      {
      type: "card",
      title: 'Trabalhando com cards',
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deserunt, dolorem quia sequi fuga modi libero voluptatem eaque dolore aperiam, nemo ab architecto labore ut non autem facilis! Voluptatibus, rem.",
      code: 'const Cards',
      },
    ]
  },
  
  {
    id: 2,
    path: "/home",
    component: "Inicio",
    pageTitle: "Inicio",
    pageContent: [
      {
      type: "title",
      title: "Vamos iniciar o projeto",
      paragraph: null,
      code: null,
      },
      {
      type: "paragraph",
      title: null,
      paragraph: "Welcome to the DashboardThis ithe dashboard page where you can manage your data!",
      code: null,
      },
      {
      type: "paragraph",
      title: null,
      paragraph: "Veja como isso fica no código:",
      code: null,
      },
      {
      type: "card",
      title: 'Card First',
      paragraph: "Welcome to the DashboardThis ithe dashboard page where you can manage your data!",
      code: 'const',
      },
    ]
  }
];