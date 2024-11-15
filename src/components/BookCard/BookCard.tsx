import { Image as MantineImage, Text, Box, Stack, Flex } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import Links, { LinkType } from '../Links/Links';

interface BookCardProps {
  image: string;
  title: string;
  authors: LinkType[];
}

const BookCard = ({ image, title, authors }: BookCardProps) => {
  const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => {
      setAspectRatio(img.width / img.height);
    };
    img.src = image;
  }, [image]);

  return (
    <Stack
      bg="transparent"
      style={{
        height: 'fit-content',
        width: '100%',
      }}
      gap="xs"
    >
      <div
        style={{
          position: 'relative',
          paddingTop: `${100 / aspectRatio}%`,
          width: '100%',
        }}
      >
        <MantineImage
          src={image}
          alt={title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <Box>
        <Flex align="center" justify="space-between">
          <Text size="lg" fw={500}>
            {title}
          </Text>
          <IconDots size={20} />
        </Flex>
        <Text size="sm">
          <Links links={authors} />
        </Text>
      </Box>
    </Stack>
  );
};

export default BookCard;
