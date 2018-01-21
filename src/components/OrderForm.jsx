import React from 'react';
import { withFormik } from 'formik';
import FormGroup from 'rambler-ui/FormGroup';
import Input from 'rambler-ui/Input';
import Textarea from 'rambler-ui/Textarea';
import Button from 'rambler-ui/Button';

const OrderForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
}) => (
    <form onSubmit={handleSubmit}>
        <FormGroup label="Название проекта">
            <Input
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
            />
            {touched.title && errors.title && <div>{errors.title}</div>}
        </FormGroup>
        <FormGroup label="Описание идеи">
            <Textarea
                name="description"
                variation="regular"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
            />
            {touched.description && errors.description && <div>{errors.description}</div>}
        </FormGroup>
        <Button type="primary" buttonType="submit" disabled={isSubmitting}>
            Отправить
        </Button>
    </form>
);

const OrderFormik = withFormik({
    mapPropsToValues: ({ title, description }) => ({
        title: title || '',
        description: description || '',
    }),
    validate: ({ description }) => {
        const errors = {};
        if (!description) {
            errors.description = 'Это обязательное поле';
        }
        return errors;
    },
    handleSubmit: (values) => {
        console.log(values);
    },
})(OrderForm);

export default OrderFormik;
