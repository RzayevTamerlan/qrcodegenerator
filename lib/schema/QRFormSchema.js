import { object, string, number } from 'yup';

export const QRFormSchema = object({
  size: number('Value must be a number.').transform((value, originalValue) => (originalValue === '' ? undefined : value)).min(100, 'Value must be more or equal 100.').max(512, 'Value must be less or equal 512.').required('Field is required.'),
  url: string().required('Field is required.'),
});