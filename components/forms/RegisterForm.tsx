'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import { CustomFormField } from '../custom-form-field';
import { SubmitButton } from '../submit-button';
import { useState } from 'react';
import { PatientFormValidation } from '@/lib/validation';
import { FormFieldType } from './PatientForm';
import {
  AddressAndOccupation,
  Allergies,
  BirthdayAndGender,
  ConsentAndPrivacy,
  DocumentUpload,
  EmailAndPhone,
  EmergencyContact,
  Insurance,
  MedicalHistory,
  PrimaryPhysician,
} from '../register';
import { PatientFormDefaultValues } from '@/constants';
import { useRouter } from 'next/navigation';
import { registerPatient } from '@/lib/actions/patient.actions';

const RegisterForm = ({ user }: { user: User }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof PatientFormValidation>>({
    // @ts-ignore
    resolver: zodResolver(PatientFormValidation),
    defaultValues: {
      ...PatientFormDefaultValues,
    },
  });

  async function onSubmit(values: any) {
    setIsLoading(true);

    let formData;

    if (values.identificationDocument && values.identificationDocument.length > 0) {
      const blobFile = new Blob([values.identificationDocument[0]], {
        type: values.identificationDocument[0].type,
      });

      formData = new FormData();
      formData.append('blobFile', blobFile);
      formData.append('fileName', values.identificationDocument[0].name);
    }

    try {
      const patientData = {
        ...values,
        userId: user.$id,
        birthDate: new Date(values.birthDate),
        identificationDocument: formData,
      };

      const patient = await registerPatient(patientData);

      if (patient) router.push(`/patients/${user.$id}/new-appointment`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 flex-1">
        <section className="space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">Let us know more about yourself</p>
        </section>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Personal Information</h2>
          </div>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          placeholder="Имя..."
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        {/* поле емейла и телефона */}
        <EmailAndPhone form={form} />

        {/* поле день рождения и гендера */}
        <BirthdayAndGender form={form} />

        {/* поле адреса и рода занятий */}
        <AddressAndOccupation form={form} />

        {/* поле контактного лица */}
        <EmergencyContact form={form} />

        {/* Выбор врача */}
        <PrimaryPhysician form={form} />

        {/* Страховая и номер полиса */}
        <Insurance form={form} />

        {/* Аллергии и текущее лечение */}
        <Allergies form={form} />

        {/* Наследственные заболевания и ----- */}
        <MedicalHistory form={form} />

        {/* Выбор документа и загрузка */}
        <DocumentUpload form={form} />

        {/* Cогласие и конфиденциальность */}
        <ConsentAndPrivacy form={form} />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default RegisterForm;
