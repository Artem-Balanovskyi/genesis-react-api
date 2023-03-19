import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


interface PaginationBarProps {
    handler: (event: React.ChangeEvent<unknown>, page: number) => void,
    counter: number
}

export default function PaginationBar({handler, counter}: PaginationBarProps) {
    
  return (
    <Stack spacing={2}>
      <Pagination
      onChange={handler}
        count={counter}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}