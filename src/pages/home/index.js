import React from "react";
import './index.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Sec1 from '../../components/sec1';
import Sec2 from '../../components/sec2';
import Sec3 from '../../components/sec3';
import Sec4 from '../../components/sec4';
import Sec5 from '../../components/sec5';
import Sec6 from '../../components/sec6';
import Bar from '../../components/bar';


class index extends React.Component {



  render() {
    const {showFull} = this;

    return (
      <div>

       <Navbar />

       <Bar />

       <Sec1 />

       <Sec2 />

       <Sec3 />

       <Sec4 />

       <Sec5 />

       <Sec6 />

       <Footer />

      </div>
    )
  }
}

export default index;
