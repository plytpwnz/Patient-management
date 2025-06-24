import React from 'react';
import { CustomFormField } from '../custom-form-field';
import { FormFieldType } from '../forms/PatientForm';

export const Allergies: React.FC<any> = ({ form }) => {
  return (
    <div className="flex flex-col gap-6 xl:flex-row">
      <CustomFormField
        fieldType={FormFieldType.TEXTAREA}
        control={form.control}
        name="allergies"
        label="Allergies (if any)"
        placeholder="Аллергия на что-либо..."
      />

      <CustomFormField
        fieldType={FormFieldType.TEXTAREA}
        control={form.control}
        name="currentMedication"
        label="Current medication (if any)"
        placeholder="Текущее лечение..."
      />
    </div>
  );
};
