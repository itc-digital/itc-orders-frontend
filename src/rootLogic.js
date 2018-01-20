import { logic as apiLogic } from 'api';
import { logic as authLogic } from 'api/auth';

export default [...apiLogic, ...authLogic];
