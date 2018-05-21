import React from 'react'
import { withFormik } from 'formik'
import { Button, Form, Message } from 'semantic-ui-react'
import { getCookieValue } from 'utils/getCookieValue'

const OrderForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitInProcess,
}) => (
  <Form onSubmit={handleSubmit}>
    <Form.Field>
      <Form.Input
        type="text"
        label="Название проекта"
        name="title"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.title}
      />
    </Form.Field>
    <Form.Field>
      <Form.TextArea
        name="description"
        label="Описание идеи"
        error={!!(touched.description && errors.description)}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.description}
      />
    </Form.Field>
    {touched.description &&
      errors.description && (
        <Message negative content={touched.description && errors.description} />
      )}
    <Button type="submit" disabled={isSubmitInProcess}>
      Отправить
    </Button>
  </Form>
)

const OrderFormik = withFormik({
  mapPropsToValues: ({ title, description }) => ({
    title: title || '',
    description: description || '',
    csrfmiddlewaretoken: getCookieValue('csrftoken'),
  }),
  validate: ({ description }) => {
    const errors = {}
    if (!description) {
      errors.description = 'Это обязательное поле'
    }
    return errors
  },
  handleSubmit: (values, { props }) => {
    props.onSubmit(values)
  },
})(OrderForm)

export default OrderFormik
