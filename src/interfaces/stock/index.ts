import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StockInterface {
  id?: string;
  item_name?: string;
  quantity?: number;
  price_per_unit?: number;
  total_value?: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface StockGetQueryInterface extends GetQueryInterface {
  id?: string;
  item_name?: string;
  user_id?: string;
}
