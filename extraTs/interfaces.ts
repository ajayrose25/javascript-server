interface Ipermissions {
  getUsers: Igetusers;
}

interface Igetusers {
  all: string[];
  read: string[];
  write: string[];
  delete: string[];
}

interface Iusers {
  [index: number]: { traineeEmail: string; reviewerEmail: string };
}