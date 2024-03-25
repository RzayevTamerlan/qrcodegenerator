import {object, string, number} from 'yup';

export const QRFormSchema = object({
  size: number().transform((value, originalValue) => {
    const parsedValue = parseFloat(originalValue);
    return isNaN(parsedValue) ? undefined : parsedValue;
  })
    .typeError('Value must be a number.').min(100, 'Value must be more or equal 100.').max(2000, 'Value must be less or equal 2000.').required('Field is required.'),
  url: string().max(255, 'URL must be less or equal 255 characters.').required('Field is required.'),
});