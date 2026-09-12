 long way home</h3><p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">Why an extra hour of light can be the best part of the route.</p></div>
          </Link>
          <Link href="/community" data-testid="link-mosaic-community" className="group grid grid-cols-[.88fr_1.12fr] overflow-hidden border-t border-[hsl(var(--border))] pt-4 sm:block sm:border-0 sm:pt-0">
            <div className="image-zoom overflow-hidden sm:rounded-2xl"><SafeImage src={images.deck} alt="Details on a well-used boat deck" className="h-36 w-full object-cover sm:h-60" /></div>
            <div className="pl-4 sm:pl-0"><span className="fine-label mt-1 block text-[hsl(var(--accent))] sm:mt-4">Owner's log</span><h3 className="display-font mt-2 text-2xl leading-tight text-[hsl(var(--primary))]">What lives in a good dock box</h3><p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">A useful inventory from people who have learned to carry the right thing once.</p></div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ReviewShelf() {
  return (
    <section id="reviews" className="border-y border-[hsl(var(--border))] bg-[hsl(var(--primary))] py-20 text-white lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
        <div className="flex flex-col justify-between gap-5 border-b border-white/20 pb-8 md:flex-row md:items-end"><div><div className="mb-3 flex items-center gap-3 text-[hsl(var(--accent))]"><span className="h-px w-10 bg-[hsl(var(--accent))]" /><span className="fine-label">The review file</span></div><h2 className="display-font text-4xl leading-none md:text-5xl">The details behind the shine.</h2></div><Link href="/reviews" data-testid="link-all-reviews" className="inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--accent))]">See all reviews <ArrowRight size={15} /></Link></div>
         <div className="horizontal-snap -mx-5 mt-8 overflow-x-auto px-5 pb-3 md:mx-0 md:overflow-visible md:px-0 md:pb-0">
           <div className="grid w-max auto-cols-[82vw] grid-flow-col gap-0 md:w-auto md:auto-cols-auto md:grid-flow-row md:grid-cols-2 lg:grid-cols-4">
             {pageResources.reviews.map((review, index) => <a href={review.externalUrl} target="_blank" rel="noreferrer" data-testid={`link-home-review-${index}`} key={review.title} className="group snap-start border-r border-white/20 py-5 pr-5 first:pl-0 last:border-r-0 md:border-b md:px-5 md:first:pl-0 lg:border-b-0 lg:first:pl-0 lg:last:border-r-0"><div className="image-zoom mb-5 overflow-hidden"><SafeImage src={review.image} alt={review.title} className="h-36 w-full object-cover opacity-80 grayscale transition group-hover:grayscale-0" /></div><span className="fine-label text-[hsl(var(--accent))]">{review.category}</span><h3 className="display-font mt-2 text-2xl leading-tight">{review.title}</h3><p className="mt-3 text-sm leading-relaxed text-white/60">{review.copy}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-white">Read at {review.source} <ArrowRight size={13} /></span></a>)}
           </div>
         </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="community" className="bg-[hsl(var(--accent))] py-16 text-[hsl(var(--accent-foreground))] lg:py-20">
      <div className="mx-auto grid max-w-[1320px] items-center gap-8 px-5 md:grid-cols-[1.1fr_.9fr] lg:px-10">
        <div><div className="flex items-center gap-3"><Waves size={19} /><span className="fine-label">The Lyman tide report</span></div><h2 className="display-font mt-4 max-w-xl text-4xl leading-[.96] tracking-[-.03em] md:text-5xl">Get practical boating advice each Friday.</h2><p className="mt-4 max-w-lg text-sm leading-relaxed text-white/75">One useful story, one piece of gear, and one boating destination delivered to your inbox.</p></div>
        <div>{submitted ? <div className="rounded-2xl border border-white/35 bg-white/10 p-6"><Check size={22} /><h3 className="display-font mt-4 text-2xl">You're on the list.</h3><p className="mt-2 text-sm text-white/75">We'll meet you in your inbox this Friday.</p></div> : <form onSubmit={(event) => { event.preventDefault(); if (email.includes('@')) setSubmitted(true); }} className="rounded-2xl bg-[hsl(var(--primary))] p-3 shadow-[var(--shadow-lift)]"><label htmlFor="newsletter-email" className="sr-only">Email address</label><div className="flex gap-2"><input data-testid="input-newsletter-email" id="newsletter-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" className="min-w-0 flex-1 rounded-xl bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/45 focus:ring-2 focus:ring-[hsl(var(--accent))]" /><button data-testid="button-newsletter-submit" className="rounded-xl bg-[hsl(var(--accent))] px-4 py-3 text-sm font-bold text-white transition hover:brightness-110">Subscribe</button></div><p className="px-2 pt-3 text-[10px] text-white/45">No noise. Unsubscribe anytime. We respect your wake.</p></form>}</div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="lifestyle" className="bg-[hsl(var(--primary))] px-5 pb-8 pt-16 text-white lg:px-10">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-10 border-b border-white/15 pb-12 md:grid-cols-[1.4fr_.8fr_.8fr]">
          <div><div className="flex items-center gap-3"><Mark /><span className="display-font text-xl">LYMAN MARINE</span></div><p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">A trusted field guide for the American boating life. Made on the coast, read everywhere.</p><div className="mt-6 flex gap-2"><button data-testid="social-instagram" className="rounded-full border border-white/20 p-2.5 hover:bg-white/10" aria-label="Instagram"><Instagram size={15} /></button><button data-testid="social-youtube" className="rounded-full border border-white/20 p-2.5 hover:bg-white/10" aria-label="YouTube"><Youtube size={15} /></button><a data-testid="social-facebook" href="https://www.facebook.com/share/1Ex7E9Vhwa/" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 p-2.5 hover:bg-white/10" aria-label="Facebook"><Facebook size={15} /></a><button data-testid="social-linkedin" className="rounded-full border border-white/20 p-2.5 hover:bg-white/10" aria-label="LinkedIn"><Linkedin size={15} /></button></div></div>
          <div><span className="fine-label text-[hsl(var(--accent))]">Explore</span><div className="mt-4 grid gap-3 text-sm text-white/65">{quickLinks.slice(0, 4).map(({ label, id, path }) => <Link data-testid={`footer-link-${id}`} href={path} key={id} className="text-left transition hover:text-white">{label}</Link>)}</div></div>
          <div><span className="fine-label text-[hsl(var(--accent))]">Lyman Marine</span><div className="mt-4 grid gap-3 text-sm text-white/65"><Link href="/about" data-testid="footer-link-about" className="text-left hover:text-white">About the desk</Link><Link href="/contact" data-testid="footer-link-contact" className="text-left hover:text-white">Contact the editors</Link><Link href="/partner" data-testid="footer-link-advertise" className="text-left hover:text-white">Partner with us</Link></div></div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-6 text-[10px] uppercase tracking-[.13em] text-white/35 sm:flex-row"><span>© Lyman Marine Co.</span><span>Made for the long way around</span></div>
      </div>
    </footer>
  );
}

function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [saved, setSaved] = useState<string[]>([]);
  useEffect(() => { document.title = 'Lyman Marine — The boating life, from every angle.'; }, []);
  const toggleSave = (id: string) => setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  return (
    <div className="paper-grain min-h-screen overflow-hidden">
      <Hero onSearch={() => setSearchOpen(true)} />
      <TopicRail />
      <EditionStrip />
      <main>
        <LatestStories saved={saved} onSave={toggleSave} />
        <div className="mx-auto max-w-[1320px] px-5 lg:px-10"><div className="rounded-xl border border-dashed border-[hsl(var(--border))] px-4 py-3 text-center fine-label text-[hsl(var(--muted-foreground))]">Advertisement · A quiet place for a good partner</div></div>
        <GuideSpotlight />
        <FieldNotes />
        <MagazineMosaic />
        <GearGuide />
        <ReviewShelf />
        <Dispatches />
        <Newsletter />
      </main>
      <Footer />
      {searchOpen && <SearchPanel onClose={() => setSearchOpen(false)} />}
    </div>
  );
}

