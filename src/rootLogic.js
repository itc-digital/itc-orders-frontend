import { logic as apiLogic } from 'services/api';
import { logic as authLogic } from 'services/auth';
import { logic as orderPageLogic } from 'pages/OrderPage';

export default [...apiLogic, ...authLogic, ...orderPageLogic];
