import React from 'react';
import gambar6 from '../pages/home/images/Web devices-pana 1.svg';

class Sec6 extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 2300) {
              document.getElementById('c6a').classList.add('content-sec6-show')
              document.getElementById('c6b').classList.add('img-sec6-show')
          }else if(window.pageYOffset <= 2300) {
            document.getElementById('c6a').classList.remove('content-sec6-show')
            document.getElementById('c6b').classList.remove('img-sec6-show')
          }
        })
    }

    render() {
        return (
            <div>
                <div className="sec-6 w-screen h-auto flex flex-wrap justify-center align-center">
                    <div className="content-sec6" id="c6a">
                        <h1 className="font-bold md:text-left text-black">Responsive design & Bisa di akses dimanapun</h1>
                        <p className="font-semibold text-gray-500">
                            Undangan online kamu bisa diakses dimanapun dan kapan pun.
                        </p>
                    </div>
                    <div>
                        <img src={gambar6} alt="" className="img-sec6" id="c6b" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Sec6;