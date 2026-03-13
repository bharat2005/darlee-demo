import { useQuery } from "@tanstack/react-query"
import { auth, db } from "../services/firebase/firebaseConfig"

const data = [
  { end: "2026-01-21", endDate: {}, phase: "period", source: "user", start: "2026-01-14" },
  { end: "2026-02-14", endDate: {}, phase: "period", source: "user", start: "2026-02-07" },

    { end: "2026-03-25", phase: "period", source: "predictor", start: "2026-03-17" },
  { end: "2026-04-21", phase: "period", source: "predictor", start: "2026-04-14" },

  { start: "2026-03-26", end: "2026-03-30", phase: "follicular", source: "predictor" },
  { start: "2026-03-31", end: "2026-03-31", phase: "ovulation", source: "predictor" },
  { start: "2026-04-01", end: "2026-04-13", phase: "luteal", source: "predictor" },

  { start: "2026-04-22", end: "2026-04-29", phase: "follicular", source: "predictor" },
  { start: "2026-04-30", end: "2026-04-30", phase: "ovulation", source: "predictor" },
  { start: "2026-05-01", end: "2026-05-13", phase: "luteal", source: "predictor" }
];
export const usePeriods = () => {
    return useQuery({
        queryKey: ['periods'],
        queryFn: async () => {
                // const res = await getDocs(collection(db, 'users', auth.currentUser.uid, 'periods'))
                // const periods = res.docs.map(doc => doc.data())
                // return periods || []
                return data
        },
        //enabled: !!auth.currentUser
    })
}