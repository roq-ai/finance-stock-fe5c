import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FinanceChartInterface {
  id?: string;
  income?: number;
  finance_chart_expense?: number;
  balance?: number;
  account_balance?: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface FinanceChartGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
