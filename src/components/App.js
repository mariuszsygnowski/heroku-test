import React, { Fragment, Component } from "react";
import autoBind from "auto-bind";
import "../styles/components/main.less";
import phoneSolid from "../styles/images/phone-solid.svg";
import logoSeniorCare from "../styles/images/LogoSeniorCare.svg";
import baner1 from "../styles/images/baner1.jpg";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    autoBind(this);
  }

  render() {
    return (
      <Fragment>
        <header>
          <div class="telephone_bar">
            <div class="wrapper">
              <div class="header_contact_data">
                <div class="telephone_icon">
                  <img src={phoneSolid} />
                </div>
                <p>
                  <a href="tel:+48725658420"> +48 725 658 420</a>
                </p>
              </div>
            </div>
          </div>
          <div class="main_bar">
            <div class="wrapper">
              <div class="logo">
                <a href="#">
                  <img src={logoSeniorCare} />{" "}
                </a>
              </div>
              <nav>
                <ul>
                  <li>
                    <a href="#">HOME</a>
                  </li>
                  <li>
                    <a href="kontakt.html">USŁUGI</a>
                  </li>
                  <li>
                    <a href="onas.html">O NAS</a>
                  </li>
                  <li>
                    <a href="praca.html">PRACA</a>
                  </li>
                  <li>
                    <a href="uslugi.html">KONTAKT</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <section id="baner">
          <div class="wrapper">
            <div class="welcome">
              <h1 class="welcome_title">
                Witaj na stronie <span>Senior Care</span>
              </h1>
              <p class="welcome_text">
                Cóż robić? Jakiego lekarstwa szukać i gdzie? Jak sobie pomóc?
                Jak się odnaleźć w tym gąszczu niewiadomych Ciekawe, czy ktoś
                wie? Owszem, wiedzą ludzie, z dużym okładem wieku są przecież
                różne instytucje, nie daj się starości człowieku. Pomożemy we
                wszystkim aby ułatwić Ci życie. Zapraszamy !
              </p>
            </div>
            <div class="welcome_images">
              <div class="oneoftwo">
                <div class="left">
                  <img src={baner1} />
                </div>
              </div>
              <div class="oneoftwo">
                <div class="right">
                  <img src={baner1} />
                  <img src={baner1} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="our-services">
          <div class="wrapper">
            <h1>Nasze usługi</h1>
            <p>
              Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
              przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
              przez nieznanego drukarza do wypełnienia tekstem próbnej książki.
              Pięć wieków później zaczął być używany przemyśle elektronicznym.
            </p>
          </div>
        </section>

        <section id="our-services-details">
          <div class="wrapper">
            <div class="oneoffour">
              <div class="box">
                <div class="inner">
                  <div class="icon">
                    <img src="" alt="" />
                  </div>
                  <h2>Podawanie leków</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perferendis, inventore dolor a ipsum asperiores qui odio
                    soluta facere cupiditate eos, minima doloribus, officiis
                    quis delectus vitae maxime! Ipsa, aspernatur, sint.
                  </p>
                </div>
              </div>
            </div>
            <div class="oneoffour">
              <div class="box">
                <div class="inner">
                  <div class="icon">
                    <img src="" alt="" />
                  </div>
                  <h2>Podawanie leków</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perferendis, inventore dolor a ipsum asperiores qui odio
                    soluta facere cupiditate eos, minima doloribus, officiis
                    quis delectus vitae maxime! Ipsa, aspernatur, sint.
                  </p>
                </div>
              </div>
            </div>
            <div class="oneoffour">
              <div class="box">
                <div class="inner">
                  <div class="icon">
                    <img src="" alt="" />
                  </div>
                  <h2>Podawanie leków</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perferendis, inventore dolor a ipsum asperiores qui odio
                    soluta facere cupiditate eos, minima doloribus, officiis
                    quis delectus vitae maxime! Ipsa, aspernatur, sint.
                  </p>
                </div>
              </div>
            </div>
            <div class="oneoffour">
              <div class="box">
                <div class="inner">
                  <div class="icon">
                    <img src="" alt="" />
                  </div>
                  <h2>Podawanie leków</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perferendis, inventore dolor a ipsum asperiores qui odio
                    soluta facere cupiditate eos, minima doloribus, officiis
                    quis delectus vitae maxime! Ipsa, aspernatur, sint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div class="wrapper" />
        </footer>
      </Fragment>
    );
  }
}
