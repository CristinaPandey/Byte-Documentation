'use client';
import MapWrapper from '../../common/MapWrapper';
import Table from '../../Table';
import { ColumnDef } from '@tanstack/react-table';
import { useLocation } from 'react-router-dom'; // Updated import
import React, { useEffect, useMemo, useState } from 'react';
// import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';

const MonthlyExtremeTable = () => {
    const [lineChartData, setLineChartData] = useState<any>(null);
    const location = useLocation(); // Updated useLocation

    const queryParams = new URLSearchParams(location.search); // Parse query parameters
    const type = queryParams.get('type'); // Access query parameter

    const [tableData, setTableData] = useState<any>([]);
    const { extreme, filter } = useSelector((state: any) => {
    return state.extremeSlice;
    });
    console.log('line chart monthly', extreme);
    console.log('line chart filter', filter);

    useEffect(() => {
    const lineData =
        extreme[0]?.data?.filter?.related_month &&
        JSON.parse(extreme[0]?.data?.filter?.related_month);
    setLineChartData(lineData);
    }, [extreme]);

    useEffect(() => {
    if (filter.tab === 'monthly') {
        setTableData([
        {
            station: extreme[0]?.station_name,
            district: filter.district,
            latitude: extreme[0]?.latitude,
            longitude: extreme[0]?.longitude,
            elevation: extreme[0]?.elevation,
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
        { header: 'Trend', accessorKey: 'trend' },
        {
        header: 'Significant at 95% confident level',
        accessorKey: 'significant',
        },
    ],
    []
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
                style={{ height: '600px' }}
            />
            )}
            <Table data={tableData && tableData} columns={columns} />
        </>
        )} */}
    </div>
    );
};

export default MonthlyExtremeTable;
