import {
  Bookmark,
  ChevronDown,
  Copy,
  Facebook,
  Link as LinkIcon,
  Mail,
  Menu,
  Search,
  Share2,
  X
} from "lucide-react";
import { MealBudgetSlider } from "./MealBudgetSlider";

type StoryBlockData =
  | { kind: "subhead" | "paragraph"; text: string }
  | { kind: "quote"; text: string; attribution: string }
  | { kind: "media"; photoIndex: number }
  | { kind: "interactive" };

const article = {
  publication: "Heritage Pulse",
  tagline: "Authority in every update.",
  section: "News Feature",
  topic: "Pait ng Langis: Global na Krisis, Lokal na Sikmura",
  title:
    "Krisis sa Langis, Krisis sa Sikmura: Patuloy na Laban ng mga Karinderya sa Batong Malake",
  deck:
    "Habang tumataas ang presyo ng langis, LPG, at bilihin, ramdam ng maliliit na karinderya at estudyante sa Batong Malake ang bigat ng pandaigdigang krisis sa araw-araw na pagkain.",
  author: "Jade Hannah Medico",
  date: "May 12, 2026",
  readTime: "5 min read",
  treatment: "News Feature",
  photos: [
    {
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=85",
      alt: "Prepared dishes arranged in a small eatery.",
      caption:
        "Isang karinderya sa Batong Malake ang patuloy na nagsisilbi ng abot-kayang pagkain sa mga estudyante sa gitna ng pagtaas ng presyo ng LPG, bigas, at sangkap sa pagluluto.",
      credit: "Prototype photo via Unsplash"
    },
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=85",
      alt: "A simple student meal served on a table.",
      caption:
        "Para sa maraming estudyante, bawat dagdag-presyo sa ulam o kanin ay nangangahulugan ng mas mahigpit na pagba-budget sa araw-araw na allowance.",
      credit: "Prototype photo via Unsplash"
    }
  ],
  outline: [
    {
      title: "Mula Gitnang Silangan Hanggang Batong Malake",
      points: [
        "Epekto ng tensyon sa Middle East sa petrolyo, LPG, at bilihin",
        "Pagtaas ng cooking gas, delivery fees, at sangkap"
      ]
    },
    {
      title: "Ang Diskarte ng mga Karinderya at Estudyante",
      points: [
        "Pagbabawas ng serving size at pagtaas ng presyo",
        "Pag-aadjust ng meal budget at araw-araw na gastusin"
      ]
    },
    {
      title: "Karinderya Bilang Sandigan ng Komunidad",
      points: [
        "Karinderya bilang pangunahing mapagkukunan ng murang pagkain",
        "Bayanihan at resiliency sa harap ng global oil crisis"
      ]
    }
  ],
  quickFacts: [
    ["Lokasyon", "Batong Malake, Los Banos, Laguna"],
    ["Treatment", "News Feature"],
    ["Pangunahing isyu", "Oil, LPG, at food inflation"],
    ["Apektado", "Karinderya owners at UPLB students"]
  ],
  keyVoices: [
    "Analyn Leron, karinderya cook malapit sa UPLB",
    "Lyn, UPLB student",
    "Dr. Leila Africa, nutritionist at propesor sa UPLB College of Human Ecology"
  ],
  pricePressures: [
    "LPG at cooking gas",
    "Bigas at ulam ingredients",
    "Delivery fees",
    "Pamasahe at transportasyon",
    "Cafe at student meal prices"
  ],
  budgetSnapshot: [
    ["Dating meal budget", "PHP 50-PHP 60"],
    ["Current meal cost", "Hanggang PHP 80"],
    ["Cafe increase", "+PHP 10 to +PHP 20"]
  ],
  related: [
    "Explainer: Paano umaabot sa presyo ng ulam ang oil price hike",
    "Listahan: Mga gastusing nagpapamahal sa student meals",
    "Photo essay idea: Isang tanghali sa karinderya ng Batong Malake"
  ]
};

