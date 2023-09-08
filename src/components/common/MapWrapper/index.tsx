// import Image from 'next/image';
import React from 'react';
import Button from '../Button';
import ChevronDownIcon from '../../../../public/images/chevron-down.svg';

type TMapWrapper = {
    title?: string;
    subTitle?: string;
    image: string;
};
const MapWrapper: React.FC<TMapWrapper> = ({ title, image, subTitle }) => {
    return (
    <div className="p-6 flex flex-col gap-3 border border-[#E2E8F0] rounded-2xl">
        <div className="flex justify-between">
        <h1 className="font-semibold color-[#000000]">{title}</h1>
        <div className="relative">
            <Button color="primary" icon={<ChevronDownIcon />}>
            Export
            </Button>
        </div>
        </div>
        {/* {
        data.length===0?<div className="text-2xl font-semibold flex justify-center align-middle">
        No records available
        </div>
        :<></>
      } */}
        {subTitle && <p className="text-gray-500">{subTitle}</p>}
        {/* <Image src={image} width={996} height={728} alt="" /> */}
    </div>
    );
};

export default MapWrapper;
