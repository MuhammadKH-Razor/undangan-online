import React from 'react';

class Footer extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 2875) {
              document.getElementById('cfa').classList.add('content-secf-show')
              document.getElementById('cfb').classList.add('content-secf2-show')
              document.getElementById('cfc2').classList.add('img-secf-show')
              document.getElementById('cfc3').classList.add('img-secf3-show')
          }else if(window.pageYOffset <= 2875) {
            document.getElementById('cfa').classList.remove('content-secf-show')
            document.getElementById('cfb').classList.remove('content-secf2-show')
            document.getElementById('cfc2').classList.remove('img-secf-show')
            document.getElementById('cfc3').classList.remove('img-secf3-show')
          }
        })
    }

    render() {
        return (
            <div>
                <div className="sec-footer w-screen h-auto flex flex-wrap justify-center align-center">
                    <div className="content-secf wrap-div flex flex-wrap justify-cente" id="cfa">
                        <div className="com">
                            <h3 className="font-bold">UNDANGAN.COM</h3>
                            <p className="font-semibold">Situs untuk membuat undangan online dengan beragam design yang cantik, menarik, dan moderen.</p>
                        </div>
                        <div className="content-secf2 com2 pl-0 md:pl-5 pt-5 md:pt-0" id="cfb">
                            <h3 className="font-bold">PRODUK</h3>
                            <ul className="font-semibold">
                                <li>Undangan Online</li>
                                <li>Buku Tamu</li>
                                <li>Buku tamu2</li>
                            </ul>
                        </div>
                        <div className="img-secf com2 pl-0 md:pl-5 pt-5 md:pt-0" id="cfc2">
                            <h3 className="font-bold">MEDIA SOSIAL</h3>
                            <ul className="font-semibold">
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                            </ul>
                        </div>
                    </div>

                    <div className="img-secf3 relative copy font-bold text-black-500 pl-4 md:pl-12 w-screen text-left" id="cfc3">
                        <p>@copy 2020, UNDANGAN.COM</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Footer;