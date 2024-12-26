import { LineChart } from '@mantine/charts';
import { Text, Title } from '@mantine/core';
import { data } from './data';

export function NetWorth() {
  return (
    <>
      <Title fz="4rem">Net Worth</Title>
      <Text size="xl" fz="2rem" mt={5}>
        $146,231,45
      </Text>
      <LineChart
        mt={80}
        h={300}
        data={data}
        dataKey="date"
        series={[{ name: 'netWorth', color: 'green' }]}
        curveType="linear"
      />
    </>
  );
}
