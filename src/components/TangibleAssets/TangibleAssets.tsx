import { IconCar } from '@tabler/icons-react';
import { Flex, Group, Stack, Text, Title } from '@mantine/core';
import { DATA_TYPES } from '@/utils/utils';
import { AddDataBtn } from '../shared/shared';

export function TangibleAssets() {
  return (
    <div>
      <Title mb={20}>
        <IconCar color="green" /> Assets
      </Title>
      <Stack>
        <Group justify="space-between">
          <Text size="xl">Hyundai Creta</Text>
          <Text size="xl">21,00,00 Rupees</Text>
        </Group>
        <Group justify="space-between">
          <Text size="xl">Gold</Text>
          <Text size="xl">3,10,00 Rupees</Text>
        </Group>
        <Flex>
          <AddDataBtn type={DATA_TYPES.asset} />
        </Flex>
      </Stack>
    </div>
  );
}
