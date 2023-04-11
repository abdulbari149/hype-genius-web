import Selector, { Option } from '@/components/Selector';
import { FormikProps, useField } from 'formik';
import React, { useMemo } from 'react';
import { useVideoUploads } from '../hooks/useVideoUploads';

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  value: string | number;
}

const VideoSelector: React.FC<Props> = (props) => {
  const [field, helpers, meta] = useField(props);
  const { data } = useVideoUploads(
    { is_payment_due: true },
    {
      refetchOnMount: 'always',
      onSuccess(data) {
        meta.setValue(data?.data[0].id);
      },
    }
  );
  const options = useMemo(() => {
    if (!data?.data || data.data.length === 0) {
      return [];
    }
    const options = data.data
    .filter(item => item.is_payment_due)
    .map((item) => ({
      id: item.id,
      label: item.title,
      value: item.id.toString(),
    }));
    return options;
  }, [data?.data]);

  return (
    <Selector
      type="option"
      value={field.value}
      name={field.name}
      onChange={(value, e) => {
        const id = parseInt(value);
        if (isNaN(id)) {
          field.onChange(e);
        } else {
          meta.setValue(id);
        }
      }}
      options={options}
      style={{
        background: '#ECF0F4',
        fontSize: 17,
      }}
      className="focus:outline-none focus-within:outline-none"
    />
  );
};

export default VideoSelector;
