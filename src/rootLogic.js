import { logic as apiLogic } from 'api';
import { logic as authLogic } from 'api/auth';
import { logic as privateLogic } from 'pages/Private';

export default [...apiLogic, ...authLogic, ...privateLogic];
