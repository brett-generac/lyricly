import React from 'react';
import { Box, Dialog, DialogContent, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  isOpen: boolean;
  handleDismiss: () => void;
}

export const MobileDialog = ({ isOpen, handleDismiss }: Props) => {
  return (
    <Dialog open={isOpen} onClose={handleDismiss}>
      <DialogContent>
        <Box p={2}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2 }}>
            <Typography variant="h5">Mobile Notes</Typography>
            <IconButton onClick={handleDismiss}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box>
            <Typography gutterBottom>Lyrically works best on desktop.</Typography>
            <Typography gutterBottom>
              On iOS devices you may have to tap a word a few times to select it.
            </Typography>
            <Typography gutterBottom>
              Unfortunately typing in the editor does not function properly on android devices
              &#128577;
            </Typography>
            <Typography gutterBottom>
              A poor and hopefully temporary workaround would be to paste lyrics in the editor, at
              which point they would become selectable
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
