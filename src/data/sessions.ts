export interface Topic {
  name: string;
  slidesLink: string;
  worksheetLink: string;
  areLinksEnabled: boolean;
}

export const TOPICS: Topic[] = [
  {
    name: 'Intro to HTML',
    slidesLink:
      'https://kansascitywomenintechnology.github.io/CodingCocktailsSlideTemplate/01-glasswork/2023-front-end-html.html#/',
    worksheetLink:
      'https://kansascitywomenintechnology.github.io/cocktails-worksheets/#/?id=worksheets',
    areLinksEnabled: false,
  },
  {
    name: 'CSS Basics',
    slidesLink:
      'https://kansascitywomenintechnology.github.io/CodingCocktailsSlideTemplate/css-series/2023-css.html#/',
    worksheetLink:
      'https://kansascitywomenintechnology.github.io/cocktails-worksheets/#/?id=worksheets',
    areLinksEnabled: false,
  },
  {
    name: 'Intro to JavaScript',
    slidesLink:
      'http://kansascitywomenintechnology.github.io/CodingCocktailsSlideTemplate/03-liquor/javascript.html#/',
    worksheetLink: 'https://bit.ly/js-worksheet',
    areLinksEnabled: false,
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
    date: '2024-10-05',
    time: '10am-12pm',
    name: 'Coding & Cupcakes: Introduction to HTML (Wizardry Halloween Edition)',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cupcakes-introduction-to-html-wizardry-halloween-edition-tickets-1012371609737',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=1012371609737&ref=ccweb',
  },
];

// Month to display for upcoming session. Use 7 for July, 8 for Aug, etc
export const UPCOMING_SESSION_MONTH = 1;
