import { CONTACT_FIELDS } from '@/constants/contact/contact.constants';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateContact = (data) => {
    const errors = {};

    const name = (data[CONTACT_FIELDS.NAME] ?? '').trim();
    if (!name) errors[CONTACT_FIELDS.NAME] = 'required';
    else if (name.length < 2) errors[CONTACT_FIELDS.NAME] = 'min';
    else if (name.length > 100) errors[CONTACT_FIELDS.NAME] = 'max';

    const email = (data[CONTACT_FIELDS.EMAIL] ?? '').trim();
    if (!email) errors[CONTACT_FIELDS.EMAIL] = 'required';
    else if (!EMAIL_REGEX.test(email)) errors[CONTACT_FIELDS.EMAIL] = 'invalid';

    const message = (data[CONTACT_FIELDS.MESSAGE] ?? '').trim();
    if (!message) errors[CONTACT_FIELDS.MESSAGE] = 'required';
    else if (message.length < 10) errors[CONTACT_FIELDS.MESSAGE] = 'min';
    else if (message.length > 1000) errors[CONTACT_FIELDS.MESSAGE] = 'max';

    const company = (data[CONTACT_FIELDS.COMPANY] ?? '').trim();
    if (company && company.length > 100) errors[CONTACT_FIELDS.COMPANY] = 'max';

    const subject = (data[CONTACT_FIELDS.SUBJECT] ?? '').trim();
    if (subject && subject.length > 150) errors[CONTACT_FIELDS.SUBJECT] = 'max';

    return { valid: Object.keys(errors).length === 0, errors };
};