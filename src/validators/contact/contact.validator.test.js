import { describe, it, expect } from 'vitest';
import { validateContact } from './contact.validator';
import { CONTACT_FIELDS } from '@/constants/contact/contact.constants';

// Base válida: cada test parte de aquí y rompe UN campo
const validData = () => ({
    [CONTACT_FIELDS.NAME]: 'Gianmarco',
    [CONTACT_FIELDS.EMAIL]: 'test@example.com',
    [CONTACT_FIELDS.MESSAGE]: 'Este es un mensaje de prueba válido.',
    [CONTACT_FIELDS.COMPANY]: 'Agrovision',
    [CONTACT_FIELDS.SUBJECT]: 'Consulta',
});

describe('validateContact', () => {
    it('acepta datos completos y correctos', () => {
        const { valid, errors } = validateContact(validData());
        expect(valid).toBe(true);
        expect(errors).toEqual({});
    });

    it('acepta cuando company y subject van vacíos (son opcionales)', () => {
        const data = { ...validData(), [CONTACT_FIELDS.COMPANY]: '', [CONTACT_FIELDS.SUBJECT]: '' };
        expect(validateContact(data).valid).toBe(true);
    });

    // ---- NAME ----
    describe('name', () => {
        it('marca required si está vacío', () => {
            const data = { ...validData(), [CONTACT_FIELDS.NAME]: '   ' };
            expect(validateContact(data).errors[CONTACT_FIELDS.NAME]).toBe('required');
        });

        it('marca min si tiene menos de 2 caracteres', () => {
            const data = { ...validData(), [CONTACT_FIELDS.NAME]: 'G' };
            expect(validateContact(data).errors[CONTACT_FIELDS.NAME]).toBe('min');
        });

        it('marca max si supera 100 caracteres', () => {
            const data = { ...validData(), [CONTACT_FIELDS.NAME]: 'a'.repeat(101) };
            expect(validateContact(data).errors[CONTACT_FIELDS.NAME]).toBe('max');
        });

        it('marca required cuando el campo no existe', () => {
            const data = validData();
            delete data[CONTACT_FIELDS.NAME];
            expect(validateContact(data).errors[CONTACT_FIELDS.NAME]).toBe('required');
        });
    });

    // ---- EMAIL ----
    describe('email', () => {
        it('marca required si está vacío', () => {
            const data = { ...validData(), [CONTACT_FIELDS.EMAIL]: '' };
            expect(validateContact(data).errors[CONTACT_FIELDS.EMAIL]).toBe('required');
        });

        it('marca invalid con formato incorrecto', () => {
            const data = { ...validData(), [CONTACT_FIELDS.EMAIL]: 'no-es-un-email' };
            expect(validateContact(data).errors[CONTACT_FIELDS.EMAIL]).toBe('invalid');
        });

        it('marca invalid si falta el dominio', () => {
            const data = { ...validData(), [CONTACT_FIELDS.EMAIL]: 'test@' };
            expect(validateContact(data).errors[CONTACT_FIELDS.EMAIL]).toBe('invalid');
        });
    });

    // ---- MESSAGE ----
    describe('message', () => {
        it('marca required si está vacío', () => {
            const data = { ...validData(), [CONTACT_FIELDS.MESSAGE]: '' };
            expect(validateContact(data).errors[CONTACT_FIELDS.MESSAGE]).toBe('required');
        });

        it('marca min si tiene menos de 10 caracteres', () => {
            const data = { ...validData(), [CONTACT_FIELDS.MESSAGE]: 'corto' };
            expect(validateContact(data).errors[CONTACT_FIELDS.MESSAGE]).toBe('min');
        });

        it('marca max si supera 1000 caracteres', () => {
            const data = { ...validData(), [CONTACT_FIELDS.MESSAGE]: 'a'.repeat(1001) };
            expect(validateContact(data).errors[CONTACT_FIELDS.MESSAGE]).toBe('max');
        });
    });

    // ---- COMPANY / SUBJECT (opcionales, solo validan max) ----
    describe('campos opcionales', () => {
        it('marca max en company si supera 100', () => {
            const data = { ...validData(), [CONTACT_FIELDS.COMPANY]: 'a'.repeat(101) };
            expect(validateContact(data).errors[CONTACT_FIELDS.COMPANY]).toBe('max');
        });

        it('marca max en subject si supera 150', () => {
            const data = { ...validData(), [CONTACT_FIELDS.SUBJECT]: 'a'.repeat(151) };
            expect(validateContact(data).errors[CONTACT_FIELDS.SUBJECT]).toBe('max');
        });
    });

    it('acumula varios errores a la vez', () => {
        const { valid, errors } = validateContact({});
        expect(valid).toBe(false);
        expect(errors[CONTACT_FIELDS.NAME]).toBe('required');
        expect(errors[CONTACT_FIELDS.EMAIL]).toBe('required');
        expect(errors[CONTACT_FIELDS.MESSAGE]).toBe('required');
    });
});