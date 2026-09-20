import { useState } from "react";
import { ArrowLeft, CheckCircle2, Lightbulb, Pause, ShieldAlert } from "lucide-react";
import { chcStartKeys, chcStartPanels, chcStartSafety, type Cover, type GuidePanel, type GuideTile } from "@/data/chcStartGuide";

const coverClass: Record<Cover, string> = {
  none: "cover-none",
  seven: "cover-seven",
  wait: "cover-wait",
};

const coverLabel: Record<Cover, string> = {
  none: "No extra cover",
  seven: "Extra cover 7 days",
  wait: "Wait / do not start",
};

function CoverChip({ cover, label }: { cover: Cover; label?: string }) {
  return <span className={`cover-chip ${coverClass[cover]}`}>{label ?? coverLabel[cover]}</span>;
}

function TileCard({ tile, onOpen }: { tile: GuideTile; onOpen: () => void }) {
  return (
    <button className="guide-tile" onClick={onOpen}>
      <img src={tile.icon} alt="" />
      <b>{tile.title}</b>
      <p>{tile.hint}</p>
      <CoverChip cover={tile.cover} />
    </button>
  );
}

function PanelView({ panel, index, total, onBack }: {
  panel: GuidePanel;
  index: number;
  total: number;
  onBack: () => void;
}) {
  return (
    <div className="guide-panel">
      <div className="guide-panel-top">
        <button className="guide-back" onClick={onBack}><ArrowLeft size={16} /> All situations</button>
        <span>{index + 1} / {total}</span>
      </div>
      <div className="guide-legend compact">
        <span className="cover-chip cover-none">No extra cover</span>
        <span className="cover-chip cover-seven">Extra cover 7 days</span>
        <span className="cover-chip cover-wait">Wait / do not start</span>
      </div>
      <p className="guide-kicker">CHC START RULE</p>
      <h3>{panel.number}. {panel.title}</h3>
      <p className="guide-lede">{panel.lede}</p>
      <div className={`guide-tiles ${panel.tiles.length === 1 ? "one" : ""}`}>
        {panel.tiles.map((tile, tileIndex) => (
          <article key={tile.id} className="guide-detail">
            <div className="guide-detail-head">
              <span>{String.fromCharCode(65 + tileIndex)}</span>
              <div>
                <b>{tile.title}</b>
                <p>{tile.start}</p>
              </div>
              <img src={tile.icon} alt="" />
            </div>
            <div className="guide-rows">
              {tile.rows.map((row) => (
                <div key={row.situation}>
                  <em>{row.situation}</em>
                  <CoverChip cover={row.cover} label={row.label} />
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
      {panel.note && <p className="guide-inline-note">{panel.note}</p>}
      <div className="guide-takeaway"><Lightbulb size={18} /><b>Key takeaway:</b> {panel.takeaway}</div>
    </div>
  );
}

function TileView({ tile, panel, onBack }: { tile: GuideTile; panel: GuidePanel; onBack: () => void }) {
  return (
    <div className="guide-panel">
      <div className="guide-panel-top">
        <button className="guide-back" onClick={onBack}><ArrowLeft size={16} /> {panel.title}</button>
      </div>
      <article className="guide-detail featured">
        <div className="guide-detail-head">
          <span>Rule</span>
          <div>
            <b>{tile.title}</b>
            <p>{tile.start}</p>
          </div>
          <img src={tile.icon} alt="" />
        </div>
        <div className="guide-rows">
          {tile.rows.map((row) => (
            <div key={row.situation}>
              <em>{row.situation}</em>
              <CoverChip cover={row.cover} label={row.label} />
            </div>
          ))}
        </div>
      </article>
      <div className="guide-takeaway"><Lightbulb size={18} /><b>Key takeaway:</b> {panel.takeaway}</div>
    </div>
  );
}

export function ChcStartGuide() {
  const [panelId, setPanelId] = useState<string | null>(null);
  const [tileId, setTileId] = useState<string | null>(null);
  const panel = chcStartPanels.find((item) => item.id === panelId) ?? null;
  const tile = panel?.tiles.find((item) => item.id === tileId) ?? null;
  const panelIndex = panel ? chcStartPanels.findIndex((item) => item.id === panel.id) : -1;

  if (panel && tile) {
    return <TileView tile={tile} panel={panel} onBack={() => setTileId(null)} />;
  }
  if (panel) {
    return (
      <PanelView
        panel={panel}
        index={panelIndex}
        total={chcStartPanels.length}
        onBack={() => setPanelId(null)}
      />
    );
  }

  return (
    <section className="chc-guide">
      <header className="guide-hero">
        <div>
          <p>COMBINED HORMONAL CONTRACEPTION</p>
          <h3>When CHC can start, and when extra cover is needed</h3>
          <p>Green is no extra cover. Amber is condoms or no sex for 7 days. Red is wait. Tap a tile for the exact start rule. The same rules apply to the pill, patch and ring.</p>
        </div>
        <small>FSRH CHC · UKMEC 2025</small>
      </header>
      <div className="guide-legend">
        <div><CheckCircle2 size={18} /><span><b>No extra cover</b>CHC is effective immediately</span></div>
        <div><ShieldAlert size={18} /><span><b>Extra cover for 7 days</b>Condoms or no sex for 7 days</span></div>
        <div><Pause size={18} /><span><b>Wait</b>Do not start yet — UPA or UKMEC 3/4</span></div>
      </div>
      {chcStartPanels.map((item) => (
        <div className="guide-group" key={item.id}>
          <div className="guide-group-head">
            <h4>{item.title}</h4>
            <button className="text-button" onClick={() => setPanelId(item.id)}>Open {item.number}/6</button>
          </div>
          <div className={`guide-grid count-${item.tiles.length}`}>
            {item.tiles.map((next) => (
              <TileCard
                key={next.id}
                tile={next}
                onOpen={() => { setPanelId(item.id); setTileId(next.id); }}
              />
            ))}
          </div>
        </div>
      ))}
      <div className="guide-footnotes">
        <div>
          <b>Key points</b>
          <ul>{chcStartKeys.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div>
          <b>Safety-net</b>
          <p>Advise urgent medical review for:</p>
          <ul>{chcStartSafety.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
