'use client';

import { convertFileToUrl } from '@/lib/utils';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

type FileUploader = {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
};

export const FileUploader: React.FC<FileUploader> = ({ files, onChange }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onChange(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="file-upload">
      <input {...getInputProps()} />
      {files && files.length > 0 ? (
        <Image
          src={convertFileToUrl(files[0])}
          width={1000}
          height={1000}
          alt="uplodaded image"
          className="max-h-[400px] overflow-hidden object-cover"
        />
      ) : (
        <>
          <Image
            src="/assets/icons/upload.svg"
            width={40}
            height={40}
            alt="upload"
            className="cursor-pointer"
          />
          <div className="file-upload_label">
            <p className="text-14-regular text-[12px]">
              <span className="text-green-500">Click to upload</span> or drag and drop
            </p>
            <p className="text-[12px]">SVG, PNG, JPG or GIF (max. 800x400px)</p>
          </div>
        </>
      )}
    </div>
  );
};
