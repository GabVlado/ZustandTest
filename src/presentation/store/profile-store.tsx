import { create } from 'zustand';

export interface ProfileState {
    name: string;
    email: string;
    changeProfile: (name: string, email: string) => void;
}


export const userProfilestore = create<ProfileState>()((set, get) => ({
    name: 'Jhon Doe',
    email: 'jhon.doe@google.com',
    changeProfile: (name: string, email: string) => {
        console.log(get());
        set({ name, email })
    }
}))


