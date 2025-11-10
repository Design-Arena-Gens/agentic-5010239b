import AcornLogo from "@/components/AcornLogo";

export default function Home() {
  return (
    <main className="page">
      <section className="card">
        <div className="badge">Est. 2024</div>
        <AcornLogo />
        <h1 className="family-name">The Oakridge Family</h1>
        <p className="motto">“Rooted in strength, growing together.”</p>
        <div className="details">
          <div>
            <span className="label">Symbol</span>
            <span className="value">Heritage Acorn</span>
          </div>
          <div>
            <span className="label">Palette</span>
            <span className="value">Verdant Grove</span>
          </div>
        </div>
      </section>
    </main>
  );
}
