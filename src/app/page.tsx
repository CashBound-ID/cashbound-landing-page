'use client';

import { useState } from 'react';

import Button from '@cashbound-id/design-system/button.esm';
import DatePicker from '@cashbound-id/design-system/datepicker.esm';
import Flex from '@cashbound-id/design-system/flex.esm';
import Typography from '@cashbound-id/design-system/typography.esm';
import dayjs from 'dayjs';

export default function Home() {
  const [show, toggleShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState<number | undefined>(
    undefined
  );
  return (
    <>
      <Flex vertical gap={16}>
        <Button
          modifier="primary"
          variant="fill"
          icon="calendar-fill"
          size="lg"
          onClick={() => toggleShow(true)}
        >
          Show Date Picker
        </Button>

        <Typography modifier="body-md" fontWeight="regular" color={'#000'}>
          Selected Date:{' '}
          <strong>
            {selectedDate ? dayjs(selectedDate).format('DD MMM YYYY') : 'Null'}
          </strong>
        </Typography>
      </Flex>

      {show && (
        <DatePicker
          value={selectedDate}
          onChange={setSelectedDate}
          onClose={toggleShow}
        />
      )}
    </>
  );
}
