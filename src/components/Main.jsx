import React from 'react';
import Cards from './catalog/Cards';
import Orderform from './orderForm/Orderform';

function Main() {
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
        <br />
      <Cards />
      <Orderform />
      <br />
      <footer>
        <div className="info">
          <div className="info_links">
            <p>© 1999–2022 интернет-магазин наручных часов Watch-shop.ru</p>
          </div>

        </div>
      </footer>

      {/* <div className="feet-item">
        <div id="footer">
          <footer>
            <p>© 2018 Watch shop</p>
          </footer>
        </div>
      </div> */}
    </>
  );
}

export default Main;
