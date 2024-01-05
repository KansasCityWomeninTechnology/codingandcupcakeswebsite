export interface Topic {
  name: string;
  slidesLink: string;
  worksheetLink: string;
  areLinksEnabled: boolean;
}

export const TOPICS: Topic[] = [
//   {
//     name: 'Intro to HTML',
//     slidesLink:
//       'https://kansascitywomenintechnology.github.io/CodingCocktailsSlideTemplate/01-glasswork/2023-front-end-html.html#/',
//     worksheetLink:
//       'https://kansascitywomenintechnology.github.io/cocktails-worksheets/#/?id=worksheets',
//     areLinksEnabled: true,
//   },
  // {
  //   name: 'CSS Basics',
  //   slidesLink:
  //     'https://kansascitywomenintechnology.github.io/CodingCocktailsSlideTemplate/css-series/2023-css.html#/',
  //   worksheetLink:
  //     'https://kansascitywomenintechnology.github.io/cocktails-worksheets/#/?id=worksheets',
  //   areLinksEnabled: true,
  // },
  {
    name: 'Intro to JavaScript',
    slidesLink:
      'http://kansascitywomenintechnology.github.io/CodingCocktailsSlideTemplate/03-liquor/javascript.html#/',
    worksheetLink: 'https://bit.ly/js-worksheet',
    areLinksEnabled: true,
  },
];

export interface Session {
  date: string;
  time: string;
  name: string;
  eventbriteLink: string;
  eventbriteIFrameLink: string;
}

export const SESSIONS: Session[] = [
  {
    date: '2024-01-13',
    time: '4-8pm',
    name: 'Coding & Cocktails: The Glass | HTML & Front-End Architecture',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cocktails-the-glass-html-and-front-end-architecture-tickets-786460995007',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=786460995007&ref=ccweb',
  },
];

// Month to display for upcoming session. Use 7 for July, 8 for Aug, etc
export const UPCOMING_SESSION_MONTH = 1;
