import React from 'react';
import { CustomFormField } from '../custom-form-field';
import { FormFieldType } from '../forms/PatientForm';
import { FormControl } from '../ui/form';
import { Label, RadioGroup, RadioGroupItem } from '../ui';
import { GenderOptions } from '@/constants';

export const BirthdayAndGender: React.FC<any> = ({ form }) => {
  return (
    <div className="flex flex-col gap-6 xl:flex-row">
      <CustomFormField
        fieldType={FormFieldType.DATE_PICKER}
        control={form.control}
        name="birthDate"
        label="Date of Birth"
      />

      <CustomFormField
        fieldType={FormFieldType.SKELETON}
        control={form.control}
        name="gender"
        label="Gender"
        renderSkeleton={(field) => (
          <FormControl>
            <RadioGroup
              className="flex h-11 gap-6 xl:justify-between"
              onChange={field.onChange}
              defaultValue={field.value}>
              {GenderOptions.map((option) => (
                <div key={option} className="radio-group">
                  <RadioGroupItem value={option} id={option} className="cursor-pointer" />
                  <Label htmlFor={option} className="cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </FormControl>
        )}
      />
    </div>
  );
};
