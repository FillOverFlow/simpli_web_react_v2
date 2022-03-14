import { useEffect, useRef, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { AuditByComponent } from '../layout/auditlogo';
import { SocialMediaComponent } from '../layout/socialmedia';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const SidebarNavItem = [
  { display: 'AI Farm', to: '/', section: '' },
  { display: 'Manual Farm', to: '/farm', section: 'farm' },
  { display: 'Your Position', to: '/position', section: 'position' },
  { display: 'Stake', to: '/stake', section: 'stake' },
  { display: 'Document', to: '/document', section: 'document' }
];

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();
  useEffect(() => {
    const curPath = window.location.pathname.split('/')[1];
    const activeItem = SidebarNavItem.findIndex(
      (item) => item.section === curPath
    );

    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <Stack
      ref={sidebarRef}
      sx={{
        height: '458px',
        width: '158px',
        mt: '26px'
      }}
      fontSize="14px"
    >
      <Typography
        fontSize="14px"
        fontWeight="400px"
        fontStyle="normal"
        color="#FFFFFF"
      >
        Menu
      </Typography>
      <Stack
        ref={indicatorRef}
        spacing="24px"
        fontSize="18px"
        mt="14px"
        lineHeight="28px"
        fontStyle="normal"
        fontWeight="bold"
      >
        {SidebarNavItem.map((item, index) => (
          <Stack flexDirection="row">
            <Link
              to={item.to}
              key={index}
              style={{
                textDecoration: 'none',
                color:
                  activeIndex === index ? 'rgba(108, 255, 211, 1)' : '#FFFFFF'
              }}
            >
              <div>{item.display}</div>
            </Link>
          </Stack>
        ))}
      </Stack>
      <Box height="32px" />
      {AuditByComponent('56px', '158px')}
      <Box height="32px" />
      <SocialMediaComponent />
    </Stack>
  );
};
export default SideBar;
