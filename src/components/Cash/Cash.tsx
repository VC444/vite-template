import React from 'react';
import { IconBuildingBank } from '@tabler/icons-react';
import { Button, Flex, Group, Modal, Stack, Text, TextInput, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { DATA_TYPES } from '@/utils/utils';
import { AddDataBtn } from '../shared/shared';

interface BankAccount {
  name: string;
  amount: number;
}

export function Cash() {
  const [bankAccounts, setBankAccounts] = React.useState([]);
  const [opened, { open, close }] = useDisclosure(false);

  const onAddBankAccount = () => {
    // setBankAccounts([...bankAccounts, { name: bankAccount.name, amount: bankAccount.amount }]);
  };

  console.log({ opened });

  return (
    <div>
      <Title mb={20}>
        <IconBuildingBank color="green" /> Cash
      </Title>
      <Stack>
        <Group justify="space-between">
          <Text size="xl">SBI Primary Account (1451)</Text>
          <Text size="xl">20,10,928 Rupees</Text>
        </Group>
        <Group justify="space-between">
          <Text size="xl">SBI Alternate Account (1451)</Text>
          <Text size="xl">12,19,33 Rupees</Text>
        </Group>
        <Group justify="space-between">
          <Text size="xl">HDFC Credit Account (1451)</Text>
          <Text size="xl">5,91,291 Rupees</Text>
        </Group>
        <Flex>
          <AddDataBtn type={DATA_TYPES.bankAccount} onClick={open} />
        </Flex>
      </Stack>
      <Modal opened={opened} onClose={close} title="Add Bank Account" centered size="md">
        <TextInput label="Name" data-autofocus />
        <TextInput label="Amount" mt="md" />
      </Modal>
    </div>
  );
}
