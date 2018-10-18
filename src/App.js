import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';

import authProvider from './authProvider';
import Dashboard from './Dashboard';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import CommentList from './comments';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (<Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
        <Resource 
          name="posts" 
          list={PostList}
          edit = {PostEdit}
          create = {PostCreate}
          icon ={PostIcon}
          
        />
        <Resource name="users" list={UserList} icon={UserIcon} />
        <Resource name="comments" list={CommentList} />
        </Admin>);

export default App;