export interface IPermissions {
[getUsers: string ]: {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
  };
}

/*interface Igetusers {
  all: string[];
  read: string[];
  write: string[];
  delete: string[];
}*/

export interface Iusers {
  [index: number]: { traineeEmail: string; reviewerEmail: string };
}