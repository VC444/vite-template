import { IconPlus } from '@tabler/icons-react';
import { Button } from '@mantine/core';

interface AddDataBtnProps {
  type: string;
  onClick: () => void;
}

export const AddDataBtn = ({ type, onClick }: AddDataBtnProps) => {
  return (
    <Button variant="subtle" leftSection={<IconPlus size={14} />} onClick={onClick}>
      Add {type}
    </Button>
  );
};
