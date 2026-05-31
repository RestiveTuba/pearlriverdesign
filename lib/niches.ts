export type NicheConfig = {
  slug: string
  trade: string
  tradePlural: string
  tradeProper: string
  headline: string
  sub: string
  why: { heading: string; body: string }
  metaTitle: string
  metaDescription: string
  faqs: { q: string; a: string }[]
}

export const NICHES: NicheConfig[] = [
  {
    slug: 'plumbing',
    trade: 'plumber',
    tradePlural: 'plumbers',
    tradeProper: 'Plumber',
    headline: 'Plumber Websites for Rockland County — $1,000 Flat',
    sub: 'When someone searches "plumber near me" in Pearl River, Suffern, or Nyack, Google shows whoever has a website first. Right now that call goes to your competitors.',
    why: {
      heading: 'Most plumbers in Rockland County don\'t have a website. That\'s your advantage.',
      body: 'Homeowners don\'t flip through directories anymore. They search Google, click the first result with a real website, and call. If you\'re not there, that job goes to whoever is. A Pearl River Design site puts your name in front of people actively searching for a plumber in your area — not people who already know you.',
    },
    metaTitle: 'Plumber Website Design — Rockland County, NY | Pearl River Design',
    metaDescription: 'We build websites for plumbers in Rockland County, NY. $1,000 flat, live in 1-2 business days. No monthly fees. Start getting calls from Google.',
    faqs: [
      { q: 'Do I need a website as a plumber?', a: 'Yes. Most people search Google before calling any trade. Without a website, you\'re invisible to new customers actively searching in your area.' },
      { q: 'How much does a plumber website cost?', a: '$1,000 flat, one time. No monthly fees, no contracts, no surprises.' },
      { q: 'How fast can my plumbing website go live?', a: '1-2 business days after you fill out the short intake form. We handle everything.' },
      { q: 'Will my site show up in Google searches?', a: 'Every site we build is optimized for local search from day one — fast load times, proper structure, and local business signals that Google looks for.' },
    ],
  },
  {
    slug: 'roofing',
    trade: 'roofer',
    tradePlural: 'roofers',
    tradeProper: 'Roofer',
    headline: 'Roofing Websites for Rockland County — $1,000 Flat',
    sub: 'After a storm, homeowners search for a roofer fast. If your business isn\'t showing up in Google, those emergency calls go straight to your competitors.',
    why: {
      heading: 'Storm season is your busiest window. A website makes sure you\'re the one who gets called.',
      body: 'Roofing is one of the highest-intent local searches there is. Someone\'s roof is leaking — they\'re not scrolling Facebook, they\'re Googling "roofer near me" and calling the first result. If that first result isn\'t you, the job is already gone. A Pearl River Design site makes sure your name shows up when Rockland County homeowners need a roofer most.',
    },
    metaTitle: 'Roofing Website Design — Rockland County, NY | Pearl River Design',
    metaDescription: 'We build websites for roofing contractors in Rockland County, NY. $1,000 flat, live in 1-2 business days. No monthly fees. Get found when homeowners need you most.',
    faqs: [
      { q: 'Do roofing contractors need a website?', a: 'Yes. Emergency roofing searches are high-intent and go to whoever appears first in Google. Without a website, you miss those calls entirely.' },
      { q: 'How much does a roofing website cost?', a: '$1,000 flat, one time. No monthly fees or contracts.' },
      { q: 'How fast can my roofing website go live?', a: '1-2 business days. Fill out the form and we handle the rest.' },
      { q: 'Can my site handle quote requests?', a: 'Yes. Every site includes a contact form so homeowners can request quotes directly.' },
    ],
  },
  {
    slug: 'electrical',
    trade: 'electrician',
    tradePlural: 'electricians',
    tradeProper: 'Electrician',
    headline: 'Electrician Websites for Rockland County — $1,000 Flat',
    sub: 'When a homeowner in Nyack or Nanuet searches "electrician near me," Google returns whoever has a professional website. Make sure that\'s you.',
    why: {
      heading: 'Electrical work is trust-sensitive. A website is how new customers decide you\'re the safe choice.',
      body: 'Nobody hires an electrician they don\'t trust, and a professional website is how trust gets built before the first call. It signals that you\'re established, licensed, and serious — before they even pick up the phone. Pearl River Design builds sites that make Rockland County homeowners comfortable calling you first.',
    },
    metaTitle: 'Electrician Website Design — Rockland County, NY | Pearl River Design',
    metaDescription: 'We build websites for electricians in Rockland County, NY. $1,000 flat, live in 1-2 business days. No monthly fees. Get more local calls from Google.',
    faqs: [
      { q: 'Do electricians need a website?', a: 'Yes. Most homeowners search Google before hiring any contractor. A professional website builds trust before the first call.' },
      { q: 'How much does an electrician website cost?', a: '$1,000 flat, one time. No monthly fees or contracts.' },
      { q: 'How fast can my electrical business website go live?', a: '1-2 business days after your intake form is submitted.' },
      { q: 'Will the site show my license and insurance?', a: 'Yes. Every site includes a section for credentials, service areas, and anything that builds customer confidence.' },
    ],
  },
  {
    slug: 'hvac',
    trade: 'HVAC contractor',
    tradePlural: 'HVAC contractors',
    tradeProper: 'HVAC',
    headline: 'HVAC Websites for Rockland County — $1,000 Flat',
    sub: 'AC down in July. Furnace out in January. Homeowners search fast and call the first result. If that\'s not you, the job is gone before you even know about it.',
    why: {
      heading: 'HVAC emergencies don\'t wait. Neither do your customers.',
      body: 'Heating and cooling calls are seasonal and urgent — homeowners aren\'t comparing options, they\'re calling whoever shows up first. In Rockland County, most HVAC contractors still don\'t have a website. That means a simple, fast-loading site puts you ahead of competitors who\'ve been in business longer than you. Pearl River Design builds sites that load fast, rank locally, and turn searches into calls.',
    },
    metaTitle: 'HVAC Website Design — Rockland County, NY | Pearl River Design',
    metaDescription: 'We build websites for HVAC contractors in Rockland County, NY. $1,000 flat, live in 1-2 business days. No monthly fees. Get found during peak season.',
    faqs: [
      { q: 'Do HVAC contractors need a website?', a: 'Yes. Emergency HVAC searches are urgent — homeowners call the first result they find. Without a site, you\'re invisible to those customers.' },
      { q: 'How much does an HVAC website cost?', a: '$1,000 flat, one time. No monthly fees.' },
      { q: 'How quickly can my HVAC site be live?', a: '1-2 business days after your intake form is filled out.' },
      { q: 'Can my site list both heating and cooling services?', a: 'Yes. We build out your full service list during the setup process.' },
    ],
  },
  {
    slug: 'landscaping',
    trade: 'landscaper',
    tradePlural: 'landscapers',
    tradeProper: 'Landscaper',
    headline: 'Landscaper Websites for Rockland County — $1,000 Flat',
    sub: 'Spring fills up fast. Homeowners searching for a landscaper in Pearl River or Suffern call whoever they find first online. Make sure that\'s your business.',
    why: {
      heading: 'Your best marketing isn\'t word of mouth. It\'s showing up when someone searches.',
      body: 'Word of mouth is great — until a homeowner moves in, doesn\'t know anyone, and searches Google for a landscaper. That\'s a new customer you\'ll never hear about unless your name shows up. Rockland County is full of established neighborhoods with steady landscaping demand. A Pearl River Design site makes sure you\'re capturing that demand, not leaving it for a competitor who bothered to get online.',
    },
    metaTitle: 'Landscaper Website Design — Rockland County, NY | Pearl River Design',
    metaDescription: 'We build websites for landscapers in Rockland County, NY. $1,000 flat, live in 1-2 business days. No monthly fees. Get discovered before the spring rush.',
    faqs: [
      { q: 'Do landscapers need a website?', a: 'Yes. New residents and homeowners searching for landscaping go straight to Google. Without a site, you miss all of those leads.' },
      { q: 'How much does a landscaping website cost?', a: '$1,000 flat, one time. No monthly fees or contracts.' },
      { q: 'How fast can my landscaping website go live?', a: '1-2 business days.' },
      { q: 'Can I show photos of my past work?', a: 'Yes. We include a gallery section so customers can see your work before they call.' },
    ],
  },
  {
    slug: 'painting',
    trade: 'painter',
    tradePlural: 'painters',
    tradeProper: 'Painter',
    headline: 'Painter Websites for Rockland County — $1,000 Flat',
    sub: 'Homeowners searching for a painter in Rockland County call whoever has a professional website. Most local painters don\'t. That\'s your opening.',
    why: {
      heading: 'Painting is a visual trade. A website is where customers see your work before they call.',
      body: 'Before a homeowner invites a painter into their house, they want to see past work. A website with photos of your jobs — interior, exterior, decks, cabinets — gives them the confidence to call. Without it, you\'re asking them to trust a name they found on a flyer. Pearl River Design builds clean, fast-loading sites that show off your work and make it easy for Rockland County homeowners to hire you.',
    },
    metaTitle: 'Painter Website Design — Rockland County, NY | Pearl River Design',
    metaDescription: 'We build websites for painters in Rockland County, NY. $1,000 flat, live in 1-2 business days. No monthly fees. Show your work. Get more calls.',
    faqs: [
      { q: 'Do painters need a website?', a: 'Yes. Homeowners want to see your past work before they call. A website with photos builds trust before the first conversation.' },
      { q: 'How much does a painter website cost?', a: '$1,000 flat, one time. No monthly fees.' },
      { q: 'How fast can my painting website go live?', a: '1-2 business days.' },
      { q: 'Can I include interior and exterior painting on the same site?', a: 'Yes. We list all your services during setup — interior, exterior, decks, cabinets, whatever you offer.' },
    ],
  },
  {
    slug: 'concrete',
    trade: 'concrete contractor',
    tradePlural: 'concrete contractors',
    tradeProper: 'Concrete Contractor',
    headline: 'Concrete Contractor Websites for Rockland County — $1,000 Flat',
    sub: 'Driveways, patios, foundations — homeowners in Rockland County search Google before calling anyone. Without a website, you\'re not in the conversation.',
    why: {
      heading: 'Concrete jobs are big-ticket. Customers do their research before calling.',
      body: 'A driveway replacement or patio pour is a significant investment. Homeowners take their time, search Google, and vet whoever they find. A professional website is the difference between being on their shortlist and being skipped entirely. Pearl River Design builds sites for concrete contractors that load fast, rank locally, and give customers the confidence to call.',
    },
    metaTitle: 'Concrete Contractor Website Design — Rockland County, NY | Pearl River Design',
    metaDescription: 'We build websites for concrete contractors in Rockland County, NY. $1,000 flat, live in 1-2 business days. No monthly fees. Get found for driveways, patios, and more.',
    faqs: [
      { q: 'Do concrete contractors need a website?', a: 'Yes. High-ticket jobs like driveways and patios involve research. Homeowners search Google and hire whoever looks most established.' },
      { q: 'How much does a concrete contractor website cost?', a: '$1,000 flat, one time. No monthly fees.' },
      { q: 'How fast can my concrete business website go live?', a: '1-2 business days.' },
      { q: 'Can my site cover multiple services like driveways and foundations?', a: 'Yes. We list your full service offering during setup.' },
    ],
  },
  {
    slug: 'fencing',
    trade: 'fencing contractor',
    tradePlural: 'fencing contractors',
    tradeProper: 'Fencing Contractor',
    headline: 'Fencing Contractor Websites for Rockland County — $1,000 Flat',
    sub: 'When a Rockland County homeowner needs a fence, they search Google first. If you don\'t have a website, you\'re handing those jobs to whoever does.',
    why: {
      heading: 'Fencing is a planned purchase. Your website is where the decision starts.',
      body: 'Unlike emergency trades, fencing customers plan ahead — they\'re comparing options, looking at photos, and checking who looks legitimate. A website with clear service types, service areas, and photos of past work puts you in the running before a single call is made. Pearl River Design builds fencing contractor sites that look professional and rank in Rockland County searches.',
    },
    metaTitle: 'Fencing Contractor Website Design — Rockland County, NY | Pearl River Design',
    metaDescription: 'We build websites for fencing contractors in Rockland County, NY. $1,000 flat, live in 1-2 business days. No monthly fees. Get more fence installation leads.',
    faqs: [
      { q: 'Do fencing contractors need a website?', a: 'Yes. Homeowners researching fencing go to Google first. Without a site, you\'re not part of the consideration.' },
      { q: 'How much does a fencing contractor website cost?', a: '$1,000 flat, one time. No monthly fees.' },
      { q: 'How fast can my fencing website go live?', a: '1-2 business days.' },
      { q: 'Can my site include different fence types like wood, vinyl, and chain link?', a: 'Yes. We list all your materials and styles during setup.' },
    ],
  },
  {
    slug: 'tree-service',
    trade: 'tree service company',
    tradePlural: 'tree service companies',
    tradeProper: 'Tree Service',
    headline: 'Tree Service Websites for Rockland County — $1,000 Flat',
    sub: 'After a storm, tree service calls spike. Homeowners go straight to Google. If you\'re not showing up, those emergency jobs go to whoever is.',
    why: {
      heading: 'Storm damage doesn\'t wait. Neither do your customers.',
      body: 'Tree service is one of the most urgency-driven trades there is. When a limb comes down in a Rockland County yard, the homeowner opens Google immediately. The first contractor with a real website gets the call. Pearl River Design builds fast-loading tree service sites that show up in local searches — so when the next storm hits, you\'re the one they find.',
    },
    metaTitle: 'Tree Service Website Design — Rockland County, NY | Pearl River Design',
    metaDescription: 'We build websites for tree service companies in Rockland County, NY. $1,000 flat, live in 1-2 business days. No monthly fees. Get found after the next storm.',
    faqs: [
      { q: 'Do tree service companies need a website?', a: 'Yes. Emergency tree calls go to whoever shows up first in Google. Without a site, those jobs go to your competitors.' },
      { q: 'How much does a tree service website cost?', a: '$1,000 flat, one time. No monthly fees.' },
      { q: 'How fast can my tree service website go live?', a: '1-2 business days.' },
      { q: 'Can my site cover both removal and trimming services?', a: 'Yes. We list your full service range — removal, trimming, stump grinding, emergency service, whatever you offer.' },
    ],
  },
]

export const NICHE_SLUGS = NICHES.map((n) => n.slug)

export function getNiche(slug: string): NicheConfig | undefined {
  return NICHES.find((n) => n.slug === slug)
}
