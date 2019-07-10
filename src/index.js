import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'; 
import ApprovalCard from './ApprovalCard';

const App=()=>{
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                author="Max"
                timeago="Today at 4:00PM"
                content="Nice Blog post"
                avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail  author="Sam"
                timeago="Today at 8:00AM"
                content="I like the Subject"
                avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Jane"
            timeago="Yesterday at 10:00PM"
            content="I like the heading"
            avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Alex"
            timeago="Two Days ago"
            content="Nice concept"
            avatar={faker.image.avatar()}/>
            </ApprovalCard>


        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));