type ResourceCard = {
  category: string;
  title: string;
  copy: string;
  image: string;
  externalUrl?: string;
  source?: string;
};

const beginnerBoatGuide = {
  title: 'The 10 Best Boats for Beginners: Ranked by Usability, Cost, and Fun',
  copy: 'A practical ranking of boat types by usability, cost, stability, and the kind of fun they make easiest for a first-time owner.',
  boats: [
    {
      rank: 1,
      title: 'Pontoon',
      bestFor: 'Families, calm-water cruising, and large-group entertaining.',
      cost: 'Entry-level used boats are often among the most approachable options; newer models climb quickly with engines and furniture.',
      fun: 'The easy kind: swimming, picnics, sunset runs, and room for everyone.',
      why: 'Pontoons are stable, spacious, and predictable at the speeds most new owners use first. Their open deck makes it easy to move around, bring friends, and learn the basics without feeling crowded.',
      perk: 'The wide, flat sides make dock bumpers and low-speed docking less intimidating.',
      pick: 'A modular pontoon such as the Sea-Doo Switch or a well-equipped Avalon.',
    },
    {
      rank: 2,
      title: 'Bowrider',
      bestFor: 'Day cruising, tubing, and casual watersports.',
      cost: 'A broad used market gives buyers room to shop across age, length, and horsepower.',
      fun: 'The most versatile all-rounder for a family that wants to cruise and play.',
      why: 'The open bow adds seating while the traditional V-hull handles lake chop more smoothly than a flat-deck boat. Bowriders are versatile enough for family days without feeling dull when you want to pick up the pace.',
      perk: 'The large used market gives first-time buyers plenty of choice at approachable prices.',
    },
    {
      rank: 3,
      title: 'Aluminum fishing boat',
      bestFor: 'Freshwater fishing, rivers, and budget-conscious buyers.',
      cost: 'Lightweight rigs can keep towing, storage, fuel, and service bills in check.',
      fun: 'Quiet mornings, simple gear, and the satisfaction of finding your own water.',
      why: 'Aluminum is light, durable, and forgiving around rocky shorelines and busy docks. A smaller rig is easier to tow, launch, store, and learn to maintain.',
      perk: 'Many can be towed by a crossover or small SUV, depending on the boat, trailer, and vehicle ratings.',
      pick: 'Look at established fishing-boat builders such as Lund or Alumacraft.',
    },
    {
      rank: 4,
      title: 'Center console',
      bestFor: 'Saltwater fishing, coastal bays, and rougher open water.',
      cost: 'Expect more spending on saltwater protection, electronics, fuel, and trailer or marina care.',
      fun: 'The most capable choice here for casting, exploring, and changing conditions.',
      why: 'The center helm leaves a clear walking path around the boat, which is useful when fishing and gives the driver good visibility in changing conditions. The open layout is also easy to rinse down.',
      perk: 'A simple fiberglass deck, hose, and regular rinse can keep cleanup straightforward.',
      pick: 'The Boston Whaler 170 Montauk is a well-known example of the format.',
    },
    {
      rank: 5,
      title: 'Deck boat',
      bestFor: 'Families who want space with more V-hull performance.',
      cost: 'Usually costs more than a comparable runabout because of its size and extra deck space.',
      fun: 'A strong group-day boat that still has enough pace for a towable.',
      why: 'Deck boats widen the bow for extra seating while keeping a conventional hull underneath. They offer a useful middle ground between a pontoon’s room and a runabout’s handling.',
      perk: 'One boat can host a group for a sunset cruise and still tow a tube or wakeboard.',
    },
    {
      rank: 6,
      title: 'Jon boat',
      bestFor: 'Shallow water, calm rivers, ponds, and solo exploring.',
      cost: 'One of the lowest-cost paths into ownership, especially with a small outboard and basic trailer.',
      fun: 'Uncomplicated and wonderfully direct: launch, explore, fish, load up.',
      why: 'A Jon boat is deliberately simple: a flat-bottomed aluminum hull, bench seats, and a small outboard. Fewer systems mean fewer things to learn and fewer parts to repair.',
      perk: 'It is one of the lowest-cost, lowest-complexity ways to start boating.',
    },
    {
      rank: 7,
      title: 'Fish-and-ski',
      bestFor: 'Families split between fishing and watersports.',
      cost: 'More equipment means more to inspect, store, and maintain than a single-purpose boat.',
      fun: 'The flexible family option when Saturday plans change by the hour.',
      why: 'Fish-and-ski models combine fishing features such as livewells with the seating, swim platforms, and tow points needed for an afternoon on the water.',
      perk: 'The format lets a family explore more than one boating activity before committing to a specialized boat.',
    },
    {
      rank: 8,
      title: 'Small skiff',
      bestFor: 'Coastal inlets, flats fishing, and crabbing.',
      cost: 'Low fuel use and simple systems help; coastal corrosion is the expense to respect.',
      fun: 'The reward is access: skinny water, quiet coves, and a very small wake.',
      why: 'Skiffs are light, open, and shallow-draft. They are stable at rest, use little fuel, and can reach places that deeper boats cannot.',
      perk: 'Their size makes solo launching and cleanup much less of a production.',
    },
    {
      rank: 9,
      title: 'Jet boat',
      bestFor: 'Sandbar hopping, shallow lakes, and family swimming.',
      cost: 'Routine care is familiar, but jet pumps and intakes deserve careful inspection and clean-out habits.',
      fun: 'Fast, lively, and made for days that move between coves and swimming spots.',
      why: 'Jet propulsion draws water in and pushes it out rather than using a conventional exposed propeller. That can make beaching and swimming around the stern feel more comfortable, though the intake still needs care.',
      perk: 'There is no exposed propeller below the boat to strike a shallow bottom.',
    },
    {
      rank: 10,
      title: 'Cuddy cabin',
      bestFor: 'Day boaters who want a small berth, head, or weather shelter.',
      cost: 'The cabin adds weight, systems, canvas, and upkeep before it adds much cruising range.',
      fun: 'A first taste of overnighting and the freedom to wait out a passing shower.',
      why: 'A cuddy cabin adds a compact enclosed space for storage, a portable or marine toilet, and occasional overnighting. It is a useful bridge toward larger cruising boats, but the extra weight and systems raise the ownership workload.',
      perk: 'It gives a first-time owner a taste of cabin cruising without jumping straight to a large yacht.',
    },
  ],
};

