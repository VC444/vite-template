import { IconHome } from '@tabler/icons-react';
import { Flex, Group, Stack, Text, Title } from '@mantine/core';
import { DATA_TYPES } from '@/utils/utils';
import { AddDataBtn } from '../shared/shared';

export function RealEstate() {
  return (
    <div>
      <Title mb={20}>
        <IconHome color="green" /> Real Estate
      </Title>
      <Stack>
        <Group justify="space-between">
          <Text size="xl">Bengaluru House</Text>
          <Text size="xl">1,46,00,00 Rupees</Text>
        </Group>
        <Group justify="space-between">
          <Text size="xl">Chennai Apartment</Text>
          <Text size="xl">87,50,00 Rupees</Text>
        </Group>
        <Flex>
          <AddDataBtn type={DATA_TYPES.realEstate} />
        </Flex>
      </Stack>
    </div>
  );
}
