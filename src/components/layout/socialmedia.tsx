import twitter from '../../assets/twitter.svg';
import telegram from '../../assets/telegram.svg';
import medium from '../../assets/medium.svg';
import discord from '../../assets/discord.svg';
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
								<IconButton aria-label="discord" size="small">
										<img src={discord} style={{ height: '24px', width: '24px' }} />
								</IconButton>
						</Stack>
				</Stack>
		);
};
