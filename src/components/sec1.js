import React from 'react';
import gambar1 from '../pages/home/images/neww.svg';

class Sec1 extends React.Component {
    

    render() {
        return (
            <div>
                <div className="sec-1 w-screen h-auto flex flex-wrap md:justify-center md:align-center">
                    <div className="content-sec1 animate__animated animate__fadeInUpBig" id="c1">
                        <h1 className="font-bold md:text-left text-black">Sebarkan Undangan Pernikahan kamu <br /> Secara Online</h1>
                        <button className="btn mt-10 bg-black text-white shadow-lg px-5 py-2 text-center font-semibold">Buat Sekarang <i className="fas fa-arrow-right"></i></button>
                    </div>
                    <img src={gambar1} alt="" className="img-sec1 animate__animated animate__fadeInUpBig m-auto md:m-0 pl-3 md:pl-0" id="c2" />
                </div>
            </div>
        )
    }
}

export default Sec1;