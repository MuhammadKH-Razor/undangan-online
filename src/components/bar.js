import React from 'react';

class Bar extends React.Component {
    

    showFull = () => {
        document.getElementById('dashboard').classList.toggle('dashboard-show');
        document.getElementById('barsX').classList.remove('dashboard-show');
    }

    render() {
        const { showFull } = this;

        return (
            <div>
                <div className="dashboard fixed t-0 l-0 h-screen w-screen" id="dashboard">
                    <div className="toggle-btn shadow-md" id="toggle-btn" onClick={showFull}>
                        <i className="fas fa-bars" id="barsX"></i>
                    </div>
                    <ul>
                        <i className="fas fa-times text-red shadow-md rounded-full p-3" id="timesX" onClick={showFull}></i>
                        <li><i className="fas fa-pen-nib"></i>Design</li>
                        <li><i className="fas fa-tag"></i>Harga</li>
                        <li><i className="fas fa-vial"></i>Testimoni</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Bar;