import React from 'react';
import gambar4a from '../pages/home/images/w1.svg';
import gambar4b from '../pages/home/images/w2.svg';
import gambar4c from '../pages/home/images/w3.svg';
import gambar4d from '../pages/home/images/w4.svg';

class Sec4 extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 1200) {
              document.getElementById('c4a').classList.add('content-sec4-show')
          }else if(window.pageYOffset <= 1200) {
            document.getElementById('c4a').classList.remove('content-sec4-show')
          }
        })
    }

    render() {
        return (
            <div>

                <div className="sec-4 w-screen h-auto flex flex-wrap justify-center align-center">
                    <div className="content-sec4 wrap-div flex justify-center w-screen" id="c4a">
                        <div>
                            <img src={gambar4a} alt="" />
                        </div>
                        <div>
                            <img src={gambar4b} alt="" />
                        </div>
                        <div>
                            <img src={gambar4c} alt="" />
                        </div>
                        <div>
                            <img src={gambar4d} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sec4;