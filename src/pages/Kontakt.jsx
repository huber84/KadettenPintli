import MapView from "../components/MapView";

export default function Kontakt() {
    return (
      <section className="container kontakt">
        <h2>Kontakt</h2>
        <p><strong>Kadetten-Pintli Thun</strong></p>
        <p>Adresse: Thunstrasse 34, 3612 Steffisburg</p>
        <p>Telefon: 079 251 24 30</p>
        <p>E-Mail: <a href="mailto:pintli@kadetten-thun.ch">pintli@kadetten-thun.ch</a></p>
        <p>Öffnungszeiten nur am Ausschiesset.</p>

        <div className="map-section">
            <h3>So findest du uns</h3>
            <MapView />
        </div>


        <p><small>Betrieben über SumUp-Händlerkonto: ch.huber84@bluewin.ch</small></p>
        <p><small>Zahlungen via SumUp/Twint/Bar möglich.</small></p>
      </section>
    );
  }
  