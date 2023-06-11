import { User } from "../types/user";

export const fakeData: User[] = [
    {
        id: 1,
        name: "João Oliveira",
        job: "Desenvolvedor",
        permissions: {
            canDelete: false,
            canUpdate:false
        }
    }
]
