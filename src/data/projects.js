export const projects = [
  {
    id: 'border-moonlight',
    title: 'Border:Moonlight',
    category: 'UX/UI Design & Web Development',
    shortDescription: 'A website for ENHYPEN fans where they can explore the groups lore, discography, video content, and detailed information about the members.',
    role: 'UX/UI Designer & Front-End Developer',
    timeline: '15 weeks',
    tools: 'Figma · HTML · CSS · JavaScript',
    liveUrl: 'https://i566292.luna.fhict.nl/Border-Moonlight/',
    repoUrl: 'https://github.com/Hawchi/Border-Moonlight',
    problemTitle: 'Information was',
    problemTitleItalic: 'scattered',
    problem: 'For many ENGENEs, keeping up with ENHYPEN\'s storyline, discography, and member information can feel fragmented across different platforms like forums, YouTube videos, and social media, making it hard for fans to stay fully immersed without losing track of important details.',
    solutionTitle: 'One central',
    solutionTitleItalic: 'universe',
    solution: 'Border:Moonlight serves as a central place where everything comes together. By combining lore, discography, and member profiles into one clear interface, it removes the need to search across different platforms. It gives ENGENEs a space to explore and dive deeper into the Moonlight universe without interruptions.',
    solutionExtra: 'My choice for the Pink Moon as a central element was inspired by its meaning within the ENHYPEN fandom, representing connection and unity. It became a well-known symbol during the Romance: Untold era and their Coachella 2025 performance.',
    homepageVideo: '/bm-homepage.mp4',
    featuresTitle: 'Each section has its',    featuresTitle: 'Each section has its',
    featuresTitleItalic: 'own world',
    featuresSubtitle: 'Instead of standard pages, each part of the site introduces the user to a different aspect of the ENHYPEN universe through visuals and interaction.',
features: [
      {
        title: 'Discography',
        description: 'The discography page includes a video player that automatically plays and cycles through music videos, making the experience more dynamic and connected to the music.',
        video: 'https://res.cloudinary.com/dgwpuu2sq/video/upload/bm-discography_jgwsgm.mp4',
      },
      {
        title: 'Memory Vault',
        description: 'Designed as a digital archive with a continuous film roll animation. A hover effect transitions black-and-white clips into color, representing memories coming to life.',
        video: 'https://res.cloudinary.com/dgwpuu2sq/video/upload/bm-memory-vault_jxppqe.mp4',
      },
      {
        title: 'Member Profiles',
        description: 'Made an edit from the visuals "No Doubt" music video and it\'s playing as looping background video, giving a visual introduction before exploring each member\'s information.',
        video: 'https://res.cloudinary.com/dgwpuu2sq/video/upload/bm-member-profile_unmcn2.mp4',
      },
      {
        title: 'Lore Timeline',
        description: 'A structured phase-based system organizes ENHYPEN\'s complex storyline into clear, easy-to-follow chapters, so even new fans can find their way.',
        video: 'https://res.cloudinary.com/dgwpuu2sq/video/upload/bm-lore_lgautc.mp4',
      },
    ],
  },
{
    id: 'digital-paradise',
    title: 'Digital Paradise',
    category: 'UX/UI Design & Web Development',
    shortDescription: 'Branding and website project for an electronic artist with Caribbean roots.',
    role: 'UX/UI Designer & Front-End Developer',
    timeline: '8 weeks',
    tools: 'Figma · HTML · CSS · JavaScript',
    liveUrl: 'https://i566292.luna.fhict.nl/dj-paradise/',
    repoUrl: 'https://git.fhict.nl/I546177/branding',
    problemTitle: 'Missing a',
    problemTitleItalic: 'visual identity',
    problem: 'Digital Paradise lacked a consistent visual identity that matched the energy of his music and live performances.',
    solutionTitle: 'A cohesive',
    solutionTitleItalic: 'brand world',
    solution: 'A cohesive visual identity including logo concepts and stylescapes, paired with an interactive website that brings his musical atmosphere to life.',
    solutionCards: [
      {
        title: 'Logo concepts',
        description: 'Two logo concepts were created: a clean DP monogram and a tropical wordmark featuring a palm tree silhouette, giving the client options between a minimal and an expressive style.',
      },
      {
        title: 'Stylescapes',
        description: 'Two visual directions: one centered on urban party culture and community energy, the other on tropical Caribbean festival vibes.',
      },
    ],
    designHighlights: [
      {
        title: 'Logo Concepts',
        description: 'Two individual logo concepts developed during the first phase of the project.',
        images: ['/dp-logo-1.png', '/dp-logo-2.png'],
      },
      {
        title: 'Stylescapes',
        description: 'Two stylescapes created to define the mood, color palette and visual language of the brand.',
        images: ['/dp-stylescape-1.png', '/dp-stylescape-2.png'],
      },
    ],
    interactionTitle: 'The Vinyl',
    interactionTitleItalic: 'Interaction',
    interactionDescription: 'I designed and built the About page for the Digital Paradise website, featuring a scroll-driven vinyl animation. As you scroll, the disc slides into view and rotates with each movement, revealing different information about the artist one block at a time.',
    interactionVideo: '/dp-vinyl.mp4',
  },
{
    id: 'cz-zorgvinder',
    title: 'CZ Zorgvinder',
    category: 'UX/UI Design',
    shortDescription: 'A design enhancement that transforms the CZ Zorgvinder into an empathetic, accessible guide for mental health services.',
    role: 'UX/UI Designer',
    timeline: '4 weeks',
    tools: 'Figma · Prototyping · UX Research',
    liveUrl: null,
    repoUrl: null,
    heroImage: '/cz-zorgvinder1.png',
    problemTitle: 'Finding care',
    problemTitleItalic: 'shouldn\'t be hard',
    problem: 'Clients of CZ seeking mental health support were struggling to find suitable practitioners. The platform was confusing, overwhelmed users with irrelevant results, and hid crucial information like clinic reviews and waiting times behind collapsed dropdowns, making it harder for vulnerable users to find what they needed quickly and with confidence.',
    solutionTitle: 'A complete',
    solutionTitleItalic: 'redesign',
    solution: 'A full UX/UI redesign of the Zorgvinder platform, transforming it into an empathetic, accessible and intuitive guide. The redesigned flow helps vulnerable users find the right care faster, with added support for urgent mental health needs.',

    researchIntro: 'Before designing anything, I needed to understand why the current platform was failing its users. I conducted competitor benchmarking and ran initial user tests on the existing CZ website.',
    researchFindings: [
      {
        title: 'Hidden information',
        description: 'Users couldn\'t find clinic reviews because they were buried under collapsible dropdowns.',
      },
      {
        title: 'Confusing search',
        description: 'The split filter for "Search by Care" vs "Search by Name" caused immediate confusion.',
      },
      {
        title: 'Map issues',
        description: 'The map was too zoomed out, and the 10km default radius overwhelmed users with irrelevant results.',
      },
    ],
    researchInsights: [
      'Rising demand for mental health care, especially ADHD and depression.',
      'Up-to-date waiting times and support for international clients via language filters.',
      'A chatbot for real-time guidance through the platform.',
    ],
    researchImage: '/cz-affinitymap.png',

    prototypingIntro: 'After understanding what needed to change, I moved into Figma. My goal was to design a flow where users could find help without having to struggle with the interface.',
    interventions: [
      {
        title: 'Global Search',
        description: 'Replaced the confusing dual-search filters with one simple, intuitive search bar that carries over across pages.',
      },
      {
        title: 'Transparency',
        description: 'Pulled reviews, waiting times, and contract statuses out of hidden dropdowns and placed them directly on the clinic cards.',
      },
      {
        title: 'Crisis Support',
        description: 'Added an immediate, highly visible Suicide Prevention and Crisis Hotline for users with urgent mental health needs.',
      },
      {
        title: 'Language Filter',
        description: 'Added spoken language indicators on clinic cards to support international clients, a direct result of client feedback.',
      },
    ],
      beforeImage: '/cz-before.png',
      afterImage: '/cz-after.png',

    iterationIntro: 'A core part of this project was continuous testing. The final design was not just an initial concept, but was shaped by multiple rounds of user feedback.',
    iterations: [
      {
        title: 'Imagery',
        description: 'Early testers noted that placeholder images felt disconnected from the target audience. I updated the photography to better reflect the actual users and included photos of real clinics to build trust.',
      },
      {
        title: 'Languages on clinic cards',
        description: 'Testers noted that the clinic card should clearly display which languages are spoken, making it easier for non-Dutch speakers to find suitable care.',
      },
      {
        title: 'Filter & dropdown defaults',
        description: 'Many smaller adjustments such as filter defaults and dropdown settings were changed based on direct feedback from testers trying to complete real tasks.',
      },
    ],
    finalImage: '/cz-final.png',
  },
{
  id: 'owow-atlas',
  title: 'OWOW Atlas',
  category: 'UX/UI Design & Front-End Development',
  shortDescription: 'A central animation library for OWOW where designers, developers, and clients can discover, preview, and reuse animations, built in React with GSAP, Framer Motion, and CSS.',
  role: 'UX/UI Designer & Front-End Developer',
  timeline: '6 weeks',
  tools: 'Figma · React · GSAP · Framer Motion · CSS',
  liveUrl: 'https://owo-watlas.vercel.app/',
  repoUrl: 'https://github.com/Hawchi/OWOWatlas',
  heroImage: '/owow-hero.png',

  problemTitle: 'Animations with no',
  problemTitleItalic: 'central home',
  problem: 'OWOW\'s animations existed inside Atlas, but were never presented in a way that was easy to explore. There was no single overview, making the system fragmented and invisible to designers who needed to know what was already available. New developers had no fast way to discover and reuse existing animations, which slowed down onboarding and led to things being rebuilt from scratch.',

  solutionTitle: 'One library for',
  solutionTitleItalic: 'everyone',
  solution: 'Atlas is a central animation library that makes OWOW\'s animations discoverable and reusable for designers, developers, and clients alike. Every animation has a live preview, a short description, and a copyable code snippet so designers can make realistic choices early, developers can grab and go, and clients can explore without needing any technical knowledge.',

  myRoleIntro: 'Within this six-week group project, my contribution focused on the design and front-end development side.',
  myRoleItems: [
    {
      title: 'Figma Designs',
      description: 'Each team member designed their own version of the interface individually. During the client meeting we presented all designs and the client chose mine as the foundation for the Atlas system.',
    },
    {
      title: 'Client Feedback',
      description: 'I processed client feedback and translated it into concrete design adjustments throughout the project.',
    },
    {
      title: 'Filter Sidebar Component',
      description: 'I built the Filter Sidebar in React, a fully functional component that lets users filter animations by category and platform.',
    },
    {
      title: 'Animations',
      description: 'I designed and developed eight animations using GSAP, Framer Motion, and CSS, covering scroll-triggered reveals, hover interactions, and more.',
    },
  ],

  designTitle: 'The',
  designTitleItalic: 'Design',
  designIntro: 'These 2 screens are the full Figma design for the Atlas system. The client selected this design as the base.',
  designScreenshots: [
    {
      image: '/owow-design-1.png',
      caption: 'Library overview',
    },
    {
      image: '/owow-design-2.png',
      caption: 'Animation preview tab',
    },
  ],

iterationIntro: 'During user testing we gathered feedback on the design and made adjustments based on what users told us.',
iterations: [
  {
    title: 'Hero felt too blank',
    description: 'Users felt the hero section was too empty. Based on their feedback we added a featured animation preview, giving visitors an immediate sense of what Atlas offers before they even start browsing.',
    image: '/owow-iteration-hero.png',
  },
  {
    title: 'Full page over modal for animation preview',
    description: 'During user testing we asked whether the animation detail view should open as a modal or as a full page. Users preferred the full page view because the preview contains a lot of information including parameters, code snippets, and metadata, and a modal would feel too cramped for all of that. So we went with the full page view.',
  },
],

  animationsTitle: 'Animations',
  animationsTitleItalic: 'I built',
  animationsIntro: 'A selection of the animations I developed for the Atlas library, each built for a different interaction pattern and use case.',
  animations: [
    {
      title: 'Bounce Cards',
      description: 'Cards bounce in with an elastic spring effect, built with GSAP.',
      video: '/owow-animation3.mp4',
    },
    {
      title: 'Card Stack',
      description: 'An interactive draggable deck of cards with elastic spring return and swipe-to-back mechanics, built with Framer Motion.',
      video: '/owow-animation1.mp4',
    },
    {
      title: 'Image Trail',
      description: 'Images follow the cursor in a trail as you move over the card, built with GSAP.',
      video: '/owow-animation2.mp4',
    },
  ],
},
]