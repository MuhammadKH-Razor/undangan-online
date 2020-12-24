import React from 'react';
import gambar5 from '../pages/home/images/hastag.svg';

class Sec5 extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 1700) {
              document.getElementById('c5a').classList.add('content-sec5-show')
              document.getElementById('c5b').classList.add('img-sec5-show')
          }else if(window.pageYOffset <= 1700) {
            document.getElementById('c5a').classList.remove('content-sec5-show')
            document.getElementById('c5b').classList.remove('img-sec5-show')
          }
        })
    }

    render() {
        return (
            <div>
                <div className="sec-5 w-screen h-auto flex flex-wrap justify-center align-center">
                    <div className="content-sec5" id="c5a">
                        <h1 className="font-bold md:text-left text-black">Kenapa Memilih Kami?</h1>
                        <p className="font-semibold text-gray-500">
                            Kami memberikan solusi untuk pernikahan anda, salah satunya undangan.
                            Dengan menggunakan undangan.com kamu dapat menghemat waktu untuk mengurus
                            keperluan pernikahan lainnya. Cukup daftar, isi data diri, dan pilih
                            template yang diinginkan, undangan kamu anda langsung jadi dalam beberapa menit.
                            Selain praktis kamu juga dapat menghemat pengeluaran untuk pembuatan undangan pada umumnya.
                            Dengan desain undangan yang cantik dan moderen tentunya akan membuat pernikahan anda menjadi lebih
                            terkesan.
                        </p>
                        <button className="btn mt-4 text-white shadow-lg px-3 py-2 text-center font-semibold">
                            Coba Sekarang
                        </button>
                    </div>
                    <div>
                        <img src={gambar5} alt="" className="img-sec5" id="c5b" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Sec5;