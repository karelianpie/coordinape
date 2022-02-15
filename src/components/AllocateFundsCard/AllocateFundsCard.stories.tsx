import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { Box, Button } from '../../ui';

import { AllocateFundsCard } from './AllocateFundsCard';

export default {
  title: 'Design System/Molecules/AllocateFundsCard',
  component: AllocateFundsCard,
  decorators: [withDesign],
} as ComponentMeta<typeof AllocateFundsCard>;

const Template: ComponentStory<typeof AllocateFundsCard> = args => {
  return (
    <Box
      css={{
        display: 'grid',
        placeItems: 'center',
        padding: '$md',
        backgroundColor: '$gray',
      }}
    >
      <AllocateFundsCard {...args}>{args.children}</AllocateFundsCard>
    </Box>
  );
};

export const SingleAllocateFundsCard = Template.bind({});

SingleAllocateFundsCard.args = {
  title: 'Allocate to',
  epoch: 'Yearn Community: E22',
  period: 'Aug 15 to Aug 31',
  children: (
    <Button data-testid="fund-this-epoch" size="small" color="red">
      Fund This Epoch
    </Button>
  ),
};

export const EditAllocateFundsCard = Template.bind({});

EditAllocateFundsCard.args = {
  title: 'Edit Allowances for',
  epoch: 'Yearn Community: E22',
  period: 'Aug 15 to Aug 31',
  children: (
    <>
      <Button data-testid="fund-this-epoch" size="small" color="gray">
        Remove Allowance
      </Button>
      <Button data-testid="fund-this-epoch" size="small" color="red">
        Edit Allowance
      </Button>
    </>
  ),
};

SingleAllocateFundsCard.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/wXF7xGVv1j2SqwWfgbamS8/App-1.0?node-id=2136%3A23884',
  },
};