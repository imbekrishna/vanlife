import userIcon from "@assets/user_icon.svg";
import logoutIcon from "@assets/logout_icon.svg";
import { signOutuser } from "@/api";
import { useContext } from "react";
import UserContext from "@/context/UserContext";

const Profile = () => {
  const contextData = useContext(UserContext);

  async function handleLogout() {
    try {
      await signOutuser();
      contextData?.removeUser();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="p-6 flex flex-col">
      <div className="flex flex-col items-center">
        <div className="p-4 bg-skeletonBg rounded-2xl">
          <img src={userIcon} alt="" className="min-w-32 aspect-square" />
        </div>

        <h1 className="text-3xl font-semibold mt-4">
          {contextData?.user?.name}
        </h1>
        <p className="text-lg tracking-wide text-textGray">
          {contextData?.user?.email}
        </p>
      </div>

      <button
        className="flex items-center justify-center gap-2 bg-btnPrimary p-2 rounded-md mt-auto"
        onClick={handleLogout}
      >
        <img src={logoutIcon} alt="" /> <span>Logout</span>
      </button>
    </div>
  );
};
export default Profile;
