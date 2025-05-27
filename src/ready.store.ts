import { create } from 'zustand'

interface ReadyState {
    headerReady: boolean,
    aboutUsReady: boolean,
    timeLineReady: boolean,
    inviteReady: boolean,
    makeHeaderReady: () => void,
    makeAboutUsReady: () => void,
    makeTimeLineReady: () => void,
    makeInviteReady: () => void,
}

export const useReadyStore = create<ReadyState>((set) => ({
    headerReady: false,
    aboutUsReady: false,
    timeLineReady: false,
    inviteReady: false,
    makeHeaderReady: () => set(() => ({ headerReady: true })),
    makeAboutUsReady: () => set(() => ({ aboutUsReady: true })),
    makeTimeLineReady: () => set(() => ({ timeLineReady: true })),
    makeInviteReady: () => set(() => ({ inviteReady:  true })),
}))
