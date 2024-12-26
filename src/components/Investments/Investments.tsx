import { IconChartAreaLine } from '@tabler/icons-react';
import { Flex, Group, Stack, Text, Title } from '@mantine/core';
import { DATA_TYPES } from '@/utils/utils';
import { AddDataBtn } from '../shared/shared';

export function Investments() {
  return (
    <div>
      <Title mb={20}>
        <IconChartAreaLine color="green" /> Investments
      </Title>
      <Stack>
        <Group justify="space-between">
          <Text size="xl">Groww</Text>
          <Text size="xl">65,00,00 Rupees</Text>
        </Group>
        <Flex>
          <AddDataBtn type={DATA_TYPES.investment} />
        </Flex>
      </Stack>
    </div>
  );
}
