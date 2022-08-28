import { Card, Image, Text, Badge, Button, Group, CardSection } from '@mantine/core';

export default function Adopsi_card() {
  return (
    <div className='mb-5 cursor-pointer hover:opacity-70'>
        <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
            <Image
                src="/9.png"
                width={150}
                alt="image"
            />
        </Card.Section>
        <Text weight={500} size="xl" mt="md">Kucing Lucu</Text>
        <Text size="sm">Jenis : Persia</Text>
        <Text size="sm">Umur : 5 Bulan</Text>
        </Card>
    </div>
  )
}
