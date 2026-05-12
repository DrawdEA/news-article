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

const article = {
  publication: "Heritage Pulse",
  tagline: "Authority in every update.",
  section: "Nation",
  title: "Palace Rejects New Destabilization Plot Rumors",
  deck:
    "Officials urged the public to examine unverified political claims with care as fresh rumors circulated online.",
  author: "Staff Report",
  date: "May 12, 2026",
  readTime: "4 min read",
  heroImage:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85",
  heroAlt:
    "A government-style building seen from across a landscaped public space.",
  heroCaption:
    "Use this lead image slot for the primary article photo or newsroom-approved artwork.",
  body: [
    "MANILA - This opening paragraph is editable. Replace it with the first paragraph of your article when the final copy is ready.",
    "Keep each paragraph as a separate string inside the body array. That makes the article easy to scan, reorder, or remove without touching the layout code.",
    "Use this template for a fast civic-news article page with a clean masthead, visible publication identity, image placements, share tools, and a readable story column.",
    "The page is intentionally built without hard-coded article dependencies, so you can paste the finished report directly into this file later.",
    "This paragraph can hold additional context, such as when the issue began, who first raised the concern, and what agencies or officials have said so far.",
    "A longer article may use this space to explain the background of the controversy, including prior statements, relevant timelines, and public reaction.",
    "Use another paragraph here for a direct quote or paraphrased statement. When you paste the final article, keep quotes in their own paragraph if you want them to stand out in the reading flow.",
    "This section can also carry verification details, such as what documents were reviewed, which offices were contacted, and what claims remain unconfirmed.",
    "For developing stories, this placeholder can become an update paragraph that clarifies what changed since the first version of the report was published.",
    "Add local color or scene-setting here if the article needs it. A newsroom piece often benefits from one paragraph that gives readers a sense of place without slowing the story down.",
    "This paragraph can be used for response from the opposing side, a related agency, or an affected group. Keeping responses separate makes attribution clearer.",
    "If the story involves policy, law, public safety, or elections, use this space to explain why the matter affects ordinary readers.",
    "A later paragraph may summarize expert analysis, historical comparison, or previous reporting that helps readers understand the significance of the issue.",
    "Use this near the end for what happens next, such as scheduled hearings, expected statements, further investigation, or follow-up actions by officials.",
    "Close with a final paragraph that reinforces the latest confirmed information. You can also use this spot for a note that the story will be updated as more details become available."
  ],
  inlineImages: [
    {
      src: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1400&q=85",
      alt: "A press room setup with microphones and empty chairs.",
      caption:
        "Inline image slot 1. Replace this with a press conference, document, location, or subject photo."
    },
    {
      src: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=85",
      alt: "Printed newspapers arranged on a table.",
      caption:
        "Inline image slot 2. This can hold a secondary image, explainer graphic, or timeline visual."
    }
  ],
  related: [
    "Senate committee schedules hearing on online misinformation",
    "Explainer: How verified reports move through public agencies",
    "Local officials call for stronger digital literacy programs"
  ]
};

const firstSection = article.body.slice(0, 4);
const secondSection = article.body.slice(4, 9);
const thirdSection = article.body.slice(9);

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="ticker">
          <span>Featured</span>
          <p>Verified civic reporting, updated as details are confirmed.</p>
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
            <a className="section-link" href="#">
              {article.section}
            </a>

            <h1>{article.title}</h1>
            <p className="deck">{article.deck}</p>

            <div className="story-meta">
              <div>
                <p>By {article.author}</p>
                <span>
                  {article.date} / {article.readTime}
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

            <figure className="hero-media">
              <img src={article.heroImage} alt={article.heroAlt} />
              <figcaption>{article.heroCaption}</figcaption>
            </figure>

            <div className="article-body">
              {firstSection.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <ImageBreak image={article.inlineImages[0]} />

              {secondSection.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <ImageBreak image={article.inlineImages[1]} />

              {thirdSection.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="story-sidebar" aria-label="Article sidebar">
            <section className="ad-box">
              <span>Advertisement</span>
              <div>300 x 250</div>
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

            <section>
              <h2>You Might Also Like</h2>
              <ul>
                {article.related.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
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

function ImageBreak({
  image
}: {
  image: { src: string; alt: string; caption: string };
}) {
  return (
    <figure className="inline-media">
      <img src={image.src} alt={image.alt} />
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}
