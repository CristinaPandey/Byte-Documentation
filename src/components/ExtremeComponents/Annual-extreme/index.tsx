'use client';
import MapWrapper from '../../common/MapWrapper';
import Table from '../../Table';
import { ColumnDef } from '@tanstack/react-table';
// import { useSearchParams } from 'next/navigation';
import { useLocation } from 'react-router-dom'; // Updated import
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
// import Plot from 'react-plotly.js';
import ArrowUpIcon from '../../../../public/images';
import ArrowDownIcon from '../../../../public/images/arrow-down.svg';
import ZeroIcon from '../../../../public/images/trend-zero.svg';

const AnnualExtremeTable = () => {
    const [lineChartData, setLineChartData] = useState<any>(null);
    const location = useLocation(); // Updated useLocation

    // const type = useSearchParams()?.get('type');
    const queryParams = new URLSearchParams(location.search); // Parse query parameters
    const type = queryParams.get('type'); // Access query parameter

    const { extreme, filter } = useSelector((state: any) => {
    return state.extremeSlice;
    });

    const [tableData, setTableData] = useState<any>([]);

    useEffect(() => {
    const lineData =
        extreme[0]?.data?.plot && JSON.parse(extreme[0]?.data?.plot);
    setLineChartData(lineData);
    }, [extreme]);

    useEffect(() => {
    if (filter.tab === 'annual') {
        setTableData([
        {
            station: extreme[0]?.station_name,
            district: extreme[0]?.station_district,
            latitude: extreme[0]?.latitude,
            longitude: extreme[0]?.longitude,
            elevation: extreme[0]?.elevation,
            trend: extreme[0]?.data["sen's for highest"] as number,
            significant: extreme[0]?.data['p value for highest'] as number,
        },
        ]);
    }
    }, [extreme, filter]);

    const columns = useMemo<ColumnDef<any>[]>(
    () => [
        {
        header: 'Station Names',
        accessorKey: 'station',
        },
        {
        header: 'District',
        accessorKey: 'district',
        },
        {
        header: 'Latitude',
        accessorKey: 'latitude',
        },
        {
        header: 'Longitude',
        accessorKey: 'longitude',
        },
        { header: 'Elevation(m)', accessorKey: 'elevation' },
        {
        header: 'Trend',
        accessorKey: 'trend',
        cell: () => (
            <div className="flex gap-1 justify-center">
            <span>{tableData[0]?.trend?.toFixed(2)}</span>
            {tableData[0]?.trend?.toFixed(2) === 0 ? (
                <ZeroIcon />
            ) : tableData[0]?.trend?.toFixed(2) > 0 ? (
                <ArrowUpIcon />
            ) : (
                <ArrowDownIcon />
            )}
            </div>
        ),
        },
        {
        header: 'Significant at 95% confident level',
        accessorKey: 'significant',
        cell: () => (
            <div className="flex gap-2 justify-center items-center">
            <span>{tableData[0]?.significant?.toFixed(2)}</span>
            <span className="bg-[#EFF6FF] text-[#0EA5E9] py-1 px-2">
                {tableData[0]?.significant?.toFixed(2) <= 0.05
                ? 'significant'
                : 'unsignificant'}
            </span>
            </div>
        ),
        },
    ],
    [tableData]
    );

    return (
    <div>
        {/* {type === 'grid' ? (
        <MapWrapper
            image="/images/image-visualization.png"
            title="Ever recorded highest maximum temperature"
        />
        ) : (
        <>
            {lineChartData && (
            <Plot
                data={lineChartData?.data as any}
                layout={lineChartData?.layout}
                style={{ height: '600px', color: 'red' }}
            />
            )}                 
            <Table data={...tableData} columns={columns} />
        </>
        )} */}
    </div>
    );
};

export default AnnualExtremeTable;
