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
  | { kind: "paragraph"; text: string }
  | { kind: "media"; photoIndex: number }
  | { kind: "interactive" };

const article = {
  publication: "DEVC 125",
  tagline: "Medico, Pito, Perez",
  section: "News Feature",
  topic: "Pait ng Langis: Global na Krisis, Lokal na Sikmura",
  title:
    "Krisis sa Langis, Krisis sa Sikmura: Patuloy na Laban ng mga Karinderya sa Batong Malake",
  author: "Jade Hannah Medico",
  date: "May 12, 2026",
  readTime: "3 min read",
  treatment: "News Feature",
  photos: [
    {
      src: "/photos/headline.png",
      alt: "Prepared dishes arranged in a small eatery.",
      caption:
        "Isang karinderya ang nag-aalok ng half-order meals sa Barangay Batong Malake upang mapanatiling abot-kaya ang pagkain para sa mga mag-aaral sa kabila ng implasyon.",
      credit: "Kuha ni Chloe Perez."
    },
    {
      src: "/photos/2nd.png",
      alt: "A simple student meal served on a table.",
      caption:
        "Inihain ang isang bawas-sa-normal na ulam sa isang karinderya ng Barangay Batong Malake upang mapanatiling abot-kaya ang presyo sa gitna ng implasyon.",
      credit: "Kuha ni Chloe Perez."
    }
  ]
};

const storyBlocks: StoryBlockData[] = [
  {
    kind: "paragraph",
    text:
      "LOS BAÑOS, LAGUNA — Sa gitna ng tumitinding tensyon sa Gitnang Silangan, hindi lamang mga bansang sangkot sa giyera ang naaapektuhan. Sa Brgy. Batong Malake sa Los Baños, Laguna, ramdam din ang epekto nito sa maliliit na karinderyang araw-araw na pinagkukunan ng pagkain ng mga estudyante at manggagawa."
  },
  {
    kind: "paragraph",
    text:
      "Dahil sa kaguluhan sa oil-producing regions sa Middle East, patuloy ang pagtaas ng presyo ng produktong petrolyo at liquefied petroleum gas (LPG). Kasabay nito ang pagmahal ng transportasyon, delivery fees, at presyo ng mga pangunahing sangkap sa pagluluto."
  },
  {
    kind: "paragraph",
    text:
      "Para sa mga karinderya owners sa Batong Malake, malaking hamon ang pagpapanatiling abot-kaya ng kanilang pagkain."
  },
  {
    kind: "paragraph",
    text:
      "“Kasi, ayoko sana talagang tumaas ng five pesos ang ulam namin pero baka din eh, dati may nakukuha si ma’am na murang bigas, ngayon talagang wala, zero talaga, kaya no choice.” Ayon kay ate Analyn Leron, isang karinderya cook malapit sa University of the Philippines Los Baños (UPLB)."
  },
  {
    kind: "paragraph",
    text:
      "“Alam mo yung, ang takal ko’y ganito, pero kailangan ko pa medyong bawasan para lang hindi tumaas ‘yung cup ko na ulam.” Ayon sa kanya."
  },
  {
    kind: "media",
    photoIndex: 1
  },
  {
    kind: "paragraph",
    text:
      "Karaniwang umaasa ang mga estudyante sa mga murang karinderya sa lugar dahil mas mababa ang presyo nito kumpara sa mga restaurant at fast food chains. Ngunit kahit ang mga “student meals” ay unti-unti nang naapektuhan ng inflation."
  },
  {
    kind: "paragraph",
    text:
      "Mula sa dating ₱50 hanggang ₱60 na budget kada meal, umaabot na ngayon sa halos ₱80 ang ilang pagkain sa paligid ng campus. Dahil dito, maraming estudyante ang napipilitang mag-adjust sa kanilang araw-araw na gastusin."
  },
  {
    kind: "paragraph",
    text:
      "“Napansin ko tumataas ang presyo ng mga pagkain usually dito sa Wedeliver tapos sa Janges din. Tapos mas napansin ko po siya sa mga cafe since mahilig po akong mag-aral sa mga cafe tapos napansin ko rin na nagkaroon ng plus 10 or plus 20 pesos na increase.” Ani ni Lyn, isang UPLB student."
  },
  {
    kind: "paragraph",
    text:
      "Ayon sa ilang estudyante, naging bahagi na ng kanilang routine ang maingat na pag kalkula kung gaano karaming pagkain ang kaya ng natitirang allowance."
  },
  {
    kind: "paragraph",
    text:
      "Bukod sa pagtaas ng presyo ng sangkap, problema rin ng mga karinderya ang cooking gas at delivery expenses. Ang ilang tindahan ay nagbabawas na lamang ng serving size o kaya ay nililimitahan ang dami ng nilulutong pagkain kada araw upang maiwasan ang pagkalugi."
  },
  {
    kind: "paragraph",
    text:
      "“Ayaw ko man, pinag-dedebatehan namin ni ma’am kung yung takalan na maliit yung sampung piso kaya lang kawawa rin naman kasi hindi rin naman sila mabubusog.” Paliwanag ni ate Analyn."
  },
  {
    kind: "paragraph",
    text:
      "Sa kabila ng mga hamon, nananatiling mahalagang bahagi ng komunidad ang mga karinderya sa Batong Malake. Para sa maraming dormers at transient students, ito ang pangunahing mapagkukunan ng murang pagkain."
  },
  {
    kind: "paragraph",
    text:
      "Ayon kay Dr. Leila Africa, isang Nutritionist at Propesor sa UPLB ng College of Human Ecology, may direktang epekto sa kalusugan at pag-aaral ng mga estudyante ang kakulangan sa sapat na pagkain."
  },
  {
    kind: "paragraph",
    text:
      "“I think napakahalaga talaga ng karinderya kasi ayun ang takbuhan ng mga estudyanteng nangangailangan ng mas mura, mas affordable. For example, monggo at rice.” aniya"
  },
  {
    kind: "paragraph",
    text:
      "Sa gitna ng pandaigdigang krisis, ipinapakita ng mga karinderya sa Batong Malake ang kahalagahan ng maliliit na negosyo sa pagpapanatili ng access sa pagkain. Sa bawat murang ulam at dagdag na sabaw, nakikita ang pakikipaglaban ng lokal na komunidad laban sa epekto ng pandaigdigang oil crisis."
  },
  {
    kind: "paragraph",
    text:
      "Habang nagpapatuloy ang tensyon sa Gitnang Silangan, patuloy ding umaasa ang mga estudyante at karinderya owners na muling bababa ang presyo ng langis at bilihin. Ngunit sa ngayon, bawat pisong natitipid ay mahalaga, mula gasolinahan hanggang hapag-kainan."
  },
  {
    kind: "interactive"
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
          <a className="brand" href="#" aria-label="DEVC 125 home">
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
            <a className="section-link" href="#">
              {article.section}
            </a>
            <p className="topic-label">{article.topic}</p>

            <h1>{article.title}</h1>

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

          <aside className="story-sidebar compact-sidebar" aria-label="Article tools">
            <section className="ad-box">
              <span>Advertisement</span>
              <img src="/photos/ad.png" alt="Advertisement" />
              <p>By Nicole Florendo</p>
            </section>

            <section>
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

function StoryBlock({ block }: { block: StoryBlockData }) {
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
        <span className="caption-copy">
          {photo.caption} <span className="caption-credit">| {photo.credit}</span>
        </span>
      </figcaption>
    </figure>
  );
}
