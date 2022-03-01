import twitter from '/Simpli_Web3/src/assets/twitter.svg';
import telegram from '/Simpli_Web3/src/assets/telegram.svg';
import medium from '/Simpli_Web3/src/assets/medium.svg';
import { IconButton, Stack } from '@mui/material';
export const SocialMediaComponent = () => {
    return (
        <Stack fontSize="14px" fontStyle="normal" lineHeight="22px" color="rgba(255, 255, 255, 1)">
            Social Media
            <Stack spacing="4px" direction="row">
                <IconButton aria-label="twitter" size="medium">
                    <img src={twitter} />
                </IconButton>
                <IconButton aria-label="discord" size="medium">
                    <img src={telegram} />
                </IconButton>
                <IconButton aria-label="medium" size="medium">
                    <img src={medium} />
                </IconButton>
                {/* <IconButton aria-label="discord" size="medium">
            <FaDiscord color="white" />
          </IconButton> */}
            </Stack>
        </Stack>
    );
};