const buyerFieldGuide = {
  title: 'The Boat Buyer’s Field Guide',
  copy: 'The ownership costs, hull tradeoffs, and dockside questions that deserve an answer before you buy.',
};

const pageResources: Record<string, ResourceCard[]> = {
  buying: [
    { category: 'Boat Buying', title: beginnerBoatGuide.title, copy: beginnerBoatGuide.copy, image: images.sail },
    { category: 'Boat Buying', title: buyerFieldGuide.title, copy: buyerFieldGuide.copy, image: images.wake },
  ],
  maintenance: [
    { category: 'Engines', title: 'The pre-launch engine check', copy: 'The fluid levels, belts, hoses, and sounds that tell you how your outboard is really feeling.', image: images.deck },
    { category: 'Electrical', title: 'Find the fault before it finds you', copy: 'A plain-English way to map your batteries, breakers, grounds, and the small warning signs on the helm.', image: images.marina },
    { category: 'Bilge pumps', title: 'The bilge pump guide every owner needs', copy: 'What to test, what to carry, and when a quiet bilge is giving you the wrong kind of confidence.', image: images.wake },
    { category: 'Fuel systems', title: 'Fresh fuel, fewer surprises', copy: 'How to inspect tanks, lines, filters, and vents before a long run.', image: images.sail },
    { category: 'Trailers', title: 'A trailer that gets you home', copy: 'Tires, bearings, lights, straps, and the five-minute walkaround worth making every time.', image: images.sunset },
    { category: 'Seasonal checklists', title: 'Put the boat away properly', copy: 'A calm closing ritual for winterizing, covering, and protecting your next season.', image: images.fishing },
  ],
  gear: [
    { category: 'Navigation', title: 'Chartplotters in plain English', copy: 'A practical look at screens, charts, sonar, radar, networking, and what matters for your helm.', image: images.marina },
    { category: 'Fish finders', title: 'How to read the picture below', copy: 'The settings and signals that help you turn a colorful screen into useful information.', image: images.fishing },
    { category: 'Marine radios', title: 'The VHF setup we trust', copy: 'What to look for in a radio, antenna, GPS connection, and the calls every owner should know.', image: images.wake },
    { category: 'Safety gear', title: 'The safety kit that earns its space', copy: 'A thoughtful checklist for life jackets, flares, lights, first aid, and the rest of the locker.', image: images.deck },
    { category: 'Batteries', title: 'Choosing the right battery bank', copy: 'Starting power, house loads, charging, and the upgrade decisions that actually pay off.', image: images.sail },
    { category: 'Cleaning', title: 'Keep the finish, skip the fuss', copy: 'The products and habits that make boat cleaning faster without being hard on the water.', image: images.sunset },
  ],
  fishing: [
    { category: 'Freshwater', title: 'Read the lake before you launch', copy: 'A better way to use depth, temperature, structure, and wind to find active water.', image: images.sunset },
    { category: 'Saltwater', title: 'The first hour offshore', copy: 'Tides, current lines, birds, and the details that make a saltwater morning click.', image: images.fishing },
    { category: 'Fishing boats', title: 'The boat that matches the way you fish', copy: 'What changes between a bay boat, center console, skiff, and walkaround.', image: images.wake },
    { category: 'Fishing tips', title: 'When the bite goes quiet', copy: 'A useful reset for changing depth, moving with the current, and staying patient.', image: images.marina },
    { category: 'Angler electronics', title: 'Build a calmer fishing helm', copy: 'The electronics that help you spend less time guessing and more time casting.', image: images.deck },
    { category: 'Community', title: 'A morning with the people who know the water', copy: 'Stories, techniques, and local knowledge from anglers across the country.', image: images.sail },
  ],
  reviews: [
    { category: 'Boat reviews', title: '2026 Wellcraft 28 T-Top Boat Test', copy: 'A versatile craft for entertaining, fishing, and overnighting, reviewed by Boating Magazine.', image: images.wake, externalUrl: 'https://boatingmag.com/boats/2026-wellcraft-28-t-top-boat-test', source: 'Boating Magazine' },
    { category: 'Boat reviews', title: '2026 Navan T30 Boat Test', copy: 'A closer look at the features that make this new model flexible for real days on the water.', image: images.sail, externalUrl: 'https://boatingmag.com/boats/2026-navan-t30-boat-test', source: 'Boating Magazine' },
    { category: 'Boat reviews', title: '2026 MasterCraft X22 Boat Test', copy: 'A 22-foot watersports boat with a strong first impression and a serious punch.', image: images.deck, externalUrl: 'https://boatingmag.com/boats/2026-mastercraft-x22-boat-test', source: 'Boating Magazine' },
    { category: 'Marine products', title: 'Boating Industry Reveals 2026 Top Products', copy: 'A current look at the marine products getting attention across the industry.', image: images.marina, externalUrl: 'https://boatingindustry.com/features/2026/06/24/boating-industry-reveals-2026-top-products', source: 'Boating Industry' },
  ],
  lifestyle: [
    { category: 'Destinations', title: 'A weekend worth trailering toward', copy: 'Fresh water, quiet coves, and the kind of place that makes the drive disappear.', image: images.sunset },
    { category: 'Lakes & marinas', title: 'The marinas that make a harbor feel like home', copy: 'Notes on launch ramps, fuel docks, local knowledge, and staying a little longer.', image: images.marina },
    { category: 'Boat shows', title: 'How to spend a boat show well', copy: 'A better walk through the aisles, whether you are shopping or just looking.', image: images.wake },
    { category: 'Travel guides', title: 'Plan the trip, leave room for weather', copy: 'Simple planning habits for going farther without making the day feel scheduled.', image: images.sail },
    { category: 'Community stories', title: 'The long way home', copy: 'The best routes are not always the fastest ones. Sometimes they are the ones you remember.', image: images.fishing },
  ],
  news: [
    { category: 'New boat models', title: '2026 Wellcraft 28 T-Top Boat Test', copy: 'A current boat test covering a versatile platform for entertaining, fishing, and overnighting.', image: images.wake, externalUrl: 'https://boatingmag.com/boats/2026-wellcraft-28-t-top-boat-test', source: 'Boating Magazine' },
    { category: 'Marine technology', title: 'NextBoat Partners with MarineMax for National AI Platform Rollout', copy: 'A real industry update on how artificial intelligence is entering the pre-owned boat marketplace.', image: images.marina, externalUrl: 'https://boatingindustry.com/news/2026/07/01/nextboat-partners-with-marinemax-for-national-ai-platform-rollout', source: 'Boating Industry' },
    { category: 'Regulations', title: 'Hanson Milone Safe Boating Law to Begin April 1', copy: 'A Massachusetts boating-safety update requiring a course for more motorboat operators.', image: images.deck, externalUrl: 'https://boatingindustry.com/news/2026/03/30/hanson-milone-safe-boating-law-to-begin-april-1', source: 'Boating Industry' },
    { category: 'Industry updates', title: 'Boating Industry Reveals 2026 Top Products', copy: 'The latest marine products and innovations recognized by an industry publication.', image: images.sail, externalUrl: 'https://boatingindustry.com/features/2026/06/24/boating-industry-reveals-2026-top-products', source: 'Boating Industry' },
  ],
  community: [
    { category: 'Questions & answers', title: 'Ask the dock', copy: 'A place for honest questions, practical answers, and the things no manual explains.', image: images.deck },
    { category: 'User stories', title: 'The boats that brought us here', copy: 'Owners share the projects, mistakes, and first launches they still talk about.', image: images.fishing },
    { category: 'Forums', title: 'Join the conversation', copy: 'Talk maintenance, fishing, routes, weather, and gear with people who get it.', image: images.marina },
  ],
};

