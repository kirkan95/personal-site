import "../images/portfolio-images/astroworld.png";

const portfolioItemMap = new Map();

portfolioItemMap.set("astroworld", {
  projName: "astroworld",
  displayTitle: "No Escape Plan",
  deck: "How missed warning signs at Travis Scott’s Astroworld Festival led to one of the worst U.S. concert tragedies",
  imgUrl: "../images/portfolio-images/astroworld.png",
  tasks:
    "Page design, hed animation, ArchieML integration and parsing, custom components, animation",
  pageLink:
    "https://www.houstonchronicle.com/projects/2021/astroworld-no-escape-plan/",
});

portfolioItemMap.set("haitian-migration", {
  projName: "haitian-migration",
  displayTitle: "Haitian Odyssey",
  deck: "10,000 miles in search of home",
  imgUrl: "../images/portfolio-images/haitian-migration.png",
  tasks:
    "Page design, ArchieML integration and parsing, mapbox and map scroller, podcast integration, reCharts, chapter navigation, video integration, animation",
  pageLink:
    "https://www.houstonchronicle.com/projects/2022/haiti-odyssey-texas-migrants/",
});

portfolioItemMap.set("commish-contrib", {
  projName: "commish-contrib",
  displayTitle: "Pay to Play",
  deck: "Harris County commissioners hide where most of their campaign cash comes from: Donors whom they award hundreds of millions of dollars’ worth of no-bid contracts each year.",
  imgUrl: "../images/portfolio-images/commish-contrib.png",
  tasks:
    "Page design, hed animation, ArchieML integration and parsing, custom chapter dividers, scrolly integration, reCharts",
  pageLink:
    "https://www.houstonchronicle.com/projects/2022/harris-county-commissioner-contributions/",
});

portfolioItemMap.set("debt", {
  projName: "debt",
  displayTitle: "Loads of Debt",
  deck: "Texas courts are slammed with debt collection lawsuits, with devastating consequences",
  imgUrl: "../images/portfolio-images/debt.png",
  tasks:
    "Custom animation reCharts graphs with user interaction, data structuring, scrolly creation, custom mapbox with slider",
  pageLink:
    "https://www.houstonchronicle.com/news/investigations/article/texas-surge-debt-collection-lawsuits-courts-17119821.php",
});

portfolioItemMap.set("budget", {
  projName: "budget",
  displayTitle: "Houston's 2022 City Budget",
  deck: "How much funding Houston's police, other departments get in the city's new $5.7 billion budget",
  imgUrl: "../images/portfolio-images/budget.png",
  tasks: "Tweaking d3 code, budget analysis, data structuring, Datawrapper",
  pageLink:
    "https://www.houstonchronicle.com/projects/2022/houston-city-budget-2023/",
});

portfolioItemMap.set("banned-books", {
  projName: "banned-books",
  displayTitle: "Chronicle Banned Books Investigation",
  deck: "Most efforts to ban books in Texas schools came from 1 politician and GOP pressure, not parents",
  imgUrl: "../images/portfolio-images/banned-books.png",
  tasks:
    "Database, data structuring, Google Books API pull & interaction, Datawrapper, database filtering and sorting",
  pageLink:
    "https://www.houstonchronicle.com/news/investigations/article/Texas-book-bans-driven-by-GOP-pressure-not-parents-17362170.php",
});

portfolioItemMap.set("recycling-game", {
  projName: "recycling-game",
  displayTitle: "Are you recycling the right items, Houston?",
  deck: "Test your knowledge with our game and guide.",
  imgUrl: "../images/portfolio-images/recycling-game.png",
  tasks:
    "Create custom browser games: conveyor belt timing-based selection game and quiz, custom animations, data structuring, game UI",
  pageLink:
    "https://www.houstonchronicle.com/news/houston-texas/environment/article/houston-recycling-guide-17233585.php",
});

portfolioItemMap.set("covid-tracker", {
  projName: "covid-tracker",
  displayTitle: "Tracking COVID",
  deck: "Interactive maps, charts show spread of virus across Houston, rest of Texas",
  imgUrl: "../images/portfolio-images/covid-tracker.png",
  tasks:
    "Datawrapper, web scraping, Texas DSHS API interaction, AWS, Github Actions",
  pageLink:
    "https://www.houstonchronicle.com/coronavirus/article/covid-interactive-map-houston-texas-us-case-virus-16400699.php",
});

export default portfolioItemMap;
