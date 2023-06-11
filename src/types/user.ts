export interface User {
  id: number;
  name: string;
  job: string;
  permissions: {
    canDelete: boolean;
    canUpdate: boolean;
  };
}
