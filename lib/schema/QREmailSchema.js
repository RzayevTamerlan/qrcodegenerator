import {object, string, number} from 'yup';

export const QREmailSchema = object({
  size: number().transform((value, originalValue) => {
    const parsedValue = parseFloat(originalValue);
    return isNaN(parsedValue) ? undefined : parsedValue;
  })
    .typeError('Value must be a number.').min(100, 'Value must be more or equal 100.').max(6275, 'Value must be less or equal 6275.').required('Field is required.'),
  email: string().email('Invalid email address.').required('Field is required.'),
  subject: string().max(50, 'Subject must be less or equal 50 characters.'),
  message: string().max(1000, 'Message must be less or equal 1000 characters.'),
});