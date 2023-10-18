import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  delivery_date: yup.date().nullable(),
  description: yup.string().nullable(),
  buyer_contact: yup.string().nullable(),
  is_paid: yup.boolean().nullable(),
  is_delivered: yup.boolean().nullable(),
  user_id: yup.string().nullable().required(),
});
