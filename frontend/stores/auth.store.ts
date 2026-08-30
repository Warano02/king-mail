import { sleep } from "@/lib/utils"
import { create } from "zustand"

interface IUser {
  name: string
  email: string
  avatar: string
}
type TLogin = { email: string; password: string }
type TLoginResponse = { message: string ,error:boolean}

interface IAuth {
  loading: boolean
  login: (d: TLogin) => Promise<TLoginResponse>
  user: IUser
}

const useAuthStore = create<IAuth>((set) => ({
  loading: true,
  user: {
    name: "Name",
    email: "exemple@mail.km",
    avatar: "",
  },
  login: async (d) => {
    try {
      set({ loading: true })
      await sleep(9000)
      return { message: "Login successfully !" ,error:false}
    } catch (e) {
      return { message: "" ,error:true}
    } finally {
      set({ loading: false })
    }
  },
}))

export default useAuthStore
