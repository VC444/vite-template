import { Container, Divider, Overlay, Stack } from '@mantine/core';
import { Cash } from '@/components/Cash/Cash';
import { Investments } from '@/components/Investments/Investments';
import { NetWorth } from '@/components/NetWorth/NetWorth';
import { RealEstate } from '@/components/RealEstate/RealEstate';
import { TangibleAssets } from '@/components/TangibleAssets/TangibleAssets';

// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
// import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      {/* <Welcome />
      <ColorSchemeToggle /> */}
      <Container mt={200} mb={200} size="md">
        <NetWorth />
        <Stack mt={100} gap={40}>
          <Cash />
          <Divider />
          <Investments />
          <Divider />
          <RealEstate />
          <Divider />
          <TangibleAssets />
        </Stack>
      </Container>
    </>
  );
}
