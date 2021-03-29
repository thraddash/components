import React from 'react';
import ReactDom from 'react-dom'
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <div>
            <h4>Warning!</h4>
            Are you sure you want to do this?
          </div>
        </ApprovalCard>
        
        <ApprovalCard>
          <CommentDetail 
            author="Sam" 
            timeAgo="Today at 4:45PM" 
            avatar={faker.image.avatar()} 
            textComment="Nice blog post!" 
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            author="Alex" 
            timeAgo="Today at 2:00AM" 
            avatar={faker.image.avatar()} 
            textComment="blah blah blah"
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail 
            author="Jane" 
            timeAgo="Yesterday at 5:00PM" 
            avatar={faker.image.avatar()} 
            textComment="add some data here" 
          />
        </ApprovalCard>  
      </div>
    );
}

ReactDom.render(<App />, document.querySelector('#root'));