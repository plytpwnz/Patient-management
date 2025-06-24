import React from 'react';
import { CustomFormField } from '../custom-form-field';
import { FormFieldType } from '../forms/PatientForm';

export const MedicalHistory: React.FC<any> = ({ form }) => {
  return (
    <div className="flex flex-col gap-6 xl:flex-row">
      <CustomFormField
        fieldType={FormFieldType.TEXTAREA}
        control={form.control}
        name="familyMedicalHistory"
        label="Family medical history"
        placeholder="Наследственные заболевания..."
      />

      <CustomFormField
        fieldType={FormFieldType.TEXTAREA}
        control={form.control}
        name="pastMedicalHistory"
        label="Past medical history"
        placeholder="История болезни..."
      />
    </div>
  );
};
