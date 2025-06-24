import React from 'react';
import { CustomFormField } from '../custom-form-field';
import { FormFieldType } from '../forms/PatientForm';

export const AddressAndOccupation: React.FC<any> = ({ form }) => {
  return (
    <div className="flex flex-col gap-6 xl:flex-row">
      <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="address"
        label="Address"
        placeholder="Адрес..."
      />

      <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="occupation"
        label="Occupation"
        placeholder="Профессия..."
      />
    </div>
  );
};
