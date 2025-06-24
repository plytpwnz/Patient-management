import React from 'react';
import { CustomFormField } from '../custom-form-field';
import { FormFieldType } from '../forms/PatientForm';
import Image from 'next/image';
import { Doctors } from '@/constants';
import { SelectItem } from '../ui/select';

export const PrimaryPhysician: React.FC<any> = ({ form }) => {
  return (
    <>
      <section className="space-y-6">
        <div className="mb-9 space-y-1">
          <h2 className="sub-header">Medical Information</h2>
        </div>
      </section>

      <CustomFormField
        fieldType={FormFieldType.SELECT}
        control={form.control}
        name="primaryPhysician"
        label="Primary Physician"
        placeholder="Выберите врача...">
        {Doctors.map((doctor) => (
          <SelectItem key={doctor.name} value={doctor.name}>
            <div className="flex cursor-pointer items-center gap-2">
              <Image
                src={doctor.image}
                width={32}
                height={32}
                alt={doctor.name}
                className="rounded-full border border-dark-500"
              />
              <p>{doctor.name}</p>
            </div>
          </SelectItem>
        ))}
      </CustomFormField>
    </>
  );
};
