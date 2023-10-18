import * as yup from 'yup';

export const stockValidationSchema = yup.object().shape({
  item_name: yup.string().nullable(),
  quantity: yup.number().integer().nullable(),
  price_per_unit: yup.number().integer().nullable(),
  total_value: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
