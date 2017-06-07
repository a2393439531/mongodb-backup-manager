import React, { Component } from 'react'
import { Link } from 'react-router'
import userApi from 'api/user';
import { hashHistory } from 'react-router';
import * as userActionsCreators from 'actions/user';
import { dispatch } from 'store/store';


export default class Header extends Component {
    
    handleLogout() {
        userApi.logout()
               .then(() => {
                   dispatch(userActionsCreators.setUser({}));
                   hashHistory.push('/sign_in');
               })
               .catch(err => {
                   console.error(err);
               })
    }

    render() {
        const props = this.props;

        if(props.user == null) {
            return null;
        }

        return (
            <div className="header">
                <div className="title">
                    <span className="logo flaticon-storing"></span>
                    <span className="text">MongoBackup Manager</span>
                </div>
                <div className="navigation">
                    <Link to="/" className="link icon"><i className="fa fa-home"></i></Link>
                    <Link to="/newConfig" className="link icon"><i className="fa fa-plus"></i></Link>
                    <div className='icon fa fa-sign-out' onClick={ this.handleLogout.bind(this) }></div>
                </div>
            </div>
        )
    }
}