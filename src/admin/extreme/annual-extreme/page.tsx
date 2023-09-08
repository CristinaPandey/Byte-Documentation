// import ExtremeFilter from '../../../components/FilterComponent/ExtremeFilter';
import React from 'react';
import AnnualExtremeTable from '../../../components/ExtremeComponents/Annual-extreme';

const tabs = [
    {
    href: '/admin/extreme/annual-extreme?type=grid',
    label: 'Grid',
    },
    {
    href: '/admin/extreme/annual-extreme?type=station',
    label: 'Station',
    },
];

const Page = () => {
    return (
    <>
    ExtremeFilter
        {/* <ExtremeFilter
        range="annual"
        tabs={tabs}
        showYearFrom={true}
        showYearTo={true}
        showRelatedMonth={true}
        /> */}
        <AnnualExtremeTable />
    </>
    );
};

export default Page;
