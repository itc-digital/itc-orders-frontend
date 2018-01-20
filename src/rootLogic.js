import { logic as apiLogic } from 'services/api';
import { logic as authLogic } from 'services/auth';

export default [...apiLogic, ...authLogic];
