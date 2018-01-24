import React from 'react';
import { withFormik } from 'formik';
import FormGroup from 'rambler-ui/FormGroup';
import Input from 'rambler-ui/Input';
import Textarea from 'rambler-ui/Textarea';
import InputStatus from 'rambler-ui/InputStatus';
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
                variation="promo"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
            />
        </FormGroup>
        <FormGroup label="Описание идеи">
            <InputStatus type="error" message={touched.description && errors.description}>
                <Textarea
                    name="description"
                    variation="regular"
                    status={touched.description && errors.description && 'error'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                />
            </InputStatus>
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
