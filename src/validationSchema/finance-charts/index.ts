import * as yup from 'yup';

export const financeChartValidationSchema = yup.object().shape({
  income: yup.number().integer().nullable(),
  finance_chart_expense: yup.number().integer().nullable(),
  balance: yup.number().integer().nullable(),
  account_balance: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
