import { format } from 'date-fns';

export const formatDateTime = (date) => {
    return date ? format(new Date(date), 'dd/MM/yyyy HH:mm') : '';
};
