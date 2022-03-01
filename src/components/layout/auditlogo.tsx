import { Stack } from '@mui/material';
import audit_by from '/Simpli_Web3/src/assets/audit_by.svg';
export const AuditByComponent = (h: string, w: string) => {
    return (
        <Stack fontSize="14px" fontStyle="normal" lineHeight="22px" color="rgba(255, 255, 255, 1)">
            Audited by
            <img src={audit_by} height={h} width={w} />
        </Stack>
    );
};
