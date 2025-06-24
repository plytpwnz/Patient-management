'use client';

import React from 'react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Checkbox, Input, Select, Textarea } from './ui';
import { Control } from 'react-hook-form';
import { FormFieldType } from './forms/PatientForm';
import Image from 'next/image';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { SelectContent, SelectTrigger, SelectValue } from './ui/select';

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const { fieldType, iconSrc, iconAlt, placeholder, showTimeSelect, dateFormat, renderSkeleton } =
    props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image src={iconSrc} height={24} width={24} alt={iconAlt || 'icon'} className="ml-2" />
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="bg-dark-400 px-4 py-2 text-sm text-white outline-none border-0"
            />
          </FormControl>
        </div>
      );
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={placeholder}
            {...field}
            className="shad-textArea"
            disabled={props.disabled}
          />
        </FormControl>
      );
    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="RU"
            placeholder={placeholder}
            international
            withCountryCallingCode
            value={field.value}
            onChange={field.onChange}
            className="mt-1 h-9 rounded-md px-4 py-2 text-sm bg-dark-400 border border-gray-800 text-white"
          />
        </FormControl>
      );
    case FormFieldType.DATE_PICKER:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          <Image
            src="/assets/icons/calendar.svg"
            alt="calendar"
            height={24}
            width={24}
            className="ml-2"
          />
          <FormControl>
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              dateFormat={dateFormat ?? 'MM/dd/yyyy'}
              showTimeSelect={showTimeSelect ?? false}
              timeInputLabel="Time:"
              wrapperClassName="date-picker"
            />
          </FormControl>
        </div>
      );
    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl className="shad-select-trigger cursor-pointer">
              <SelectTrigger>
                <SelectValue placeholder={placeholder} className="cursor-pointer" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="shad-select-content">{props.children}</SelectContent>
          </Select>
        </FormControl>
      );
    case FormFieldType.SKELETON:
      return renderSkeleton ? renderSkeleton(field) : null;
    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center gap-4">
            <Checkbox id={props.name} checked={field.value} onCheckedChange={field.onChange} className='cursor-pointer' />
            <label htmlFor={props.name} className='checkbox-label' >
              {props.label}
            </label>
          </div>
        </FormControl>
      );
    default:
      break;
  }
};

export const CustomFormField: React.FC<CustomProps> = (props) => {
  const { control, fieldType, name, label } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && <FormLabel>{label}</FormLabel>}

          <RenderField field={field} props={props} />

          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};
