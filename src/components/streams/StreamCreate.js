import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    //state = {  }
    render() {
        return (
            <form>
                <Field name="title" />
                <Field name="description" />
            </form>
        );
    }
}

export default reduxForm({
    form: 'streamCreate'
}) (StreamCreate);