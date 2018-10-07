import React from 'react';
import './About.style.css';
import Hoang from '../../../../assets/img/Hoang.png';


const People = (props) => {
    const {
        img,
        intro
    } = props;

    return (
        <div className="people">
          <div className="avatar">
              <img src={img} />
          </div>
          <div className="ppl-intro">
              <p>
                  {intro}
              </p>
          </div>
        </div>
    );
}

export const About = () => {
    const people = [
      {
        img: Hoang,
        intro: "CEO - Dung Le",
      },
      {
        img: Hoang,
        intro: "CTO - Thuy Nguyen",
      },
    ];

    const renderPeople = () => {
      return people.map((p) => {
        return (
          <div>
            <People {...p}/>
            <hr />
          </div>
        );
      })
    }

    return (
        <div className="page">
            <div className="title">
                ABOUT TAN THUY HOANG
            </div>
            <div className="intro">
                <p>
                    Terracon is a 100 percent employee-owned consulting engineering firm providing quality services to clients. Since 1965, Terracon has evolved into a successful multi-discipline firm specializing in environmental, facilities, geotechnical, and materials services.
                Over our history, Terracon has achieved significant expansion through both internal growth and acquisitions. <br />
                </p>
                <p>
                    Terracon currently has more than 4,000 employees in more than 140 offices, serving all 50 states nationwide. Additionally, we partner with our U.S. clients to serve their international needs. The firm’s success is further evidenced by a current ranking of 24 in Engineering News-Record’s 2018 list of the Top 500 Design Firms, as compared to a ranking of 58 a decade ago. Terracon’s growth is due to dedicated employees who are responsive to clients, provide quality services, and take advantage of opportunities in the marketplace.
                </p>
            </div>
            <div className="intro filler">
            <hr />                             
            </div>
            <div className="people-section">
              { renderPeople() }            
            </div>
        </div>
    );
}