const storyBlocks: StoryBlockData[] = [
  {
    kind: "subhead",
    text: "Mula Gitnang Silangan Hanggang Batong Malake"
  },
  {
    kind: "paragraph",
    text:
      "LOS BANOS, Laguna - Sa gitna ng tumitinding tensyon sa Gitnang Silangan, hindi lamang mga bansang sangkot sa giyera ang naaapektuhan. Sa Brgy. Batong Malake sa Los Banos, Laguna, ramdam din ang epekto nito sa maliliit na karinderyang araw-araw na pinagkukunan ng pagkain ng mga estudyante at manggagawa."
  },
  {
    kind: "paragraph",
    text:
      "Dahil sa kaguluhan sa oil-producing regions sa Middle East, patuloy ang pagtaas ng presyo ng produktong petrolyo at liquefied petroleum gas o LPG. Kasabay nito ang pagmahal ng transportasyon, delivery fees, at presyo ng mga pangunahing sangkap sa pagluluto. Para sa mga karinderya owners sa Batong Malake, malaking hamon ang pagpapanatiling abot-kaya ng kanilang pagkain."
  },
  {
    kind: "quote",
    text:
      "Kasi, ayoko sana talagang tumaas ng five pesos ang ulam namin pero baka din eh, dati may nakukuha si ma'am na murang bigas, ngayon talagang wala, zero talaga, kaya no choice.",
    attribution: "Analyn Leron, karinderya cook malapit sa UPLB"
  },
  {
    kind: "paragraph",
    text:
      "Ayon kay Leron, kahit ang simpleng takal ng ulam ay kailangan nang pag-isipan. Kapag tumaas ang puhunan sa bigas, karne, gulay, at gas, napipilitan silang mamili kung magtataas ng presyo o magbabawas ng serving size."
  },
  {
    kind: "quote",
    text:
      "Alam mo yung, ang takal ko'y ganito, pero kailangan ko pa medyong bawasan para lang hindi tumaas yung cup ko na ulam.",
    attribution: "Leron"
  },
  {
    kind: "subhead",
    text: "Presyong Ramdam sa Tinda"
  },
  {
    kind: "paragraph",
    text:
      "Karaniwang umaasa ang mga estudyante sa mga murang karinderya sa lugar dahil mas mababa ang presyo nito kumpara sa restaurants at fast food chains. Ngunit kahit ang dating abot-kayang student meals ay unti-unti nang naapektuhan ng inflation."
  },
  {
    kind: "paragraph",
    text:
      "Mula sa dating PHP 50 hanggang PHP 60 na budget kada meal, umaabot na ngayon sa halos PHP 80 ang ilang pagkain sa paligid ng campus. Dahil dito, maraming estudyante ang napipilitang mag-adjust sa kanilang araw-araw na gastusin."
  },
  {
    kind: "media",
    photoIndex: 1
  },
  {
    kind: "quote",
    text:
      "Napansin ko tumataas ang presyo ng mga pagkain usually dito sa Wedeliver tapos sa Janges din. Tapos mas napansin ko po siya sa mga cafe since mahilig po akong mag-aral sa mga cafe tapos napansin ko rin na nagkaroon ng plus 10 or plus 20 pesos na increase.",
    attribution: "Lyn, UPLB student"
  },
  {
    kind: "interactive"
  },
  {
    kind: "subhead",
    text: "Ang Diskarte ng mga Karinderya at Estudyante"
  },
  {
    kind: "paragraph",
    text:
      "Ayon sa ilang estudyante, naging bahagi na ng kanilang routine ang maingat na pagkalkula kung gaano karaming pagkain ang kaya ng natitirang allowance. Bukod sa pagtaas ng presyo ng sangkap, problema rin ng mga karinderya ang cooking gas at delivery expenses."
  },
  {
    kind: "paragraph",
    text:
      "Ang ilang tindahan ay nagbabawas na lamang ng serving size o kaya ay nililimitahan ang dami ng nilulutong pagkain kada araw upang maiwasan ang pagkalugi. Ngunit para sa mga nagtitinda, hindi rin madali ang magbawas dahil estudyante mismo ang madalas nilang suki."
  },
  {
    kind: "quote",
    text:
      "Ayaw ko man, pinag-dedebatehan namin ni ma'am kung yung takalan na maliit yung sampung piso kaya lang kawawa rin naman kasi hindi rin naman sila mabubusog.",
    attribution: "Leron"
  },
  {
    kind: "subhead",
    text: "Karinderya Bilang Sandigan ng Komunidad"
  },
  {
    kind: "paragraph",
    text:
      "Sa kabila ng mga hamon, nananatiling mahalagang bahagi ng komunidad ang mga karinderya sa Batong Malake. Para sa maraming dormers at transient students, ito ang pangunahing mapagkukunan ng murang pagkain."
  },
  {
    kind: "quote",
    text:
      "I think napakahalaga talaga ng karinderya kasi ayun ang takbuhan ng mga estudyanteng nangangailangan ng mas mura, mas affordable. For example, monggo at rice.",
    attribution:
      "Dr. Leila Africa, nutritionist at propesor sa UPLB College of Human Ecology"
  },
  {
    kind: "paragraph",
    text:
      "Ayon kay Africa, may direktang epekto sa kalusugan at pag-aaral ng mga estudyante ang kakulangan sa sapat na pagkain. Kapag kapos ang budget, maaaring maapektuhan hindi lamang ang dami ng kinakain kundi pati ang kalidad ng nutrisyon."
  },
  {
    kind: "paragraph",
    text:
      "Sa gitna ng pandaigdigang krisis, ipinapakita ng mga karinderya sa Batong Malake ang kahalagahan ng maliliit na negosyo sa pagpapanatili ng access sa pagkain. Sa bawat murang ulam at dagdag na sabaw, nakikita ang pakikipaglaban ng lokal na komunidad laban sa epekto ng global oil crisis."
  },
  {
    kind: "paragraph",
    text:
      "Habang nagpapatuloy ang tensyon sa Gitnang Silangan, patuloy ding umaasa ang mga estudyante at karinderya owners na muling bababa ang presyo ng langis at bilihin. Ngunit sa ngayon, bawat pisong natitipid ay mahalaga, mula gasolinahan hanggang hapag-kainan."
  }
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="ticker">
          <span>Featured</span>
          <p>{article.topic}</p>
        </div>

        <div className="masthead">
          <a className="brand" href="#" aria-label="Heritage Pulse home">
            <span className="brand-mark">HP</span>
            <span>
              <strong>{article.publication}</strong>
              <small>{article.tagline}</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#">Nation</a>
            <a href="#">Metro</a>
            <a href="#">Business</a>
            <a href="#">Culture</a>
            <a href="#">Sports</a>
            <button aria-label="More sections">
              More <ChevronDown size={16} />
            </button>
          </nav>

          <div className="header-actions">
            <button aria-label="Search">
              <Search size={18} />
            </button>
            <button aria-label="Open menu" className="mobile-menu">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className="page-shell">
        <article className="article-layout">
          <div className="article-main">
            <p className="topic-label">{article.topic}</p>
            <a className="section-link" href="#">
              {article.section}
            </a>

            <h1>{article.title}</h1>
            <p className="deck">{article.deck}</p>

            <div className="story-meta">
              <div>
                <p>By {article.author}</p>
                <span>
                  {article.date} / {article.readTime} / {article.treatment}
                </span>
              </div>

              <div className="share-row" aria-label="Article actions">
                <button aria-label="Share article">
                  <Share2 size={18} />
                </button>
                <button aria-label="Bookmark article">
                  <Bookmark size={18} />
                </button>
                <button aria-label="Copy article link">
                  <Copy size={18} />
                </button>
              </div>
            </div>

            <PhotoFigure photo={article.photos[0]} variant="hero" />

            <div className="article-body">
              {storyBlocks.map((block, index) => (
                <StoryBlock key={`${block.kind}-${index}`} block={block} />
              ))}
            </div>
          </div>

          <aside className="story-sidebar" aria-label="Article sidebar">
            <section className="story-plan">
              <h2>Story Plan</h2>
              <ol>
                {article.outline.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.points.join(" / ")}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2>Quick Facts</h2>
              <dl className="fact-list">
                {article.quickFacts.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section>
              <h2>Price Pressure</h2>
              <ul className="check-list">
                {article.pricePressures.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2>Budget Snapshot</h2>
              <dl className="budget-list">
                {article.budgetSnapshot.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section>
              <h2>Key Voices</h2>
              <ul>
                {article.keyVoices.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2>Share</h2>
              <div className="social-buttons">
                <button aria-label="Share on Facebook">
                  <Facebook size={18} />
                </button>
                <button aria-label="Share on X">
                  <X size={18} />
                </button>
                <button aria-label="Email article">
                  <Mail size={18} />
                </button>
                <button aria-label="Copy link">
                  <LinkIcon size={18} />
                </button>
              </div>
            </section>
          </aside>
        </article>
      </div>

      <footer className="site-footer">
        <strong>{article.publication}</strong>
        <span>{article.tagline}</span>
      </footer>
    </main>
  );
}

function StoryBlock({
  block
}: {
  block: StoryBlockData;
}) {
  if (block.kind === "subhead") {
    return <h2 className="article-subhead">{block.text}</h2>;
  }

  if (block.kind === "quote") {
    return (
      <blockquote>
        <p>"{block.text}"</p>
        <cite>{block.attribution}</cite>
      </blockquote>
    );
  }

  if (block.kind === "media") {
    return <PhotoFigure photo={article.photos[block.photoIndex]} variant="inline" />;
  }

  if (block.kind === "interactive") {
    return <MealBudgetSlider />;
  }

  return <p>{block.text}</p>;
}

function PhotoFigure({
  photo,
  variant
}: {
  photo: { src: string; alt: string; caption: string; credit: string };
  variant: "hero" | "inline";
}) {
  return (
    <figure className={variant === "hero" ? "hero-media" : "inline-media"}>
      <img src={photo.src} alt={photo.alt} />
      <figcaption>
        {photo.caption} <span>{photo.credit}</span>
      </figcaption>
    </figure>
  );
}
