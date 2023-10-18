import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  delivery_date?: any;
  description?: string;
  buyer_contact?: string;
  is_paid?: boolean;
  is_delivered?: boolean;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  buyer_contact?: string;
  user_id?: string;
}
