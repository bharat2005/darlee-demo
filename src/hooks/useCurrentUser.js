import { useQuery } from "@tanstack/react-query"
import {auth, db} from '../services/firebase/firebaseConfig'

export const useCurrentUser = () => {
    return useQuery({
        queryKey: ['currentUser', auth.currentUser?.uid],
        queryFn: async () => {
            // const res = await getDoc(doc(db, 'users', auth.currentUser?.uid))
            // return res.data() || {}
            return {
                name: 'bharat',
                email: 'bharatvdeshm2005@gmail.com',
                profilePic: 'https://via.placeholder.com/150',
                hasCompletedOnboarding: true,
                createdAt: new Date(),
                updatedAt: new Date(),
                uid: 'BHARAT_2005'
            }
        },
        //enabled: !!auth.currentUser?.uid
    })
}