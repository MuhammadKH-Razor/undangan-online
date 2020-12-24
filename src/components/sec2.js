import React from 'react';
import gambar2 from '../pages/home/images/Group 6.svg';

class Sec2 extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 300 || window.pageYOffset >= 200 && window.innerWidth <= 900) {
              document.getElementById('c1b').classList.add('content-sec2-show')
              document.getElementById('c2b').classList.add('img-sec2-show')
          }else if(window.pageYOffset <= 300 && window.pageYOffset >= 200 && window.innerWidth <= 900) {
            document.getElementById('c1b').classList.remove('content-sec2-show')
            document.getElementById('c2b').classList.remove('img-sec2-show')
          }
        })
    }

    render() {
        return (
            <div>
                <div className="sec-2 w-screen h-auto flex flex-wrap md:justify-center md:align-center">
                    <div className="content-sec2" id="c1b">
                        <h1 className="font-bold w-screen md:text-left text-black">Testimoni Dari Para <br /> Pengantin</h1>
                        <p className="font-semibold text-gray-500">Kami telah membantu para pengantin untuk menjadikan undangan pernikahan menjadi lebih berkesan dan memudahkan para pengantin mengurus undangan nya.</p>
                        <a href="#" className="a font-semibold">Lihat selengkapnya <i className="fas fa-arrow-right"></i></a>
                    </div>
                    <img src={gambar2} alt="" className="img-sec2 m-auto md:m-0 pl-3 md:pl-0" id="c2b" />
                </div>
            </div>
        )
    }
}

export default Sec2;