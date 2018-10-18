import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EmailField
} from 'react-admin';

const  CommentList = props => (
    <List {...props}>
        <Datagrid rowClick='edit'>
            <ReferenceField source="postId" reference="posts">
                <TextField source="id" />
            </ReferenceField>
            <TextField source="id"/>
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

export default CommentList;