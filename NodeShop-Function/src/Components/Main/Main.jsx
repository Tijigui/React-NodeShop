import React from 'react';
import Camisa_01 from '../img/Camisa-01.png';
import Camisa_02 from '../img/Camisa-02.png';
import Camisa_03 from '../img/Camisa-03.png';
import wave_01 from '../img/wave1.png';


export function Main() {
  return (
    <div className='container'>
      <main>
        <div className='main-01'>
          <h2 className='main-title'>
            Os Melhores Designs ... Estão Aqui 😁!
          </h2>

          <p className="main-paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis vitae praesentium perspiciatis maiores commodi suscipit possimus, saepe consectetur voluptatum est natus ducimus eos voluptate? Dicta sint molestias saepe repellendus corrupti.</p>


          <button type="button" class="btn btn-success">More <i className="icon-2 fa-solid fa-angle-right"></i></button>

        </div>

        <div className="main-02">

          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Camisa_01} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Camisa_02} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Camisa_03} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

      </main>
    </div>
  );
};
