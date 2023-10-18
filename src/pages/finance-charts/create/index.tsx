import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { financeChartValidationSchema } from 'validationSchema/finance-charts';
import { UserInterface } from 'interfaces/user';
import { FinanceChartInterface } from 'interfaces/finance-chart';

function FinanceChartCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: FinanceChartInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.finance_chart.create({ data: values as RoqTypes.finance_chart });
      resetForm();
      router.push('/finance-charts');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<FinanceChartInterface>({
    initialValues: {
      income: 0,
      finance_chart_expense: 0,
      balance: 0,
      account_balance: 0,
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: financeChartValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Finance Charts',
              link: '/finance-charts',
            },
            {
              label: 'Create Finance Chart',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Finance Chart
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Income"
            formControlProps={{
              id: 'income',
              isInvalid: !!formik.errors?.income,
            }}
            name="income"
            error={formik.errors?.income}
            value={formik.values?.income}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('income', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Finance Chart Expense"
            formControlProps={{
              id: 'finance_chart_expense',
              isInvalid: !!formik.errors?.finance_chart_expense,
            }}
            name="finance_chart_expense"
            error={formik.errors?.finance_chart_expense}
            value={formik.values?.finance_chart_expense}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('finance_chart_expense', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Balance"
            formControlProps={{
              id: 'balance',
              isInvalid: !!formik.errors?.balance,
            }}
            name="balance"
            error={formik.errors?.balance}
            value={formik.values?.balance}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('balance', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Account Balance"
            formControlProps={{
              id: 'account_balance',
              isInvalid: !!formik.errors?.account_balance,
            }}
            name="account_balance"
            error={formik.errors?.account_balance}
            value={formik.values?.account_balance}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('account_balance', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/finance-charts')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'finance_chart',
    operation: AccessOperationEnum.CREATE,
  }),
)(FinanceChartCreatePage);
