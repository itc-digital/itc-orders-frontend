import { logic as authLogic } from 'api/auth';
import { logic as privateLogic } from 'components/Private';

export default [...authLogic, ...privateLogic];
