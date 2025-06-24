import React from 'react';
import { CustomFormField } from '../custom-form-field';
import { FormFieldType } from '../forms/PatientForm';

export const EmergencyContact: React.FC<any> = ({ form }) => {
  return (
    <div className="flex flex-col gap-6 xl:flex-row">
      <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="emergencyContactName"
        label="Emergency contact name"
        placeholder="Имя родителя/опекуна..."
      />

      <CustomFormField
        fieldType={FormFieldType.PHONE_INPUT}
        control={form.control}
        name="emergencyContactNumber"
        label="Emergency contact phone"
        placeholder="Номер телефона..."
      />
    </div>
  );
};
