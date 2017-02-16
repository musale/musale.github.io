var React = require('react');
var styles = require('../styles/baseStyle');

function IntroductionPanel(props) {
    return (
        <div className="panel panel-default">
            <div className="panel-body">A Basic Panel</div>
        </div>
    )
}

function Home(props) {
    return (
        <div style={styles.background}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <IntroductionPanel/>
                    </div>
                    <div className="col-md-8">
                        <IntroductionPanel/>
                    </div>
                </div>
            </div>
        </div>
    )
}

module.exports = Home;
