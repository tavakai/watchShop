import React from 'react';
import Cards from './catalog/Cards';
import Description from './Description';
import Orderform from './orderForm/Orderform';

function Main({ user }) {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://img1.goodfon.com/original/1920x1200/3/fd/omega-seamaster-omega-4395.jpg" className="d-block w-100" alt="no img" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Вы вдохновляете нас вашими идеями</h5>
              <p>You inspire us with your ideas</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://img3.goodfon.ru/original/1920x1200/b/d8/chasy-budilnik-ciferblat.jpg" className="d-block w-100" alt="no img" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Вместе мы покорим мир часов</h5>
              <p>Together we will conquer the world of watches</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://img5.goodfon.com/original/1920x1200/f/df/chasy-shveitsarskie-muzhskie-naruchnye-breget-breguet-montre.jpg" className="d-block w-100" alt="no img" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Ваша идея - наша реализация</h5>
              <p>Your idea is our implementation</p>
            </div>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Предыдущий</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
      <br />
      <Cards user={user} />
      <Description />
      <Orderform user={user} />
      <br />

      <footer>
        <div id="footer" className="info">
          <div className="info_links">
            <div className="footer-text left">© 2022 Westmorelands.ru</div>
            <div className="socials">
              <a href="//t.me/fidlersofi"><img className="socials_item" src="../img/telegram.png" alt="telegram" /></a>
              <a href="//instagram.com/fidlersofi"><img className="socials_item" src="../img/instagram.png" alt="telegram" /></a>
              {/* <a href="//vk.com/svovasta"><img className="socials_item" src="img/vk.svg" alt="vk" /></a> */}
              <a href="//github.com/fidlersofi"><img className="socials_item" src="../img/github2.png" alt="github" /></a>
            </div>
            <ul className="footer-text bottom-text">
              <li>
                Москва
                +7 (777) 777-77-77
              </li>
              <li>
                Санкт-Петербург
                +7 (111) 111-11-11
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

// Москва

// +7 (495) 190-75-07
// Санкт-Петербург

// +7 (812) 627-15-07

export default Main;
