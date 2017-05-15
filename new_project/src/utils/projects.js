const projects = [
  {
    src: '/images/001.svg',
    alt: 'TumaCredo Logo',
    title: 'TumaCredo.com',
    body: 'TumaCredois an online service that allows its registered users to send airtime top ups to prepaid mobile phone subscribers across all networks in Kenya.',
    link: 'https://www.tumacredo.com/',
    stack: {
      appData: [
        'angular2JS', 'html5', 'bootstrap', 'jquery', 'redis', 'postgres',
        'python', 'django',
      ],
      utilities: [
        'logsene', 'sentry', 'sysdig',
      ],
      devOps: [
        'docker', 'HAProxy', 'nginx', 'gunicorn', 'npm', 'nodejs',
      ],
      businessTools: [
        'trello', 'slack', 'bitbucket',
      ],
    },
  },
  {
    src: '/images/002.png',
    alt: 'SMSLeopard Logo',
    title: 'SMSLeopard',
    body: 'SMSLeopard is an enterprise grade bulk SMS service provider in Kenya. It is equipped with features like SMS scheduling, attachments, replies and customizing bulk smses',
    link: 'https://www.smsleopard.com/',
    stack: {
      appData: [
        'html5', 'bootstrap', 'jquery', 'redis', 'MySQL',
        'python', 'django', 'golang', 'pythonTwisted',
      ],
      utilities: [
        'mixpanel', 'google analytics', 'emailAlerts',
      ],
      devOps: [
        'nginx', 'gunicorn', 'systemd', 'fabric',
      ],
      businessTools: [
        'asana', 'bitbucket',
      ],
    },
  },
  {
    src: '/images/003.png',
    alt: 'DukaConnect Logo',
    title: 'DukaConnect',
    body: 'DukaConnect is a connection for suppliers, manufacturers and distributors to shopkeepers in Nairobi. It gives them access to a database of thousands of shopkeepers and an easy way to connect with the shopkeepers via SMS.',
    link: 'https://dukaconnect.com/',
    stack: {
      appData: [
        'html5', 'bootstrap', 'jquery', 'redis', 'postgres', 'GoogleMaps',
        'python', 'django', 'javascript', 'celery',
      ],
      utilities: [
        'sentry', 'emailAlerts',
      ],
      devOps: [
        'nginx', 'gunicorn', 'systemd', 'fabric',
      ],
      businessTools: [
        'asana', 'slack', 'bitbucket', 'mixpanel',
      ],
    },
  },
  {
    src: '/images/3246305.jpg',
    alt: 'Musale Martin github',
    title: 'My Github Profile',
    body: 'This is my personal Github.com profile. I wrote it in React JS and put in some Progressive Web App functionality so it work offline. It contains a list of the projects I have worked on and are available online.',
    link: 'https://musale.github.io/',
    stack: {
      appData: [
        'React', 'html5', 'bootstrap4', 'javascript', 'es6',
      ],
      utilities: [
        'JSConsole', 'ReactTools',
      ],
      devOps: [
        'npm', 'nodejs', 'neutrino',
      ],
      businessTools: [
        'github',
      ],
    },
  },
  {
    src: '/images/004.jpg',
    alt: 'Weather App',
    title: 'Weather App',
    body: 'Weather app built using the Open Weather API. ',
    link: 'https://musale.github.io/react-fundamentals-curriculum/',
    stack: {
      appData: [
        'React', 'html5', 'bootstrap4', 'javascript', 'es6',
      ],
      utilities: [
        'JSConsole', 'ReactTools',
      ],
      devOps: [
        'npm', 'nodejs', 'webpack',
      ],
      businessTools: [
        'github',
      ],
    },
  },
  {
    src: '/images/005.jpg',
    alt: 'Battle App Logo',
    title: 'Github Battle App',
    body: 'A simple React app that demonstrates the use of React Router. It interfaces with the Github API to get the users information.',
    link: 'https://musale.github.io/battle-react/',
    stack: {
      appData: [
        'React', 'html5', 'bootstrap4', 'javascript', 'es6',
      ],
      utilities: [
        'JSConsole', 'ReactTools',
      ],
      devOps: [
        'npm', 'nodejs', 'webpack',
      ],
      businessTools: [
        'github',
      ],
    },
  },
  {
    src: '/images/006.png',
    alt: 'Recipe API Demo',
    title: 'Recipe Puppy Redux',
    body: 'Another simple React app that interfaces with the public Recipe API and demonstrates the use of React Redux to handle application states',
    link: 'https://github.com/musale/demo-recipe-puppy',
    stack: {
      appData: [
        'React', 'html5', 'bootstrap4', 'javascript', 'es6', 'ReactRedux',
      ],
      utilities: [
        'JSConsole', 'ReactTools',
      ],
      devOps: [
        'npm', 'nodejs', 'webpack',
      ],
      businessTools: [
        'github',
      ],
    },
  },
  {
    src: '/images/007.jpg',
    alt: 'Duka Points',
    title: 'Duka Points',
    body: 'DukaConnect Loyalty Points service allows shopkeepers to register customers and then award them points based on their amount of goods they have bought.',
    link: 'https://dukapoints.dukaconnect.com/',
    stack: {
      appData: [
        'html5', 'bootstrap', 'jquery', 'redis', 'postgres', 'GoogleMaps',
        'python', 'django', 'javascript', 'celery', 'markdown',
      ],
      utilities: [
        'sentry', 'emailAlerts',
      ],
      devOps: [
        'nginx', 'gunicorn', 'systemd', 'fabric',
      ],
      businessTools: [
        'asana', 'slack', 'bitbucket', 'mixpanel',
      ],
    },
  },
  {
    src: 'https://placehold.it/355x250',
    alt: 'Re-Tweeting bot',
    title: 'A nodejs Twitter bot',
    body: 'A bot that retweets selected topics on Twitter after a given period.',
    link: 'https://github.com/musale/c9-works/tree/master/re-tweeter-bot',
    stack: {
      appData: [
        'javascript', 'es6',
      ],
      utilities: [
        'JSConsole',
      ],
      devOps: [
        'npm', 'nodejs', 'webpack',
      ],
      businessTools: [
        'github', 'heroku', 'c9Account', 'twitter',
      ],
    },
  },
  {
    src: 'https://placehold.it/355x250',
    alt: 'CRUD Express',
    title: 'A CRUD app in Express',
    body: 'A simple CRUD application that uses Express JS and nodejs',
    link: 'https://github.com/musale/c9-works/tree/master/express-init',
    stack: {
      appData: [
        'nodejs', 'expressJS', 'MongoDB', 'javascript',
      ],
      utilities: [
        'JSConsole', 'nodejsTools',
      ],
      devOps: [
        'npm', 'nodejs',
      ],
      businessTools: [
        'github', 'heroku', 'c9Account', 'twitter',
      ],
    },
  },
];

module.exports = projects;