function InteriorPage({ eyebrow, title, copy, heroImage, children }: { eyebrow: string; title: string; copy: string; heroImage: string; children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  useEffect(() => { document.title = `${title} — Lyman Marine`; }, [title]);
  return (
    <div className="paper-grain min-h-screen overflow-hidden">
      <Header solid onSearch={() => setSearchOpen(true)} />
      <main>
        <section className="bg-[hsl(var(--primary))] px-5 py-16 text-white lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-[1320px] items-end gap-10 lg:grid-cols-[1fr_.7fr]">
            <div className="animate-rise">
              <div className="mb-6 flex items-center gap-3 text-[hsl(var(--accent))]"><span className="h-px w-12 bg-[hsl(var(--accent))]" /><span className="fine-label">{eyebrow}</span></div>
              <h1 className="display-font max-w-4xl text-5xl leading-[.9] tracking-[-.045em] md:text-7xl">{title}</h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">{copy}</p>
            </div>
            <div className="hidden overflow-hidden rounded-2xl lg:block"><SafeImage src={heroImage} alt="" className="h-72 w-full object-cover opacity-80" /></div>
          </div>
        </section>
        {children}
      </main>
      <Footer />
      {searchOpen && <SearchPanel onClose={() => setSearchOpen(false)} />}
    </div>
  );
}

function SafeImage({ src, alt, className, 'data-testid': dataTestId }: { src: string; alt: string; className: string; 'data-testid'?: string }) {
  return <img data-testid={dataTestId} src={src} alt={alt} className={className} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = images.hero; }} />;
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function ResourceCard({ card, kind }: { card: ResourceCard; kind: keyof typeof pageResources }) {
  const href = card.externalUrl ?? `/topic/${kind}/${slugify(card.title)}`;
  const content = (
    <>
       <div className="image-zoom h-56 overflow-hidden sm:h-64"><SafeImage src={card.image} alt={card.title} className="h-full w-full object-cover" /></div>
       <div className="p-6 lg:p-7"><span className="fine-label text-[hsl(var(--accent))]">{card.category}</span><h2 className="display-font mt-3 text-3xl leading-[1.02] text-[hsl(var(--primary))]">{card.title}</h2><p className="mt-4 text-base leading-relaxed text-[hsl(var(--muted-foreground))]">{card.copy}</p><span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[hsl(var(--primary))]">{card.externalUrl ? `Read at ${card.source}` : 'Read field notes'} <ArrowRight size={13} /></span></div>
    </>
  );
  return (
    card.externalUrl
      ? <a href={href} target="_blank" rel="noreferrer" data-testid={`link-external-${slugify(card.title)}`} className="group block overflow-hidden rounded-2xl border border-[hsl(var(--card-border))] bg-[hsl(var(--card))] shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">{content}</a>
      : <Link href={href} data-testid={`link-topic-${slugify(card.title)}`} className="group block overflow-hidden rounded-2xl border border-[hsl(var(--card-border))] bg-[hsl(var(--card))] shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">{content}</Link>
  );
}

function ResourcePage({ kind, eyebrow, title, copy, heroImage }: { kind: keyof typeof pageResources; eyebrow: string; title: string; copy: string; heroImage: string }) {
  const resources = pageResources[kind];
  return (
    <InteriorPage eyebrow={eyebrow} title={title} copy={copy} heroImage={heroImage}>
      <section className="mx-auto max-w-[1320px] px-5 py-16 lg:px-10 lg:py-24">
        <div className="mb-8 flex items-center justify-between border-b border-[hsl(var(--border))] pb-5"><span className="fine-label text-[hsl(var(--accent))]">Latest dispatches</span><span className="font-mono text-xs text-[hsl(var(--muted-foreground))]">{String(resources.length).padStart(2, '0')} stories</span></div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{resources.map((card) => <ResourceCard key={card.title} kind={kind} card={card} />)}</div>
      </section>
      <section className="bg-[hsl(var(--muted))] px-5 py-14 lg:px-10"><div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-5 rounded-2xl border border-dashed border-[hsl(var(--border))] p-6 md:flex-row md:items-center md:p-8"><div><span className="fine-label text-[hsl(var(--accent))]">The Lyman tide report</span><h2 className="display-font mt-2 text-3xl text-[hsl(var(--primary))]">One smart note for the week ahead.</h2></div><Link href="/#community" className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-5 py-3 text-sm font-bold text-white">Join the list <ArrowRight size={15} /></Link></div></section>
    </InteriorPage>
  );
}

