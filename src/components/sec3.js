import React from 'react';
import gambar3 from '../pages/home/images/new2.svg';

class Sec3 extends React.Component {
    
    componentDidMount() {
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 800 || window.pageYOffset >= 900 && window.innerWidth <= 900) {
              document.getElementById('c3a').classList.add('content-sec3-show')
              document.getElementById('c3b').classList.add('img-sec3-show')
          }else if(window.pageYOffset <= 800 || window.pageYOffset >= 900 && window.innerWidth <= 900) {
            document.getElementById('c3a').classList.remove('content-sec3-show')
            document.getElementById('c3b').classList.remove('img-sec3-show')
          }
        })
    }

    render() {
        return (
            <div>
                <div className="sec-3 w-screen h-auto flex flex-wrap justify-center align-center">
                    <div className="content-sec3" id="c3a">
                        <h1 className="font-bold md:text-left text-black">Template Undangan <br /> Yang Menarik</h1>
                        <p className="font-semibold text-gray-500">Kami menyediakan template undangan yang menarik, cantik dan moderen. Tentu nya akan membuat undangan anda menjadi lebih elegan.</p>
                        <a href="#" className="a font-semibold">Lihat selengkapnya <i className="fas fa-arrow-right"></i></a>
                    </div>
                    <div>
                        <img src={gambar3} alt="" className="img-sec3" id="c3b" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Sec3;