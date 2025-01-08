import React from 'react';
import { Box, Dialog, DialogContent, Hidden, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import type { Dispatch, SetStateAction } from 'react';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const MobileDialog = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2 }}>
          <Typography variant="h5" sx={{ pl: 2 }}>
            Notes On Mobile Use
          </Typography>
          <IconButton onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', pb: 1 }}>
            <Typography ml={2}>Lyrically works best on desktop.</Typography>
          </Box>
          <Box sx={{ pb: 1 }}>
            <Typography ml={2}>
              On iOS devices you may have to tap a word a few times to select it.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', pb: 1 }}>
            <Typography ml={2}>
              Unfortunately typing in the editor does not function properly on android devices
              &#128577; a really poor interrim workaround would be to paste lyrics in the editor, at
              which point they would become selectable
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