function BeginnerGuideBody() {
  return (
    <div className="mt-12 space-y-14">
      <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))] p-6 lg:p-8">
        <span className="fine-label text-[hsl(var(--accent))]">The short answer</span>
        <p className="mt-3 text-lg leading-relaxed text-[hsl(var(--primary))]">The best first boat is not the one with the longest feature list. It is the one that matches your water, your passengers, your tow vehicle, and the kind of day you actually want to have.</p>
        <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">This ranking is an editorial starting point, not a universal rule. Before buying, confirm capacity, towing limits, storage, insurance, local safety requirements, and the total cost of ownership.</p>
        <div className="mt-5 border-t border-[hsl(var(--border))] pt-5">
          <span className="fine-label text-[hsl(var(--accent))]">How we ranked them</span>
          <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">Usability comes first: how forgiving the boat feels at the ramp, helm, and dock. Cost includes the less glamorous parts of ownership, from storage and towing to fuel and routine service. Fun is the reason to go back out — the range of good days a boat makes easy.</p>
        </div>
      </div>
      <div className="space-y-10">
        {beginnerBoatGuide.boats.map((boat) => (
          <section key={boat.rank} className="border-t border-[hsl(var(--border))] pt-7">
            <div className="flex items-start gap-4">
              <span className="font-mono text-sm text-[hsl(var(--accent))]">{String(boat.rank).padStart(2, '0')}</span>
              <div className="min-w-0 flex-1">
                <h2 className="display-font text-3xl leading-none text-[hsl(var(--primary))] md:text-4xl">{boat.title}</h2>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[.08em] text-[hsl(var(--muted-foreground))]">Best for: <span className="font-normal normal-case tracking-normal">{boat.bestFor}</span></p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <p className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-3 text-sm leading-relaxed"><strong className="text-[hsl(var(--primary))]">Cost lens:</strong> {boat.cost}</p>
                  <p className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-3 text-sm leading-relaxed"><strong className="text-[hsl(var(--primary))]">Fun factor:</strong> {boat.fun}</p>
                </div>
                <p className="mt-5 text-base leading-relaxed">{boat.why}</p>
                <p className="mt-4 rounded-xl border-l-2 border-[hsl(var(--accent))] bg-[hsl(var(--muted))] px-4 py-3 text-sm leading-relaxed"><strong className="text-[hsl(var(--primary))]">Beginner perk:</strong> {boat.perk}</p>
                {boat.pick && <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]"><strong className="text-[hsl(var(--primary))]">A place to start:</strong> {boat.pick}</p>}
              </div>
            </div>
          </section>
        ))}
      </div>
      <section>
        <div className="mb-5 flex items-center gap-3 text-[hsl(var(--accent))]"><span className="h-px w-10 bg-[hsl(var(--accent))]" /><span className="fine-label">At a glance</span></div>
        <h2 className="display-font text-3xl text-[hsl(var(--primary))] md:text-4xl">Which boat fits your lifestyle?</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-[hsl(var(--border))]">
          <table className="min-w-[760px] w-full border-collapse text-left text-sm">
            <thead className="bg-[hsl(var(--primary))] text-white">
              <tr><th className="px-4 py-4 font-semibold">Boat type</th><th className="px-4 py-4 font-semibold">Best environment</th><th className="px-4 py-4 font-semibold">Key advantage</th><th className="px-4 py-4 font-semibold">Maintenance</th></tr>
            </thead>
            <tbody>
              {[
                ['Pontoon', 'Calm lakes & rivers', 'Space and stability', 'Low to medium'],
                ['Bowrider', 'Lakes & large bays', 'All-around handling', 'Medium'],
                ['Aluminum fishing boat', 'Rivers & shallow lakes', 'Durable and light', 'Very low'],
                ['Center console', 'Ocean & coastal bays', '360° fishability', 'Low'],
                ['Deck boat', 'Lakes & rivers', 'Space with V-hull speed', 'Medium'],
                ['Jon boat', 'Ponds & creeks', 'Affordable simplicity', 'Very low'],
                ['Fish-and-ski', 'Versatile lakes', 'Fishing and sports', 'Medium'],
                ['Small skiff', 'Coastal shallows', 'Shallow draft', 'Low'],
                ['Jet boat', 'Lakes & sandbars', 'No exposed propeller', 'Medium'],
                ['Cuddy cabin', 'Large lakes & coastlines', 'Shelter and storage', 'High'],
              ].map(([boat, environment, advantage, maintenance]) => (
                <tr key={boat} className="border-t border-[hsl(var(--border))] even:bg-[hsl(var(--muted))]">
                  <td className="px-4 py-4 font-semibold text-[hsl(var(--primary))]">{boat}</td><td className="px-4 py-4">{environment}</td><td className="px-4 py-4">{advantage}</td><td className="px-4 py-4">{maintenance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="border-t border-[hsl(var(--border))] pt-8">
        <div className="mb-5 flex items-center gap-3 text-[hsl(var(--accent))]"><span className="h-px w-10 bg-[hsl(var(--accent))]" /><span className="fine-label">Before you sign</span></div>
        <h2 className="display-font text-3xl text-[hsl(var(--primary))] md:text-4xl">The costs beginners often miss</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {[
            ['Storage', 'Ask where the boat will live in July and January, not just where it will sit on the sales lot.'],
            ['Towing', 'Add the trailer, hitch, fuel, launch fees, and the tow vehicle’s real payload and braking limits.'],
            ['Maintenance', 'Budget for routine service, batteries, impellers, winterization, cleaning, and unexpected repairs.'],
            ['Safety and training', 'Include life jackets, communications, required equipment, and a boating-safety course for the whole crew.'],
          ].map(([title, copy]) => <div key={title} className="rounded-xl border border-[hsl(var(--border))] p-5"><h3 className="display-font text-2xl text-[hsl(var(--primary))]">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">{copy}</p></div>)}
        </div>
      </section>
      <section className="border-t border-[hsl(var(--border))] pt-8">
        <div className="mb-5 flex items-center gap-3 text-[hsl(var(--accent))]"><span className="h-px w-10 bg-[hsl(var(--accent))]" /><span className="fine-label">Before the launch</span></div>
        <h2 className="display-font text-3xl text-[hsl(var(--primary))] md:text-4xl">The pre-launch safety check is part of the fun.</h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed">A beginner-friendly boat should make it easy to pause, look around, and build a habit before the throttle moves. Walk the boat and trailer before every launch: check the drain plug, fuel and battery connections, steering, bilge, lights, tie-downs, life jackets, fire extinguisher, and weather. Once afloat, test forward and reverse at idle, confirm the kill-switch lanyard, and make sure everyone knows where to sit and what to do if the engine stops.</p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">Requirements vary by state and boat. Use your local boating-safety authority’s checklist, take a recognized course, and treat the first few outings as practice rather than a test of bravery.</p>
      </section>
      <section className="rounded-2xl bg-[hsl(var(--primary))] p-6 text-white lg:p-8">
        <span className="fine-label text-[hsl(var(--accent))]">Research notes</span>
        <p className="mt-3 text-sm leading-relaxed text-white/70">We shaped this guide around current beginner-buying guidance from Boats.com and MarineMax, with additional safety and ownership context from Boatsetter, Discover Boating, and Progressive. Boat types, prices, capacity, and requirements vary by model and location.</p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
          <a href="https://www.boats.com/how-to/boat-buying-for-absolute-beginners-part-i" target="_blank" rel="noreferrer" className="border-b border-[hsl(var(--accent))] pb-1 hover:text-[hsl(var(--accent))]">Boats.com beginner guide <ArrowRight size={13} className="ml-1 inline" /></a>
          <a href="https://www.marinemax.com/boats-and-yachts/new-to-boating" target="_blank" rel="noreferrer" className="border-b border-[hsl(var(--accent))] pb-1 hover:text-[hsl(var(--accent))]">MarineMax first-time buyer guide <ArrowRight size={13} className="ml-1 inline" /></a>
        </div>
      </section>
    </div>
  );
}

function BuyerFieldGuideBody() {
  return (
    <div className="mt-12 space-y-14">
      <section>
        <div className="mb-7 max-w-3xl">
          <div className="mb-5 flex items-center gap-3 text-[hsl(var(--accent))]"><span className="h-px w-10 bg-[hsl(var(--accent))]" /><span className="fine-label">Before you shop</span></div>
          <h2 className="display-font text-3xl leading-[.95] text-[hsl(var(--primary))] md:text-5xl">The checks that belong on every boat buyer’s list.</h2>
          <p className="mt-4 text-base leading-relaxed text-[hsl(var(--muted-foreground))]">A good-looking boat can still be the wrong boat—or hide an expensive problem. Use these four checks before you trust the price, the layout, or the sales pitch.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5 lg:p-6">
            <span className="fine-label text-[hsl(var(--accent))]">01 / Ownership costs</span>
            <h3 className="display-font mt-3 text-2xl leading-tight text-[hsl(var(--primary))]">The 10% rule is a starting point, not a promise.</h3>
            <p className="mt-3 text-sm leading-relaxed">Plan on roughly <strong className="text-[hsl(var(--primary))]">10–15% of the purchase price each year</strong> for operating and ownership costs. It is a useful guardrail against spending every dollar on the boat itself.</p>
            <div className="mt-5 rounded-xl bg-[hsl(var(--muted))] p-4 text-sm leading-relaxed">
              <strong className="text-[hsl(var(--primary))]">Put it toward:</strong> storage or dockage, insurance, fuel, routine service, winterization, bottom painting, and the repairs that appear after a season of use.
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[hsl(var(--muted-foreground))]">Your water, climate, storage arrangement, and how often you run the boat can move the number substantially.</p>
            <div className="mt-5 border-t border-[hsl(var(--border))] pt-4 text-xs font-semibold text-[hsl(var(--primary))]">
              Sources: <a href="https://www.boattrader.com/research/the-cost-of-boat-ownership-planning-your-budget-for-the-year/" target="_blank" rel="noreferrer" className="ml-1 border-b border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]">Boat Trader</a><a href="https://www.boatcountry.com/exploring-the-costs-of-boat-ownership/" target="_blank" rel="noreferrer" className="ml-3 border-b border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]">Boat Country</a>
            </div>
          </article>
          <article className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5 lg:p-6">
            <span className="fine-label text-[hsl(var(--accent))]">02 / The right water</span>
            <h3 className="display-font mt-3 text-2xl leading-tight text-[hsl(var(--primary))]">Choose the hull for the water you actually use.</h3>
            <p className="mt-3 text-sm leading-relaxed">Deadrise—the angle of the hull’s V—changes how a boat handles chop, drifting, speed, and calm-water stability.</p>
            <div className="mt-5 divide-y divide-[hsl(var(--border))] rounded-xl border border-[hsl(var(--border))] text-sm">
              {[
                ['Flat bottom', 'Very stable in calm, shallow water; pounds harder in chop.'],
                ['Deep-V · 21°+', 'Cuts through waves well; can feel tender or rock at rest.'],
                ['Modified-V', 'A practical middle ground for mixed conditions—the SUV compromise.'],
                ['Pontoon / tritoon', 'Stable and spacious; a third tube improves rough-water handling, while high winds still deserve respect.'],
              ].map(([name, copy]) => <div key={name} className="px-4 py-3"><strong className="text-[hsl(var(--primary))]">{name}</strong><p className="mt-1 leading-relaxed text-[hsl(var(--muted-foreground))]">{copy}</p></div>)}
            </div>
            <div className="mt-5 border-t border-[hsl(var(--border))] pt-4 text-xs font-semibold text-[hsl(var(--primary))]">
              Sources: <a href="https://www.boattrader.com/research/boat-types-and-hulls-guide/" target="_blank" rel="noreferrer" className="ml-1 border-b border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]">Boat Trader hull guide</a><a href="https://www.youtube.com/watch?v=K4Nqs8RwiQs&t=35" target="_blank" rel="noreferrer" className="ml-3 border-b border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]">Hull dynamics</a>
            </div>
          </article>
          <article className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5 lg:p-6">
            <span className="fine-label text-[hsl(var(--accent))]">03 / The dock interview</span>
            <h3 className="display-font mt-3 text-2xl leading-tight text-[hsl(var(--primary))]">Ask about the cold start, risers, and manifolds.</h3>
            <p className="mt-3 text-sm leading-relaxed">On a saltwater inboard, exhaust risers and manifolds are a major service question. They commonly last about <strong className="text-[hsl(var(--primary))]">3–5 years</strong>, and failure can let water into the cylinders and destroy an engine.</p>
            <div className="mt-5 rounded-xl bg-[hsl(var(--muted))] p-4 text-sm leading-relaxed">
              <strong className="text-[hsl(var(--primary))]">Ask to:</strong> see the engine start from cold, confirm when the risers and manifolds were replaced, review service records, and look for smoke or hard starting that a pre-warmed engine can hide.
            </div>
            <div className="mt-5 border-t border-[hsl(var(--border))] pt-4 text-xs font-semibold text-[hsl(var(--primary))]">
              Sources: <a href="https://boatingmag.com/riserandmanifold/?srsltid=AfmBOopyfdHu35N94FH4BXtK8AXewsdAoDMKIp-3UjdFXjbUm-poWr0i" target="_blank" rel="noreferrer" className="ml-1 border-b border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]">Boating Magazine</a><a href="https://www.youtube.com/watch?v=DlbHFhfSbGQ" target="_blank" rel="noreferrer" className="ml-3 border-b border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]">Riser inspection</a><a href="https://www.youtube.com/watch?v=rq4KeIwCQ7c&t=737" target="_blank" rel="noreferrer" className="ml-3 border-b border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]">Cold-start check</a>
            </div>
          </article>
          <article className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5 lg:p-6">
            <span className="fine-label text-[hsl(var(--accent))]">04 / Small decisions</span>
            <h3 className="display-font mt-3 text-2xl leading-tight text-[hsl(var(--primary))]">A cup holder can reveal a bigger problem.</h3>
            <p className="mt-3 text-sm leading-relaxed">Poorly draining cup holders are a small surveyor pet peeve with expensive consequences. Water can run into the bilge or onto wiring below the gunwale, creating hidden mold and corrosion.</p>
            <div className="mt-5 rounded-xl bg-[hsl(var(--muted))] p-4 text-sm leading-relaxed">
              <strong className="text-[hsl(var(--primary))]">Look closely:</strong> pour a little water into the holders, check where it drains, inspect the surrounding sealant, and look below for dampness, staining, or corrosion.
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[hsl(var(--muted-foreground))]">The same principle applies across the boat: small details often reveal how carefully it was designed, used, and maintained.</p>
            <div className="mt-5 border-t border-[hsl(var(--border))] pt-4 text-xs font-semibold text-[hsl(var(--primary))]">Field reports: The Hull Truth and JetBoaters owner forums.</div>
          </article>
        </div>
      </section>
      <section className="rounded-2xl bg-[hsl(var(--primary))] p-6 text-white lg:p-8">
        <span className="fine-label text-[hsl(var(--accent))]">Research notes</span>
        <p className="mt-3 text-sm leading-relaxed text-white/70">This field guide is based on the supplied research from BoatUS, marine brokers, Boat Trader, Boat Country, Boating Magazine, and owner forums. Treat the 10–15% figure and service intervals as planning ranges, not guarantees: local costs, boat type, water, climate, and maintenance history all matter.</p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
          <a href="https://www.boattrader.com/research/the-cost-of-boat-ownership-planning-your-budget-for-the-year/" target="_blank" rel="noreferrer" className="border-b border-[hsl(var(--accent))] pb-1 hover:text-[hsl(var(--accent))]">Boat Trader ownership costs <ArrowRight size={13} className="ml-1 inline" /></a>
          <a href="https://www.boattrader.com/research/boat-types-and-hulls-guide/" target="_blank" rel="noreferrer" className="border-b border-[hsl(var(--accent))] pb-1 hover:text-[hsl(var(--accent))]">Boat Trader hull guide <ArrowRight size={13} className="ml-1 inline" /></a>
          <a href="https://boatingmag.com/riserandmanifold/?srsltid=AfmBOopyfdHu35N94FH4BXtK8AXewsdAoDMKIp-3UjdFXjbUm-poWr0i" target="_blank" rel="noreferrer" className="border-b border-[hsl(var(--accent))] pb-1 hover:text-[hsl(var(--accent))]">Boating Magazine risers guide <ArrowRight size={13} className="ml-1 inline" /></a>
        </div>
      </section>
    </div>
  );
}

function BeginnerGuidePage() {
  useEffect(() => { document.title = `${beginnerBoatGuide.title} — Lyman Marine`; }, []);
  return (
    <ArticleLayout>
      <article className="mx-auto max-w-[980px] px-5 py-12 lg:px-10 lg:py-20">
        <div className="mb-8 flex items-center gap-3 text-[hsl(var(--accent))]"><span className="h-px w-12 bg-[hsl(var(--accent))]" /><span className="fine-label">Boat buying / beginner guide</span></div>
        <h1 className="display-font max-w-4xl text-5xl leading-[.91] tracking-[-.05em] text-[hsl(var(--primary))] md:text-7xl">{beginnerBoatGuide.title}</h1>
        <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[hsl(var(--muted-foreground))] md:text-xl">{beginnerBoatGuide.copy} We ranked the formats by how quickly a new owner can feel comfortable, what they ask of a real-world budget, and how much good time they make possible.</p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-y border-[hsl(var(--border))] py-5 text-xs text-[hsl(var(--muted-foreground))]">
          <span>Lyman Marine buying desk</span>
          <span>Updated for the coming season · 14 min read</span>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl bg-[hsl(var(--primary))]">
          <SafeImage src={images.sail} alt="A sailboat moving across calm water at golden hour" className="h-64 w-full object-cover opacity-80 md:h-96" />
        </div>
        <BeginnerGuideBody />
      </article>
    </ArticleLayout>
  );
}

function BuyerFieldGuidePage() {
  useEffect(() => { document.title = `${buyerFieldGuide.title} — Lyman Marine`; }, []);
  return (
    <ArticleLayout>
      <article className="mx-auto max-w-[980px] px-5 py-12 lg:px-10 lg:py-20">
        <div className="mb-8 flex items-center gap-3 text-[hsl(var(--accent))]"><span className="h-px w-12 bg-[hsl(var(--accent))]" /><span className="fine-label">Boat buying / field guide</span></div>
        <h1 className="display-font max-w-4xl text-5xl leading-[.91] tracking-[-.05em] text-[hsl(var(--primary))] md:text-7xl">{buyerFieldGuide.title}</h1>
        <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[hsl(var(--muted-foreground))] md:text-xl">{buyerFieldGuide.copy} Keep it open while you compare boats, talk with sellers, and inspect the details that brochures leave out.</p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-y border-[hsl(var(--border))] py-5 text-xs text-[hsl(var(--muted-foreground))]">
          <span>Lyman Marine buying desk</span>
          <span>Updated for the coming season · 8 min read</span>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl bg-[hsl(var(--primary))]">
          <SafeImage src={images.wake} alt="A boat moving through open water" className="h-64 w-full object-cover opacity-80 md:h-96" />
        </div>
        <BuyerFieldGuideBody />
      </article>
    </ArticleLayout>
  );
}

function BuyingPage() {
  return (
    <InteriorPage eyebrow="Boat Buying" title="Choose the right boat for your use." copy="Start with the basics: your water, your budget, your tow vehicle, and the days you want to spend onboard." heroImage={images.sail}>
      <section className="mx-auto max-w-[1320px] px-5 py-16 lg:px-10 lg:py-24">
        <div className="mb-8 flex items-end justify-between gap-5 border-b border-[hsl(var(--border))] pb-6">
          <div>
            <div className="mb-3 flex items-center gap-3 text-[hsl(var(--accent))]"><span className="h-px w-10 bg-[hsl(var(--accent))]" /><span className="fine-label">The buying desk</span></div>
            <h2 className="display-font max-w-3xl text-4xl leading-[.95] text-[hsl(var(--primary))] md:text-6xl">Two useful places to begin.</h2>
          </div>
          <ShipWheel size={28} className="hidden text-[hsl(var(--accent))] md:block" />
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {pageResources.buying.map((card) => <ResourceCard key={card.title} kind="buying" card={card} />)}
        </div>
      </section>
    </InteriorPage>
  );
}

function ResourceStoryPage() {
  const { kind, slug } = useParams<{ kind: string; slug: string }>();
  if (kind === 'buying' && slug === slugify(beginnerBoatGuide.title)) return <BeginnerGuidePage />;
  if (kind === 'buying' && slug === slugify(buyerFieldGuide.title)) return <BuyerFieldGuidePage />;
  const resources = kind ? pageResources[kind] : undefined;
  const card = resources?.find((item) => slugify(item.title) === slug);
  if (!card || !kind) return <NotFound />;
  return (
    <ArticleLayout>
      <article className="mx-auto max-w-[900px] px-5 py-12 lg:px-10 lg:py-20">
        <div className="mb-8 flex items-center gap-3 text-[hsl(var(--accent))]"><span className="h-px w-12 bg-[hsl(var(--accent))]" /><span className="fine-label">{card.category}</span></div>
        <h1 className="display-font max-w-4xl text-5xl leading-[.93] tracking-[-.045em] text-[hsl(var(--primary))] md:text-7xl">{card.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[hsl(var(--muted-foreground))] md:text-xl">{card.copy}</p>
        <div className="mt-8 flex items-center justify-between border-y border-[hsl(var(--border))] py-5 text-xs text-[hsl(var(--muted-foreground))]"><span>{card.source ?? 'Lyman Marine field notes'}</span><span>{card.externalUrl ? 'External reading' : 'Lyman Marine'}</span></div>
        <div className="prose prose-lg mt-10 max-w-none text-[hsl(var(--foreground))]"><p className="display-font text-3xl leading-tight text-[hsl(var(--primary))]">The useful version starts with the details that hold up after the launch ramp.</p><p>{card.copy} This guide is part of the Lyman Marine desk, built to help owners make a clearer decision before the next day on the water.</p><p>Keep this page bookmarked as the desk grows. We will add deeper checklists, interviews, product comparisons, and local knowledge here as the editorial library fills out.</p></div>
        <div className="mt-10 flex flex-wrap gap-3"><Link href={`/${kind}`} className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-5 py-3 text-sm font-bold text-white">Back to {kind} <ArrowRight size={15} /></Link>{card.externalUrl && <a href={card.externalUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] px-5 py-3 text-sm font-bold text-[hsl(var(--primary))]">Read the original <ArrowRight size={15} /></a>}</div>
      </article>
    </ArticleLayout>
  );
}

function ArticleLayout({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div className="paper-grain min-h-screen overflow-hidden">
      <Header compact solid onSearch={() => setSearchOpen(true)} />
      <main className="bg-[hsl(var(--background))]">{children}</main>
      <Footer />
      {searchOpen && <SearchPanel onClose={() => setSearchOpen(false)} />}
    </div>
  );
}

function StoryPage() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((item) => item.id === id);
  if (!article) return <NotFound />;
  return (
    <ArticleLayout>
      <article className="mx-auto max-w-[900px] px-5 py-12 lg:px-10 lg:py-20">
        <div className="mb-8 flex items-center gap-3 text-[hsl(var(--accent))]"><span className="h-px w-12 bg-[hsl(var(--accent))]" /><span className="fine-label">{article.category}</span></div>
        <h1 className="display-font max-w-4xl text-5xl leading-[.93] tracking-[-.045em] text-[hsl(var(--primary))] md:text-7xl">{article.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[hsl(var(--muted-foreground))] md:text-xl">{article.excerpt}</p>
        <div className="mt-8 flex items-center justify-between border-y border-[hsl(var(--border))] py-5 text-xs text-[hsl(var(--muted-foreground))]"><span>{article.author}</span><span>{article.date}</span></div>
        <div className="prose prose-lg mt-10 max-w-none text-[hsl(var(--foreground))]"><p className="display-font text-3xl leading-tight text-[hsl(var(--primary))]">The useful version starts with the details that hold up after the launch ramp.</p><p>{article.excerpt} Lyman Marine brings the practical context, the questions worth asking, and the small decisions that make time on the water feel more considered.</p><p>Whether you are checking an engine, comparing a helm, planning a fishing day, or simply looking for a better route home, the goal is the same: know more before you go farther.</p><p className="font-semibold text-[hsl(var(--primary))]">This is an editorial preview. More full-length guides are coming to the Lyman Marine desk soon.</p></div>
        <Link href="/" className="mt-10 inline-flex items-center gap-2 border-b border-[hsl(var(--accent))] pb-2 text-sm font-bold text-[hsl(var(--primary))]">Back to the magazine <ArrowRight size={15} /></Link>
      </article>
    </ArticleLayout>
  );
}

function InfoPage({ kind }: { kind: 'about' | 'contact' | 'partner' }) {
  const content = {
    about: { eyebrow: 'The desk', title: 'Built for better days on the water.', copy: 'Lyman Marine is a field guide for the American boating life — practical, curious, and made for people who would rather be learning at the dock than talking over your head.', heroImage: images.hero },
    contact: { eyebrow: 'Say hello', title: 'Bring us a story worth telling.', copy: 'Have a launch story, maintenance lesson, product tip, or place we should know about? The Lyman desk is listening.', heroImage: images.fishing },
    partner: { eyebrow: 'Work with Lyman', title: 'Good partners belong on the water too.', copy: 'Our partner and sponsorship desk is coming soon. We are building thoughtful ways for marine brands to reach a curious, engaged audience.', heroImage: images.marina },
  }[kind];
  return <InteriorPage {...content}><section className="mx-auto max-w-[760px] px-5 py-20 text-center lg:py-28"><p className="text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">Lyman Marine is growing slowly and intentionally. More ways to contribute, collaborate, and stay close to the community are on the way.</p><Link href="/" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-5 py-3 text-sm font-bold text-white">Return home <ArrowRight size={15} /></Link></section></InteriorPage>;
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/buying" component={BuyingPage} />
        <Route path="/conditions" component={MarineConditionsPage} />
        <Route path="/maintenance" component={() => <ResourcePage kind="maintenance" eyebrow="Maintenance" title="Maintenance guides for boat owners." copy="Practical field notes for engines, electrical systems, bilge pumps, fuel, trailers, and seasonal service." heroImage={images.deck} />} />
        <Route path="/gear" component={() => <ResourcePage kind="gear" eyebrow="Marine Electronics" title="Marine electronics and gear reviews." copy="Clear guidance on GPS, fish finders, radios, safety gear, batteries, covers, cleaning products, and useful onboard tools." heroImage={images.marina} />} />
        <Route path="/fishing" component={() => <ResourcePage kind="fishing" eyebrow="Fishing" title="Fishing reports and practical advice." copy="Freshwater, saltwater, fishing boats, tips, and electronics for anglers who want better information before they cast." heroImage={images.fishing} />} />
        <Route path="/reviews" component={() => <ResourcePage kind="reviews" eyebrow="Boat Reviews" title="Boat reviews with real-world context." copy="Boat, yacht, and marine product reviews with honest tradeoffs, performance notes, and a closer look at new model launches." heroImage={images.wake} />} />
        <Route path="/lifestyle" component={() => <ResourcePage kind="lifestyle" eyebrow="Boating Life" title="Boating destinations and trip guides." copy="Boating destinations, marinas, shows, travel guides, and community stories with the details that make planning easier." heroImage={images.sunset} />} />
        <Route path="/news" component={() => <ResourcePage kind="news" eyebrow="Marine News" title="Marine news and industry updates." copy="New models, industry updates, regulations, boating laws, and marine technology explained clearly." heroImage={images.wake} />} />
        <Route path="/community" component={() => <ResourcePage kind="community" eyebrow="Community" title="Owner stories and boating questions." copy="Questions, answers, forums, and owner stories from people who learn by doing and share what worked." heroImage={images.fishing} />} />
        <Route path="/topic/:kind/:slug" component={ResourceStoryPage} />
        <Route path="/story/:id" component={StoryPage} />
        <Route path="/about" component={() => <InfoPage kind="about" />} />
        <Route path="/contact" component={() => <InfoPage kind="contact" />} />
        <Route path="/partner" component={() => <InfoPage kind="partner" />} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location]);
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;