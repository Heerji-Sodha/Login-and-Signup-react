import React from 'react';
import PersistentDrawerLeft from '../Drawer/Drawer'
import PostReq from '../../containers/PostReq/PostReq'
class AboutPost extends React.Component {
    render() {

        return (
            <div>
                <PersistentDrawerLeft />
                <PostReq />


            </div>

        );
    }
}

export default AboutPost;
