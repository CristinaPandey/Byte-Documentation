import React, { useEffect, useState } from 'react';
// import DatePicker from 'react-datepicker';
import DatePickerIcon from '../../../../public/images/datePicker.svg';
import 'react-datepicker/dist/react-datepicker.css';

import { FieldValues, FieldPath, UseFormRegister } from 'react-hook-form';

type DayPickerProps<TFieldValues extends FieldValues = FieldValues> = {
    data: {
    label: string;
    name: FieldPath<TFieldValues>;
    };
    register: UseFormRegister<TFieldValues>;
    setValue: (
    field: FieldPath<TFieldValues>,
    value: any,
    options?: { shouldValidate?: boolean }
    ) => void;
    className?: string;
};

const DayPickerWrapper: React.FC<DayPickerProps> = ({
    data,
    setValue,
    register,
    className,
}) => {
    const [selectedDate, setSelectedDate] = useState<Date | number | any>(
    new Date()?.getDay()
    );
    const [wasDateSelected, setWasDateSelected] = useState(false);
  // const dayObject = new Date(selectedDate);
  // const day = dayObject.getDate();
  // console.log(dayObject)

    useEffect(() => {
    setValue(data.name, selectedDate, { shouldValidate: true });
    }, [data.name, setValue, selectedDate]);

    const handleDateChange = (date: Date | null) => {
    setSelectedDate(date as Date);
    setWasDateSelected(true); // Set to true when a date is picked
    };

    return (
    <div className={`flex flex-col gap-2 p-1 ${className}`}>
        <label className="text-sm text-[#575F6E] font-medium">{data.label}</label>
        <div className="flex outline-1 outline outline-[#CBD5E1] text-[#64748B] rounded h-12 p-3 border-l-0 border-t-0 border-b-0 bg-white">
        {/* <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd"
            name={data.name}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
    
        
        /> */}
        {/* <DatePickerIcon className="h-full w-full" /> */}
        </div>
    </div>
    );
};

export default DayPickerWrapper;
