import { useState } from "react";
import { ArrowLeft, Lightbulb } from "lucide-react";
import {
  lessonBoards,
  slides,
  type BoardCard,
  type ChipTone,
  type TeachSlide,
} from "@/data/visuals";

const chipClass: Record<ChipTone, string> = {
  none: "cover-none",
  seven: "cover-seven",
  wait: "cover-wait",
};

function Chip({ tone, label }: { tone: ChipTone; label: string }) {
  return <span className={`cover-chip ${chipClass[tone]}`}>{label}</span>;
}

function CardBody({ card }: { card: BoardCard }) {
  return (
    <>
      {card.steps && card.steps.length > 0 && (
        <div className="board-steps">
          {card.steps.map((step) => (
            <div key={`${step.title}-${step.text}`} className={`board-step${step.ghost ? " ghost" : ""}`}>
              <b>{step.title}</b>
              <span>{step.text}</span>
            </div>
          ))}
        </div>
      )}
      {card.rows && card.rows.length > 0 && (
        <div className="board-rows">
          {card.rows.map((row) => (
            <div key={row.label}>
              <em>{row.label}</em>
              <Chip tone={row.tone} label={row.chip} />
            </div>
          ))}
        </div>
      )}
      {card.points && card.points.length > 0 && (
        <ul className="board-points">
          {card.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
      )}
      {card.warn && <p className="board-warn">{card.warn}</p>}
    </>
  );
}

function BoardCardFace({
  card,
  index,
  onOpen,
}: {
  card: BoardCard;
  index: number;
  onOpen: () => void;
}) {
  return (
    <button type="button" className={`board-card tone-${card.tone ?? "mint"}`} onClick={onOpen}>
      <div className="board-card-head">
        <span>{card.letter ?? String.fromCharCode(65 + index)}</span>
        <div>
          <b>{card.title}</b>
          {card.subtitle && <p>{card.subtitle}</p>}
        </div>
        {card.icon && <img src={card.icon} alt="" />}
      </div>
      <CardBody card={card} />
    </button>
  );
}

function TeachBoard({
  slide,
  index,
  total,
}: {
  slide: TeachSlide;
  index: number;
  total: number;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const card = open === null ? null : slide.cards[open];
  const columns = slide.cards.length >= 4 ? "four" : slide.cards.length === 3 ? "three" : slide.cards.length === 1 ? "one" : "two";

  if (card) {
    return (
      <article className="teach-board">
        <div className="board-panel-top">
          <button type="button" className="guide-back" onClick={() => setOpen(null)}>
            <ArrowLeft size={16} /> {slide.title}
          </button>
          <span>{index} / {total}</span>
        </div>
        {slide.legend && (
          <div className="guide-legend compact">
            <span className="cover-chip cover-none">No extra cover</span>
            <span className="cover-chip cover-seven">Extra cover / backup</span>
            <span className="cover-chip cover-wait">Wait / do not start</span>
          </div>
        )}
        <article className={`board-card featured tone-${card.tone ?? "mint"}`}>
          <div className="board-card-head">
            <span>{card.letter ?? String.fromCharCode(65 + (open ?? 0))}</span>
            <div>
              <b>{card.title}</b>
              {card.subtitle && <p>{card.subtitle}</p>}
            </div>
            {card.icon && <img src={card.icon} alt="" />}
          </div>
          <CardBody card={card} />
        </article>
        <div className="guide-takeaway">
          <Lightbulb size={18} />
          <b>Key takeaway:</b> {slide.takeaway}
        </div>
      </article>
    );
  }

  return (
    <article className="teach-board">
      <header className="board-head">
        <div>
          <p>{slide.kicker ?? "Visual teaching"}</p>
          <h3>{slide.title}</h3>
          {slide.lede && <p className="board-lede">{slide.lede}</p>}
        </div>
        <small>{index} / {total}</small>
      </header>
      {slide.legend && (
        <div className="board-legend">
          <span className="cover-chip cover-none">No extra cover</span>
          <span className="cover-chip cover-seven">Extra cover / backup</span>
          <span className="cover-chip cover-wait">Wait / do not start</span>
        </div>
      )}
      <p className="board-tap">Tap a card to open the rule.</p>
      <div className={`board-grid ${columns}`}>
        {slide.cards.map((item, cardIndex) => (
          <BoardCardFace
            key={item.title}
            card={item}
            index={cardIndex}
            onOpen={() => setOpen(cardIndex)}
          />
        ))}
      </div>
      <div className="guide-takeaway">
        <Lightbulb size={18} />
        <b>Key takeaway:</b> {slide.takeaway}
      </div>
      {slide.source && <p className="board-source">{slide.source}</p>}
    </article>
  );
}

export function TeachDeck({ lessonTitle }: { lessonTitle: string }) {
  const ids = lessonBoards[lessonTitle] ?? [];
  const items = ids.map((id) => slides[id]).filter(Boolean);
  if (!items.length) return null;
  return (
    <section className="teach-deck">
      <p className="deck-kicker">Visual teaching · same clinical rules, illustrated</p>
      {items.map((slide, index) => (
        <TeachBoard key={slide.id} slide={slide} index={index + 1} total={items.length} />
      ))}
    </section>
  );
}
