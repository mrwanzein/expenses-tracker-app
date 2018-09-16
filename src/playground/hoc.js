// Higer Order Component (HOC) - A (HOC) that renders another component

/* -- some advantages -- */
// Reuse code
// Render hijacking
// Pop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
return (props) => (
        <div>
            { props.isAdmin && <p>This is private info, please don't share</p> }
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please login to view</p> }
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="This are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This are the details" />, document.getElementById('app'));