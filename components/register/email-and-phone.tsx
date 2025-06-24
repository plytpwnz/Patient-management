import React from 'react';
import { CustomFormField } from '../custom-form-field';
import { FormFieldType } from '../forms/PatientForm';

export const EmailAndPhone: React.FC<any> = ({ form }) => {
  return (
    <div className="flex flex-col gap-6 xl:flex-row">
      <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="email"
        label="Email"
        placeholder="Email..."
        iconSrc="/assets/icons/email.svg"
        iconAlt="email"
      />

      <CustomFormField
        fieldType={FormFieldType.PHONE_INPUT}
        control={form.control}
        name="phone"
        label="Phone number"
        placeholder="Номер телефона..."
      />
    </div>
  );
};
