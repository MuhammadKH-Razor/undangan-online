import React from 'react';
import icons from '../pages/home/images/icon.svg';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                 <div className="nav fixed justify-center m-auto text-center pt-3 px-2 align-center relative mb-0 w-screen h-12">
                    <img src={icons} alt="" className="relative m-auto" />
                    </div>
                    <div className="nav2 md:bg-gray py-0 mb-8 items-baseline flex w-screen h-10 item-baseline font-semibold h-5 bg-transprent">
                    <h2 className="font-bold">Undangan.com</h2>
                    <ul className="flex ml-10">
                        <li>Design</li>
                        <li>Harga</li>
                        <li>Testimoni</li>
                    </ul>
                    <div className="ml-auto">
                        <button className="btn mt-4 mr-8 bg-transparent text-black px-3 py-2 text-center font-semibold">Login</button>
                        <button className="btn mt-4 bg-black text-white shadow-lg px-5 py-2 text-center font-semibold">Daftar gratis <i className="fas fa-arrow-right"></i></button>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Navbar;