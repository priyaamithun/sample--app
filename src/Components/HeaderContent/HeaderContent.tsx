
import * as React from 'react';

class HeaderContent extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar fixed-top navbar-dark bg-dark">
                    <h1 >Weather Forecast</h1>
                    <a href=""><i className="fas fa-desktop responsiveIcon"></i></a>
                    <a href=""><i className="fas fa-tablet-alt responsiveIcon"></i></a>
                    <a href=""><i className="fas fa-mobile responsiveIcon"></i></a>

                    <button type="button" className="btn buttonColor">Hide Panel</button>
                </nav>
            </header>
        );
    }
}

export default HeaderContent;
