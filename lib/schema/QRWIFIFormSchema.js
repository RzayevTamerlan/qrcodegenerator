import {object, string, number} from 'yup';

export const QRWIFIFormSchema = object({
  size: number().transform((value, originalValue) => {
    const parsedValue = parseFloat(originalValue);
    return isNaN(parsedValue) ? undefined : parsedValue;
  })
    .typeError('Value must be a number.').min(100, 'Value must be more or equal 100.').max(6275, 'Value must be less or equal 6275.').required('Field is required.'),
  ssid: string().max(32, 'SSID must be less or equal 32 characters.').required('Field is required.'),
  password: string().min(8, 'Password length must be more than 8 symbols.').max(64, 'Password must be less or equal 64 characters.').required('Field is required.'),
});