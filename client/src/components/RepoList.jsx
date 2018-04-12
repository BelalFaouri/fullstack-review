import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    
    <RepoItem/>
     
  </div>
)

export default RepoList;