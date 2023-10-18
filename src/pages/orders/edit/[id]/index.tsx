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
  Center,
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
import { FunctionComponent, useState, useRef, useMemo } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { useRoqClient, useOrderFindFirst } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';
import { convertQueryToPrismaUtil } from 'lib/utils';
import { orderValidationSchema } from 'validationSchema/orders';
import { OrderInterface } from 'interfaces/order';
import { UserInterface } from 'interfaces/user';

function OrderEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          id,
        },
        'order',
      ),
    [id],
  );
  const { data, error, isLoading, mutate } = useOrderFindFirst(queryParams, {}, { disabled: !id });
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: OrderInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await roqClient.order.update({
        data: values as RoqTypes.order,
        where: {
          id,
        },
      });
      mutate(updated);
      resetForm();
      router.push('/orders');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<OrderInterface>({
    initialValues: data,
    validationSchema: orderValidationSchema,
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
              label: 'Orders',
              link: '/orders',
            },
            {
              label: 'Update Order',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Order
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="delivery_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Delivery Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.delivery_date ? new Date(formik.values?.delivery_date) : null}
              onChange={(value: Date) => formik.setFieldValue('delivery_date', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.description}
            label={'Description'}
            props={{
              name: 'description',
              placeholder: 'Description',
              value: formik.values?.description,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.buyer_contact}
            label={'Buyer Contact'}
            props={{
              name: 'buyer_contact',
              placeholder: 'Buyer Contact',
              value: formik.values?.buyer_contact,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="is_paid" display="flex" alignItems="center" mb="4" isInvalid={!!formik.errors?.is_paid}>
            <FormLabel htmlFor="switch-is_paid">Is Paid</FormLabel>
            <Switch
              id="switch-is_paid"
              name="is_paid"
              onChange={formik.handleChange}
              value={formik.values?.is_paid ? 1 : 0}
            />
            {formik.errors?.is_paid && <FormErrorMessage>{formik.errors?.is_paid}</FormErrorMessage>}
          </FormControl>

          <FormControl
            id="is_delivered"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.is_delivered}
          >
            <FormLabel htmlFor="switch-is_delivered">Is Delivered</FormLabel>
            <Switch
              id="switch-is_delivered"
              name="is_delivered"
              onChange={formik.handleChange}
              value={formik.values?.is_delivered ? 1 : 0}
            />
            {formik.errors?.is_delivered && <FormErrorMessage>{formik.errors?.is_delivered}</FormErrorMessage>}
          </FormControl>
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
              onClick={() => router.push('/orders')}
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
    entity: 'order',
    operation: AccessOperationEnum.UPDATE,
  }),
)(OrderEditPage);
