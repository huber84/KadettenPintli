import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <p>
          Willkommen im <strong>Kadetten-Pintli Thun</strong> – dem Treffpunkt beim Ausschiesset!
          Genieße erfrischende Getränke, feine Snacks und gute Gesellschaft. Der gesamte Erlös
          geht zugunsten der Kadetten Thun.
        </p>
      </div>
    </>
  );
}
