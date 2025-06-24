import React from 'react';
import { CustomFormField } from '../custom-form-field';
import { IdentificationTypes } from '@/constants';
import { SelectItem } from '../ui/select';
import { FormFieldType } from '../forms/PatientForm';
import { FormControl } from '../ui/form';
import { FileUploader } from '../file-uploader';

export const DocumentUpload: React.FC<any> = ({ form }) => {
  return (
    <>
      <section className="space-y-6">
        <div className="mb-9 space-y-1">
          <h2 className="sub-header">Idectification and Verification</h2>
        </div>
      </section>

      <CustomFormField
        fieldType={FormFieldType.SELECT}
        control={form.control}
        name="identificationType"
        label="Identification type"
        placeholder="Выберите документ...">
        {IdentificationTypes.map((type) => (
          <SelectItem key={type} value={type} className="cursor-pointer">
            {type}
          </SelectItem>
        ))}
      </CustomFormField>

      <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="identificationNumber"
        label="Identification number"
        placeholder="Номер документа..."
      />

      <CustomFormField
        fieldType={FormFieldType.SKELETON}
        control={form.control}
        name="identificationDocument"
        label="Scaned copy of identification document"
        renderSkeleton={(field) => (
          <FormControl>
            <FileUploader files={field.value} onChange={field.onChange} />
          </FormControl>
        )}
      />
    </>
  );
};
