import {Fragment, React} from 'react';
import Footer from './Footer';
import Header from './Header';

function Dashboard(props){
    console.log(props);
    return (
        <Fragment>
            <Header/>
                <>{props.page()}</>
            <Footer/>
        </Fragment>
    )
}

export default Dashboard;