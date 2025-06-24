import React from 'react';
import { CustomFormField } from '../custom-form-field';
import { FormFieldType } from '../forms/PatientForm';

export const ConsentAndPrivacy: React.FC<any> = ({ form }) => {
  return (
    <>
      <section className="space-y-6">
        <div className="mb-9 space-y-1">
          <h2 className="sub-header">Consent and Privacy</h2>
        </div>
      </section>

      <CustomFormField
        fieldType={FormFieldType.CHECKBOX}
        control={form.control}
        name="treatmentConsent"
        label="I consent to treatment"
      />

      <CustomFormField
        fieldType={FormFieldType.CHECKBOX}
        control={form.control}
        name="disclosureConsent"
        label="I consent to disclosure of information"
      />

      <CustomFormField
        fieldType={FormFieldType.CHECKBOX}
        control={form.control}
        name="privacyConsent"
        label="I consent to privacy policy"
      />
    </>
  );
};
