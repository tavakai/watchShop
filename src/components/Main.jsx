import React from 'react';
import Cards from './catalog/Cards';

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
            <img src="https://catherineasquithgallery.com/uploads/posts/2021-02/1614434047_62-p-chasi-na-temnom-fone-69.jpg" className="d-block w-100" alt="no img" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Вы вдохновляете нас вашими идеями</h5>
              <p>You inspire us with your ideas</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://c.wallhere.com/photos/82/d4/aviation_hamilton_watch_wristwatch-563969.jpg!d" className="d-block w-100" alt="no img" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Вместе мы покорим мир часов</h5>
              <p>Together we will conquer the world of watches</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://img1.goodfon.ru/original/2880x1800/a/a0/chasy-ulysse-nardin-blue-toro.jpg" className="d-block w-100" alt="no img" />
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

      </div>
      <div
        className="footer"
        id="footer"
        style={{
          width: '1300px', height: '150px', color: '#fff', backgroundColor: '#000000',
        }}
      >
        <footer>
          <p>© 2018 Watch shop</p>
        </footer>
      </div>
    </>
  );
}

export default Main;
