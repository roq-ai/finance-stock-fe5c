interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Finance Manager', 'Stock Manager', 'Accountant', 'Customer'],
  tenantName: 'Organization',
  applicationName: 'Finance & Stock',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage organizations', 'Manage expenses', 'Manage orders'],
  getQuoteUrl: 'https://app.roq.ai/proposal/b9c68fd0-09f8-4875-9556-727da95e3a89',
};
