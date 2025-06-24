import React from 'react';
import { CustomFormField } from '../custom-form-field';
import { FormFieldType } from '../forms/PatientForm';

export const Insurance: React.FC<any> = ({ form }) => {
  return (
    <div className="flex flex-col gap-6 xl:flex-row">
      <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="insuranceProvider"
        label="Insurance provider"
        placeholder="Страховая компания..."
      />

      <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="insurancePolicyNumber"
        label="Insurance policy number"
        placeholder="Номер полиса..."
      />
    </div>
  );
};
