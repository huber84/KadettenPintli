import version from "../version.json";

export default function Footer() {
    return (
      <footer className="site-footer">
        <div className="container">
          <p><strong>Kadetten-Pintli Thun / Betrieben durch: Christoph Huber, im Auftrag der Kadetten Thun</strong></p>
          <p>Adresse: Thunstrasse 34, 3612 Steffisburg</p>
          <p>Telefon: 079 251 24 30 | E-Mail: pintli@kadetten-thun.ch</p>
          <p>Öffnungszeiten nur am Ausschiesset</p>
          <p><small>Betrieben über SumUp-Händlerkonto: ch.huber84@bluewin.ch</small></p>
          <p><small>Zahlungen via SumUp / Twint / Bar möglich.</small></p>

          <hr className="divider" />
          <p className="version">
            © 2025 Kadetten-Pintli Thun | Version {version.version}
          </p>
        </div>
      </footer>
    );
  }
  